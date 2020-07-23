# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create(
  name: 'Admin',
  email: 'admin@email.com',
  password: '123',
  password_confirmation: '123',
  is_admin: true
)

User.create(
  name: 'Saul',
  email: 'saul.flores@gmail.com',
  password: 'lolazo123',
  password_confirmation: 'lolazo123'
)

25.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: 'pass1',
    password_confirmation: 'pass1'
  )
end

50.times do
  ga = Game.new(
    name: Faker::Game.title,
    score: rand(1..5),
    description: Faker::Game.genre,
    owner: rand(1..20),
    price: rand(200...1200)
  )

  ga.cover.attach(io: URI("https://source.unsplash.com/collection/#{rand(100...300)}").open,filename: "cover.jpg")

  ga.save
end


Like.create(
  user_id: 1,
  game_id: 2
)

Like.create(
  user_id: 2,
  game_id: 1
)

Like.create(
  user_id: 1,
  game_id: 3
)

Like.create(
  user_id: 3,
  game_id: 3
)

home = HomeConfig.new(
  title: Faker::Lorem.sentence(word_count: 1)
)

home.logo.attach(io: URI('https://i.imgur.com/t9V2Plg.png').open,filename: "image.jpg")
home.hero.attach(io: URI('https://i.pinimg.com/originals/d6/9f/f8/d69ff8e43057ac2c01f6ca1b619f4c6a.jpg').open,filename: "image.jpg")

home.save

HeroBox.create(
  message: Faker::Lorem.sentence(word_count: 15),
  button: Faker::Lorem.sentence(word_count: 2),
  link: '/signup',
  title: Faker::Lorem.sentence(word_count: 3),
  home_config_id: 1
)

Theme.create(
  primary: '#ec5200',
  background: '#fff', 
  subtitles: '#8d8d8d', 
  home_config_id: 1
)

ShowCase.create(
  subtitle: Faker::Lorem.sentence(word_count: 4), 
  title: Faker::Lorem.sentence(word_count: 6), 
  home_config_id: 1
)

ShowCaseDatum.create(
  title: Faker::Lorem.sentence(word_count: 2), 
  paragraph: Faker::Lorem.sentence(word_count: 15), 
  reverse: true, 
  hasButton: false, 
  show_case_id: 1
)

ShowCaseDatum.create(
  title: Faker::Lorem.sentence(word_count: 2), 
  paragraph: Faker::Lorem.sentence(word_count: 15), 
  reverse: false, 
  hasButton: false, 
  show_case_id: 1
)

ShowCaseDatum.create(
  title: Faker::Lorem.sentence(word_count: 2), 
  paragraph: Faker::Lorem.sentence(word_count: 15), 
  reverse: true, 
  hasButton: false, 
  show_case_id: 1
)

Button.create(
  text: 'Learn More', 
  link: '/cat', 
  external: false, 
  isRounded: false, 
  form_id: 1, 
  form_type: 'ShowCaseDatum'
)

Testimonial.create(
  title: Faker::Lorem.sentence(word_count: 5), 
  subtitle: Faker::Lorem.sentence(word_count: 6), 
  time: 4, 
  home_config_id: 1
)

5.times do
  test = TestimonialDatum.new(
    name: Faker::Name.name, 
    title: 'developer', 
    text: Faker::Lorem.sentence(word_count: 14), 
    testimonial_id: 1
  )

  test.avatar.attach(io: URI("https://robohash.org/#{test.name.parameterize}.png?size=150x150").open, filename: "avatar.jpg")

  test.save
end

Button.create(
  text: 'sign in', 
  isRounded: false, 
  link: '/signin', 
  form_id: 1, 
  form_type: HomeConfig
)

Button.create(
  text: 'sign up', 
  isRounded: false, 
  link: '/signup', 
  form_id: 1, 
  form_type: HomeConfig
)

##  Search

