class Api::V1::SearchController < ApplicationController
  def index
    gameslices = Game.all.each_slice(10).to_a
    if params[:page].to_i > gameslices.length
      render json: { error: "this page doesn't exist" }, status: :bad_request
    else
      @games = gameslices[params[:page].to_i - 1 || 0]
      render json: {
        items: @games.map do |game|
                 {
                   image: game.cover.attached? ? url_for(game.cover) : 'https://via.placeholder.com/100',
                   score: game.score,
                   name: game.name,
                   description: game.description,
                   sellerId: game.owner
                 }
               end,
        pages: gameslices.length
      }, status: :ok
    end
  end
end
