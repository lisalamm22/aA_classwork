class BandsController < ApplicationController
    def index
        @bands = Band.all
        render :index
    end

    def create
        @band = Band.new(band_params)
        if @band.save
            redirect_to band_url(@band.id)
        else
            flash.now[:errors] = @band.errors.full_messages
            render :new
        end
    end    

    private
    def band_params
        params.require(:band).permit(:name)
    end
end
