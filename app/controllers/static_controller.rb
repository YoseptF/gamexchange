class StaticController < ApplicationController
  before_action :admin?, only: %i[admin_panel update_config]

  def root; end

  def admin_panel
    @configs = HomeConfig.first
  end

  def update_config
    p home_params, 'dogo'
    HomeConfig.first.update(home_params)
    redirect_to adminPanel_path
  end

  private

  def home_params
    params.require(:home_config).permit(:title,
                                        :hero,
                                        :logo,
                                        hero_box_attributes: %i[title message button link id],
                                        theme_attributes: %i[primary background subtitles id],
                                        show_case_attributes: [
                                          :title,
                                          :id,
                                          :subtitle,
                                          show_case_data_attributes: %i[image title paragraph reverse hasButton id]
                                        ],
                                        testimonial_attributes: [
                                          :title,
                                          :subtitle,
                                          :time,
                                          :id,
                                          testimonial_data_attributes: %i[name avatar title text id]
                                        ],
                                        buttons_attributes: %i[text link external isRounded form_type id]
                                      )
  end

  def admin?
    redirect_to root_path unless current_user && current_user.is_admin
  end
end
