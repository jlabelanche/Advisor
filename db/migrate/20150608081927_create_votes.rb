class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
    	t.string :restroom_id
    	t.integer :score
    	t.date :date
    	t.string :comment
      t.timestamps null: false
    end
  end
end
