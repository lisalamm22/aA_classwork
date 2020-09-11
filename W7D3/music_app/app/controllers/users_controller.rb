class UsersController < ApplicationController
    def new
        @user = User.new 
        render :new 
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            redirect_to bands_url #ser_url(@user.id) #takes us to bands index page
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end

    def show
        @user = User.find(params[:id])
        # render :show
        redirect_to bands_url
    end

    private
    def user_params
        params.require(:user).permit(:email,:password)
    end
end
