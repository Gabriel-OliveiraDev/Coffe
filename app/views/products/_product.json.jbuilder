json.extract! product, :id, :name, :price, :supplier_id, :quantity, :created_at, :updated_at
json.url product_url(product, format: :json)
