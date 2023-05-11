import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class TambahProdukScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup');
    }
    
    //define selectors using getter methods
    private get tanpaBarcode () { return $('~inputundefined'); }
    private get namaProduk () { return $('~namaProduk'); }
    private get aliasName () { return $('~aliasName'); }
    private get category () { return $('//*[@resource-id="android:id/text1"]'); }
    private get selectCategory () { return $$('//*[@resource-id="android:id/text1"]'); }
    private get hargaJual () { return $('~hargaJual'); }
    private get hargaBeli () { return $('~hargaBeli'); }
    private get stok () { return $('~stok'); }
    private get rbFavorit () { return $('~radioFavorit1'); }
    private get lanjutkanTambahProduk () { return $('~lanjutkanTambahProduk'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.tanpaBarcode).toBeDisplayed();
        await this.tanpaBarcode.click();
    }

    async inputNamaProduk ({ nama } : { nama:string; }) {
        await expect(this.namaProduk).toBeDisplayed();
        await this.namaProduk.setValue(nama);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async inputAlias ({ as } : { as:string; }) {
        await expect(this.aliasName).toBeDisplayed();
        await this.aliasName.setValue(as);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async chooseCategory () {
        await this.category.click();
        await expect(this.selectCategory).toBeDisplayed();
        await this.selectCategory?.[2]?.click();
    }

    async inputHargaJual ({ hjual } : { hjual:string; }) {
        await expect(this.hargaJual).toBeDisplayed();
        await this.hargaJual.setValue(hjual);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async inputHargaBeli ({ hbeli } : { hbeli:string; }) {
        await expect(this.hargaBeli).toBeDisplayed();
        await this.hargaBeli.setValue(hbeli);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async inputStok ({ stok } : { stok:string; }) {
        await expect(this.stok).toBeDisplayed();
        await this.stok.setValue(stok);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
    }

    async save () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.rbFavorit, 10);
        await this.lanjutkanTambahProduk.click();
    }
}

export default new TambahProdukScreen();