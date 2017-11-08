class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :mode, null: false
      t.integer :player_count, null: false
      t.belongs_to :library
      t.belongs_to :user

      t.timestamps
    end
  end
end
