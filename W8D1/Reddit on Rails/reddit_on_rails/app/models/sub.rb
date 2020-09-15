# == Schema Information
#
# Table name: subs
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  moderator   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Sub < ApplicationRecord
    validates :title, :moderator, :description, presence: true 
    
    belongs_to :user,
    foreign_key: :moderator,
    class_name: :User 

    # has_many :posts,
    # foreign_key: :sub_id,
    # class_name: :Post

    has_many :postsubs,
        foreign_key: :sub_id,
        class_name: :PostSub

    has_many :posts,
        through: :postsubs,
        source: :post 
end
