class Api::V1::FavoritesController < ApplicationController

  def create
    library = Library.find(params["_json"])
    favorite = Favorite.create!(user_id: 1, library: library)
  end
end
