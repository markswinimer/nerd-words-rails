class Api::V1::FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless -> { request.format.json? }
  
  def create
    library = Library.find(params["_json"])
    favorite = Favorite.create!(user_id: 1, library: library)
  end
end
