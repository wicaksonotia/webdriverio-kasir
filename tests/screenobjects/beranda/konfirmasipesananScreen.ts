import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class KonfirmasiPesananScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View');
    }

    //define selectors using getter methods
    private get btnCetakNota() { return $('//*[@resource-id="cetak-nota"]'); }
    private get btnProsesPengiriman() { return $('//*[@resource-id="prosesPengiriman"]'); }
    private get btnLihatDetail() { return $('//*[@resource-id="lihatDetail"]'); }
    private get btnChatPembeli() { return $('//*[@resource-id="chatPembeli'); }
    private get btnSiapDiambil() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button[2]'); }
    private get btnSudahDiambil() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button'); }
    private get btnPesananSelesai() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button'); }

    //a method to encapsule automation code to interact with the page
    async prosesPengiriman() {
        // await expect(this.btnCetakNota).toBeDisplayed();
        // await this.btnCetakNota.click();
        // await Gestures.swipetoBack();
        // await Gestures.swipetoBack();
        /**
         * PROSES PENGIRIMAN
        */
        // await expect(this.btnProsesPengiriman).toBeDisplayed();
        // await this.btnProsesPengiriman.click();
        // await expect(this.btnChatPembeli).toBeDisplayed();
        // await expect(this.btnLihatDetail).toBeDisplayed();
        // await driver.pause(3000);
        // await this.btnLihatDetail.click();
        /**
         * COD -  SIAP DIAMBIL
         */
        await this.btnSiapDiambil.click();
        await this.btnProsesPengiriman.click();
        await driver.pause(5000);
        await this.btnSudahDiambil.click();
        await driver.pause(5000);
        await expect(this.btnPesananSelesai).toBeDisplayed();
    }
}

export default new KonfirmasiPesananScreen();
