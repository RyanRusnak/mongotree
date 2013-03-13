class Node
  include Mongoid::Document
  include Mongoid::Ancestry
  include Mongoid::Timestamps
  
  has_ancestry
  
  field :name, type: String
end
