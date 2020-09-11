require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    #index, new, create, show
    describe "GET #new" do
        it "renders the new users template" do 
            get :new 
            expect(response).to render_template(:new)
        end
    end

    describe "GET #index" do
        it "renders all users on page" do 
            get :index 
            expect(response).to render_template(:index)
        end
    end

    describe "POST #create" do
        let (:user_params) do
            { user: {
                username: "corgi"
                password: "sleepy"
            } }
        end

        context "with valid params" do
            it "logs in user" do
                post(:create, {params: user_params})
                user = User.find_by(username: "corgi")
                expect(session[:session_token]).to eq(user.session_token)
            end

            it "redirects to user's show page" do
                expect(response).to redirect_to(user_url(user))
            end

        context "with invalid params" do
            it "validates the presence of password and flashes an error if input is invalid" do 
                post :create, params: { user: {
                username: "corgi"
                password: ""
                } }
                expect(response).to render_template(:new)
                expect(flash[:errors]).to be_present
            end
        end

    end

    describe "GET #show" do
        it "finds an existing user's page" do
            get :show 
            expect(response).to render_template(:show)
        end
    end
end
