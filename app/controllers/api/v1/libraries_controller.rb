class Api::V1::LibrariesController < ApplicationController

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

end
