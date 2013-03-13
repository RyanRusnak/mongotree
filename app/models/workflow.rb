class Workflow
  include Mongoid::Document
  
  has_many :states
  
  field :name, type: String
end
