class State
  include Mongoid::Document
  
  belongs_to :workflow
  has_many :roles
  
  field :name, type: String
  field :workflow_id, type: Integer 
end
