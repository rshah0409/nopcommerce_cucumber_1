$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buildyourowncomputertest.feature");
formatter.feature({
  "line": 1,
  "name": "Build your own computer page functionality.",
  "description": "\r\nAs a user I should be able to navigate through build your own computer page successfully.",
  "id": "build-your-own-computer-page-functionality.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6032208400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user should be able to buy product from build your own computer page.",
  "description": "",
  "id": "build-your-own-computer-page-functionality.;user-should-be-able-to-buy-product-from-build-your-own-computer-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click  on \u0027computers\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027desktop\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"Name: A to Z\" from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027add to cart\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see \u0027build your own\u0027 page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select \"2.2 GHz Intel Pentium Dual-Core E2200\" from  processor dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select \"8GB [+$60.00]\" from ram drop down list",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \u0027400 GB [+$100.00]\u0027 radio button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \u0027Vista Premium [+$60.00]\u0027 radio button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select two check boxes \u0027Microsoft Office [+$50.00]\u0027 and \u0027Total Commander[+$5.00]\u0027.",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify Price \u0027$1,475.00\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \u0027ADD TO CART\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see Message on top green bar like \u0027The product has been added to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "TopmenuTabsStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 270704500,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iClickOnComputersTab()"
});
formatter.result({
  "duration": 863536300,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iClickOnDesktop()"
});
formatter.result({
  "duration": 3237078500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 10
    }
  ],
  "location": "DesktopStepdefs.iSelectFromDropdownList(String)"
});
formatter.result({
  "duration": 1207159600,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 3153960800,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iSeeBuildYourOwnPage()"
});
formatter.result({
  "duration": 2763786500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 10
    }
  ],
  "location": "buildYourownTestStepdefs.iSelectFromProcessorDropdown(String)"
});
formatter.result({
  "duration": 279910800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 10
    }
  ],
  "location": "buildYourownTestStepdefs.iSelectFromRamDropDownList(String)"
});
formatter.result({
  "duration": 356045200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 10
    },
    {
      "val": "100",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "buildYourownTestStepdefs.iSelectGB$RadioButton(int,int,int)"
});
formatter.result({
  "duration": 168828900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 27
    },
    {
      "val": "00",
      "offset": 30
    }
  ],
  "location": "buildYourownTestStepdefs.iSelectVistaPremium$RadioButton(int,int)"
});
formatter.result({
  "duration": 153962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 46
    },
    {
      "val": "00",
      "offset": 49
    },
    {
      "val": "5",
      "offset": 77
    },
    {
      "val": "00",
      "offset": 79
    }
  ],
  "location": "buildYourownTestStepdefs.iSelectTwoCheckBoxesMicrosoftOffice$AndTotalCommander$(int,int,int,int)"
});
formatter.result({
  "duration": 147155800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "475",
      "offset": 19
    },
    {
      "val": "00",
      "offset": 23
    }
  ],
  "location": "buildYourownTestStepdefs.iVerifyPrice$(int,int,int)"
});
formatter.result({
  "duration": 260203800,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 138900800,
  "status": "passed"
});
formatter.match({
  "location": "buildYourownTestStepdefs.iShouldSeeMessageOnTopGreenBarLikeTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 878020600,
  "status": "passed"
});
formatter.after({
  "duration": 936803300,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/desktoptest.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Functionality",
  "description": "\r\nAs a user I should be able to navigate through desktop page.",
  "id": "desktop-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3722517100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able see products arranged in reverse alphabetical order on desktop page.",
  "description": "",
  "id": "desktop-page-functionality;user-should-be-able-see-products-arranged-in-reverse-alphabetical-order-on-desktop-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click  on computers tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"Name: Z to A\" from dropdown list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see products arranged in reverse alphabetical order.",
  "keyword": "Then "
});
formatter.match({
  "location": "TopmenuTabsStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopStepdefs.iClickOnComputersTab()"
});
formatter.result({
  "duration": 743945200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopStepdefs.iClickOnDesktop()"
});
formatter.result({
  "duration": 2645422900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: Z to A",
      "offset": 10
    }
  ],
  "location": "DesktopStepdefs.iSelectFromDropdownList(String)"
});
formatter.result({
  "duration": 1205970800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopStepdefs.iShouldSeeProductsArrangedInReverseAlphabeticalOrder()"
});
formatter.result({
  "duration": 91718100,
  "status": "passed"
});
formatter.after({
  "duration": 1191789000,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/topmenutest.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "\r\nAs a User I should be able to click on all top menu tabs",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3656064800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to click on all top menu tabs",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-on-all-top-menu-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any tabs \"Computers\" from Computers,Apparel,Electronics,Digital downloads,Books,Jewelry or Gift Cards",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should nevigate to selected page",
  "keyword": "Then "
});
formatter.match({
  "location": "TopmenuTabsStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "TopmenuTabsStepdefs.iClickOnAnyTabsFromComputersApparelElectronicsDigitalDownloadsBooksJewelryOrGiftCards(String)"
});
formatter.result({
  "duration": 1349616800,
  "status": "passed"
});
formatter.match({
  "location": "TopmenuTabsStepdefs.iShouldNevigateToSelectedPage()"
});
formatter.result({
  "duration": 97144100,
  "status": "passed"
});
formatter.after({
  "duration": 1391202700,
  "status": "passed"
});
});