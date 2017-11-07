class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.string :score
      t.belongs_to :game

    end
  end
end
