class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true
  validates :password_confirmation, presence: true

  has_many :owned_games, class_name: 'Game', foreign_key: 'owner'
  has_many :likes
  has_many :liked_games, through: :likes, source: 'game'

  has_one_attached :avatar
  has_secure_password
end
