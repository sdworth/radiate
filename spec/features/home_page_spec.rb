require 'rails_helper'

RSpec.describe 'The home page' do
  it 'greets visitors' do
    visit '/'

    expect(page).to have_content 'hello world'
  end
end
