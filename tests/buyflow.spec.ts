import { test, expect } from './BaseTest';

test('buy flow', async ({
  loginPage,
  homePage,
  cartPage,
  checkoutStepOne,
  checkoutStepTwo,
  checkoutComplete
}) => {

  // 1) LOGIN
  await loginPage.login("standard_user", "secret_sauce");

  // 2) HOME / INVENTORY
  await homePage.homePageOpen();
  await homePage.addToCartAction();  

  // 3) CART
  await cartPage.clickOnCheckOutButton();

  // 4) CHECKOUT STEP ONE
  await checkoutStepOne.addToCartAction();

  // 5) CHECKOUT STEP TWO
  await checkoutStepTwo.clickOnFinishButton();

  // 6) COMPLETE
  await checkoutComplete.orderConfirmationHeadlinePresent();
//  await expect(checkoutComplete.completeHeader).toBeVisible();
});

