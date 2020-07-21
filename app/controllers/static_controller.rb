class StaticController < ApplicationController
  before_action :admin?, only: [:admin_panel]

  def root; end

  def admin_panel
    @configs = HomeConfig.first
  end

  def update_config; end

  private

  def admin?
    redirect_to :root_path unless current_user.is_admin
  end
end
