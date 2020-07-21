require 'test_helper'

class LogsControllerTest < ActionDispatch::IntegrationTest
  test "should get signup" do
    get logs_signup_url
    assert_response :success
  end

  test "should get signin" do
    get logs_signin_url
    assert_response :success
  end

end
