class AddAddresToClient < ActiveRecord::Migration[7.1]
  def change
    add_column :clients, :addres, :text
  end
end
