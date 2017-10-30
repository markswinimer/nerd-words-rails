class CreateWordLibraries < ActiveRecord::Migration[5.1]
  def change
    create_table :word_libraries do |t|
      t.belongs_to :word
      t.belongs_to :library
    end
  end
end
