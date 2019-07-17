class CreateRuns < ActiveRecord::Migration[5.2]
  def change
    create_table :runs do |t|
      t.string :name
      t.string :distance
      t.date :date
      t.string :comment

      t.timestamps
    end
  end
end
