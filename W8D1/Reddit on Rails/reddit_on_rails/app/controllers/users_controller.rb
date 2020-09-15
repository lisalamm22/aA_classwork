class UsersController < ApplicationController
    before_action :require_logged_in, only:[:index, :edit, :update, :show, :destroy]

    def new
        @user = User.new 
        render :new 
    end

    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            redirect_to subs_url
        else
            flash[:errors] = @user.errors.full_messages 
            render :new 
        end
    end

    def show 
        @user = User.find(params[:id])
        render :show
    end

    def index
        @users = User.all 
        render :index
    end

    def edit
        @user = User.find_by(id: params[:id])
        render :edit 
    end
    
    def update 
        @user = User.find_by(id: params[:id])
        if @user
            @user.update(user_params)
        else
            flash[:errors] = ['Invalid Username or Password']
            render :edit 
        end
    end

    def destroy
        logout!
        redirect_to subs_url
    end

    private 
    def user_params 
        params.require(:user).permit(:username, :password)
    end
end
