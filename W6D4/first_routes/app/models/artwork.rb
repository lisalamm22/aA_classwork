# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  image_url :text             not null
#  title     :text             not null
#  artist_id :integer          not null
#
# Indexes
#
#  index_artworks_on_artist_id  (artist_id)
#
class Artwork < ApplicationRecord

    validates :title, uniqueness: {scope: :artist_id}

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User
    
    has_many :artwork_shares,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare


end
