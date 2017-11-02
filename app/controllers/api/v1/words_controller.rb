class Api::V1::WordsController < ApplicationController

  def create
    body = JSON.parse(request.body.read)
    user = User.find(1)
    name = "Scooby Doo"
    if Library.where(name: name).blank?
      Library.create!(name: name, user: user)
    end

    currentLibrary = Library.find_by(name: name)

    body["library"].each do |word|
      word_name = word.values[0]
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
