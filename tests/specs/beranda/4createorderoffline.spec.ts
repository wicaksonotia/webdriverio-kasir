import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import KasirScreen from '../../screenobjects/beranda/kasirScreen';
import KonfirmasiPenjualanScreen from '../../screenobjects/beranda/konfirmasipenjualanScreen';

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.nanti();
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Kasir$/, async () => {
    await BerandaScreen.clickKasir();
    await BerandaScreen.lewati();
    // await KasirScreen.waitForIsShown(true);
    await KasirScreen.page();
    await driver.pause(3000);
    await KasirScreen.clickProduct2();
    await KasirScreen.clickProduct3();
    await KasirScreen.konfirmasiPenjualan();
});

Then(/^I should be able to make an order$/, async () => {
    await KonfirmasiPenjualanScreen.page();
    await KonfirmasiPenjualanScreen.produk();
    await KonfirmasiPenjualanScreen.createOrder({ notes: 'OOTPHTTK' });
    await BerandaScreen.page();
});