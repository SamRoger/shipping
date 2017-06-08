class AddDescriptionToDestination < ActiveRecord::Migration[5.1]
  def change
    add_column :destinations, :description, :string
  end
end
