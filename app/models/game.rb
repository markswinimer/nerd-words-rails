class Game < ApplicationRecord

  validates :mode, presence: true
  validates :player_count, presence: true

  has_many :players
  belongs_to :library
  belongs_to :user
end
