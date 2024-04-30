class AddNameToSupplier < ActiveRecord::Migration[7.1]
  def change
    add_column :suppliers, :name, :string
  end
end
