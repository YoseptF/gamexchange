Rails.application.routes.draw do
  root 'static#root'
  get '/search', to: 'static#root'
  get '/user', to: 'static#root'
  get '/signup', to: 'static#root'
  get '/signin', to: 'static#root'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
