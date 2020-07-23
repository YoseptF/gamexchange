class Api::V1::LikeController < ApplicationController
  def index
    @games = current_user.liked_games
    render json: {
      items: @games.map do |game|
               {
                 image: game.cover.attached? ? url_for(game.cover) : 'https://via.placeholder.com/100',
                 score: game.score,
                 name: game.name,
                 price: game.price,
                 description: game.description,
                 sellerId: game.owner,
                 id: game.id
               }
             end
    }, status: :ok
  end

  def create
    return unless current_user

    game = JSON.parse(request.body.read)

    already_exists = Like.find_by(user_id: current_user[:id], game_id: game['id'])
    Like.create(user_id: current_user[:id], game_id: game['id']) unless already_exists

    render json: { success: 'success' }, status: :ok
  end

  def destroy
    p params, 'dogo'
    Like.find_by(user_id: current_user[:id], game_id: params[:id]).delete
  end
end
