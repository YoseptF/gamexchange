class HomeConfig < ApplicationRecord
  has_one :hero_box
  has_one :theme
  has_one :show_case
  has_one :testimonial
  has_many :buttons, as: :form

  accepts_nested_attributes_for :hero_box
  accepts_nested_attributes_for :theme
  accepts_nested_attributes_for :show_case
  accepts_nested_attributes_for :testimonial
  accepts_nested_attributes_for :buttons

  has_one_attached :logo
  has_one_attached :hero
end
