import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import KasirScreen from '../../screenobjects/beranda/kasirScreen';
import KonfirmasiPenjualanScreen from '../../screenobjects/beranda/konfirmasipenjualanScreen';

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.nanti();
    // await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Kasir and make an order$/, async () => {
    await BerandaScreen.clickKasir();
    await BerandaScreen.lewati();
    await KasirScreen.page();
    await KasirScreen.clickProduct4();
    // await KasirScreen.clickProduct6();
    await KasirScreen.konfirmasiPenjualan();
});

Then(/^I should be able to input discount amount$/, async () => {
    await KonfirmasiPenjualanScreen.page();
    await KonfirmasiPenjualanScreen.inputDiscountFail({ discount: '100000' });
    await KonfirmasiPenjualanScreen.inputDiscountSuccess({ discount: '10000' });
    await KonfirmasiPenjualanScreen.produk1();
    await KonfirmasiPenjualanScreen.totalPotongan();
    await KonfirmasiPenjualanScreen.createOrder({ notes: 'PH10RB' });
    await BerandaScreen.page();
});