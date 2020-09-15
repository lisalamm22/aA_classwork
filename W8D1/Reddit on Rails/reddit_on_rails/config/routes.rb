Rails.application.routes.draw do
  resources :post_subs
  resources :users do 
    resources :subs, only: [:new]
  end
  resources :subs, except: [:destroy, :new] do 
    resources :posts, only: [:new]
  end
  resource :session, only: [:new,:create,:destroy]
  resources :posts, except: [:index,:new]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
