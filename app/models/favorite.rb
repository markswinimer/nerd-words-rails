class Favorite < ApplicationRecord

  belongs_to :library
  belongs_to :user
end
