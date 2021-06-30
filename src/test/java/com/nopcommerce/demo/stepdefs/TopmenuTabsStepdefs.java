package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class TopmenuTabsStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
    @When("^I click on any tabs \"([^\"]*)\" from Computers,Apparel,Electronics,Digital downloads,Books,Jewelry or Gift Cards$")
    public void iClickOnAnyTabsFromComputersApparelElectronicsDigitalDownloadsBooksJewelryOrGiftCards(String menu)  {
        new HomePage().selectMenu( menu );
    }


    @Then("^I should nevigate to selected page$")
    public void iShouldNevigateToSelectedPage() {
        Assert.assertEquals( "Computers",new HomePage().verifyTopMenuTabText() );
    }


}
