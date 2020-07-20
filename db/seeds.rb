# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({
  name: 'Joseph',
  email: 'yosept.flores@gmail.com',
  password: '123654lol',
  password_confirmation: '123654lol'
})

User.create({
  name: 'Saul',
  email: 'saul.flores@gmail.com',
  password: 'lolazo123',
  password_confirmation: 'lolazo123'
})

User.create({
  name: 'Jacob',
  email: 'Jacob@gmail.com',
  password: 'lolazo123',
  password_confirmation: 'lolazo123'
})

Game.create({
  title: 'game1',
  score: 1,
  description:'good game',
  owner: 1
})

Game.create({
  title: 'game2',
  score: 1,
  description:'bad game',
  owner: 2
})

Game.create({
  title: 'game3',
  score: 1,
  description:'regular game',
  owner: 2
})

Game.create({
  title: 'game4',
  score: 1,
  description:'old game',
  owner: 3
})

Like.create({
  user_id: 1,
  game_id: 2
})

Like.create({
  user_id: 2,
  game_id: 1
})

Like.create({
  user_id: 1,
  game_id: 3
})

Like.create({
  user_id: 3,
  game_id: 3
})