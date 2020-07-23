class ShowCase < ApplicationRecord
  belongs_to :home_config
  has_many :show_case_data
  accepts_nested_attributes_for :show_case_data
end
