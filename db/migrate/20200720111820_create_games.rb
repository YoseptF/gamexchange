class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :score
      t.text :description
      t.integer :owner

      t.timestamps
    end
  end
end
