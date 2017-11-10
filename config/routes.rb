Rails.application.routes.draw do

  devise_for :users

  resources :users

  resources :libraries

  namespace :api do
      namespace :v1 do
        resources :users
        resources :words
        resources :libraries
        resources :libraries_selector
        resources :games
        resources :searches
      end
    end

  root 'homes#index'
  get "*path", to: "homes#index"
end
