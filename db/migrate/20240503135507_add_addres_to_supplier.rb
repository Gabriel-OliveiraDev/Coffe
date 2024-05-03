class AddAddresToSupplier < ActiveRecord::Migration[7.1]
  def change
    add_column :suppliers, :addres, :text
  end
end
