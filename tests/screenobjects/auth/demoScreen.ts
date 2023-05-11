import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class DemoScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="com.android.permissioncontroller:id/grant_singleton"]');
    }
    
    //define selectors using getter methods 
    private get allowPermission () { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'); }
    private get btnSkip () { return $('~inputNext'); }

    //a method to encapsule automation code to interact with the page
    async skipVideo () {
        await expect(this.allowPermission).toBeDisplayed();
        await this.allowPermission.click();
        await expect(this.btnSkip).toBeDisplayed();
        await this.btnSkip.click();
    }
}

export default new DemoScreen();