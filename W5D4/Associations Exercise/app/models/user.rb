# == Schema Information


# Ta name: users
    
## 
#  i# d         :bigint           not null, primary key
#  n# ame       :string
#  c# reated_at :datetime         not null
#  updated_at :datetime         not null
## 
class User < ApplicationRecord
    # # validates 
    # has_many :courses, 
    # primary_key: :id,
    # foreign_key: :instrutor_id,
    # class_name: :Course

    # has_many :enrollments,
    # primary_key: :id,
    # foreign_key: :student_id,
    # class_name: :Enrollment

    
    # has_many :enrolled_courses,
    # through: :enrollments,
    # source: :course
end
