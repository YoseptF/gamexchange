require 'test_helper'

class StaticControllerTest < ActionDispatch::IntegrationTest
  test 'should get root' do
    get static_root_url
    assert_response :success
  end
end
