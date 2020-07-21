class Api::V1::HomeController < ApplicationController
  def index
    @config = HomeConfig.includes(:theme, :show_case).find(1)
    p url_for(@config.logo)
    render json: {
      title: @config.title,
      hero: @config.hero.attached? ? url_for(@config.hero) : 'https://via.placeholder.com/700',
      logo: @config.logo.attached? ? url_for(@config.logo) : 'https://via.placeholder.com/50',
      isLoggedIn: logged_in?,
      isAdmin: current_user ? current_user.is_admin : false,
      heroBox: {
        title: @config.hero_box.title,
        message: @config.hero_box.message,
        button: @config.hero_box.button,
        link: @config.hero_box.link
      },
      theme: {
        primary: @config.theme.primary,
        background: @config.theme.background,
        subtitles: @config.theme.subtitles
      },
      showCase: {
        title: @config.show_case.title,
        subtitle: @config.show_case.subtitle,
        data: show_case_data(@config.show_case.show_case_data)
      },
      testimonials: {
        title: @config.testimonial.title,
        subtitle: @config.testimonial.subtitle,
        time: @config.testimonial.time,
        data: testimonial_data(@config.testimonial.testimonial_data)
      },
      buttons: nav_buttons(@config.buttons)
    }, status: :ok
  end

  private

  def nav_buttons(buttons)
    buttons.map do |item|
      {
        text: item.text,
        isRounded: item.isRounded,
        link: item.link
      }
    end
  end

  def testimonial_data(data)
    data.map do |item|
      {
        image: item.avatar.attached? ? url_for(item.avatar) : 'http://via.placeholder.com/150.jpg',
        title: item.title,
        name: item.name,
        text: item.text,
      }
    end
  end

  def show_case_data(data)
    data.map do |item|
      {
        image: item.image.attached? ? url_for(item.image) : 'http://via.placeholder.com/960x370.jpg',
        title: item.title,
        paragraph: item.paragraph,
        reverse: item.reverse,
        hasButton: item.hasButton,
        button: if item.hasButton
                  {
                    text: item.button.text,
                    link: item.button.link,
                    external: item.button.external
                  }
                end
      }
    end
  end
end
