class Testimonial < ApplicationRecord
  belongs_to :home_config
  has_many :testimonial_data
  accepts_nested_attributes_for :testimonial_data
end
