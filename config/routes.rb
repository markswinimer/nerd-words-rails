Rails.application.routes.draw do

  devise_for :users

  resources :users

  namespace :api do
      namespace :v1 do
        resources :users
      end
    end

  root 'homes#index'
end
