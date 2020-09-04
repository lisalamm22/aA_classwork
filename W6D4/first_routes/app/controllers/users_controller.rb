class UsersController < ApplicationController

    def index
        # render plain: "I'm in the index action!"

        users = User.all # get all users from DB and store in users variable
        # every controller action needs to either render or redirect
        render json: users # rails will turn our users into json
    end

    def create
        # render json: params
        # user = User.new(
        #     email: params[:email],
        #     username: params[:username],
        #     age: params[:age],
        #     political_affiliation: params[:political_affiliation]
        #     # tedious
        # )
        user = User.new(user_params)
        # creates user instance not in DB
        # debugger
        if user.save
            # render json: user
            # redirect_to "/users/#{user.id}" # redirects to show action
            # redirect_to user_url(user)
            render json: user
        else
            render json: user.errors.full_messages, status: 422 # unprocesable entity
        end
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id]) # find the user
        if user.update(user_params)
             #"/users/#{user.id}"
            # debugger
            # redirect_to user_url(user)
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    private

    def user_params #havnet done permitting or requiring
       
        params.require(:user).permit(:name,:email) #require = users {name = '', email = ''}
    end
end