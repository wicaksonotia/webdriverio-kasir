import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/b.t.a.f');
    }

    //define selectors using getter methods
    private get back() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]'); }
    private get btnLanjut() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]'); }
    private get btnLewati0() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]'); }
    private get rbYa() { return $('~radioButtonInput1'); }
    private get clSetuju() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.TextView'); }
    private get ddDay() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]'); }
    private get selectDay() { return $('//android.view.ViewGroup[@content-desc="Setiap_Hari"]/android.view.ViewGroup'); }
    private get closeDay() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView'); }
    private get ddOpen() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup'); }
    private get ddClose() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup'); }
    private get inpClose() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.TimePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.EditText'); }
    private get tsKurir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.Switch'); }
    private get ongkir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.EditText'); }
    private get btnSimpanOngkir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup'); }
    private get clSetuju2() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView'); }
    private get btnSimpan() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup'); }
    private get btnSelesai() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]'); }
    private get allowPermission() { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'); }
    private get allowPermissionCP() { return $('//*[@resource-id="com.android.permissioncontroller:id/grant_dialog"]'); }

    private get panah1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah2() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah3() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah4() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah5() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah6() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }

    private get menuKasir() { return $('~menuKasir'); }
    private get btnLewati() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]'); }

    private get cardPembelian() { return $('~menuPembelian'); }
    private get cardTokoOnline() { return $('~menuCOO'); }
    private get cardLangganan() { return $('~menuLangganan'); }
    private get cardLaporan() { return $('~menuReport'); }
    private get toggleOnOff() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/b.t.a.f/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Switch'); }
    private get btnConfirmPos() { return $('~btnAlertOfflineModePositif'); }
    private get btnConfirmNeg() { return $('~btnAlertOfflineModeNegatif'); }

    private get btnNanti() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView'); }
    private get menuBeranda() { return $('~menu0'); }
    private get menuProduk() { return $('~menu1'); }
    private get menuChat() { return $('~menu2'); }
    private get menuAkunSaya() { return $('~menu3'); }

    private get btnOK() { return $('//*[@resource-id="android:id/button1"]'); }
    private get btnAlertOfflineModePositive() { return $('~btnAlertOfflineModePositive'); }

    //a method to encapsule automation code to interact with the page
    async afterLogin({ close, ongkir }: { close: string; ongkir: string; }) {
        await this.btnLanjut.waitForDisplayed();
        await this.btnLanjut.click();
        await this.btnLewati0.waitForDisplayed();
        await this.btnLewati0.click();
        await this.rbYa.waitForDisplayed();
        await this.rbYa.click();
        await this.clSetuju.click();
        await this.ddDay.click();
        await this.selectDay.click();
        await this.closeDay.click();
        await this.ddOpen.click();
        await this.btnOK.click();
        await this.ddClose.click();
        await this.inpClose.setValue(close);
        await this.btnOK.click();
        await Gestures.swipeUpCustom();
        await this.tsKurir.click();
        await this.ongkir.setValue(ongkir);
        await this.btnSimpanOngkir.click();
        await driver.pause(3000);
        await Gestures.swipeUpCustom();
        await this.clSetuju2.click();
        await this.btnSimpan.click();
        await driver.pause(3000);
        await this.btnSelesai.waitForDisplayed();
        await this.btnSelesai.click();
        await this.allowPermission.waitForDisplayed();
        await this.allowPermission.click();
    }

    async beforePage() {
        await this.panah1.click();
        await this.panah2.click();
        await this.panah3.click();
        await this.panah4.click();
        await this.panah5.click();
        await this.panah6.click();
    }

    async nanti() {
        await expect(this.btnNanti).toBeDisplayed();
        await this.btnNanti.click();
    }

    async page() {
        await expect(this.menuKasir).toBeDisplayed();
        await expect(this.cardPembelian).toBeDisplayed();
        await expect(this.cardTokoOnline).toBeDisplayed();
        await expect(this.cardLangganan).toBeDisplayed();
        await expect(this.cardLaporan).toBeDisplayed();
        await expect(this.menuBeranda).toBeDisplayed();
        await expect(this.menuProduk).toBeDisplayed();
        await expect(this.menuChat).toBeDisplayed();
        await expect(this.menuAkunSaya).toBeDisplayed();
        await driver.pause(2000);
    }

    async goOffline() {
        await this.toggleOnOff.click();
        await this.btnConfirmPos.click();
        await this.back.click();
        // await this.btnConfirmNeg.click();
    }

    async dontGoOnline() {
        await this.btnConfirmNeg.click();
    }

    async allow() {
        await this.allowPermissionCP.click();
    }

    async lewati() {
        await this.btnLewati.click();
    }

    async clickKasir() {
        await this.menuKasir.click();
    }

    async clickTokoOnline() {
        await this.cardTokoOnline.click();
    }

    async clickOK() {
        await this.btnOK.click();
    }
}

export default new BerandaScreen();