class CreatePatientsTable < ActiveRecord::Migration[5.1]
  def change
  	create_table :patients do |t|
  		t.string :username
  		t.string :email
  		t.string :password
  		t.integet :
  	end
  end
end
