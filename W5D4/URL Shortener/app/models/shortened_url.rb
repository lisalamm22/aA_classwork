class ShortenedUrl < ApplicationRecord

    validates :short_url, :long_url, :user_id, presence: true

    def self.random_code
        temp = SecureRandom.urlsafe_base64()
        while self.exists?(temp)
            temp = SecureRandom.urlsafe_base64()
        end
        temp
    end
end
