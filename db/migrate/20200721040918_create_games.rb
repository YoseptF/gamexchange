class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :score
      t.float :price
      t.string :name
      t.text :description
      t.integer :owner

      t.timestamps
    end
  end
end
