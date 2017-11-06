class Api::V1::LibrariesSelectorController < ApplicationController

  def index
    user = current_user
    random = Library.all.sample
    words = random.words
    render json: { words: words, name: random.name }
  end

  def show
    binding.pry
  end
end
