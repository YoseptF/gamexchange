class TestimonialDatum < ApplicationRecord
  belongs_to :testimonial
  has_one_attached :avatar
end
