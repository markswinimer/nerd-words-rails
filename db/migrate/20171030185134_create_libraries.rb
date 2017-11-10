class CreateLibraries < ActiveRecord::Migration[5.1]
  def change
    create_table :libraries do |t|
      t.string :name, null: false
      t.string :description
      t.integer :play_count, default: 0
      t.integer :favorite_count, default: 0
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
