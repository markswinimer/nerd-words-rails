class Api::V1::SearchesController < ApplicationController

skip_before_action :verify_authenticity_token
protect_from_forgery unless -> { request.format.json? }

  def create
    searchParam = JSON.parse(request.body.read)

    if searchParam["search"] == "all"
      results = Library.all

    elsif searchParam["search"] == "top10"
      results = Library.order(play_count: :desc)[0,10]

    elsif searchParam["search"] == "top5"
      results = Library.order(play_count: :desc)[0,5]

    else
      words = Word.where("lower(name) LIKE ?", "%#{searchParam["search"].downcase}%")

      results = []
      words.each do |word|
        word.libraries.each do |library|
          results << library
        end
      end

    end

    libraryArray = []
    results.each do |library|
      libraryName = library.name
      words = library.words
      libraryArray << { name: libraryName, words: words, data: library, creator: library.user.username  }
    end
    render json: { result: libraryArray }
  end
end
