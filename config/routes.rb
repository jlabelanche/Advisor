Rails.application.routes.draw do
 get '/' => 'restrooms#index', as: 'root'
  resources :restrooms do
  resources :votes
 end

end