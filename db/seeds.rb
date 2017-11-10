
User.create!(first_name: "Mark", last_name: "Swinimer", username: "demo", email: "demo@gmail.com", password: "123456")

i = 0
while i < 20
  first_name = Faker::Name.unique.name.split[1]
  last_name = Faker::Name.unique.name.split[-1]
  username = Faker::Hipster.word + ((1..1000).to_a).sample.to_s
  email = username + "@gmail.com"
  User.create!(first_name: first_name, last_name: last_name, username: username, email: email, password: "123456")
  i += 1
end

#create word libraries with words

# library one
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Cats", description: "A word library about my favorite cats", user: user)
limit = ((100..150).to_a).sample
while word_count < limit
  wordSample = Word.create!(name: Faker::Cat.breed, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------

# library two
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Books", description: "Book group books and authors", user: user)
limit = ((50..80).to_a).sample
while word_count < limit
  wordSample = Word.create!(name: Faker::Book.title, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::Book.author, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------

# library three
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Elder Scrolls", description: "Elder Scrolls video game locations, races, and enemies", user: user)
while word_count <= 14
  wordSample = Word.create!(name: Faker::ElderScrolls.race, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::ElderScrolls.region, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::ElderScrolls.creature, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------

# library four
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Harry Potter", user: user)
while word_count < 20
  wordSample = Word.create!(name: Faker::HarryPotter.unique.character, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::HarryPotter.unique.location, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------

# library five
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Star Wars", description: "I love Star Wars", user: user)
while word_count < 15
  wordSample = Word.create!(name: Faker::StarWars.unique.character, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::StarWars.unique.planet, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::StarWars.unique.vehicle, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------

# library six
word_count = 0
user = User.find(((1..19).to_a).sample)
sampleLibrary = Library.create!(play_count: ((1..200).to_a).sample.to_s, favorite_count: ((1..200).to_a).sample.to_s, name: "Star Treck", description: "Star Trek is better.", user: user)
while word_count < 13
  wordSample = Word.create!(name: Faker::StarTrek.unique.character, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  wordSample = Word.create!(name: Faker::StarTrek.unique.location, difficulty: ((1..3).to_a).sample, user: user)
  WordLibrary.create!(word: wordSample, library: sampleLibrary)
  word_count += 1
end

#---------
