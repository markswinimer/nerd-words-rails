class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.integer :score, default: 0
      t.belongs_to :game

    end
  end
end
