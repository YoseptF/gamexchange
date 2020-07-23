class CreateTestimonials < ActiveRecord::Migration[6.0]
  def change
    create_table :testimonials do |t|
      t.string :title
      t.string :subtitle
      t.float :time
      t.integer :home_config_id

      t.timestamps
    end
  end
end
