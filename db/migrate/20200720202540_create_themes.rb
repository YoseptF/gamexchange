class CreateThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :themes do |t|
      t.string :primary
      t.string :background
      t.string :subtitles
      t.integer :home_config_id

      t.timestamps
    end
  end
end
