# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171110195335) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "library_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["library_id"], name: "index_favorites_on_library_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "mode", null: false
    t.integer "player_count", null: false
    t.bigint "library_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["library_id"], name: "index_games_on_library_id"
    t.index ["user_id"], name: "index_games_on_user_id"
  end

  create_table "libraries", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.integer "play_count", default: 0
    t.integer "favorite_count", default: 0
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_libraries_on_user_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name", null: false
    t.integer "score", default: 0
    t.bigint "game_id"
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "username", null: false
    t.string "location"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "word_libraries", force: :cascade do |t|
    t.bigint "word_id"
    t.bigint "library_id"
    t.index ["library_id"], name: "index_word_libraries_on_library_id"
    t.index ["word_id"], name: "index_word_libraries_on_word_id"
  end

  create_table "words", force: :cascade do |t|
    t.string "name", null: false
    t.integer "difficulty", default: 0
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_words_on_user_id"
  end

end
