class Api::V1::UsersController < ApplicationController

  def index
    if current_user
      userLibrary = current_user.libraries
      render json: { user: current_user, libraries: userLibrary  }
    else
      render json: { user: {id: false, admin: false} }
    end
  end
end
