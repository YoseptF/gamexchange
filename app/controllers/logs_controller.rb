class LogsController < ApplicationController
  def signin
    @user = User.find_by(email: params[:user][:email])
    if @user&.authenticate(params[:user][:password])
      log_in @user
      flash[:success] = 'successfylly logged in'
      redirect_to root_path
    else
      flash[:danger] = 'the email/password pair was incorrect'
      redirect_to signin_path
    end
  end

  def signup
    @user = User.new(sign_up_params)
    if @user.save
      log_in @user
      redirect_to root_path
    else
      flash[:danger] = @user.errors.full_messages
      p flash.now[:danger]
      redirect_to signup_path
    end
  end

  def sign_up_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation)
  end
end
