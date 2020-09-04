# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord

    has_many :artworks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artwork

    has_many :artworks_shares,
        primary_key: :id,
        foreign_key: :viewer_id,
        class_name: :ArtworkShare

    Add a through association from shared_artworks on User. User#shared_artworks will return
     the set of artworks that have been shared with that user (not the set of artworks that a 
     user has shared with others).

     
    has_many :shared_artworks,
        through: :artworks_shares,
        source: :artwork

end
