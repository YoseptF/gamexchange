class CreateTestimonialData < ActiveRecord::Migration[6.0]
  def change
    create_table :testimonial_data do |t|
      t.string :name
      t.string :title
      t.string :text
      t.integer :testimonial_id

      t.timestamps
    end
  end
end
