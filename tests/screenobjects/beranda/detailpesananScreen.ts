import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class TokoOnlineScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="listOfTransaction"]');
    }
    
    //define selectors using getter methods
    private get btnTolak () { return $('//*[@resource-id="tolak"]'); }
    private get btnProses () { return $('//*[@resource-id="proses"]'); }
    private get btnlanjutkan () { return $('//*[@resource-id="lanjutkan"]'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.btnTolak).toBeDisplayed();
        await expect(this.btnProses).toBeDisplayed();
    }

    async prosesOrder (){
        await this.btnProses.click();
        await expect(this.btnlanjutkan).toBeDisplayed();
        await this.btnlanjutkan.click();
        await driver.pause(3000);
    }
}

export default new TokoOnlineScreen();