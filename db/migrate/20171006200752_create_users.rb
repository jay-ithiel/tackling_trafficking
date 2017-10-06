class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false, index: true, unique: true
      t.string :email, null: false, index: true, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_pic_url

      t.timestamps
    end
  end
end
