import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import KasirScreen from '../../screenobjects/beranda/kasirScreen';
import KonfirmasiPenjualanScreen from '../../screenobjects/beranda/konfirmasipenjualanScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Kasir$/, async () => {
    await BerandaScreen.clickKasir();
    await KasirScreen.waitForIsShown(true);
    await KasirScreen.page();
    //qa
    // await KasirScreen.clickProduct5();
    // await KasirScreen.clickProduct3();
    //prod
    await KasirScreen.clickProduct6();
    await KasirScreen.clickProduct7();
    await KasirScreen.konfirmasiPenjualan();
});

Then(/^I should be able to make an order$/, async () => {
    await KonfirmasiPenjualanScreen.page();
    await KonfirmasiPenjualanScreen.produk();
    await KonfirmasiPenjualanScreen.createOrder();
    await BerandaScreen.page();
});