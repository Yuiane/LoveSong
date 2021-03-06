﻿import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { welcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any;
    constructor(platform: Platform, public storage: Storage) {
        this.storage.clear();
        this.storage.get('firstIn').then((result) => {
            if (result) {
                this.rootPage = TabsPage;
            }
            else {
                this.storage.set('firstIn', true);
                this.rootPage = welcomePage;
            }
        });

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleBlackTranslucent();
            setTimeout(function () {
                Splashscreen.hide();
            }, 1000);
        });

    }
}
