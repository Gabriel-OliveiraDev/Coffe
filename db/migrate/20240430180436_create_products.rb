class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.references :supplier, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
