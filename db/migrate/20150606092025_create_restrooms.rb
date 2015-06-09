class CreateRestrooms < ActiveRecord::Migration
  def change
    create_table :restrooms do |t|
    	t.string :name
    	t.string :access
    	t.string :facilities
    	t.string :accessible_facilities
    	t.string :opening
    	t.string :baby_changing
    	t.string :fee
    	t.string :province
    	t.string :city
    	t.string :notes

      t.timestamps null: false
    end
  end
end
