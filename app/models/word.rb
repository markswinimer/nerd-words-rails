class Word < ApplicationRecord

  validates :name, presence: true
  validates :difficulty, inclusion: { in: [0, 1, 2, 3]}

  belongs_to :user
  has_many :word_libraries
  has_many :libraries, through: :word_libraries
end
