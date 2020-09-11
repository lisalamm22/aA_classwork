FactoryBot.define do
  factory :user do
    username { Faker::Movie::HarryPotter.character }
    password { "password" }
  end
end
