import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class TokoOnlineScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="listOfTransaction"]');
    }
    
    //define selectors using getter methods
    private get terimaSemuaCookie () { return $('//*[@resource-id="onetrust-accept-btn-handler"]'); }
    private get tabBaru () { return $('~Baru'); }
    private get status () { return $('//*[@resource-id="Baru"]'); }
    private get btnChatPembeli () { return $('//*[@resource-id="btnChatBuyer[0]"]'); }
    private get btnLihatDetail () { return $('//*[@resource-id="linkTransactionDetail[0]"]'); }
    private get btnTolak () { return $('//*[@resource-id="tolak"]'); }
    private get btnProses () { return $('//*[@resource-id="proses"]'); }
    private get btnlanjutkan () { return $('//*[@resource-id="lanjutkan"]'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.tabBaru).toBeDisplayed();
    }

    async acceptCookie () {
        await expect(this.terimaSemuaCookie).toBeDisplayed();
        await this.terimaSemuaCookie.click();
    }

    async openTabBaru () {
        await this.tabBaru.click();
    }

    async detailOrder () {
        await expect(this.btnChatPembeli).toBeDisplayed();
        await expect(this.btnLihatDetail).toBeDisplayed();
        await this.btnLihatDetail.click();
        await expect(this.btnTolak).toBeDisplayed();
        await expect(this.btnProses).toBeDisplayed();
        await driver.pause(2000);
    }

    async prosesOrder (){
        await this.btnProses.click();
        await expect(this.btnlanjutkan).toBeDisplayed();
        await this.btnlanjutkan.click();
        await driver.pause(3000);
    }
}

export default new TokoOnlineScreen();