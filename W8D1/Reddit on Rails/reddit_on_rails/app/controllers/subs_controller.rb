class SubsController < ApplicationController

    def new 
        @sub = Sub.new 
        render :new 
    end

    def show    
        @sub = Sub.find_by(id: params[:id])
        render :show 
    end

    def index
        @subs = Sub.all 
        render :index
    end

    def edit
        @sub = Sub.find_by(id: params[:id])
        if @sub.moderator == current_user.id
            render :edit
        else
            redirect_to sub_url(@sub)
        end
    end

    def update 
        @sub = Sub.find_by(id: params[:id])
        if @sub.moderator == current_user.id
            if @sub.update(sub_params)
                redirect_to sub_url(@sub)
            else
                flash[:errors] = @sub.errors.full_messages
                render :edit 
            end
        else 
            flash[:errors] = ["this ain't yo cheese"]
            render :edit 
        end
    end

    def create 
        @sub = Sub.new(sub_params)
        if @sub.save 
            redirect_to sub_url(@sub)
        else
            flash[:errors] = @sub.errors.full_messages
            render :new 
        end
    end

    private 
    def sub_params 
        params.require(:sub).permit(:moderator, :title, :description)
    end
end
