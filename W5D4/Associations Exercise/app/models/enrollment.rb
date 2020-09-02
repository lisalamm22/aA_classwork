# == Schema Information
#
# Table name: enrollments
#
#  id         :bigint           not null, primary key
#  course_id  :integer
#  student_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Enrollment < ApplicationRecord
    # validates :student_id, uniqueness: {scope: :course_id}
    # belongs_to :user,
    # primary_key: :id,
    # foreign_key: :student_id,
    # class_name: :User

    # belongs_to :course,
    # primary_key: :id,
    # foreign_key: :course_id,
    # class_name: :Course
end


# ## Associations

# * Connections between two Active Record models.
# * Make common operations simpler and easier in your code.
# * We don't have to write anymore SQL `JOIN` statements
# * Simply methods that we can call


# ---
# ### Example Association

# ```ruby
# class Strike < ApplicationRecord
#   belongs_to :student,
#   	primary_key: :id,
#   	foreign_key: :student_id,
#   	class_name: :Student
# end
# ```
# - belongs_to is an ActiveRecord method that takes the following arguments
# ```ruby
# def belongs_to(:name, options = {})
# end
# ```
# ---
# validates :chirp_id, uniqueness: {scope: :liker_id}
# # when you write a belongs_to, it auto validates the presence of that foreign key

# belongs_to :liker,
#     primary_key: :id,
#     foreign_key: :liker_id,
#     class_name: :User
#     # optional: true

# belongs_to :chirp,
#     primary_key: :id,
#     foreign_key: :chirp_id,
#     class_name: :Chirp
# ## Associations Code Demo

# ---

# ## Associations Recap

# ```ruby
# class Chirp < ApplicationRecord
#   #validations go here
#   belongs_to :user,
#     primary_key: :id,
#     foreign_key: :author_id,
#     class_name: :User
# end
# class User < ApplicationRecord
#   #validations go here
#   has_many :chirps,
#     primary_key: :id,
#     foreign_key: :author_id,
#     class_name: :Chirp
# end
# ```
