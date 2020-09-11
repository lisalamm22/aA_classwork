require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject!(:user) do 
    User.create({username: "goldfish", password: "watahs"})
  end

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  # subject(:goldfish){ User.create(username: "goldfish") }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:session_token) }
  it { should validate_uniqueness_of(:session_token) }
  # it { should validate_presence_of(:goals) }
  # it { should validate_presence_of(:comments) }

  

  describe "User::find_by_credentials" do
  
    it "looks into user db and finds user via username" do
      # debugger
        find = User.find_by_credentials("goldfish", "watahs")
        expect(find).to be_instance_of(User)#: {username: "goldfish", password: "watahs"}
    end                             

    # it "should verify password" do
      # user = User.find_by(username: "goldfish")
      # expect(user).to receive(:is_password?)
      # User.find_by_credentials("goldfish", "watahs")
    # end

    context "with valid username and password" do
      it "should return user" do
        find = User.find_by_credentials("goldfish","watahs")
        expect(find).to eq(user)
      end
    end
    
    context "with invalid username and password" do
      it "should return nil" do
        expect(User.find_by_credentials("goldfish","")).to be_nil
      end
    end

  end

  describe "User #password=" do

    it "should create a bcrypt object" do
      expect(BCrypt::Password).to receive(:create).with("abcdef")
      FactoryBot.build(:user, password: "abcdef")
    end

    it "not store the password in the database" do
      expect(User.find_by(password: "password")).to be_nil
    end

    it "should set @password to argument" do
      expect(user.password).to eq("watahs")
    end
  end

  describe "User #is_password?" do
     it "should check if the password belongs to the user" do 
      # bpass = BCrypt::Password.new("watahs")
      expect(user.is_password?("watahs")).to eq(true)
     end
  end

  describe "User #reset_session_token!" do 
    it "should reset session token" do 
      old_session_token = user.session_token
      expect(user.reset_session_token!).to_not eq(old_session_token)
    end
  end

  # describe "User #ensure_session_token" do 
    #checked with via validation of session token presence
  # end

  # model : User, Goal, Comment
  # test validations
  # test associations
  # class scope methods
end
