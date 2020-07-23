class ShowCaseDatum < ApplicationRecord
  belongs_to :show_case
  has_one :button, as: :form
  has_one_attached :image
end
