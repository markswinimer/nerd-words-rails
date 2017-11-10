class Api::V1::SearchesController < ApplicationController

  def create
    searchParam = JSON.parse(request.body.read)
    if searchParam["search"] == "all"
      allLibraries = Library.all
      libraryArray = []
      allLibraries.each do |library|
        libraryName = library.name
        words = library.words
        libraryArray << { name: libraryName, words: words, data: library, creator: library.user.username  }
    end
    elsif searchParam == "top10"

    elsif searchParam == "top5"

    else

    end

    render json: { result: libraryArray }
  end
end
