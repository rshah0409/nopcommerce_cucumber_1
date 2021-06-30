package com.nopcommerce.demo.stepdefs;

import com.nopcommerce.demo.pages.BuildYourOwnPage;
import com.nopcommerce.demo.pages.ComputersPage;
import com.nopcommerce.demo.pages.DeskTopPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class buildYourownTestStepdefs {
    @And("^I click  on 'computers' tab$")
    public void iClickOnComputersTab() {
        new ComputersPage().clickOnComputersTab();
    }

    @And("^I click on 'desktop'$")
    public void iClickOnDesktop() throws InterruptedException {
        new ComputersPage().clickOnDesktopOption();
    }

    @And("^I click on 'add to cart' button$")
    public void iClickOnAddToCartButton() throws InterruptedException {
        Thread.sleep( 1000 );
        new DeskTopPage().clickOnAddToCart();
    }

    @When("^I see 'build your own' page$")
    public void iSeeBuildYourOwnPage() {
        Assert.assertEquals( "Build your own computer",new BuildYourOwnPage().getBuildYourOwnText() );
    }

    @And("^I select \"([^\"]*)\" from  processor dropdown$")
    public void iSelectFromProcessorDropdown(String processor)  {
        new BuildYourOwnPage().selectProcessorFromDropDownOne( processor );
    }

    @And("^I select \"([^\"]*)\" from ram drop down list$")
    public void iSelectFromRamDropDownList(String ram)  {
        new BuildYourOwnPage().selectRamFromDropDownTwo( ram );
    }

    @And("^I select '(\\d+) GB \\[\\+\\$(\\d+)\\.(\\d+)\\]' radio button$")
    public void iSelectGB$RadioButton(int arg0, int arg1, int arg2) {
        new BuildYourOwnPage().clickOnHDDRadioButton();
    }

    @And("^I select 'Vista Premium \\[\\+\\$(\\d+)\\.(\\d+)\\]' radio button$")
    public void iSelectVistaPremium$RadioButton(int arg0, int arg1) {
        new BuildYourOwnPage().clickOSOnRadioButton();

    }

    @And("^I select two check boxes 'Microsoft Office \\[\\+\\$(\\d+)\\.(\\d+)\\]' and 'Total Commander\\[\\+\\$(\\d+)\\.(\\d+)\\]'\\.$")
    public void iSelectTwoCheckBoxesMicrosoftOffice$AndTotalCommander$(int arg0, int arg1, int arg2, int arg3) {
        new BuildYourOwnPage().clickOnSoftwareCheckBox();
    }

    @And("^I verify Price '\\$(\\d+),(\\d+)\\.(\\d+)'$")
    public void iVerifyPrice$(int arg0, int arg1, int arg2) {
        Assert.assertEquals( "$1,475.00" ,new BuildYourOwnPage().getTotalAmt());
    }

    @And("^I click on 'ADD TO CART' button$")
    public void iClickOnADDTOCARTButton() {
        new BuildYourOwnPage().clickOnAddToCart();
    }

    @Then("^I should see Message on top green bar like 'The product has been added to your shopping cart'$")
    public void iShouldSeeMessageOnTopGreenBarLikeTheProductHasBeenAddedToYourShoppingCart() {
        Assert.assertEquals( "The product has been added to your shopping cart" ,new BuildYourOwnPage().getTopBarMessage());
    }
}
