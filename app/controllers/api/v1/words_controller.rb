class Api::V1::WordsController < ApplicationController

  def index
    words = current_user.words
    render json: { words: words }
  end

  def create
    body = JSON.parse(request.body.read)
    user = User.find(body["user"]["user"]["id"])
    name = body["title"]
    description = body["description"]
    if Library.where(name: name).blank?
      Library.create!(name: name, description: description, user: user)
    end
    currentLibrary = Library.find_by(name: name)

    body["library"].each do |word|
      word_name = word[1]
      if Word.where(name: word_name).blank? && word_name != ""
        new_word = Word.create!(name: word_name, user: user)
        WordLibrary.create!(word: new_word, library: currentLibrary)
      elsif word_name != ""
        new_word = Word.find_by(name: word_name)
        WordLibrary.create!(word: new_word, library: currentLibrary)
      end
    end

  end

end
