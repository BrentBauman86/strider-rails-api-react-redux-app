Rails.application.routes.draw do
  
  post '/api/login', to: "api/sessions#create"
  get '/api/get_current_user', to: "api/sessions#get_current_user"
  delete '/api/logout, to: "api/sessions#destroy"


  namespace :api do 
    resources :users
    resources :runs
  end
end
