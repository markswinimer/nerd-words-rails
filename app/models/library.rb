class Library < ApplicationRecord

  validates :name, presence: true
  validates :user, presence: true

  belongs_to :user


  has_many :games
  has_many :word_libraries
  has_many :words, through: :word_libraries
end
