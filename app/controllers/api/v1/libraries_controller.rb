class Api::V1::LibrariesController < ApplicationController

  def create
    binding.pry
    body = JSON.parse(response.body.read)
    myLibraries = Library.find_by(body.id)
  end

end
