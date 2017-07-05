webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomMaterialModule = (function () {
    function CustomMaterialModule() {
    }
    return CustomMaterialModule;
}());
CustomMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdProgressBarModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdProgressBarModule */]
        ]
    })
], CustomMaterialModule);

//# sourceMappingURL=app-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-menue {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">{{title}}\r\n    <span class=\"example-spacer\"></span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\"  class=\"example-menue\">\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n        <md-menu #menu=\"mdMenu\">\r\n        <button md-menu-item routerLink=\"/home\">\r\n            <span>Home</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/predpray\">\r\n            <span>SL-1</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/fuzzy\">\r\n            <span>SL-2</span>\r\n        </button>\r\n        </md-menu>\r\n</md-toolbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Soft Computing - SS17 - VAWI';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_material_module__ = __webpack_require__("../../../../../src/app/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__predator_prey_predator_prey_component__ = __webpack_require__("../../../../../src/app/predator-prey/predator-prey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__predator_prey_population_chart_population_chart_component__ = __webpack_require__("../../../../../src/app/predator-prey/population-chart/population-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fuzzy_fuzzy_component__ = __webpack_require__("../../../../../src/app/fuzzy/fuzzy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fuzzy_fuzzy_chart_fuzzy_chart_component__ = __webpack_require__("../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRouts = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'predpray', component: __WEBPACK_IMPORTED_MODULE_9__predator_prey_predator_prey_component__["a" /* PredatorPreyComponent */] },
    { path: 'fuzzy', component: __WEBPACK_IMPORTED_MODULE_11__fuzzy_fuzzy_component__["a" /* FuzzyComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__predator_prey_predator_prey_component__["a" /* PredatorPreyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__predator_prey_population_chart_population_chart_component__["a" /* PopulationChartComponent */],
            __WEBPACK_IMPORTED_MODULE_11__fuzzy_fuzzy_component__["a" /* FuzzyComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__fuzzy_fuzzy_chart_fuzzy_chart_component__["a" /* FuzzyChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRouts),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_material_module__["a" /* CustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2 align=\"center\"> Fuzzy-Set für die Nachfrage </h2>\r\n  <canvas baseChart height=\"75\"\r\n    [datasets]=\"demandChartData\"\r\n    [labels]=\"allChartLabels\"\r\n    [options]=\"allChartOptions\"\r\n    [chartType]=\"allChartType\">\r\n  </canvas>\r\n  <h2 align=\"center\"> Fuzzy-Set für den Lagerbestand </h2>\r\n  <canvas baseChart height=\"75\"\r\n    [datasets]=\"stockChartData\"\r\n    [labels]=\"allChartLabels\"\r\n    [options]=\"allChartOptions\"\r\n    [chartType]=\"allChartType\">\r\n  </canvas>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__ = __webpack_require__("../../../../es6-fuzz/lib/logic.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuzzyChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuzzyChartComponent = (function () {
    function FuzzyChartComponent() {
        this.allChartType = 'line';
        this.allChartLabels = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
        this.allChartOptions = {
            responsive: true,
            elements: {
                line: {
                    tension: 0,
                }
            }
        };
        this.demandChartData = [];
        this.stockChartData = [];
    }
    FuzzyChartComponent.prototype.ngOnInit = function () {
        this.calculateData();
    };
    FuzzyChartComponent.prototype.calculateData = function () {
        var _this = this;
        var labelData = this.demandData.defuzzify(0);
        this.demandChartData = [
            { data: [], label: labelData.rules[0].output },
            { data: [], label: labelData.rules[1].output },
            { data: [], label: labelData.rules[2].output }
        ];
        labelData = this.stockData.defuzzify(0);
        this.stockChartData = [
            { data: [], label: labelData.rules[0].output },
            { data: [], label: labelData.rules[1].output },
            { data: [], label: labelData.rules[2].output }
        ];
        this.allChartLabels.forEach(function (element) {
            var res = _this.demandData.defuzzify(element);
            _this.demandChartData[0].data.push(res.rules[0].fuzzy);
            _this.demandChartData[1].data.push(res.rules[1].fuzzy);
            _this.demandChartData[2].data.push(res.rules[2].fuzzy);
            res = _this.stockData.defuzzify(element);
            _this.stockChartData[0].data.push(res.rules[0].fuzzy);
            _this.stockChartData[1].data.push(res.rules[1].fuzzy);
            _this.stockChartData[2].data.push(res.rules[2].fuzzy);
        });
    };
    return FuzzyChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__["a" /* Logic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__["a" /* Logic */]) === "function" && _a || Object)
], FuzzyChartComponent.prototype, "demandData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__["a" /* Logic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__["a" /* Logic */]) === "function" && _b || Object)
], FuzzyChartComponent.prototype, "stockData", void 0);
FuzzyChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fuzzy-chart',
        template: __webpack_require__("../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fuzzy/fuzzy-chart/fuzzy-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FuzzyChartComponent);

var _a, _b;
//# sourceMappingURL=fuzzy-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flexContainer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n} \r\n.flexContainer div{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.flexContainer div md-input-container{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n\r\n.content-card {\r\n    margin: 5px;\r\n}\r\n\r\nh2 {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Einkaufssimulation eines Supermarktes\r\n</h2>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Ausgangswerte\r\n    </md-card-title>\r\n    <md-card-content style=\"display:flex\">\r\n      <form [formGroup]=\"purchaseForm\" class=\"flexContainer\">\r\n        <div formGroupName=\"demand\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodA\" type=\"number\" placeholder=\"Nachfrage Produkt A\" max=\"50\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodB\" type=\"number\" placeholder=\"Nachfrage Produkt B\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodC\" type=\"number\" placeholder=\"Nachfrage Produkt C\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodD\" type=\"number\" placeholder=\"Nachfrage Produkt D\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        </div>\r\n        <div formGroupName=\"stock\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodA\" type=\"number\" placeholder=\"Lagerbestand Produkt A\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodB\" type=\"number\" placeholder=\"Lagerbestand Produkt B\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodC\" type=\"number\" placeholder=\"Lagerbestand Produkt C\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodD\" type=\"number\" placeholder=\"Lagerbestand Produkt D\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"fillrandom()\">\r\n        <md-icon>input</md-icon>\r\n        Befülle zufällig\r\n      </button>\r\n      <button md-button (click)=\"calculate()\">\r\n        <md-icon>cached</md-icon>\r\n        Berechnen\r\n      </button>\r\n      <button md-button *ngIf=\"!showFuzzy\" (click)=\"showFuzzy=true\">\r\n        <md-icon>show_chart</md-icon>\r\n        Graphen anzeigen\r\n      </button>\r\n      <button md-button *ngIf=\"showFuzzy\" (click)=\"showFuzzy=false\">\r\n        <md-icon>show_chart</md-icon>\r\n        Graphen ausblenden\r\n      </button>\r\n      <button md-button (click)=\"reset()\">\r\n        <md-icon>close</md-icon>\r\n        Reset\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div *ngIf=\"showFuzzy\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Fuzzy-Graphen\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <app-fuzzy-chart [demandData]=\"fuzzyControllerDemand.logic\" [stockData]=\"fuzzyControllerStock.logic\"></app-fuzzy-chart>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"showFuzzy=false\">\r\n        <md-icon>close</md-icon>\r\n        Schliessen\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Empfehlung\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <div align=\"center\">\r\n        <div *ngFor=\"let row of result\" class='flexContainer'>\r\n          <div><h3>{{row.text}}</h3></div>\r\n          <div><md-progress-bar\r\n            mode=\"determinate\"\r\n            [color]=\"row.color\"\r\n            [value]=\"row.value\">\r\n          </md-progress-bar></div>\r\n        </div>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/fuzzy/fuzzy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_fuzz__ = __webpack_require__("../../../../es6-fuzz/lib/logic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_es6_fuzz_lib_curve_triangle__ = __webpack_require__("../../../../es6-fuzz/lib/curve/triangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__ = __webpack_require__("../../../../es6-fuzz/lib/curve/trapezoid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_fuzzyController__ = __webpack_require__("../../../../../src/app/fuzzy/util/fuzzyController.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_rules__ = __webpack_require__("../../../../../src/app/fuzzy/util/rules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_fuzzySet__ = __webpack_require__("../../../../../src/app/fuzzy/util/fuzzySet.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuzzyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FuzzyComponent = (function () {
    function FuzzyComponent(fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.ruleResult = [];
        this.result = [];
        this.purchaseForm = this.fb.group({
            demand: this.fb.group({
                prodA: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodB: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodC: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodD: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
            }),
            stock: this.fb.group({
                prodA: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodB: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodC: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
                prodD: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
            })
        });
        this.initializeFuzzyLogic();
        this.ruleset = new __WEBPACK_IMPORTED_MODULE_7__util_rules__["a" /* Ruleset */](this.fuzzyControllerDemand, this.fuzzyControllerStock);
        this.showFuzzy = false;
    }
    FuzzyComponent.prototype.ngOnInit = function () {
    };
    FuzzyComponent.prototype.fillrandom = function () {
        this.purchaseForm.get('demand').get('prodA').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('demand').get('prodB').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('demand').get('prodC').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('demand').get('prodD').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('stock').get('prodA').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('stock').get('prodB').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('stock').get('prodC').setValue(Math.floor((Math.random() * 50)));
        this.purchaseForm.get('stock').get('prodD').setValue(Math.floor((Math.random() * 50)));
    };
    FuzzyComponent.prototype.reset = function () {
        this.purchaseForm.reset();
        this.result = [];
    };
    FuzzyComponent.prototype.calculate = function () {
        var _this = this;
        if (this.purchaseForm.status === 'VALID') {
            this.ruleResult = this.ruleset.executeAllRules(this.purchaseForm.get('demand').value, this.purchaseForm.get('stock').value, this.getTotalStockSet());
            this.result = [];
            this.ruleResult.forEach(function (elem, index) {
                var buyLow = _this.ruleResult[index].buySet.low.reduce(add, 0) / _this.ruleResult[index].buySet.low.length;
                var buyMiddle = _this.ruleResult[index].buySet.middle.reduce(add, 0) / _this.ruleResult[index].buySet.middle.length;
                var buyHigh = _this.ruleResult[index].buySet.high.reduce(add, 0) / _this.ruleResult[index].buySet.high.length;
                if (buyLow >= buyMiddle && buyLow >= buyHigh) {
                    _this.result.push({
                        text: 'Für Produkt ' + _this.ruleResult[index].prod.substring(4) + ' ist die Kaufmenge zu ' +
                            (buyLow * 100).toFixed(0) + '%: Niedrig',
                        value: (buyLow * 100).toFixed(0),
                        color: 'warn'
                    });
                }
                else if (buyMiddle >= buyHigh) {
                    _this.result.push({
                        text: 'Für Produkt ' + _this.ruleResult[index].prod.substring(4) + ' ist die Kaufmenge zu ' +
                            (buyMiddle * 100).toFixed(0) + '%: Mittel',
                        value: (buyMiddle * 100).toFixed(0),
                        color: 'accent'
                    });
                }
                else {
                    _this.result.push({
                        text: 'Für Produkt ' + _this.ruleResult[index].prod.substring(4) + ' ist die Kaufmenge zu ' +
                            (buyHigh * 100).toFixed(0) + '%: Hoch',
                        value: (buyHigh * 100).toFixed(0),
                        color: 'primary'
                    });
                }
            });
        }
        else {
            this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
                duration: 2000,
            });
        }
    };
    FuzzyComponent.prototype.getTotalStockSet = function () {
        // Der Und-Operator liefert meistens für alle Sets 0
        // Der Oder-Operator liefert meistens für alle Sets 1
        // => Ansatz: Mittelwert der einzelnen Sets
        var stockSets = [];
        stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodA').value));
        stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodB').value));
        stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodC').value));
        stockSets.push(this.fuzzyControllerStock.getSet(this.purchaseForm.get('stock').get('prodD').value));
        var totalSet = new __WEBPACK_IMPORTED_MODULE_8__util_fuzzySet__["a" /* FuzzySet */]();
        stockSets[0].pairs.forEach(function (element, index) {
            var value = 0;
            var key = element.key;
            for (var _i = 0, stockSets_1 = stockSets; _i < stockSets_1.length; _i++) {
                var stock = stockSets_1[_i];
                value += stock.getValueByKey(element.key);
            }
            value = value / stockSets.length;
            totalSet.addPair(key, value);
        });
        return totalSet;
    };
    FuzzyComponent.prototype.initializeFuzzyLogic = function () {
        var logicDemand = new __WEBPACK_IMPORTED_MODULE_3_es6_fuzz__["a" /* Logic */]();
        logicDemand
            .init('niedrig', new __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__["a" /* Trapezoid */](-1, 0, 10, 15))
            .and('mittel', new __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__["a" /* Trapezoid */](10, 20, 25, 35))
            .and('hoch', new __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__["a" /* Trapezoid */](30, 40, 50, 51));
        var logicStock = new __WEBPACK_IMPORTED_MODULE_3_es6_fuzz__["a" /* Logic */]();
        logicStock
            .init('niedrig', new __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__["a" /* Trapezoid */](-1, 0, 5, 15))
            .and('mittel', new __WEBPACK_IMPORTED_MODULE_4_es6_fuzz_lib_curve_triangle__["a" /* Triangle */](10, 25, 40))
            .and('hoch', new __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__["a" /* Trapezoid */](25, 40, 50, 51));
        this.fuzzyControllerDemand = new __WEBPACK_IMPORTED_MODULE_6__util_fuzzyController__["a" /* FuzzyController */](logicDemand);
        this.fuzzyControllerStock = new __WEBPACK_IMPORTED_MODULE_6__util_fuzzyController__["a" /* FuzzyController */](logicStock);
    };
    return FuzzyComponent;
}());
FuzzyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fuzzy',
        template: __webpack_require__("../../../../../src/app/fuzzy/fuzzy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fuzzy/fuzzy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _b || Object])
], FuzzyComponent);

function add(a, b) {
    return a + b;
}
var _a, _b;
//# sourceMappingURL=fuzzy.component.js.map

/***/ }),

/***/ "../../../../../src/app/fuzzy/util/fuzzyController.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuzzySet__ = __webpack_require__("../../../../../src/app/fuzzy/util/fuzzySet.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuzzyController; });

var FuzzyController = (function () {
    function FuzzyController(logic) {
        this.logic = logic;
    }
    FuzzyController.prototype.getSet = function (value) {
        var res = this.logic.defuzzify(value);
        var set = new __WEBPACK_IMPORTED_MODULE_0__fuzzySet__["a" /* FuzzySet */]();
        res.rules.forEach(function (element) {
            set.addPair(element.output, element.fuzzy);
        });
        return set;
    };
    FuzzyController.prototype.logicalAnd = function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var sets = [];
        values.forEach(function (element) {
            sets.push(_this.getSet(element));
        });
        var ret = [];
        sets[0].forEach(function (element, index) {
            var val = 1;
            var key = element.key;
            sets.forEach(function (argument) {
                if (argument[index].value > val) {
                    val = argument[index].value;
                }
            });
            ret.push({ key: key, value: val });
        });
        return ret;
    };
    return FuzzyController;
}());

//# sourceMappingURL=fuzzyController.js.map

/***/ }),

/***/ "../../../../../src/app/fuzzy/util/fuzzySet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuzzySet; });
var FuzzySet = (function () {
    function FuzzySet() {
        this.pairs = [];
    }
    ;
    FuzzySet.prototype.addPair = function (key, value) {
        if (this.getValueByKey(key) === -1) {
            this.pairs.push({ key: key, value: value });
        }
        else {
            console.log(new Error('Doppelter Key'));
        }
    };
    FuzzySet.prototype.getValueByKey = function (key) {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var pair = _a[_i];
            if (pair.key === key) {
                return pair.value;
            }
        }
        return -1;
    };
    return FuzzySet;
}());

//# sourceMappingURL=fuzzySet.js.map

/***/ }),

/***/ "../../../../../src/app/fuzzy/util/rules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruleset; });
var Ruleset = (function () {
    function Ruleset(fuzzyControllerDemand, fuzzyControllerStock) {
        this.fuzzyControllerDemand = fuzzyControllerDemand;
        this.fuzzyControllerStock = fuzzyControllerStock;
        this.names = ['prodA', 'prodB', 'prodC', 'prodD'];
        this.ruleResults = [
            { prod: 'prodA', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodB', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodC', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodD', buySet: { low: [], middle: [], high: [] } }
        ];
    }
    /**
     * Variablen:
     *  - Nachfrage(p) = Nachfrage für Produkt p
     *  - Lager(p) = Lagerbestand für Produkt p
     *  - LagerGesamt = Lagerbestand aller Produkte
     *  - Kaufen(p) = Kaufempfehlung für Produkt p
     */
    Ruleset.prototype.executeAllRules = function (demand, stock, totalStock) {
        this.ruleResults = [
            { prod: 'prodA', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodB', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodC', buySet: { low: [], middle: [], high: [] } },
            { prod: 'prodD', buySet: { low: [], middle: [], high: [] } }
        ];
        for (var i = 0; i < this.names.length; i++) {
            this.rule1(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), this.fuzzyControllerStock.getSet(stock[this.names[i]]), totalStock);
            this.rule2(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), this.fuzzyControllerStock.getSet(stock[this.names[i]]), totalStock);
            this.rule3(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), this.fuzzyControllerStock.getSet(stock[this.names[i]]));
            this.rule4(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), totalStock);
            this.rule5(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]));
            this.rule6(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), this.fuzzyControllerStock.getSet(stock[this.names[i]]), totalStock);
            this.rule7(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), this.fuzzyControllerStock.getSet(stock[this.names[i]]));
            this.rule8(i, this.fuzzyControllerDemand.getSet(demand[this.names[i]]), totalStock);
        }
        return this.ruleResults;
    };
    /**
     * R1: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = hoch
     */
    Ruleset.prototype.rule1 = function (index, demand, stock, totalStock) {
        this.ruleResults[index].buySet.high.push(Math.max(demand.getValueByKey('hoch'), stock.getValueByKey('niedrig'), totalStock.getValueByKey('niedrig')));
    };
    /**
     * R2: IF Wert Nachfrage(p) == "hoch" AND Lager(g) != "hoch" AND LagerGesamt != "hoch"
     *     THEN Kaufen(p) = mittel
     */
    Ruleset.prototype.rule2 = function (index, demand, stock, totalStock) {
        this.ruleResults[index].buySet.middle.push(Math.max(demand.getValueByKey('hoch'), 1 - stock.getValueByKey('hoch'), 1 - totalStock.getValueByKey('hoch')));
    };
    /**
     * R3: IF Wert Nachfrage(p) == "hoch" AND Lager(g) == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    Ruleset.prototype.rule3 = function (index, demand, stock) {
        this.ruleResults[index].buySet.low.push(Math.max(demand.getValueByKey('hoch'), stock.getValueByKey('hoch')));
    };
    /**
     * R4: IF Wert Nachfrage(p) == "hoch" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    Ruleset.prototype.rule4 = function (index, demand, totalStock) {
        this.ruleResults[index].buySet.low.push(Math.max(demand.getValueByKey('hoch'), totalStock.getValueByKey('hoch')));
    };
    /**
     * R5: IF Wert Nachfrage(p) == "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    Ruleset.prototype.rule5 = function (index, demand) {
        this.ruleResults[index].buySet.low.push(Math.max(demand.getValueByKey('niedrig')));
    };
    /**
     * R6: IF Wert Nachfrage(p) == "mittel" AND Lager(g) == "niedrig" AND LagerGesamt == "niedrig"
     *     THEN Kaufen(p) = mittel
     */
    Ruleset.prototype.rule6 = function (index, demand, stock, totalStock) {
        this.ruleResults[index].buySet.middle.push(Math.max(demand.getValueByKey('mittel'), stock.getValueByKey('niedrig'), totalStock.getValueByKey('niedrig')));
    };
    /**
     * R7: IF Wert Nachfrage(p) == "mittel" AND Lager(g) != "niedrig"
     *     THEN Kaufen(p) = niedrig
     */
    Ruleset.prototype.rule7 = function (index, demand, stock) {
        this.ruleResults[index].buySet.low.push(Math.max(demand.getValueByKey('mittel'), stock.getValueByKey('niedrig')));
    };
    /**
     * R8: IF Wert Nachfrage(p) == "mittel" AND LagerGesamt == "hoch"
     *     THEN Kaufen(p) = niedrig
     */
    Ruleset.prototype.rule8 = function (index, demand, totalStock) {
        this.ruleResults[index].buySet.low.push(Math.max(demand.getValueByKey('mittel'), totalStock.getValueByKey('hoch')));
    };
    return Ruleset;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div align='center'>\r\n  <h1>\r\n    Startseite\r\n  </h1>\r\n\r\n  <div>\r\n    Hallo,<br><br>\r\n    dies ist die Startseite für die Studienleistungen im Fach Soft Computing SS17 von Benedikt Straube.<br>\r\n    Über das Menu oben rechts können die verschiedenen Studienleistungen ausgewählt werden.<br>\r\n    <br><br>\r\n    Viel Vergnügen.\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/predator-prey/population-chart/population-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/predator-prey/population-chart/population-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <canvas baseChart\r\n    [datasets]=\"lineChartData\"\r\n    [labels]=\"lineChartLabels\"\r\n    [colors]=\"lineChartColors\"\r\n    [options]=\"lineChartOptions\"\r\n    [chartType]=\"lineChartType\">\r\n  </canvas>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/predator-prey/population-chart/population-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopulationChartComponent = (function () {
    function PopulationChartComponent() {
        this.lineChartType = 'line';
        this.lineChartData = [
            { data: [], label: 'Beute' },
            { data: [], label: 'Räuber' }
        ];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLabels = [];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(144,238,144,0.2)',
                borderColor: 'rgba(0,128,0,1)',
                pointBackgroundColor: 'rgba(0,128,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(240,128,128,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
        ];
    }
    PopulationChartComponent.prototype.ngOnInit = function () {
    };
    PopulationChartComponent.prototype.addDataSet = function (predatorCount, preyCount) {
        this.lineChartData[0].data.push(preyCount);
        this.lineChartData[1].data.push(predatorCount);
        this.lineChartLabels.push(this.lineChartLabels.length + 1);
        this.chart.chart.config.data.labels = this.lineChartLabels;
        this.chart.chart.config.data.data = this.lineChartData;
        this.chart.chart.update();
    };
    PopulationChartComponent.prototype.reset = function () {
        this.lineChartLabels = [];
        this.lineChartData[0].data = [];
        this.lineChartData[1].data = [];
    };
    return PopulationChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], PopulationChartComponent.prototype, "chart", void 0);
PopulationChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-population-chart',
        template: __webpack_require__("../../../../../src/app/predator-prey/population-chart/population-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/predator-prey/population-chart/population-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PopulationChartComponent);

var _a;
//# sourceMappingURL=population-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/predator-prey/predator-prey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nmd-grid-tile.empty {\r\n  background: #B19CD9;\r\n}\r\n\r\nmd-grid-tile.predator {\r\n  background: lightcoral;\r\n}\r\n\r\nmd-grid-tile.prey {\r\n  background: lightgreen;\r\n}\r\n\r\n\r\np.thick {\r\n    font-weight: bold;\r\n}\r\n.content-card {\r\n    margin: 5px;\r\n}\r\n\r\nh2 {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}\r\n\r\nmd-grid-list {\r\n  height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/predator-prey/predator-prey.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Darstellung eines Räuber-Beute-Systems\r\n</h2>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-subtitle>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"size\" placeholder=\"Feldgröße\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"populationLevel\" placeholder=\"Fortpflanzungslevel\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"startLevelPredator\" placeholder=\"Startlevel der Räuber\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"energyThroughEating\" placeholder=\"Energiegewinn durch Essen\" disabled>\r\n        </md-input-container>\r\n      </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <md-grid-list [cols]=\"size\" rowHeight=\"fit\">\r\n        <div *ngFor=\"let line of map.fields\">\r\n          <md-grid-tile *ngFor=\"let cell of line\" (click)=\"currentCell = cell\" [style.background]=\"cell.color\">\r\n            {{cell.value}}\r\n          </md-grid-tile>\r\n        </div>\r\n      </md-grid-list>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"map.addPrey()\">\r\n        <md-icon>add_circle_outline</md-icon>\r\n        Beute\r\n      </button>\r\n      <button md-button (click)=\"map.addPredator()\">\r\n        <md-icon>add_circle</md-icon>\r\n       Räuber\r\n      </button>\r\n      <button md-button (click)=\"iterate()\">\r\n        <md-icon>cached</md-icon>\r\n        Iteration\r\n      </button>\r\n      <button md-button (click)=\"reset()\">\r\n        <md-icon>close</md-icon>\r\n        Reset\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=true\" *ngIf=\"!showNewMapForm\">\r\n        <md-icon>settings</md-icon>\r\n        Neue Map generieren\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div *ngIf=\"showNewMapForm\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-content>\r\n      <form [formGroup]=\"newMapForm\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"size\" type=\"number\" placeholder=\"Feldgröße\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"populationLevel\" type=\"number\" placeholder=\"Fortpflanzungslevel\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"startLevelPredator\" type=\"number\" placeholder=\"Startlevel der Räuber\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"energyThroughEating\" type=\"number\" placeholder=\"Energiegewinn durch Essen\">\r\n        </md-input-container>\r\n      </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"generateNewMap()\">\r\n        <md-icon>settings</md-icon>\r\n        Map generieren\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=false; newMapForm.reset()\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"currentCell\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-title> Aktuelle Zelle </md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <p class=\"thick\">Koordinaten: </p>\r\n      <p>{{currentCell.xCoordinate}}, {{currentCell.yCoordinate}} </p>\r\n      <p class=\"thick\">ID: </p>\r\n      <p>{{currentCell.id}} </p>\r\n      <p class=\"thick\">Wert: </p>\r\n      <p>{{currentCell.value}} </p>\r\n      <p class=\"thick\">Typ: </p>\r\n      <p>{{currentCell.type}} </p>\r\n      <p class=\"thick\">Ausrichtung: </p>\r\n      <p *ngIf=\"currentCell.direction !== null\"> {{currentCell.direction}} </p>\r\n      <p *ngIf=\"currentCell.direction === null\"> null </p>\r\n      <p class=\"thick\">Nachbarn: </p>\r\n      <span *ngFor=\"let neighbour of map.getNeighbours(currentCell.xCoordinate, currentCell.yCoordinate)\"> \r\n        {{neighbour.value}} ... {{neighbour.direction}},\r\n      </span>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"currentCell=null\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card>\r\n    <app-population-chart></app-population-chart>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/predator-prey/predator-prey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_map__ = __webpack_require__("../../../../../src/app/predator-prey/utils/map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_rules__ = __webpack_require__("../../../../../src/app/predator-prey/utils/rules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__population_chart_population_chart_component__ = __webpack_require__("../../../../../src/app/predator-prey/population-chart/population-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredatorPreyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredatorPreyComponent = (function () {
    function PredatorPreyComponent(fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.populationLevel = 8;
        this.startLevelPredator = 8;
        this.energyThroughEating = 5;
        this.ruleSet = new __WEBPACK_IMPORTED_MODULE_4__utils_rules__["a" /* Ruleset */](this.populationLevel, this.energyThroughEating);
        this.size = 12;
        this.map = new __WEBPACK_IMPORTED_MODULE_3__utils_map__["a" /* Map */](this.size, this.ruleSet, this.startLevelPredator);
        this.ruleSet.setMap(this.map);
        this.newMapForm = this.fb.group({
            size: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            populationLevel: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            startLevelPredator: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            energyThroughEating: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
        this.showNewMapForm = false;
    }
    PredatorPreyComponent.prototype.ngOnInit = function () {
    };
    PredatorPreyComponent.prototype.iterate = function () {
        this.map.iterate();
        this.chartComp.addDataSet(this.map.getCount('predator'), this.map.getCount('prey'));
    };
    PredatorPreyComponent.prototype.reset = function () {
        this.map = new __WEBPACK_IMPORTED_MODULE_3__utils_map__["a" /* Map */](this.size, this.ruleSet, this.startLevelPredator);
        this.chartComp.reset();
    };
    PredatorPreyComponent.prototype.generateNewMap = function () {
        if (this.newMapForm.status === 'VALID') {
            this.populationLevel = this.newMapForm.get('populationLevel').value;
            this.startLevelPredator = this.newMapForm.get('startLevelPredator').value;
            this.energyThroughEating = this.newMapForm.get('energyThroughEating').value;
            this.ruleSet = new __WEBPACK_IMPORTED_MODULE_4__utils_rules__["a" /* Ruleset */](this.populationLevel, this.energyThroughEating);
            this.size = this.newMapForm.get('size').value;
            this.map = new __WEBPACK_IMPORTED_MODULE_3__utils_map__["a" /* Map */](this.size, this.ruleSet, this.startLevelPredator);
            this.ruleSet.setMap(this.map);
            this.newMapForm.reset();
            this.showNewMapForm = false;
            this.chartComp.reset();
        }
        else {
            this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
                duration: 2000,
            });
        }
    };
    PredatorPreyComponent.prototype.addDataSet = function () {
        this.chartComp.addDataSet(this.map.getCount('predator'), this.map.getCount('prey'));
    };
    return PredatorPreyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__population_chart_population_chart_component__["a" /* PopulationChartComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__population_chart_population_chart_component__["a" /* PopulationChartComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__population_chart_population_chart_component__["a" /* PopulationChartComponent */]) === "function" && _a || Object)
], PredatorPreyComponent.prototype, "chartComp", void 0);
PredatorPreyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-predator-prey',
        template: __webpack_require__("../../../../../src/app/predator-prey/predator-prey.component.html"),
        styles: [__webpack_require__("../../../../../src/app/predator-prey/predator-prey.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _c || Object])
], PredatorPreyComponent);

var _a, _b, _c;
//# sourceMappingURL=predator-prey.component.js.map

/***/ }),

/***/ "../../../../../src/app/predator-prey/utils/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("../../../../../src/app/predator-prey/utils/map.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
var Direction;
(function (Direction) {
    Direction[Direction["UpLeft"] = 0] = "UpLeft";
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["UpRight"] = 2] = "UpRight";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
    Direction[Direction["DownLeft"] = 5] = "DownLeft";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["DownRight"] = 7] = "DownRight";
})(Direction || (Direction = {}));
;

var Cell = (function () {
    function Cell(xCoordinate, yCoordinate, value, id, type, color) {
        if (type === void 0) { type = 'empty'; }
        if (color === void 0) { color = __WEBPACK_IMPORTED_MODULE_0__map__["b" /* colorEmpty */]; }
        this.xCoordinate = xCoordinate;
        this.yCoordinate = yCoordinate;
        this.value = value;
        this.id = id;
        this.type = type;
        this.color = color;
        this.direction = null;
        this.reproduced = false;
    }
    return Cell;
}());

//# sourceMappingURL=cell.js.map

/***/ }),

/***/ "../../../../../src/app/predator-prey/utils/map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__("../../../../../src/app/predator-prey/utils/cell.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return colorPrey; });
/* unused harmony export colorPredator */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });

function modulo(num, mod) {
    return ((num % mod) + mod) % mod;
}
var colorEmpty = '#B19CD9';
var colorPrey = 'lightgreen';
var colorPredator = 'lightcoral';
var Map = (function () {
    function Map(size, ruleSet, startLevelPredator) {
        this.size = size;
        this.ruleSet = ruleSet;
        this.startLevelPredator = startLevelPredator;
        this.fields = [];
        this.numCells = 0;
        for (var i = 0; i < this.size; i++) {
            this.fields[i] = [];
            for (var j = 0; j < this.size; j++) {
                this.fields[i][j] = new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](j, i, 0, 0);
                // this.numCells++;
            }
        }
    }
    Map.prototype.getNewID = function () {
        this.numCells++;
        return this.numCells;
    };
    Map.prototype.getCount = function (type) {
        var count = 0;
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                if (cell.type === type) {
                    count++;
                }
            });
        });
        return count;
    };
    Map.prototype.getCell = function (xValue, yValue) {
        return this.fields[modulo(yValue, this.size)][modulo(xValue, this.size)];
    };
    Map.prototype.setCell = function (cell) {
        this.fields[cell.yCoordinate][cell.xCoordinate] = cell;
    };
    Map.prototype.getNeighbours = function (xValue, yValue) {
        var tuple = [];
        // Nachbarzellen oberhalb
        tuple.push(this.getCell(xValue - 1, yValue - 1));
        tuple.push(this.getCell(xValue, yValue - 1));
        tuple.push(this.getCell(xValue + 1, yValue - 1));
        // Nachbarzellen nebenan
        tuple.push(this.getCell(xValue - 1, yValue));
        tuple.push(this.getCell(xValue + 1, yValue));
        // Nachbarzellen unterhalb
        tuple.push(this.getCell(xValue - 1, yValue + 1));
        tuple.push(this.getCell(xValue, yValue + 1));
        tuple.push(this.getCell(xValue + 1, yValue + 1));
        return tuple;
    };
    Map.prototype.addPrey = function (xValue, yValue) {
        var emptyField = false;
        var countTries = 0;
        while (!emptyField) {
            countTries++;
            xValue = Math.floor((Math.random() * this.size));
            yValue = Math.floor((Math.random() * this.size));
            if (this.getCell(xValue, yValue).type === 'empty') {
                emptyField = true;
            }
            else {
                emptyField = false;
            }
            if (countTries >= this.size * this.size) {
                return;
            }
        }
        this.numCells++;
        this.setCell(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](xValue, yValue, 1, this.numCells, 'prey', colorPrey));
    };
    Map.prototype.addPredator = function (xValue, yValue) {
        var emptyField = false;
        var countTries = 0;
        while (!emptyField) {
            countTries++;
            xValue = Math.floor((Math.random() * this.size));
            yValue = Math.floor((Math.random() * this.size));
            if (this.getCell(xValue, yValue).type === 'empty') {
                emptyField = true;
            }
            else {
                emptyField = false;
            }
            if (countTries >= this.size * this.size) {
                return;
            }
        }
        this.numCells++;
        this.setCell(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](xValue, yValue, this.startLevelPredator, this.numCells, 'predator', colorPredator));
    };
    Map.prototype.iterate = function () {
        var _this = this;
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                cell = _this.ruleSet.populate(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = _this.ruleSet.gainEnergy(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = _this.ruleSet.loseEnergy(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = _this.ruleSet.moveDirectionPrey(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = _this.ruleSet.moveDirectionPredator(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
            });
        });
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                if (cell.type !== 'predator') {
                    cell = _this.ruleSet.processMovementPredator(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                }
            });
        });
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                if (cell.type !== 'empty') {
                    cell = _this.ruleSet.processMovementPredator(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                }
            });
        });
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                if (cell.type === 'empty') {
                    cell = _this.ruleSet.processMovementPrey(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                }
            });
        });
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                if (cell.type !== 'empty') {
                    cell = _this.ruleSet.processMovementPrey(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                }
            });
        });
        this.fields.forEach(function (line) {
            line.forEach(function (cell) {
                cell = _this.ruleSet.unmarkReproduktion(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
                cell = _this.ruleSet.deleteCell(_this.getNeighbours(cell.xCoordinate, cell.yCoordinate), cell);
            });
        });
    };
    return Map;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../../src/app/predator-prey/utils/rules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("../../../../../src/app/predator-prey/utils/map.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ruleset; });

var Ruleset = (function () {
    function Ruleset(populationLevel, energyThroughEating) {
        this.populationLevel = populationLevel;
        this.energyThroughEating = energyThroughEating;
    }
    // No Rule
    Ruleset.prototype.setMap = function (map) {
        this.map = map;
    };
    /**
     * Eine Zelle vom Typ Beute erhöht jede Iteration ihr Level, außer sie war Teil einer Fortpflanzung.
     */
    Ruleset.prototype.gainEnergy = function (tuple, activeCell) {
        var newCell = activeCell;
        if (activeCell.type === 'prey' && !activeCell.reproduced) {
            newCell.value++;
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Räuber vermidnert jede Iteration ihr Level.
     */
    Ruleset.prototype.loseEnergy = function (tuple, activeCell) {
        var newCell = activeCell;
        if (activeCell.type === 'predator') {
            newCell.value--;
        }
        return newCell;
    };
    /**
     * Eine Zelle wird gelöscht, wenn ihr Level <=0 fällt.
     */
    Ruleset.prototype.deleteCell = function (tuple, activeCell) {
        // const newCell: Cell = new Cell(activeCell.xCoordinate, activeCell.yCoordinate, 0, 0);
        var newCell = activeCell;
        if (activeCell.type !== 'empty' && activeCell.value <= 0) {
            newCell.value = 0;
            newCell.direction = null;
            newCell.type = 'empty';
            newCell.color = __WEBPACK_IMPORTED_MODULE_0__map__["b" /* colorEmpty */];
            newCell.id = 0;
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Beute wird für die nächste Iteration nicht mehr als Teil der Fortpflanzung betrachtet.
     */
    Ruleset.prototype.unmarkReproduktion = function (tuple, activeCell) {
        var newCell = activeCell;
        if (activeCell.reproduced) {
            newCell.reproduced = false;
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Beute erhöht erzeugt eine neue Zelle vom Typ Beute mit dem Level=1,
     * wenn ihr eigenes Level das notwengie PopulationsLevel erreicht hat und
     * der ausreichende Platz dafür vorhanden ist.
     * Ihr Level wird dabei halbiert.
     */
    Ruleset.prototype.populate = function (tuple, activeCell) {
        var newCell = activeCell;
        // Berechnung der Neuen Zelle
        if (tuple[4].value >= this.populationLevel &&
            tuple[4].type === 'prey' &&
            newCell.type === 'empty') {
            newCell.value = 1;
            newCell.type = 'prey';
            newCell.color = __WEBPACK_IMPORTED_MODULE_0__map__["c" /* colorPrey */];
            newCell.reproduced = true;
            newCell.id = this.map.getNewID();
            return newCell;
        }
        // Berechnung der Ausgangszelle
        if (activeCell.type === 'prey' &&
            activeCell.value >= this.populationLevel &&
            tuple[3].reproduced &&
            tuple[3].value === 1) {
            newCell.value = Math.floor(activeCell.value / 2);
            newCell.reproduced = true;
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Beute entscheidet, in welche Richtung sie sich bewegen möchte.
     * Dies passiert zufällig und kann nur auf freie Felder geschehen.
     * In dieser Regel findet noch keine Bewegung statt, sondern nur die Bestimmung der Richtung.
     */
    Ruleset.prototype.moveDirectionPrey = function (tuple, activeCell) {
        var newCell = activeCell;
        var potentialDirections = [];
        if (activeCell.type === 'prey' &&
            !activeCell.reproduced) {
            // get aviallable fields
            tuple.forEach(function (cell, index) {
                if (cell.type === 'empty') {
                    potentialDirections.push(index);
                }
            });
            // choose direction to go to
            if (potentialDirections.length !== 0) {
                newCell.direction = potentialDirections[Math.floor((Math.random() * potentialDirections.length))];
            }
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Räuber entscheidet, in welche Richtung sie sich bewegen möchte.
     * Der Räuber bewegt sich auf das Feld einer Beute zu.
     * Wenn keine Beute im Umkreis ist, bewegt sich der Räuber auf ein zufälliges Feld.
     */
    Ruleset.prototype.moveDirectionPredator = function (tuple, activeCell) {
        var newCell = activeCell;
        var potentialDirections = [];
        if (activeCell.type === 'predator') {
            // search for prey or availlable fields
            tuple.forEach(function (cell, index) {
                if (cell.type === 'prey') {
                    newCell.direction = index;
                    return newCell;
                }
                else if (cell.type === 'empty') {
                    potentialDirections.push(index);
                }
            });
            // choose direction to go to
            if (potentialDirections.length !== 0 && newCell.direction === null) {
                newCell.direction = potentialDirections[Math.floor((Math.random() * potentialDirections.length))];
            }
        }
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Beute setzt die bereits definierte Bewegung um
     * Dies basiert auf der Ausrichtung der Zelle.
     * Die Ausgangsszelle wird bei diesem Schritt geleert.
     */
    Ruleset.prototype.processMovementPrey = function (tuple, activeCell) {
        var newCell = activeCell;
        tuple.forEach(function (cell, index) {
            if (cell.direction !== null &&
                cell.type === 'prey' &&
                activeCell.type === 'empty' &&
                !activeCell.reproduced &&
                (cell.direction + index) === 7) {
                // New cell after movement
                newCell.value = cell.value;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            }
            else if (activeCell.direction !== null &&
                activeCell.type === 'prey' &&
                !activeCell.reproduced &&
                activeCell.id === cell.id) {
                // reset the old Cell
                newCell.value = 0;
                newCell.direction = null;
                newCell.type = 'empty';
                newCell.color = __WEBPACK_IMPORTED_MODULE_0__map__["b" /* colorEmpty */];
                newCell.id = 0;
            }
        });
        return newCell;
    };
    /**
     * Eine Zelle vom Typ Räuber setzt die bereits definierte Bewegung um
     * Dies basiert auf der Ausrichtung der Zelle.
     * Falls die neue Zelle eine Beute ist, wird diese entfernt.
     * Die Ausgangsszelle wird bei diesem Schritt geleert.
     */
    Ruleset.prototype.processMovementPredator = function (tuple, activeCell) {
        var _this = this;
        var newCell = activeCell;
        tuple.forEach(function (cell, index) {
            if (activeCell.type === 'prey' &&
                cell.type === 'predator' &&
                (cell.direction + index) === 7) {
                // remove prey
                newCell.value = cell.value + _this.energyThroughEating;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            }
            else if (cell.direction !== null &&
                cell.type === 'predator' &&
                activeCell.type === 'empty' &&
                !activeCell.reproduced &&
                (cell.direction + index) === 7) {
                // New cell after movement
                newCell.value = cell.value;
                newCell.direction = null;
                newCell.type = cell.type;
                newCell.color = cell.color;
                newCell.id = cell.id;
            }
            else if (activeCell.direction !== null &&
                activeCell.type === 'predator' &&
                activeCell.id === cell.id) {
                // reset the old Cell
                newCell.value = 0;
                newCell.direction = null;
                newCell.type = 'empty';
                newCell.color = __WEBPACK_IMPORTED_MODULE_0__map__["b" /* colorEmpty */];
                newCell.id = 0;
            }
        });
        return newCell;
    };
    return Ruleset;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map