class User
  include Mongoid::Document
  
  belongs_to :role
  
  field :name, type: String
  field :role_id, type: Integer
end
