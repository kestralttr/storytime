class Story < ApplicationRecord
  validates :title, :every_word, presence: true
end
