

user1 = User.create!(first_name: "Mark", last_name: "Swinimer", username: "mswinimer", email: "markswinimer@gmail.com", password: "123456")

word1 = Word.create!(name: "Dog", difficulty: 1, user: User.first)
word2 = Word.create!(name: "Book", difficulty: 1, user: User.first)
word3 = Word.create!(name: "Eagle", difficulty: 2, user: User.first)

library1 = Library.create!(play_count: 17, favorite_count: 5, name: "Library One", description: "The first library", user: User.first)

wl1 = WordLibrary.create!(word: word1, library: Library.first)
wl2 = WordLibrary.create!(word: word2, library: Library.first)
wl3 = WordLibrary.create!(word: word3, library: Library.first)

game1 = Game.create!(mode: "classic", player_count: 2, user: user1, library: library1)

player1 = Player.create!(game: game1, name: "Mark")
player2 = Player.create!(game: game1, name: "Ryan")
