package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.ComputersPage;
import com.nopcommerce.demo.pages.DeskTopPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DesktopStepdefs {
    @When("^I click  on computers tab$")
    public void iClickOnComputersTab() {
        new ComputersPage().clickOnComputersTab();
    }

    @And("^I click on desktop$")
    public void iClickOnDesktop() throws InterruptedException {
        new ComputersPage().clickOnDesktopOption();
    }
    @And("^I select \"([^\"]*)\" from dropdown list$")
    public void iSelectFromDropdownList(String dropdown) throws InterruptedException {
        Thread.sleep( 1000 );
        new DeskTopPage().selectFromDropdown( dropdown );
    }


    @Then("^I should see products arranged in reverse alphabetical order\\.$")
    public void iShouldSeeProductsArrangedInReverseAlphabeticalOrder() {
        new ComputersPage().verifyproductsSortByGivenOrder();
    }


}
