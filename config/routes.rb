Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :stories, only: [:index, :create, :show, :update]
  end


  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
