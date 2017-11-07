class Api::V1::GamesController < ApplicationController

  def show
    user = current_user
    game = Game.find(params[:id])
    playerData = game.players
    library = {name: game.library.name, words: game.library.words}
    i = 1
    playerScore = []
    playerData.each do |p|
      pData = "player#{i}"
      pData = { player_num: i, name: p.name, score: p.score }
      playerScore << pData
      i += 1
    end
    render json: {library: library, user: user, game: game, players: playerScore}
  end

  def create
    gameData = params[:gameData]
    user = User.find(params[:user][:id])
    players = params[:players]

    game = Game.create!(
      mode: gameData[:gameMode],
      player_count: gameData[:playerCount],
      library: Library.find(gameData[:libraryId]),
      user: user
    )
    gamePlayers = players.keys
    gamePlayers.each do |player|
      Player.create!(name: players[player], game: game, score: "0")
    end
    library = {}
    library["name"] = game.library.name
    library["words"] = game.library.words
    render json: { game: game}
  end

end
