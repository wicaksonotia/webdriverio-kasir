import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class LoginScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup');
    }
    
    //define selectors using getter methods
    private get inputNoHP () { return $('~inputNomorPonsel'); }
    private get btnMasuk () { return $('~ButtonForLogin'); }

    //a method to encapsule automation code to interact with the page
    async loginKasir ({ nohp } : { nohp:string; }) {
        await expect(this.inputNoHP).toBeDisplayed();
        await this.inputNoHP.setValue(nohp);
        await driver.hideKeyboard();
        await this.btnMasuk.click();
    }
}

export default new LoginScreen();