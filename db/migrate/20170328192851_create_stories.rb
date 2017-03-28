class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.boolean :every_word, null: false
      t.text :body
      t.text :recent_identifier
      t.integer :contributions
      t.timestamps
    end
  end
end
