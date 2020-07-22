class Api::V1::SearchController < ApplicationController
  def index
    gameslices = Game.all.each_slice(10).to_a
    if params[:page].to_i > gameslices.length
      render json: { error: "this page doesn't exist" }, status: :bad_request
    else
      @games = gameslices[params[:page].to_i - 1 || 0]
      @liked_games = current_user.nil? ? nil : current_user.liked_games
      render json: {
        items: format(@games),
        itemsLike: format(@liked_games),
        pages: gameslices.length,
        likes: @liked_games.nil? ? [] : @liked_games.map(&:id)
      }, status: :ok
    end
  end

  private

  def format(game)
    return [] if game.nil?

    game.map do |g|
      {
        image: g.cover.attached? ? url_for(g.cover) : 'https://via.placeholder.com/100',
        score: g.score,
        name: g.name,
        price: g.price,
        description: g.description,
        sellerId: g.owner,
        id: g.id
      }
    end
  end
end
