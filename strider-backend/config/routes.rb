Rails.application.routes.draw do
  
  post '/api/login', to: "api/sessions#create"

  namespace :api do 
    resources :users
    resources :runs
  end
end
