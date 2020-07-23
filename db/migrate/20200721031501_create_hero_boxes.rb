class CreateHeroBoxes < ActiveRecord::Migration[6.0]
  def change
    create_table :hero_boxes do |t|
      t.string :message
      t.string :title
      t.string :button
      t.string :link
      t.integer :home_config_id

      t.timestamps
    end
  end
end
