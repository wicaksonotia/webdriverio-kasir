import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import KasirScreen from '../../screenobjects/beranda/kasirScreen';
import KonfirmasiPenjualanScreen from '../../screenobjects/beranda/konfirmasipenjualanScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Kasir and make an order$/, async () => {
    await BerandaScreen.clickKasir();
    await KasirScreen.page();
    await KasirScreen.clickProduct1();
    await KasirScreen.clickProduct3();
    await KasirScreen.konfirmasiPenjualan();
});

Then(/^I should be able to check total coupons I can transfer$/, async () => {
    await KonfirmasiPenjualanScreen.page();
    await KonfirmasiPenjualanScreen.checkCoupon({nomorPonsel: '82182845985'});
    await KonfirmasiPenjualanScreen.produk();
    await KonfirmasiPenjualanScreen.totalCoupon();
    await KonfirmasiPenjualanScreen.createOrder();
    await BerandaScreen.clickOK();
    await BerandaScreen.page();
});