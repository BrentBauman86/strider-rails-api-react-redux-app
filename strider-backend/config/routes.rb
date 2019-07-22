Rails.application.routes.draw do
  
  get '/login', to: "sessions#create"

  namespace :api do 
    resources :users
    resources :runs
  end
end
