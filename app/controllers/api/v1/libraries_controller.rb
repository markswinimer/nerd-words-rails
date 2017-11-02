class Api::V1::LibrariesController < ApplicationController

  def show
    library = Library.find(params[:id])
    wordList = library.words
    render json: { wordList: wordList  }
  end

  def create
    body = JSON.parse(response.body.read)
    myLibraries = Library.find_by(body.id)
  end

end
