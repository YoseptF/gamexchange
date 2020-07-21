class CreateHomeConfigs < ActiveRecord::Migration[6.0]
  def change
    create_table :home_configs do |t|
      t.string :title

      t.timestamps
    end
  end
end
