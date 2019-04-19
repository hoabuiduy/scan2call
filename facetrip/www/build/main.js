webpackJsonp([0],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariables; });
var GlobalVariables = /** @class */ (function () {
    function GlobalVariables() {
    }
    GlobalVariables.user = {
        name: 'Hoa Bui',
        email: 'duyhoa07k4038@gmail.com',
        base64: 'ZHV5aG9hMDdrNDAzOEBnbWFpbC5jb20=',
        picture: 'https://graph.facebook.com/100000569121164/picture'
    };
    return GlobalVariables;
}());

//# sourceMappingURL=global_variable.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilProvider = /** @class */ (function () {
    function UtilProvider(loadingCtrl, alertCtrl, toastCtrl, events, storage, modalCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    UtilProvider.prototype.showToast = function (message) {
        var _this = this;
        return new Promise(function (resolve) {
            var toast = _this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        });
    };
    /**
     * Show Loading
     *
     *
     * @memberOf HelpToolProvider
     */
    UtilProvider.prototype.presentLoading = function (content) {
        if (content === void 0) { content = 'Data loading...'; }
        this.loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: content
        });
        this.loader.present();
    };
    /**
     * Stop Show Loading
     *
     *
     * @memberOf HelpToolProvider
     */
    UtilProvider.prototype.stopLoading = function () {
        this.loader.dismiss();
    };
    UtilProvider.prototype.setLocal = function (key, value) {
        return this.storage.set(key, value);
    };
    UtilProvider.prototype.getLocal = function (key) {
        return this.storage.get(key);
    };
    UtilProvider.prototype.clearLocal = function () {
        return this.storage.clear();
    };
    /**
   * show modal
   * @param component
   * @param data
   */
    UtilProvider.prototype.showModal = function (component, data, cssClass) {
        var _this = this;
        if (cssClass === void 0) { cssClass = 'full'; }
        return new Promise(function (resolve) {
            var modal = null;
            var opts = {};
            if (cssClass) {
                opts['cssClass'] = cssClass;
            }
            modal = _this.modalCtrl.create(component, data, opts);
            modal.onDidDismiss(function (_data) {
                resolve(_data);
            });
            modal.present();
        });
    };
    UtilProvider.prototype.showAlert = function (title, subTitle) {
        this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Close']
        }).present();
    };
    UtilProvider.prototype.confirm = function (title, subTitle) {
        var _this = this;
        return new Promise(function (resolve) {
            var alert = _this.alertCtrl.create({
                title: title,
                message: subTitle,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            resolve('no');
                        }
                    },
                    {
                        text: 'Remove',
                        handler: function () {
                            resolve('yes');
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    UtilProvider.prototype.showConfirm = function (title, subTitle) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                inputs: [
                    {
                        name: 'amount',
                        placeholder: 'Amount that you have',
                        type: 'number'
                    },
                    {
                        name: 'invested',
                        placeholder: 'Total invested (optional)',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (data) {
                            resolve();
                        }
                    },
                    {
                        text: 'Add',
                        handler: function (data) {
                            resolve(data);
                        }
                    }
                ]
            }).present();
        });
    };
    UtilProvider.prototype.mapCMCToCPC = function (coinmarketcap, cryptocompare) {
        if (!coinmarketcap)
            return null;
        //Convert an object with keys into an array of objects
        cryptocompare = Object.keys(cryptocompare).map(function (i) { return cryptocompare[i]; });
        var ignoreSpaceRegex = /\s/g, nonAlphaNumericRegex = /\W+/g;
        var map = {}, symbol1, name1, symbol2, name2, reduced;
        //Loop through every item in coinmarketcap
        //Note that symbols such as BTM, KNC will be repeated multiple times
        //Get the symbol of the current coin on coinmarketcap
        symbol1 = coinmarketcap.symbol;
        name1 = coinmarketcap.name.trim().replace(ignoreSpaceRegex, "").toLowerCase();
        // if(coinmarketcap[i].rank < 700){
        //Loop through every item on cryptocompare
        for (var j = cryptocompare.length - 1; j >= 0; j--) {
            //Get the symbol of the current coin on cryptocompare
            symbol2 = cryptocompare[j].Symbol;
            reduced = symbol2.replace(nonAlphaNumericRegex, "");
            name2 = cryptocompare[j].CoinName.trim().replace(ignoreSpaceRegex, "").toLowerCase();
            if (reduced.indexOf(symbol1) >= 0 && name1 === name2) {
                map[symbol1] = symbol2;
            }
            if (symbol1.toLowerCase() == 'trx') {
                if (symbol2.toLowerCase() == 'trx') {
                    map[symbol1] = symbol2;
                }
            }
        }
        return map;
    };
    UtilProvider.prototype.ValidURL = function (str) {
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regexp = new RegExp(expression);
        return regexp.test(str);
    };
    UtilProvider.prototype.extractUrl = function (str) {
        return str.match(/(https?:\/\/[^ ]*)/)[0];
    };
    UtilProvider.prototype.removeSpecialChar = function (str) {
        return str.replace(/[^a-zA-Z0-9]/g, '_');
    };
    UtilProvider.prototype.scrollTo = function (element, to, duration) {
        var start = element.scrollTop, change = to - start, currentTime = 0, increment = 20;
        var easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };
    UtilProvider.prototype.registerEvent = function (name, callback) {
        // this.events.unsubscribe(name);
        this.events.subscribe(name, callback);
    };
    UtilProvider.prototype.publishEvent = function (name, params) {
        this.events.publish(name, params);
    };
    UtilProvider.prototype.generateEmail = function () {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = 'cust_';
        for (var ii = 0; ii < 8; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return (string + '@gmail.com');
    };
    UtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], UtilProvider);
    return UtilProvider;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 274;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_global_variable__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, util, db, zone, af_auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.util = util;
        this.db = db;
        this.zone = zone;
        this.af_auth = af_auth;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this.itemsCollection = this.db.collection('users');
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        facebookConnectPlugin.login(["public_profile", "email"], function (obj) {
            _this.util.presentLoading();
            var facebookCredential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.FacebookAuthProvider
                .credential(obj.authResponse.accessToken);
            _this.af_auth.auth.signInWithCredential(facebookCredential).then(function (res) {
                var obj = res.toJSON();
                var user = {};
                user['email'] = obj['email'];
                user['name'] = obj['displayName'];
                user['picture'] = obj['photoURL'];
                user['base64'] = btoa(user['email']);
                user['fb_id'] = obj['providerData'][0]['uid'];
                __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user = user;
                var docRef = _this.itemsCollection.doc(user['base64']);
                docRef.get().subscribe(function (doc) {
                    if (!doc.exists) {
                        _this.itemsCollection.doc(user['base64']).set(user).then(function () {
                            _this.util.setLocal('user', user);
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_7__global_global_variable__["a" /* GlobalVariables */].user = doc.data();
                    }
                });
                _this.util.stopLoading();
                _this.zone.run(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                });
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            });
        }, function (fail) {
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/login/login.html"*/'\n<ion-content>\n    <div class="login-wrap">\n         <h1>FACE TRIP</h1>\n        \n        <button round full color="facebook" ion-button icon-left (tap)="facebookLogin()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Facebook\n        </button>\n        <p text-center>Login or Register using your Facebook account</p>\n        \n      </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_fire_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Locals" tabIcon="md-people" ></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Me" tabIcon="md-person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Chat" tabIcon="md-chatboxes"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_variable__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].user;
    }
    AboutPage.prototype.editProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_profile_edit_profile__["a" /* EditProfilePage */], { user: this.user });
    };
    AboutPage.prototype.openBrowser = function (fb_id) {
        var ref = cordova.InAppBrowser.open('https://fb.com/' + fb_id, '_blank', 'location=yes');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      FACE TRIP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 text-center>\n            <img [src]="user[\'picture\']+\'?type=normal\'" alt="">\n          </ion-col>\n          <ion-col>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <b>{{user[\'name\']}}</b>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'city\']}}, {{user[\'country\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="langs">{{user[\'language1\']}}</span>\n                  <span class="langs">{{user[\'language2\']}}</span>\n                  <span class="langs">{{user[\'language3\']}}</span>\n                  <span class="langs">{{user[\'language4\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="label">Fee: </span> <span>{{user[\'guide_fee\']? user[\'guide_fee\'] : \'Free\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'meet_at_airport\'] ? \'Meet at Airport\': \'Not meet at Airport\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  {{user[\'introduction\']}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-right style="justify-content: flex-end">\n            <button clear ion-button (tap)="editProfile()">Edit</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="assets/imgs/logo.png">\n      </ion-thumbnail>\n      <h2>My Neighbor Totoro</h2>\n      <ion-note item-end>500$/day</ion-note>\n      <p>Wifi: No</p>\n      <p>Breakfast: Yes</p>\n      <p>Some descriptions dsf f sdf ds fsdfdsf dsfds sdf dsfd</p>\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="primary">\n      <ion-icon name="md-add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global_variable__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_util_util__ = __webpack_require__(182);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, appProvider, util, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appProvider = appProvider;
        this.util = util;
        this.db = db;
        this.countryList = [];
        this.user = __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
        this.itemsCollection = this.db.collection('users');
        this.getCountryList();
        this.user = this.navParams.get('user') || this.user;
    };
    EditProfilePage.prototype.getCountryList = function () {
        var _this = this;
        this.appProvider.getContryList().subscribe(function (data) {
            if (data) {
                _this.countryList = data;
            }
        });
    };
    EditProfilePage.prototype.save = function () {
        var _this = this;
        this.util.presentLoading();
        this.itemsCollection.doc(this.user['base64']).update(this.user).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_3__global_global_variable__["a" /* GlobalVariables */].user = _this.user;
            _this.util.setLocal('user', _this.user);
            _this.util.stopLoading();
        }, function (err) { return _this.util.stopLoading(); });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Edit Profile</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (tap)="save()">\n        Save\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Country</ion-label>\n    <ion-select [(ngModel)]="user[\'country\']">\n      <ion-option [value]="item[\'name\']" *ngFor="let item of countryList">{{item[\'name\']}}</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>City</ion-label>\n    <ion-input [(ngModel)]="user[\'city\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 1</ion-label>\n    <ion-input [(ngModel)]="user[\'language1\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 2</ion-label>\n    <ion-input [(ngModel)]="user[\'language2\']" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 3</ion-label>\n    <ion-input [(ngModel)]="user[\'language3\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Language 4</ion-label>\n    <ion-input [(ngModel)]="user[\'language4\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Guide Fee</ion-label>\n    <ion-input [(ngModel)]="user[\'guide_fee\']"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Meet at Airport?</ion-label>\n    <ion-toggle [(ngModel)]="user[\'meet_at_airport\']"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Introduction</ion-label>\n    <ion-textarea rows="3" [(ngModel)]="user[\'introduction\']"></ion-textarea>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_util_util__["a" /* UtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http) {
        this.http = http;
        console.log('Hello AppProvider Provider');
    }
    AppProvider.prototype.getContryList = function () {
        return this.http.get('https://restcountries.eu/rest/v2/all');
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/contact/contact.html"*/'<ion-header color="primary">\n  <ion-navbar color="primary">\n    <ion-title>\n        FACE TRIP\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global_variable__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.user = __WEBPACK_IMPORTED_MODULE_2__global_global_variable__["a" /* GlobalVariables */].user;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      FACE TRIP\n    </ion-title>\n  </ion-navbar>\n  <ion-searchbar mode="ios"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor="let user of [user, user]">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 text-center>\n            <img [src]="user[\'picture\']" alt="">\n          </ion-col>\n          <ion-col>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <b>{{user[\'name\']}}</b>\n                </ion-col>\n                <ion-col>\n                  <span>{{user[\'city\']}}, {{user[\'country\']}}</span>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                      <span class="langs">{{user[\'language1\']}}</span>\n                  <span class="langs">{{user[\'language2\']}}</span>\n                  <span class="langs">{{user[\'language3\']}}</span>\n                  <span class="langs">{{user[\'language4\']}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span class="label">Fee:</span> <span>{{user[\'guide_fee\']? user[\'guide_fee\'] : \'Free\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <span>{{user[\'meet_at_airport\'] ? \'Meet at Airport\': \'Not meet at Airport\'}}</span>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  {{user[\'introduction\']}}\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col text-right style="justify-content: flex-end">\n            <button (tap)="openBrowser(user[\'fb_id\'])" color="facebook" ion-button icon-only clear>\n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n            <button color="_gray" ion-button icon-only clear>\n              <ion-icon name="md-chatboxes"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(465);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_util_util__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_app_app__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyA4o9dtEB7jDwh0K4zcjapu6dN8T6ExgB0",
    authDomain: "facetrip-e71c5.firebaseapp.com",
    databaseURL: "https://facetrip-e71c5.firebaseio.com",
    projectId: "facetrip-e71c5",
    storageBucket: "facetrip-e71c5.appspot.com",
    messagingSenderId: "401922378907"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '_facetrip',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_util_util__["a" /* UtilProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_app_app__["a" /* AppProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Volumes/DATA/projects/outsource/facetrip/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Volumes/DATA/projects/outsource/facetrip/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map