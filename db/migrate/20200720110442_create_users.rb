class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.boolean :is_admin, default: false

      t.timestamps
    end
    add_index :users, :email, unique: true
  end
end
