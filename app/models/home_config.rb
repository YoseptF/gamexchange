class HomeConfig < ApplicationRecord
  has_one :hero_box
  has_one :theme
  has_one :show_case
  has_one :testimonial
  has_many :buttons, as: :form

  has_one_attached :logo
  has_one_attached :hero
end
