class ShowCase < ApplicationRecord
  belongs_to :home_config
  has_many :show_case_data
end
