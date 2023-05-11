import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import TokoOnlineScreen from '../../screenobjects/beranda/tokoonlineScreen';
import KonfirmasiPesananScreen from '../../screenobjects/beranda/konfirmasipesananScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Toko Online$/, async () => {
    await BerandaScreen.clickTokoOnline();
});

Then(/^I should be able to processing incoming orders$/, async () => {
    await TokoOnlineScreen.waitForIsShown(true);
    await TokoOnlineScreen.page();
    await TokoOnlineScreen.openTabBaru();
    await TokoOnlineScreen.detailOrder();
    await TokoOnlineScreen.prosesOrder();
    await KonfirmasiPesananScreen.prosesPengiriman();
});