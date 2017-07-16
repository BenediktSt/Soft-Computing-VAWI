webpackJsonp([1,5],{

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 220;


/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(245);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(41);
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

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        template: __webpack_require__(364),
        styles: [__webpack_require__(352)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_material_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__predator_prey_predator_prey_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__predator_prey_population_chart_population_chart_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fuzzy_fuzzy_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fuzzy_fuzzy_chart_fuzzy_chart_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ea_ea_component__ = __webpack_require__(234);
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
    { path: 'ea', component: __WEBPACK_IMPORTED_MODULE_14__ea_ea_component__["a" /* EaComponent */] },
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
            __WEBPACK_IMPORTED_MODULE_13__fuzzy_fuzzy_chart_fuzzy_chart_component__["a" /* FuzzyChartComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ea_ea_component__["a" /* EaComponent */]
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

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_product_model__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_vektoren_model__ = __webpack_require__(236);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EaComponent = (function () {
    function EaComponent() {
        this.numParents = 10;
        this.numChildren = 15;
        this.maxStartSize = 20;
        this.standardDeviation = 0.2;
        this.simulationIterations = 10;
        this.data = [
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('A', 0.01, 3, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('B', 0.02, 2, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('C', 0.03, 1, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('D', 0.04, 7, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('E', 0.05, 3, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('F', 0.06, 1, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('G', 0.07, 6, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('H', 0.08, 4, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('I', 0.09, 3, 1),
            new __WEBPACK_IMPORTED_MODULE_1__util_product_model__["a" /* Product */]('J', 0.1, 2, 1),
        ];
        this.children = [];
        this.parents = this.generateStart(this.numParents);
        this.averageFitness = 0;
    }
    EaComponent.prototype.ngOnInit = function () {
    };
    // Interface
    EaComponent.prototype.makeChildren = function () {
        this.children = this.getNChildren(this.parents, this.numChildren);
    };
    // Interface
    EaComponent.prototype.evaluateVectors = function () {
        for (var _i = 0, _a = this.parents; _i < _a.length; _i++) {
            var parent = _a[_i];
            parent.evaluate(20, this.data);
        }
        for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
            var child = _c[_b];
            child.evaluate(20, this.data);
        }
        this.averageFitness = this.getAverageFitness(this.parents);
    };
    // Interface
    EaComponent.prototype.buildNextGen = function () {
        this.parents = this.selectForNextGen(this.numParents, this.children, this.simulationIterations);
        for (var _i = 0, _a = this.parents; _i < _a.length; _i++) {
            var parent = _a[_i];
            parent.isNextGen = false;
        }
    };
    // Interface
    EaComponent.prototype.iterate = function (iterations) {
        for (var i = 0; i < iterations; i++) {
            this.makeChildren();
            this.evaluateVectors();
            this.buildNextGen();
        }
    };
    EaComponent.prototype.generateStart = function (parents) {
        var start = [];
        for (var i = 0; i < parents; i++) {
            var minSock = [];
            var buy = [];
            for (var j = 0; j < this.data.length; j++) {
                minSock.push(Math.floor(Math.random() * this.maxStartSize));
                buy.push(Math.floor(Math.random() * this.maxStartSize));
            }
            start.push(new __WEBPACK_IMPORTED_MODULE_2__util_vektoren_model__["a" /* Vector */](minSock, buy));
        }
        return start;
    };
    EaComponent.prototype.getChild = function (parent1, parent2) {
        // Rekombination durch Mittelwertbildung
        var childMinStock = [];
        var childBuyAmount = [];
        parent1.minimalStock.forEach(function (element, index) {
            childMinStock.push(Math.round((parent1.minimalStock[index] + parent2.minimalStock[index]) / 2));
            childBuyAmount.push(Math.round((parent1.buyAmount[index] + parent2.buyAmount[index]) / 2));
        });
        return this.mutate(new __WEBPACK_IMPORTED_MODULE_2__util_vektoren_model__["a" /* Vector */](childMinStock, childBuyAmount), this.standardDeviation);
    };
    EaComponent.prototype.getNChildren = function (parents, numberChildren) {
        var children = [];
        for (var i = 0; i < numberChildren; i++) {
            // get parents
            children.push(this.getChild(parents[Math.floor(Math.random() * parents.length)], parents[Math.floor(Math.random() * parents.length)]));
        }
        return children;
    };
    // Auswählen der besten Vektoren
    // Wiederhilung der Prozesses
    EaComponent.prototype.mutate = function (vector, standardDeviation) {
        // Zufallswert innerhalb der zweifachern Standardabweichung - die Standardabweichung
        var mutateMinStock = [];
        var mutateBuyAmount = [];
        vector.minimalStock.forEach(function (element, index) {
            var localStandardDeviation = vector.minimalStock[index] * standardDeviation;
            mutateMinStock.push(Math.round(vector.minimalStock[index] + (Math.random() * localStandardDeviation * 2) - localStandardDeviation));
            localStandardDeviation = vector.buyAmount[index] * standardDeviation;
            mutateBuyAmount.push(Math.round(vector.buyAmount[index] + (Math.random() * localStandardDeviation * 2) - localStandardDeviation));
        });
        return new __WEBPACK_IMPORTED_MODULE_2__util_vektoren_model__["a" /* Vector */](mutateMinStock, mutateBuyAmount);
    };
    EaComponent.prototype.selectForNextGen = function (numberParents, children, iterations) {
        var nextGen = [];
        for (var i = 0; i < numberParents; i++) {
            var bestChild = null;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var child = children_1[_i];
                if ((bestChild === null || child.fitness < bestChild.fitness) && !child.isNextGen) {
                    bestChild = child;
                }
            }
            bestChild.isNextGen = true;
            nextGen.push(bestChild);
        }
        return nextGen;
    };
    EaComponent.prototype.getAverageFitness = function (vectors) {
        var sum = 0;
        for (var _i = 0, vectors_1 = vectors; _i < vectors_1.length; _i++) {
            var vector = vectors_1[_i];
            sum += vector.fitness;
        }
        return sum / vectors.length;
    };
    return EaComponent;
}());
EaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ea',
        template: __webpack_require__(365),
        styles: [__webpack_require__(353)]
    }),
    __metadata("design:paramtypes", [])
], EaComponent);

//# sourceMappingURL=ea.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(name, size, deliveryPeriod, consumption, stock) {
        if (stock === void 0) { stock = 10; }
        this.name = name;
        this.size = size;
        this.deliveryPeriod = deliveryPeriod;
        this.consumption = consumption;
        this.stock = stock;
    }
    Product.prototype.getData = function () {
        return [
            this.name,
            this.size.toString(),
            this.deliveryPeriod.toString(),
            this.consumption.toString(),
            this.stock.toString()
        ];
    };
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector; });
var Vector = (function () {
    function Vector(minimalStock, buyAmount) {
        this.minimalStock = minimalStock;
        this.buyAmount = buyAmount;
        this.orders = [];
        this.isNextGen = false;
        this.fitness = 0;
    }
    Vector.prototype.toString = function () {
        var _this = this;
        var returnString = '';
        this.minimalStock.forEach(function (elem, index) {
            returnString += "[" + elem + "," + _this.buyAmount[index] + "]; ";
        });
        return returnString;
    };
    Vector.prototype.evaluate = function (iterations, data) {
        var _this = this;
        var products = [];
        data.forEach(function (element) {
            products.push(Object.create(element));
        });
        var sumEmptyProducts = 0;
        var totalStock = 0;
        var _loop_1 = function (i) {
            // Ausführen der Bestellungen
            products = this_1.calculateOrders(i, products, this_1.orders);
            this_1.minimalStock.forEach(function (elem, index) {
                // Täglicher Verbrauch
                products[index].stock -= products[index].consumption;
                // Hinzufügen einer Bestellung falls notwendig
                var orderExists = false;
                _this.orders.forEach(function (element) {
                    if (element.Product === index) {
                        orderExists = true;
                    }
                });
                if (products[index].stock <= elem && !orderExists) {
                    _this.orders.push({ Product: index, Delivery: i + products[index].deliveryPeriod, Amount: _this.buyAmount[index] });
                }
            });
            // Bewerten des Zustandes
            sumEmptyProducts += this_1.countEmptyProducts(products);
            totalStock += this_1.getTotalStock(products);
        };
        var this_1 = this;
        for (var i = 0; i < iterations; i++) {
            _loop_1(i);
        }
        console.log('Anzahl lehrer Produkte: ' + sumEmptyProducts);
        console.log('Durschnittlicher Lagerbestand: ' + totalStock / iterations);
        // Durchschnittlicher Lagerbestand + 5 * sumEmptyProducts
        this.fitness = totalStock / iterations + 2 * sumEmptyProducts;
    };
    Vector.prototype.getTotalStock = function (products) {
        var count = 0;
        products.forEach(function (elem) {
            count += elem.stock;
        });
        return count;
    };
    Vector.prototype.countEmptyProducts = function (products) {
        var count = 0;
        products.forEach(function (elem) {
            if (elem.stock <= 0) {
                count++;
            }
        });
        return count;
    };
    Vector.prototype.calculateOrders = function (time, products, orders) {
        orders.forEach(function (elem) {
            if (elem.Delivery >= time) {
                products[elem.Product].stock += elem.Amount;
            }
        });
        return products;
    };
    return Vector;
}());

//# sourceMappingURL=vektoren.model.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_es6_fuzz__ = __webpack_require__(86);
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
        template: __webpack_require__(366),
        styles: [__webpack_require__(354)]
    }),
    __metadata("design:paramtypes", [])
], FuzzyChartComponent);

var _a, _b;
//# sourceMappingURL=fuzzy-chart.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_es6_fuzz__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_es6_fuzz_lib_curve_triangle__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_es6_fuzz_lib_curve_trapezoid__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_fuzzyController__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_rules__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util_fuzzySet__ = __webpack_require__(70);
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
        template: __webpack_require__(367),
        styles: [__webpack_require__(355)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _b || Object])
], FuzzyComponent);

function add(a, b) {
    return a + b;
}
var _a, _b;
//# sourceMappingURL=fuzzy.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fuzzySet__ = __webpack_require__(70);
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

/***/ 240:
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        template: __webpack_require__(368),
        styles: [__webpack_require__(356)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_rules__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__population_chart_population_chart_component__ = __webpack_require__(71);
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
        template: __webpack_require__(370),
        styles: [__webpack_require__(358)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdSnackBar */]) === "function" && _c || Object])
], PredatorPreyComponent);

var _a, _b, _c;
//# sourceMappingURL=predator-prey.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(42);
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

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(42);
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

/***/ 245:
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

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\r\n.example-menue {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "md-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.isNextGen {\r\n  font-weight: bold;\r\n}\r\n\r\nmd-grid-list {\r\n  height: 400px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, ".flexContainer{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n} \r\n.flexContainer div{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n.flexContainer div md-input-container{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n\r\n.content-card {\r\n    margin: 5px;\r\n}\r\n\r\nh2 {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "div {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// imports


// module
exports.push([module.i, "\r\nmd-grid-tile.empty {\r\n  background: #B19CD9;\r\n}\r\n\r\nmd-grid-tile.predator {\r\n  background: lightcoral;\r\n}\r\n\r\nmd-grid-tile.prey {\r\n  background: lightgreen;\r\n}\r\n\r\n\r\np.thick {\r\n    font-weight: bold;\r\n}\r\n.content-card {\r\n    margin: 5px;\r\n}\r\n\r\nh2 {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}\r\n\r\nmd-grid-list {\r\n  height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 87,
	"./af.js": 87,
	"./ar": 94,
	"./ar-dz": 88,
	"./ar-dz.js": 88,
	"./ar-kw": 89,
	"./ar-kw.js": 89,
	"./ar-ly": 90,
	"./ar-ly.js": 90,
	"./ar-ma": 91,
	"./ar-ma.js": 91,
	"./ar-sa": 92,
	"./ar-sa.js": 92,
	"./ar-tn": 93,
	"./ar-tn.js": 93,
	"./ar.js": 94,
	"./az": 95,
	"./az.js": 95,
	"./be": 96,
	"./be.js": 96,
	"./bg": 97,
	"./bg.js": 97,
	"./bn": 98,
	"./bn.js": 98,
	"./bo": 99,
	"./bo.js": 99,
	"./br": 100,
	"./br.js": 100,
	"./bs": 101,
	"./bs.js": 101,
	"./ca": 102,
	"./ca.js": 102,
	"./cs": 103,
	"./cs.js": 103,
	"./cv": 104,
	"./cv.js": 104,
	"./cy": 105,
	"./cy.js": 105,
	"./da": 106,
	"./da.js": 106,
	"./de": 109,
	"./de-at": 107,
	"./de-at.js": 107,
	"./de-ch": 108,
	"./de-ch.js": 108,
	"./de.js": 109,
	"./dv": 110,
	"./dv.js": 110,
	"./el": 111,
	"./el.js": 111,
	"./en-au": 112,
	"./en-au.js": 112,
	"./en-ca": 113,
	"./en-ca.js": 113,
	"./en-gb": 114,
	"./en-gb.js": 114,
	"./en-ie": 115,
	"./en-ie.js": 115,
	"./en-nz": 116,
	"./en-nz.js": 116,
	"./eo": 117,
	"./eo.js": 117,
	"./es": 119,
	"./es-do": 118,
	"./es-do.js": 118,
	"./es.js": 119,
	"./et": 120,
	"./et.js": 120,
	"./eu": 121,
	"./eu.js": 121,
	"./fa": 122,
	"./fa.js": 122,
	"./fi": 123,
	"./fi.js": 123,
	"./fo": 124,
	"./fo.js": 124,
	"./fr": 127,
	"./fr-ca": 125,
	"./fr-ca.js": 125,
	"./fr-ch": 126,
	"./fr-ch.js": 126,
	"./fr.js": 127,
	"./fy": 128,
	"./fy.js": 128,
	"./gd": 129,
	"./gd.js": 129,
	"./gl": 130,
	"./gl.js": 130,
	"./gom-latn": 131,
	"./gom-latn.js": 131,
	"./he": 132,
	"./he.js": 132,
	"./hi": 133,
	"./hi.js": 133,
	"./hr": 134,
	"./hr.js": 134,
	"./hu": 135,
	"./hu.js": 135,
	"./hy-am": 136,
	"./hy-am.js": 136,
	"./id": 137,
	"./id.js": 137,
	"./is": 138,
	"./is.js": 138,
	"./it": 139,
	"./it.js": 139,
	"./ja": 140,
	"./ja.js": 140,
	"./jv": 141,
	"./jv.js": 141,
	"./ka": 142,
	"./ka.js": 142,
	"./kk": 143,
	"./kk.js": 143,
	"./km": 144,
	"./km.js": 144,
	"./kn": 145,
	"./kn.js": 145,
	"./ko": 146,
	"./ko.js": 146,
	"./ky": 147,
	"./ky.js": 147,
	"./lb": 148,
	"./lb.js": 148,
	"./lo": 149,
	"./lo.js": 149,
	"./lt": 150,
	"./lt.js": 150,
	"./lv": 151,
	"./lv.js": 151,
	"./me": 152,
	"./me.js": 152,
	"./mi": 153,
	"./mi.js": 153,
	"./mk": 154,
	"./mk.js": 154,
	"./ml": 155,
	"./ml.js": 155,
	"./mr": 156,
	"./mr.js": 156,
	"./ms": 158,
	"./ms-my": 157,
	"./ms-my.js": 157,
	"./ms.js": 158,
	"./my": 159,
	"./my.js": 159,
	"./nb": 160,
	"./nb.js": 160,
	"./ne": 161,
	"./ne.js": 161,
	"./nl": 163,
	"./nl-be": 162,
	"./nl-be.js": 162,
	"./nl.js": 163,
	"./nn": 164,
	"./nn.js": 164,
	"./pa-in": 165,
	"./pa-in.js": 165,
	"./pl": 166,
	"./pl.js": 166,
	"./pt": 168,
	"./pt-br": 167,
	"./pt-br.js": 167,
	"./pt.js": 168,
	"./ro": 169,
	"./ro.js": 169,
	"./ru": 170,
	"./ru.js": 170,
	"./sd": 171,
	"./sd.js": 171,
	"./se": 172,
	"./se.js": 172,
	"./si": 173,
	"./si.js": 173,
	"./sk": 174,
	"./sk.js": 174,
	"./sl": 175,
	"./sl.js": 175,
	"./sq": 176,
	"./sq.js": 176,
	"./sr": 178,
	"./sr-cyrl": 177,
	"./sr-cyrl.js": 177,
	"./sr.js": 178,
	"./ss": 179,
	"./ss.js": 179,
	"./sv": 180,
	"./sv.js": 180,
	"./sw": 181,
	"./sw.js": 181,
	"./ta": 182,
	"./ta.js": 182,
	"./te": 183,
	"./te.js": 183,
	"./tet": 184,
	"./tet.js": 184,
	"./th": 185,
	"./th.js": 185,
	"./tl-ph": 186,
	"./tl-ph.js": 186,
	"./tlh": 187,
	"./tlh.js": 187,
	"./tr": 188,
	"./tr.js": 188,
	"./tzl": 189,
	"./tzl.js": 189,
	"./tzm": 191,
	"./tzm-latn": 190,
	"./tzm-latn.js": 190,
	"./tzm.js": 191,
	"./uk": 192,
	"./uk.js": 192,
	"./ur": 193,
	"./ur.js": 193,
	"./uz": 195,
	"./uz-latn": 194,
	"./uz-latn.js": 194,
	"./uz.js": 195,
	"./vi": 196,
	"./vi.js": 196,
	"./x-pseudo": 197,
	"./x-pseudo.js": 197,
	"./yo": 198,
	"./yo.js": 198,
	"./zh-cn": 199,
	"./zh-cn.js": 199,
	"./zh-hk": 200,
	"./zh-hk.js": 200,
	"./zh-tw": 201,
	"./zh-tw.js": 201
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 359;


/***/ }),

/***/ 364:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">{{title}}\r\n    <span class=\"example-spacer\"></span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\"  class=\"example-menue\">\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n        <md-menu #menu=\"mdMenu\">\r\n        <button md-menu-item routerLink=\"/home\">\r\n            <span>Home</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/predpray\">\r\n            <span>SL-1</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/fuzzy\">\r\n            <span>SL-2</span>\r\n        </button>\r\n        <button md-menu-item routerLink=\"/ea\">\r\n            <span>SL-3</span>\r\n        </button>\r\n        </md-menu>\r\n</md-toolbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Warenlagerung eines Kaufhauses mit Evolutionären Algorithmen\r\n</h2>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Ausgangswerte\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <md-grid-list cols=\"5\" rowHeight=\"fit\">\r\n        <md-grid-tile>Produkt</md-grid-tile>\r\n        <md-grid-tile>Produktgröße</md-grid-tile>\r\n        <md-grid-tile>Lieferzeit</md-grid-tile>\r\n        <md-grid-tile>Verbrauch pro Tag</md-grid-tile>\r\n        <md-grid-tile>Bestand</md-grid-tile>\r\n        <div *ngFor=\"let product of data\">\r\n          <md-grid-tile *ngFor=\"let param of product.getData()\">\r\n            {{param}}\r\n          </md-grid-tile>\r\n        </div>\r\n      </md-grid-list>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"makeChildren()\">\r\n        <md-icon>cached</md-icon>\r\n        Kinder generieren\r\n      </button>\r\n      <button md-button (click)=\"evaluateVectors()\">\r\n        <md-icon>cached</md-icon>\r\n        Bewerten\r\n      </button>\r\n      <button md-button (click)=\"buildNextGen()\">\r\n        <md-icon>cached</md-icon>\r\n        Crossover mit Mutation\r\n      </button>\r\n       <button md-button (click)=\"iterate(50)\">\r\n        <md-icon>cached</md-icon>\r\n        50 * Iterieren\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Vectoren\r\n    </md-card-title>\r\n    <h2>Eltern</h2>\r\n    <md-card-content>\r\n      <div *ngFor=\"let vector of parents\">\r\n        <span [class.isNextGen]=\"vector.isNextGen\">\r\n          {{vector.toString()}} : {{vector.fitness}}\r\n        </span>\r\n      </div>\r\n      <p> Durchschnitt Eltern-Fitness: {{averageFitness}}<p>\r\n      <h2>Kinder</h2>\r\n      <div *ngFor=\"let vector of children\">\r\n        <span [class.isNextGen]=\"vector.isNextGen\">\r\n          {{vector.toString()}} : {{vector.fitness}}\r\n        </span>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2 align=\"center\"> Fuzzy-Set für die Nachfrage </h2>\r\n  <canvas baseChart height=\"75\"\r\n    [datasets]=\"demandChartData\"\r\n    [labels]=\"allChartLabels\"\r\n    [options]=\"allChartOptions\"\r\n    [chartType]=\"allChartType\">\r\n  </canvas>\r\n  <h2 align=\"center\"> Fuzzy-Set für den Lagerbestand </h2>\r\n  <canvas baseChart height=\"75\"\r\n    [datasets]=\"stockChartData\"\r\n    [labels]=\"allChartLabels\"\r\n    [options]=\"allChartOptions\"\r\n    [chartType]=\"allChartType\">\r\n  </canvas>\r\n</div>\r\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Einkaufssimulation eines Supermarktes\r\n</h2>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Ausgangswerte\r\n    </md-card-title>\r\n    <md-card-content style=\"display:flex\">\r\n      <form [formGroup]=\"purchaseForm\" class=\"flexContainer\">\r\n        <div formGroupName=\"demand\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodA\" type=\"number\" placeholder=\"Nachfrage Produkt A\" max=\"50\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodB\" type=\"number\" placeholder=\"Nachfrage Produkt B\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodC\" type=\"number\" placeholder=\"Nachfrage Produkt C\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodD\" type=\"number\" placeholder=\"Nachfrage Produkt D\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        </div>\r\n        <div formGroupName=\"stock\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodA\" type=\"number\" placeholder=\"Lagerbestand Produkt A\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodB\" type=\"number\" placeholder=\"Lagerbestand Produkt B\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodC\" type=\"number\" placeholder=\"Lagerbestand Produkt C\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"prodD\" type=\"number\" placeholder=\"Lagerbestand Produkt D\">\r\n          <md-hint> max. 50 </md-hint>\r\n        </md-input-container>\r\n        </div>\r\n      </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"fillrandom()\">\r\n        <md-icon>input</md-icon>\r\n        Befülle zufällig\r\n      </button>\r\n      <button md-button (click)=\"calculate()\">\r\n        <md-icon>cached</md-icon>\r\n        Berechnen\r\n      </button>\r\n      <button md-button *ngIf=\"!showFuzzy\" (click)=\"showFuzzy=true\">\r\n        <md-icon>show_chart</md-icon>\r\n        Graphen anzeigen\r\n      </button>\r\n      <button md-button *ngIf=\"showFuzzy\" (click)=\"showFuzzy=false\">\r\n        <md-icon>show_chart</md-icon>\r\n        Graphen ausblenden\r\n      </button>\r\n      <button md-button (click)=\"reset()\">\r\n        <md-icon>close</md-icon>\r\n        Reset\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div *ngIf=\"showFuzzy\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Fuzzy-Graphen\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <app-fuzzy-chart [demandData]=\"fuzzyControllerDemand.logic\" [stockData]=\"fuzzyControllerStock.logic\"></app-fuzzy-chart>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"showFuzzy=false\">\r\n        <md-icon>close</md-icon>\r\n        Schliessen\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-title>\r\n      Empfehlung\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <div align=\"center\">\r\n        <div *ngFor=\"let row of result\" class='flexContainer'>\r\n          <div><h3>{{row.text}}</h3></div>\r\n          <div><md-progress-bar\r\n            mode=\"determinate\"\r\n            [color]=\"row.color\"\r\n            [value]=\"row.value\">\r\n          </md-progress-bar></div>\r\n        </div>\r\n      </div>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div align='center'>\r\n  <h1>\r\n    Startseite\r\n  </h1>\r\n\r\n  <div>\r\n    Hallo,<br><br>\r\n    dies ist die Startseite für die Studienleistungen im Fach Soft Computing SS17 von Benedikt Straube.<br>\r\n    Über das Menu oben rechts können die verschiedenen Studienleistungen ausgewählt werden.<br>\r\n    <br><br>\r\n    Viel Vergnügen.\r\n  </div>\r\n</div>"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <canvas baseChart\r\n    [datasets]=\"lineChartData\"\r\n    [labels]=\"lineChartLabels\"\r\n    [colors]=\"lineChartColors\"\r\n    [options]=\"lineChartOptions\"\r\n    [chartType]=\"lineChartType\">\r\n  </canvas>\r\n</div>"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Darstellung eines Räuber-Beute-Systems\r\n</h2>\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-subtitle>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"size\" placeholder=\"Feldgröße\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"populationLevel\" placeholder=\"Fortpflanzungslevel\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"startLevelPredator\" placeholder=\"Startlevel der Räuber\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"energyThroughEating\" placeholder=\"Energiegewinn durch Essen\" disabled>\r\n        </md-input-container>\r\n      </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <md-grid-list [cols]=\"size\" rowHeight=\"fit\">\r\n        <div *ngFor=\"let line of map.fields\">\r\n          <md-grid-tile *ngFor=\"let cell of line\" (click)=\"currentCell = cell\" [style.background]=\"cell.color\">\r\n            {{cell.value}}\r\n          </md-grid-tile>\r\n        </div>\r\n      </md-grid-list>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"map.addPrey()\">\r\n        <md-icon>add_circle_outline</md-icon>\r\n        Beute\r\n      </button>\r\n      <button md-button (click)=\"map.addPredator()\">\r\n        <md-icon>add_circle</md-icon>\r\n       Räuber\r\n      </button>\r\n      <button md-button (click)=\"iterate()\">\r\n        <md-icon>cached</md-icon>\r\n        Iteration\r\n      </button>\r\n      <button md-button (click)=\"reset()\">\r\n        <md-icon>close</md-icon>\r\n        Reset\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=true\" *ngIf=\"!showNewMapForm\">\r\n        <md-icon>settings</md-icon>\r\n        Neue Map generieren\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div *ngIf=\"showNewMapForm\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-content>\r\n      <form [formGroup]=\"newMapForm\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"size\" type=\"number\" placeholder=\"Feldgröße\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"populationLevel\" type=\"number\" placeholder=\"Fortpflanzungslevel\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"startLevelPredator\" type=\"number\" placeholder=\"Startlevel der Räuber\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"energyThroughEating\" type=\"number\" placeholder=\"Energiegewinn durch Essen\">\r\n        </md-input-container>\r\n      </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"generateNewMap()\">\r\n        <md-icon>settings</md-icon>\r\n        Map generieren\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=false; newMapForm.reset()\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"currentCell\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-title> Aktuelle Zelle </md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <p class=\"thick\">Koordinaten: </p>\r\n      <p>{{currentCell.xCoordinate}}, {{currentCell.yCoordinate}} </p>\r\n      <p class=\"thick\">ID: </p>\r\n      <p>{{currentCell.id}} </p>\r\n      <p class=\"thick\">Wert: </p>\r\n      <p>{{currentCell.value}} </p>\r\n      <p class=\"thick\">Typ: </p>\r\n      <p>{{currentCell.type}} </p>\r\n      <p class=\"thick\">Ausrichtung: </p>\r\n      <p *ngIf=\"currentCell.direction !== null\"> {{currentCell.direction}} </p>\r\n      <p *ngIf=\"currentCell.direction === null\"> null </p>\r\n      <p class=\"thick\">Nachbarn: </p>\r\n      <span *ngFor=\"let neighbour of map.getNeighbours(currentCell.xCoordinate, currentCell.yCoordinate)\"> \r\n        {{neighbour.value}} ... {{neighbour.direction}},\r\n      </span>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"currentCell=null\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card>\r\n    <app-population-chart></app-population-chart>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(243);
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

/***/ 70:
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_charts_ng2_charts__ = __webpack_require__(361);
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
        template: __webpack_require__(369),
        styles: [__webpack_require__(357)]
    }),
    __metadata("design:paramtypes", [])
], PopulationChartComponent);

var _a;
//# sourceMappingURL=population-chart.component.js.map

/***/ })

},[410]);
//# sourceMappingURL=main.bundle.js.map