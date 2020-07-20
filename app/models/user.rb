class User < ApplicationRecord
  has_secure_password

  has_many :owned_games, class_name: 'Game', foreign_key: 'owner'
  has_many :likes
  has_many :liked_games, through: :likes, source: 'game'
end
