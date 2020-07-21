class Testimonial < ApplicationRecord
  belongs_to :home_config
  has_many :testimonial_data
end
