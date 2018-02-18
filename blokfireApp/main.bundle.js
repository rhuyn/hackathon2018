webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width:80vw;\r\n  margin-left: 10vw;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\nagm-map {\r\n  width:100%;\r\n  height:100%;\r\n}\r\n.section{\r\n  text-align: center;\r\n}\r\n.section-left{\r\n  -webkit-box-ordinal-group: 2;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n.section-right{\r\n  -webkit-box-ordinal-group: 3;\r\n      -ms-flex-order: 2;\r\n          order: 2;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.info-container{\r\n  width:80%;\r\n  text-align: center;\r\n}\r\n.bigger{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"bigger\">\r\n  <div class=\"section-left\">\r\n    <div class=\"info-container\">\r\n    <div class=\"section\">\r\n        <h1>Why The Need? </h1>\r\n      </div>\r\n      <div class=\"content\">\r\n        <p>\r\n          Today in Alberta there are 192 fire detection stations within the forests and only 46 of these interact remotely. These 46 stations don't require\r\n          human interaction and report climate data on an hourly basis. The other stations require a human to manually observe and report climate data. These\r\n          types of stations only report in once or twice per day. Overall this is hugely inefficient system as the technologies of today allow for quicker and more\r\n          accurate detection of fires. We can better manage our human and technical resources to improve fire detection in some of the of the most remote and\r\n          forested areas.\r\n        </p>\r\n        <img src=\"../../assets/toower2.jpg\" alt=\"Alberta Watch Tower\" width=\"100%\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section-right\">\r\n    <div class=\"info-container\">\r\n    <div class=\"section\">\r\n      <h1>Our Solution </h1>\r\n      <div class=\"content\">\r\n        <p>\r\n          Together as a group of competitive hackers we have devised a system that will allow the forests to report back to us with little to no human interaction.\r\n          The solution involves a collection of field modules that sense heat and humidity which only need to be placed and activated once. Relying upon\r\n          solar power and a cellular network each of these modules can take active readings and report back their findings. These readings will be in much\r\n          smaller intervals and a much smaller granularity than today's methods.\r\n        </p>\r\n      </div>\r\n      <img src=\"../../assets/chip.jpg\" alt=\"Early Embedded Chip\" width=\"100%\">\r\n    </div>\r\n  </div>\r\n  </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <h1>Sacrifices</h1>\r\n    <div class=\"content\">\r\n      <p>\r\n        We challenged ourselves to work within some very specific guidelines to produce the most efficient product for this purpose. Each module will be an embedded\r\n        chip and sensors in a waterproof box. In efforts to eliminate as much overhead cost as possible the modules will not be able to track their own location and\r\n        will not involve extranious sensors or cameras. Weights and sizes of these modules will be strictly controlled so they can easily be brought to their deployment\r\n        location and installed.\r\n      </p>\r\n    </div>\r\n</div>\r\n  <div class=\"section\">\r\n    <h1>Security</h1>\r\n    <div class=\"content\">\r\n      <p>\r\n        The program embedded within the modules will be responsible for reporting back if it has been tampered with. This is done by a strict threshold\r\n        of vibration and ongoing monitoring by an onboard vibration sensor. All communication to and from the modules is safe because block chain?\r\n      </p>\r\n    </div>\r\n  <div class=\"section\">\r\n    <h1>Particle Electron</h1>\r\n    <div class=\"content\">\r\n      <p>\r\n        Our first prototypes utilized the technology present with the particle electron and gave us a preliminary idea of how this system could work.\r\n        However the particle we were working with eventually failed and due to circumstances beyond our control we were unable to recover from this set\r\n        back. At this time we do not have a physical prototype of our field module.\r\n      </p>\r\n    </div>\r\n    <img src=\"../../assets/electron.jpg\" alt=\"Particle Electron\" width=\"100%\">\r\n  </div>\r\n    <div class=\"section\">\r\n      <h1>Block Chain</h1>\r\n      <div class=\"content\">\r\n        <p>\r\n          Our choice to use blockchain technology. The vast array of blockchain technology has yet to be truly uncovered and the only\r\n          definitive way to uncover these uses is to test it and apply it into new technologies and in new environments. We want to be on the leading edge\r\n          of technology and have chosen to utilize and test this technology in our internet of things.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"section\">\r\n      <h1>Databases, Angular and more</h1>\r\n\r\n      <div class=\"content\">\r\n        <p>\r\n          What even is our front end anymore?\r\n        </p>\r\n        <div class=\"bigger\">\r\n          <div class=\"section-left\"><img src=\"../../assets/firebase.png\" alt=\"Firebase logo\" width=\"40%\"></div>\r\n          <div class=\"section-right\"><img src=\"../../assets/angle.png\" alt=\"Angular logo\" width=\"100%\"></div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"section\">\r\n      <h1>Open Source</h1>\r\n      <div class=\"content\">\r\n        <p>\r\n          We made the decision to allow all the data collected by our modules to be open source and viewable to the world wide web.\r\n          The idea brought forward is to create a vast internet of things and there is no better way to do that than to create a self\r\n          reporting forest the world can see. As programmers we truly value the world of open source and the uses of the data we are\r\n          collecting and showcasing has many uses far beyond what we currently have the knowledge to do.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"section\">\r\n      <h1>In the Future</h1>\r\n      <div class=\"content\">\r\n        <p>\r\n         The future looks bright for this kind of technology as the uses of it are far beyond our imaginations. In the near future we would like to automatically\r\n         warn fire departments if a module detects higher than normal heat signatures. We would also like to automatically graph the data from\r\n          the sensors for researchers to get a sense of the long range trends in data. Our smart forest has abilities beyond our understanding\r\n          but we are sure it will help us protect one of our most valuable resources in the future.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"section\">\r\n      <h1>The development Team</h1>\r\n      <div class=\"content\">\r\n        <p>\r\n          This project was made by Jose Herrera, Austin Wattling, and Richard Huynh as part of the University of Calgary's 2018 hackathon.\r\n          The theme of the Hackathon was \"long range internet of things\" and we have created a smart forest. We believe the\r\n          long range internet of things applies both to idea of using a cellular connection as our form of long range communication and\r\n          as this idea can and will be seen long into the future. We would like to thank all the sponsors of the event and the university of calgary\r\n          for hosting us.\r\n        </p>\r\n      </div>\r\n      <img src=\"../../assets/ulogo.png\" alt=\"Particle Electron\" width=\"20%\">\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */] },
    { path: 'map', component: __WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCTpWzpJ17WXnbXCy8oqpKJRWV3yhyFrKA'
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    font-family: Impact, Charcoal, sans-serif;\r\n    height: 8vh;  \r\n    background-color: black;\r\n    color: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.btn{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div (click)=\"aboutclicked()\" class=\"btn\">About</div>\r\n<!-- <div>Created by: Jose Herrera, Austin Wattling, and Richard Huynh</div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_router) {
        this._router = _router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.aboutclicked = function () {
        this._router.navigateByUrl('/about');
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 100vw;\r\n    height: 10vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-shadow: 5px 5px 10px #888888;\r\n            box-shadow: 5px 5px 10px #888888;\r\n\r\n}\r\n.title-button{\r\n    cursor: pointer;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n.icon{\r\n    width: 10vh;\r\n    height: 10vh;\r\n    background-image: url('blokfire.790d899dfda01953fe82.png');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 80% 80%;\r\n}\r\n.title{\r\n    font-family: Impact, Charcoal, sans-serif;\r\n    font-size: 300%;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title-button\" (click)='goToMap()'>\n      <div class=\"icon\"></div>\n      <div class=\"title\">BlokFire</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_router) {
        this._router = _router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goToMap = function () {
        this._router.navigateByUrl('/map');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/locPoint.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocPoint; });
var LocPoint = /** @class */ (function () {
    function LocPoint() {
    }
    return LocPoint;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width:80vw;\r\n    margin-left: 10vw;\r\n    height:70vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\nagm-map {\r\n    width:100%;\r\n    height:100%;\r\n  }"

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://maps.googleapis.com/maps/api/js?callback=myMap\"></script>\n<div class=\"container\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n    <agm-marker *ngFor=\"let loc of locPoints\" [latitude]=\"loc.lat\" [longitude]=\"loc.lng\" [iconUrl]='loc.warningImg'>\n      <agm-info-window> \n        <div> Warning Level: {{loc.warning}} </div>\n        <div> Humidity:{{loc.humidity}} </div>\n        <div> Temperature: {{loc.temperature}} </div>\n        <div> Last Updated: {{loc.date}}</div>\n        <div> Link: <a href=\"{{loc.address}}\"> {{loc.address}}</a></div>\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locPoint__ = __webpack_require__("./src/app/locPoint.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(db) {
        this.db = db;
        this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3__(new __WEBPACK_IMPORTED_MODULE_3_web3__["providers"].HttpProvider("https://rinkeby.infura.io/UiFZYgJw80AI7LbKtG7o:8545"));
        this.lat = 51.1784;
        this.lng = -115.5708;
        this.locPoints = new Array();
        this.counter = 0;
        this.changeIcon = "../../assets/icon1.png";
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeObservable = this.getNodes('/');
        this.nodeObservable.subscribe(function (val) {
            _this.getData(val);
        });
    };
    MapComponent.prototype.ngOnDestory = function () {
        clearInterval(this.inter);
    };
    MapComponent.prototype.getNodes = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    MapComponent.prototype.getData = function (val) {
        var _this = this;
        this.getDataLoop(val);
        this.inter = setInterval(function () {
            _this.locPoints = new Array();
            _this.getDataLoop(val);
        }, 10000);
    };
    MapComponent.prototype.getDataLoop = function (val) {
        var _this = this;
        for (var i = 0; i < val.length; i++) {
            this.getContract(val[i]).then(function (node) {
                _this.getSensorData(node).then(function (data) {
                    _this.locPoint = new __WEBPACK_IMPORTED_MODULE_1__locPoint__["a" /* LocPoint */]();
                    _this.locPoint.date = new Date(0);
                    _this.locPoint.date.setUTCSeconds(data[5].c);
                    _this.locPoint.lng = data[0].s * (data[0].c / 1000000);
                    _this.locPoint.lat = data[1].s * (data[1].c / 1000000);
                    _this.locPoint.temperature = data[2].s * (data[2].c / 1000);
                    _this.locPoint.humidity = data[3].c;
                    _this.locPoint.warning = data[4].c;
                    _this.locPoint.address = "https://rinkeby.etherscan.io/address/" + val[_this.counter].address;
                    if (_this.locPoint.warning = 1) {
                        _this.locPoint.warningImg = "../../assets/icon1.png";
                    }
                    else if (_this.locPoint.warning = 2) {
                        _this.locPoint.warningImg = "../../assets/icon2.png";
                    }
                    else if (_this.locPoint.warning = 3) {
                        _this.locPoint.warningImg = "../../assets/icon3.png";
                    }
                    else if (_this.locPoint.warning = 4) {
                        _this.locPoint.warningImg = "../../assets/icon4.png";
                    }
                    else if (_this.locPoint.warning = 5) {
                        _this.locPoint.warningImg = "../../assets/icon5.png";
                    }
                    else if (_this.locPoint.warning = 6) {
                        _this.locPoint.warningImg = "../../assets/icon6.png";
                    }
                    else if (_this.locPoint.warning = 7) {
                        _this.locPoint.warningImg = "../../assets/icon7.png";
                    }
                    _this.counter = _this.counter + 1;
                    if (_this.counter >= val.length) {
                        _this.counter = 0;
                    }
                    _this.locPoints.push(_this.locPoint);
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    MapComponent.prototype.getContract = function (val) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contract = _this.web3.eth.contract(JSON.parse(val.ABI));
            var blokfirenode = contract.at(String(val.address));
            if (blokfirenode) {
                resolve(blokfirenode);
            }
            else {
                reject("error getting contract");
            }
        });
    };
    MapComponent.prototype.getSensorData = function (blokfirenode) {
        return new Promise(function (resolve, reject) {
            blokfirenode.sensorstate(function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDcTzpwHdEiqsZcTunIklw3fik_p3S2y50",
        authDomain: "blokfire-1518901900873.firebaseapp.com",
        databaseURL: "https://blokfire-1518901900873.firebaseio.com",
        projectId: "blokfire-1518901900873",
        storageBucket: "blokfire-1518901900873.appspot.com",
        messagingSenderId: "817245862051"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map