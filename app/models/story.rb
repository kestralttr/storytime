class Story < ApplicationRecord
  validates :title, presence: true
  validates :title, length: { in: 1..50 }
end
