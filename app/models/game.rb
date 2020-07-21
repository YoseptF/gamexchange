class Game < ApplicationRecord
  has_one_attached :cover
  has_many :likes
end
