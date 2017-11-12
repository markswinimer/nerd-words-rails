class Api::V1::LibrariesSelectorController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless -> { request.format.json? }
  
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
