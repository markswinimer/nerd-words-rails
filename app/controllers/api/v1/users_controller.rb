class Api::V1::UsersController < ApplicationController

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
