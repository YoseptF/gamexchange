class Button < ApplicationRecord
  belongs_to :form, polymorphic: true
end
