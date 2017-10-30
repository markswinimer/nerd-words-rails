class WordLibrary < ApplicationRecord

  belongs_to :word
  belongs_to :library
end
