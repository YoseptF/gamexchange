class CreateButtons < ActiveRecord::Migration[6.0]
  def change
    create_table :buttons do |t|
      t.string :text
      t.string :link
      t.boolean :external
      t.boolean :isRounded
      t.integer :form_id
      t.string :form_type

      t.timestamps
    end
    add_index :buttons, [:form_type, :form_id]
  end
end
