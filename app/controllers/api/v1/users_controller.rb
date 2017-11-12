class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless -> { request.format.json? }
  
  def index
    if current_user
      userLibrary = current_user.libraries
      favorites = []
      render json: { user: current_user, libraries: userLibrary, favorites: favorites  }
    else
      render json: { user: {id: false, admin: false} }
    end
  end
end
