class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.text :title, null: false
      t.text :image_url, null: false
      t.integer :artist_id, null: false
    end
    change_column :users, :username, :string, unique: true
    add_index :artworks, :artist_id
  end
end
