class Api::V1::LibrariesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless -> { request.format.json? }

  def index
    libraries = current_user.libraries
    favorites = current_user.favorites
    fArray = []
    favorites.each do |library|
      fArray << Library.find(library.library_id)
    end
    render json: { libraries: libraries, favorites: fArray }
  end

  def show
    library = Library.find(params[:id])
     currentLibrary = {
       library_id: library.id,
       name: library.name,
       words: library.words
     }
    render json: { library: currentLibrary }
  end

  def create
    body = JSON.parse(response.body.read)
    myLibraries = Library.find_by(body.id)
  end

  def destroy
    library = Library.find(params[:id])
    library.destroy
  end

  def update
    library = Library.find(params[:id])
    library.update(name: params[:title], description: params[:description])
    library.words.delete_all
    words = params[:library].values
    words.each do |name|
      if Word.where(name: name).blank?
        new_word = Word.create!(name: name, user: current_user)
        WordLibrary.create!(word: new_word, library: library)
      else
        new_word = Word.find_by(name: name)
        WordLibrary.create!(word: new_word, library: library)
      end
    end
    words = Library.find(library.id).words
    returnLibrary = {
      library_id: library.id,
      name: library.name,
      words: words
    }
    render json: { library: returnLibrary }
  end
end
