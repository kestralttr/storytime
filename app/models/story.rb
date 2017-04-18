class Story < ApplicationRecord
  validates :title, :every_word, presence: true
  validates :title, length: { in: 1..50 }
end
