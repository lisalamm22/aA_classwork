class SessionsController < ApplicationController

    def new
        render :new
    end

    def destroy
        logout!
        redirect_to new_session_url
    end

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            redirect_to user_url(@user.id)
        else
            flash[:errors] = ['Username or password is incorrect, please try again.']
            redirect_to new_session_url
        end
    end



end
