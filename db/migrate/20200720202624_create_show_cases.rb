class CreateShowCases < ActiveRecord::Migration[6.0]
  def change
    create_table :show_cases do |t|
      t.string :title
      t.string :subtitle
      t.integer :home_config_id

      t.timestamps
    end
  end
end
