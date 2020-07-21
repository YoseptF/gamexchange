Rails.application.routes.draw do
  root 'static#root'
  get '/search', to: 'static#root'
  get '/user', to: 'static#root'
  get '/signup', to: 'static#root'
  get '/signin', to: 'static#root'

  post '/signup', to: 'logs#signup'
  post '/signin', to: 'logs#signin'

  get '/adminPanel', to: 'static#admin_panel'
  patch 'config', to: 'static#update_config', as: 'home_config'

  namespace :api do
    namespace :v1 do
      resources :home, only: [:index]
      resources :search, only: [:index]
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
