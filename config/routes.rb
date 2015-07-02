Rails.application.routes.draw do
 get '/markers' => 'restrooms#markers'
 get '/restrooms/search/' => 'restrooms#search', as: "search_restrooms"
 get '/' => 'restrooms#index', as: 'root'
  resources :restrooms do
  resources :votes
 end

end