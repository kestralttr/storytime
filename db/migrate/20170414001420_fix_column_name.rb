class FixColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :stories, :recent_identifier, :tracker_key
  end
end
