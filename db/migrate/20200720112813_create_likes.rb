class CreateLikes < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do |t|
      t.string :user_id
      t.string :game_id

      t.timestamps
    end
  end
end
