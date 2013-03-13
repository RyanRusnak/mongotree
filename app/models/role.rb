class Role
  include Mongoid::Document
  
  has_many :users
  belongs_to :state
  
  field :name, type: String
  field :workflow_id, type: String
  field :state_id, type: Integer
end
