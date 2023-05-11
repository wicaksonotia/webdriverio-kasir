Feature: [KASIR] 03. Create New Product

  Scenario Outline: As a user, I can create new product

    Given I am on the Login page
    When I input Nomor Ponsel and input Kode Keamanan
    Then system should be leading to Home page

    Given I am on the Home page
    When I click menu Kasir and click button Tambahan
    Then I should be able to create new product