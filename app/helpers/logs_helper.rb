module LogsHelper
  def log_in(user)
    session[:user_id] = user.id
  end
end

def logged_in?
  !session[:user_id].nil?
end

def current_user
  if session[:user_id]
    @current_user ||= User.find_by(id: session[:user_id])
  elsif cookies.signed[:user_id]
    user = User.find_by(id: cookies.signed[:user_id])
    if user&.authenticated?(cookies[:remember_token])
      @current_user = user
      log_in @current_user
    end
  end
  @current_user
end

def log_out
  reset_session
end
