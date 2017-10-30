class CreateWords < ActiveRecord::Migration[5.1]
  def change
    create_table :words do |t|
      t.string :name, null: false
      t.integer :difficulty, default: 0
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
