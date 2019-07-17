Rails.application.routes.draw do
  
  namespace :api do 
    resources :users
    resources :runs
  end
end
