class PostsController < ApplicationController
    def new 
        @post = Post.new
        render :new
    end

    def show
        @post = Post.find_by(id: params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        if @post.save
            redirect_to post_url(@post)
        else
            flash[:errors] = @post.errors.full_messages
            render :new
        end
    end

    def edit
        @post = Post.find_by(id: params[:id])
        if @post.author_id == current_user.id 
            render :edit
        else
            redirect_to post_url(@post)
        end
    end

    # def require_post_author
    #     @post = Post.find_by(id: params[:id])
    #     redirect_to post_url(@post) unless @post.author_id == current_user.id
    # end

    def update 
        @post = Post.find_by(id: params[:id])
        # if @post 
            if @post.author_id == current_user.id 
                if @post.update(post_params)
                    redirect_to post_url(@post)
                else
                    flash.now[:errors] = @post.errors.full_messages 
                    render :edit 
                end
            else
                flash.now[:errors] = ["Nacho Cheese"]
                render :edit
            end
        # else
        #     flash.now[:errors] = ["Post not found"]
        #     render :edit 
        # end
    end

    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        if @post 
            @post.destroy
            redirect_to sub_url(@post.sub_id)
        end
    end

    private 
    def post_params 
        params.require(:post).permit(:title, :url, :content, :sub_id, :author_id)
    end
end
