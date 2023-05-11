import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import TokoOnlineScreen from '../../screenobjects/beranda/tokoonlineScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Toko Online$/, async () => {
    await BerandaScreen.clickTokoOnline();
});

Then(/^I should be able to check incoming orders$/, async () => {
    await TokoOnlineScreen.waitForIsShown(true);
    await TokoOnlineScreen.page();
    await TokoOnlineScreen.openTabBaru();
    await TokoOnlineScreen.detailOrder();
});