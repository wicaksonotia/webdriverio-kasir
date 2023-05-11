import { Given, When, Then } from '@cucumber/cucumber';
import LoginScreen from '../../screenobjects/auth/loginScreen';
import SecurityCodeScreen from '../../screenobjects/auth/securitycodeScreen';
import DemoScreen from '../../screenobjects/auth/demoScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import KasirScreen from '../../screenobjects/beranda/kasirScreen';
import TambahProdukScreen from '../../screenobjects/beranda/tambahprodukScreen';

Given(/^I am on the Login page$/, async () => {
    await LoginScreen.waitForIsShown(true);
});

When(/^I input Nomor Ponsel and input Kode Keamanan$/, async () => {
    // await LoginScreen.loginKasir({nohp: '6663332221'});
    await LoginScreen.loginKasir({ nohp: '85156143535' });
    await SecurityCodeScreen.waitForIsShown(true);
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
    // await DemoScreen.waitForIsShown(true);
    // await DemoScreen.skipVideo();
});

Then(/^system should be leading to Home page$/, async () => {
    await BerandaScreen.afterLogin({ close: '23', ongkir: '5000' });
    await BerandaScreen.beforePage();
    await BerandaScreen.waitForIsShown(true);
});

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.page();
});

When(/^I click menu Kasir and click button Tambahan$/, async () => {
    await BerandaScreen.clickKasir();
    await BerandaScreen.allow();
    await BerandaScreen.lewati();
    await KasirScreen.page();
    await KasirScreen.createNewProdct();
});

Then(/^I should be able to create new product$/, async () => {
    await TambahProdukScreen.page();
    await TambahProdukScreen.inputNamaProduk({ nama: 'CNP26April23' });
    await TambahProdukScreen.inputAlias({ as: 'Produk26April23' });
    await TambahProdukScreen.chooseCategory();
    await TambahProdukScreen.inputHargaJual({ hjual: '5000' });
    await TambahProdukScreen.inputHargaBeli({ hbeli: '2000' });
    await TambahProdukScreen.inputStok({ stok: '1' });
    await TambahProdukScreen.save();
    await KasirScreen.waitForIsShown(true);
    await KasirScreen.page();
    await KasirScreen.searchNewProduct({ product: 'CNP26April23' });
});