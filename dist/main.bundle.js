webpackJsonp([1,5],{

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 203;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(217);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bearbeitung der Aufgaben für den Kurs Soft Computing im SS17 - VAWI';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(324),
        styles: [__webpack_require__(318)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__predator_prey_predator_prey_component__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__predator_prey_predator_prey_component__["a" /* PredatorPreyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MdSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_rules__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
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
        this.addDataSet();
    };
    PredatorPreyComponent.prototype.reset = function () {
        this.map = new __WEBPACK_IMPORTED_MODULE_3__utils_map__["a" /* Map */](this.size, this.ruleSet, this.startLevelPredator);
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
        }
        else {
            this.snackBar.open('Bitte alle Felder befüllen.', 'OK', {
                duration: 2000,
            });
        }
    };
    PredatorPreyComponent.prototype.addDataSet = function () {
        this.lineChartData[0].data.push(this.map.getCount('prey'));
        this.lineChartData[1].data.push(this.map.getCount('predator'));
        this.lineChartLabels.push(this.lineChartLabels.length + 1);
        this.chart.chart.config.data.labels = this.lineChartLabels;
        this.chart.chart.config.data.data = this.lineChartData;
        this.chart.chart.update();
    };
    return PredatorPreyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["BaseChartDirective"]) === "function" && _a || Object)
], PredatorPreyComponent.prototype, "chart", void 0);
PredatorPreyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-predator-prey',
        template: __webpack_require__(325),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSnackBar */]) === "function" && _c || Object])
], PredatorPreyComponent);

var _a, _b, _c;
//# sourceMappingURL=predator-prey.component.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(37);
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(37);
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

/***/ 217:
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

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "\r\nmd-grid-tile.empty {\r\n  background: #B19CD9;\r\n}\r\n\r\nmd-grid-tile.predator {\r\n  background: lightcoral;\r\n}\r\n\r\nmd-grid-tile.prey {\r\n  background: lightgreen;\r\n}\r\n\r\n\r\np.thick {\r\n    font-weight: bold;\r\n}\r\n.content-card {\r\n    margin: 5px;\r\n}\r\n\r\nh2 {\r\n    font-family: Roboto, Helvetica,sans-serif;\r\n}\r\n\r\nmd-grid-list {\r\n  height: 500px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 75,
	"./af.js": 75,
	"./ar": 82,
	"./ar-dz": 76,
	"./ar-dz.js": 76,
	"./ar-kw": 77,
	"./ar-kw.js": 77,
	"./ar-ly": 78,
	"./ar-ly.js": 78,
	"./ar-ma": 79,
	"./ar-ma.js": 79,
	"./ar-sa": 80,
	"./ar-sa.js": 80,
	"./ar-tn": 81,
	"./ar-tn.js": 81,
	"./ar.js": 82,
	"./az": 83,
	"./az.js": 83,
	"./be": 84,
	"./be.js": 84,
	"./bg": 85,
	"./bg.js": 85,
	"./bn": 86,
	"./bn.js": 86,
	"./bo": 87,
	"./bo.js": 87,
	"./br": 88,
	"./br.js": 88,
	"./bs": 89,
	"./bs.js": 89,
	"./ca": 90,
	"./ca.js": 90,
	"./cs": 91,
	"./cs.js": 91,
	"./cv": 92,
	"./cv.js": 92,
	"./cy": 93,
	"./cy.js": 93,
	"./da": 94,
	"./da.js": 94,
	"./de": 97,
	"./de-at": 95,
	"./de-at.js": 95,
	"./de-ch": 96,
	"./de-ch.js": 96,
	"./de.js": 97,
	"./dv": 98,
	"./dv.js": 98,
	"./el": 99,
	"./el.js": 99,
	"./en-au": 100,
	"./en-au.js": 100,
	"./en-ca": 101,
	"./en-ca.js": 101,
	"./en-gb": 102,
	"./en-gb.js": 102,
	"./en-ie": 103,
	"./en-ie.js": 103,
	"./en-nz": 104,
	"./en-nz.js": 104,
	"./eo": 105,
	"./eo.js": 105,
	"./es": 107,
	"./es-do": 106,
	"./es-do.js": 106,
	"./es.js": 107,
	"./et": 108,
	"./et.js": 108,
	"./eu": 109,
	"./eu.js": 109,
	"./fa": 110,
	"./fa.js": 110,
	"./fi": 111,
	"./fi.js": 111,
	"./fo": 112,
	"./fo.js": 112,
	"./fr": 115,
	"./fr-ca": 113,
	"./fr-ca.js": 113,
	"./fr-ch": 114,
	"./fr-ch.js": 114,
	"./fr.js": 115,
	"./fy": 116,
	"./fy.js": 116,
	"./gd": 117,
	"./gd.js": 117,
	"./gl": 118,
	"./gl.js": 118,
	"./gom-latn": 119,
	"./gom-latn.js": 119,
	"./he": 120,
	"./he.js": 120,
	"./hi": 121,
	"./hi.js": 121,
	"./hr": 122,
	"./hr.js": 122,
	"./hu": 123,
	"./hu.js": 123,
	"./hy-am": 124,
	"./hy-am.js": 124,
	"./id": 125,
	"./id.js": 125,
	"./is": 126,
	"./is.js": 126,
	"./it": 127,
	"./it.js": 127,
	"./ja": 128,
	"./ja.js": 128,
	"./jv": 129,
	"./jv.js": 129,
	"./ka": 130,
	"./ka.js": 130,
	"./kk": 131,
	"./kk.js": 131,
	"./km": 132,
	"./km.js": 132,
	"./kn": 133,
	"./kn.js": 133,
	"./ko": 134,
	"./ko.js": 134,
	"./ky": 135,
	"./ky.js": 135,
	"./lb": 136,
	"./lb.js": 136,
	"./lo": 137,
	"./lo.js": 137,
	"./lt": 138,
	"./lt.js": 138,
	"./lv": 139,
	"./lv.js": 139,
	"./me": 140,
	"./me.js": 140,
	"./mi": 141,
	"./mi.js": 141,
	"./mk": 142,
	"./mk.js": 142,
	"./ml": 143,
	"./ml.js": 143,
	"./mr": 144,
	"./mr.js": 144,
	"./ms": 146,
	"./ms-my": 145,
	"./ms-my.js": 145,
	"./ms.js": 146,
	"./my": 147,
	"./my.js": 147,
	"./nb": 148,
	"./nb.js": 148,
	"./ne": 149,
	"./ne.js": 149,
	"./nl": 151,
	"./nl-be": 150,
	"./nl-be.js": 150,
	"./nl.js": 151,
	"./nn": 152,
	"./nn.js": 152,
	"./pa-in": 153,
	"./pa-in.js": 153,
	"./pl": 154,
	"./pl.js": 154,
	"./pt": 156,
	"./pt-br": 155,
	"./pt-br.js": 155,
	"./pt.js": 156,
	"./ro": 157,
	"./ro.js": 157,
	"./ru": 158,
	"./ru.js": 158,
	"./sd": 159,
	"./sd.js": 159,
	"./se": 160,
	"./se.js": 160,
	"./si": 161,
	"./si.js": 161,
	"./sk": 162,
	"./sk.js": 162,
	"./sl": 163,
	"./sl.js": 163,
	"./sq": 164,
	"./sq.js": 164,
	"./sr": 166,
	"./sr-cyrl": 165,
	"./sr-cyrl.js": 165,
	"./sr.js": 166,
	"./ss": 167,
	"./ss.js": 167,
	"./sv": 168,
	"./sv.js": 168,
	"./sw": 169,
	"./sw.js": 169,
	"./ta": 170,
	"./ta.js": 170,
	"./te": 171,
	"./te.js": 171,
	"./tet": 172,
	"./tet.js": 172,
	"./th": 173,
	"./th.js": 173,
	"./tl-ph": 174,
	"./tl-ph.js": 174,
	"./tlh": 175,
	"./tlh.js": 175,
	"./tr": 176,
	"./tr.js": 176,
	"./tzl": 177,
	"./tzl.js": 177,
	"./tzm": 179,
	"./tzm-latn": 178,
	"./tzm-latn.js": 178,
	"./tzm.js": 179,
	"./uk": 180,
	"./uk.js": 180,
	"./ur": 181,
	"./ur.js": 181,
	"./uz": 183,
	"./uz-latn": 182,
	"./uz-latn.js": 182,
	"./uz.js": 183,
	"./vi": 184,
	"./vi.js": 184,
	"./x-pseudo": 185,
	"./x-pseudo.js": 185,
	"./yo": 186,
	"./yo.js": 186,
	"./zh-cn": 187,
	"./zh-cn.js": 187,
	"./zh-hk": 188,
	"./zh-hk.js": 188,
	"./zh-tw": 189,
	"./zh-tw.js": 189
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
webpackContext.id = 320;


/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">{{title}}</md-toolbar>\r\n\r\n\r\n<app-predator-prey></app-predator-prey>"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  Darstellung eines Räuber-Beute-Systems\r\n</h2>\r\n<div *ngIf=\"showNewMapForm\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-content>\r\n      <form [formGroup]=\"newMapForm\">\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"size\" type=\"number\" placeholder=\"Feldgröße\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"populationLevel\" type=\"number\" placeholder=\"Fortpflanzungslevel\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"startLevelPredator\" type=\"number\" placeholder=\"Startlevel der Räuber\">\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput formControlName=\"energyThroughEating\" type=\"number\" placeholder=\"Energiegewinn durch Essen\">\r\n        </md-input-container>\r\n      </form>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"generateNewMap()\">\r\n        <md-icon>settings</md-icon>\r\n        Map generieren\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=false; newMapForm.reset()\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n\r\n<div>\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-subtitle>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"size\" placeholder=\"Feldgröße\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"populationLevel\" placeholder=\"Fortpflanzungslevel\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"startLevelPredator\" placeholder=\"Startlevel der Räuber\" disabled>\r\n        </md-input-container>\r\n        <md-input-container>\r\n          <input mdInput [(ngModel)]=\"energyThroughEating\" placeholder=\"Energiegewinn durch Essen\" disabled>\r\n        </md-input-container>\r\n      </md-card-subtitle>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <md-grid-list [cols]=\"size\" rowHeight=\"fit\">\r\n        <div *ngFor=\"let line of map.fields\">\r\n          <md-grid-tile *ngFor=\"let cell of line\" (click)=\"currentCell = cell\" [style.background]=\"cell.color\">\r\n            {{cell.value}}\r\n          </md-grid-tile>\r\n        </div>\r\n      </md-grid-list>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"map.addPrey()\">\r\n        <md-icon>add_circle_outline</md-icon>\r\n        Beute\r\n      </button>\r\n      <button md-button (click)=\"map.addPredator()\">\r\n        <md-icon>add_circle</md-icon>\r\n       Räuber\r\n      </button>\r\n      <button md-button (click)=\"iterate()\">\r\n        <md-icon>cached</md-icon>\r\n        Iteration\r\n      </button>\r\n      <button md-button (click)=\"reset()\">\r\n        <md-icon>close</md-icon>\r\n        Reset\r\n      </button>\r\n      <button md-button (click)=\"showNewMapForm=true\" *ngIf=\"!showNewMapForm\">\r\n        <md-icon>settings</md-icon>\r\n        Neue Map generieren\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"currentCell\">\r\n  <md-card class=\"content-card\">\r\n    <md-card-header>\r\n      <md-card-title> Aktuelle Zelle </md-card-title>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <p class=\"thick\">Koordinaten: </p>\r\n      <p>{{currentCell.xCoordinate}}, {{currentCell.yCoordinate}} </p>\r\n      <p class=\"thick\">ID: </p>\r\n      <p>{{currentCell.id}} </p>\r\n      <p class=\"thick\">Wert: </p>\r\n      <p>{{currentCell.value}} </p>\r\n      <p class=\"thick\">Typ: </p>\r\n      <p>{{currentCell.type}} </p>\r\n      <p class=\"thick\">Ausrichtung: </p>\r\n      <p *ngIf=\"currentCell.direction !== null\"> {{currentCell.direction}} </p>\r\n      <p *ngIf=\"currentCell.direction === null\"> null </p>\r\n      <p class=\"thick\">Nachbarn: </p>\r\n      <span *ngFor=\"let neighbour of map.getNeighbours(currentCell.xCoordinate, currentCell.yCoordinate)\"> \r\n        {{neighbour.value}} ... {{neighbour.direction}},\r\n      </span>\r\n    </md-card-content>\r\n    <md-card-actions>\r\n      <button md-button (click)=\"currentCell=null\">\r\n        <md-icon>close</md-icon>\r\n        SCHLIESSEN\r\n      </button>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>\r\n\r\n<div>\r\n  <md-card>\r\n    <canvas baseChart\r\n      [datasets]=\"lineChartData\"\r\n      [labels]=\"lineChartLabels\"\r\n      [colors]=\"lineChartColors\"\r\n      [options]=\"lineChartOptions\"\r\n      [chartType]=\"lineChartType\">\r\n    </canvas>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cell__ = __webpack_require__(215);
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
        if (!xValue) {
            xValue = Math.floor((Math.random() * this.size));
        }
        if (!yValue) {
            yValue = Math.floor((Math.random() * this.size));
        }
        this.numCells++;
        this.setCell(new __WEBPACK_IMPORTED_MODULE_0__cell__["a" /* Cell */](xValue, yValue, 1, this.numCells, 'prey', colorPrey));
    };
    Map.prototype.addPredator = function (xValue, yValue) {
        if (!xValue) {
            xValue = Math.floor((Math.random() * this.size));
        }
        if (!yValue) {
            yValue = Math.floor((Math.random() * this.size));
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(204);


/***/ })

},[380]);
//# sourceMappingURL=main.bundle.js.map