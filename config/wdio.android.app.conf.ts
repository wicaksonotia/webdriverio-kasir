// import { join } from 'path';
import config from './wdio.shared.local.appium.conf';
const { join } = require('path');
// const { config } = require('./wdio.shared.local.appium.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        // platformVersion: '8.1.0',
        maxInstances: 5,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        // 'appium:deviceType': 'phone',
        // "appium:browserVersion": "73.0-phone-1",
        // platformName: "Android",
        // "appium:deviceName": "Pixel 4 API Tiramisu",
        // // "appium:deviceName": "f870ac01",
        // "appium:platformVersion": "12",
        // "appium:automationName": "UiAutomator2",
        // "appium:app": androidAppPath,


        'appium:deviceName': 'Pixel 4 API Tiramisu',
        // 'appium:udid': 'RR8R30D7QVP',
        // 'appium:udid': 'f870ac01',
        "appium:platformVersion": "12",
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UIAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/sprint0423-qa.apk'), //qa
        // 'appium:app': join(process.cwd(), './apps/sprint0122-prod.apk'), //prod
        // 'appium:appName': 'KasirQA.apk',
        // @ts-ignore
        // 'appium:appPackage': 'com.pmi.limited.PMIAPPM05983.QA',
        //version 2.23
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        // 'appium:fullReset': true, //false
        'appium:newCommandTimeout': 240,
        // 'autoGrantPermissions': true,
    },
];

exports.config = config;