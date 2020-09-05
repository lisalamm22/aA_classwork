require 'action_view'
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    CAT_COLORS = ['white','black', 'orange','striped', 'spotted','brown',]
    SEX = ["M", "F"]
    validates :color, inclusion: {in: (CAT_COLORS)}
    validates :sex, inclusion: {in: (SEX)}

    def age
        time_ago_in_words(birth_date)
    end
end
