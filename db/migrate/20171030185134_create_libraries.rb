class CreateLibraries < ActiveRecord::Migration[5.1]
  def change
    create_table :libraries do |t|
      t.string :name, null: false
      t.string :description
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
