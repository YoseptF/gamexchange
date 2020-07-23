class CreateShowCaseData < ActiveRecord::Migration[6.0]
  def change
    create_table :show_case_data do |t|
      t.string :title
      t.text :paragraph
      t.boolean :reverse
      t.boolean :hasButton
      t.integer :show_case_id

      t.timestamps
    end
  end
end
