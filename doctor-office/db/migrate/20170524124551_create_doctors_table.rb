class CreateDoctorsTable < ActiveRecord::Migration[5.1]
  def change
  	create_table :doctors do |t|
  		t.string :name
  		t.string :specialty
   	end
  end
end
