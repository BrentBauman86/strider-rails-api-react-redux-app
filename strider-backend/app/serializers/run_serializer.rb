class RunSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :date, :comment, :user_id
end
