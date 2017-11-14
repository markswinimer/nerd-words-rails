class Api::V1::GamesController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless -> { request.format.json? }

  def show
    user = current_user
    game = Game.find(params[:id])
    playerData = game.players
    library = {name: game.library.name, words: game.library.words}
    i = 0
    playerScore = []
    playerData.each do |p|
      pData = "player#{i + 1}"
      pData = { player_num: i, name: p.name, score: p.score }
      playerScore << pData
      i += 1
    end
    deck = []
    game.library.words.each do |word|
      deck << word.name
    end
    render json: {library: library, user: user, game: game, players: playerScore, deck: deck}
  end

  def create
    gameData = params[:gameData]
    user = User.find(params[:user][:id])
    players = params[:players]
    wordLibrary = Library.find(gameData[:libraryId])
    game = Game.create!(
      mode: gameData[:gameMode],
      player_count: gameData[:playerCount],
      library: wordLibrary,
      user: user
    )
    gamePlayers = players.keys
    gamePlayers.each do |player|
      Player.create!(name: players[player], game: game, score: "0")
    end
    library = {}
    library["name"] = game.library.name
    library["words"] = game.library.words

    if game.save
      newPlayCount = (wordLibrary.play_count + 1)
      wordLibrary.update(play_count: newPlayCount)
    end
    render json: { game: game}
  end

end
