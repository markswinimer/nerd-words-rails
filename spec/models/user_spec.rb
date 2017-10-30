require 'rails_helper'

RSpec.describe User, type: :model do
  context "has all the required fields for a user" do
    it {should have_valid(:first_name).when("Mark")}
    it {should_not have_valid(:first_name).when(nil, "")}

    it {should have_valid(:last_name).when("Swinimer")}
    it {should_not have_valid(:last_name).when(nil, "")}

    it {should have_valid(:username).when("mswinimer")}
    it {should_not have_valid(:username).when(nil, "")}

    it {should have_valid(:email).when("mswinimer@gmail.com")}
    it {should_not have_valid(:email).when(nil, "")}

    it {should have_valid(:location).when("United States")}
end

  it "has a matching password confirmation for the password" do
    user = User.new
    user.password = "password"
    user.password_confirmation = "anotherpassword"

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end
