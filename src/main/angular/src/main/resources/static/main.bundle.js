webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-column/add-column.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-column/add-column.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <h1 mat-dialog-title>Add Report Column</h1>\r\n  <form class=\"example-form\" #form=\"ngForm\" autocomplete=\"off\">\r\n      \r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            <input matInput #columnName=\"ngModel\" appCommandValidator placeholder=\"Column Name\" readonly [(ngModel)]=\"name\" name=\"name\" required>\r\n            <mat-hint align=\"start\"><strong>Name of column</strong> </mat-hint>\r\n            \r\n            <mat-error *ngIf=\"columnName.invalid && (columnName.dirty || columnName.touched) && columnName.errors.required\">\r\n                  Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        \r\n          <br><br>\r\n\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            <input matInput #columnLabel=\"ngModel\" appCommandValidator placeholder=\"Column Label\" [(ngModel)]=\"label\" name=\"label\" required>\r\n            <mat-hint align=\"start\"><strong>Label of column</strong> </mat-hint>\r\n            \r\n            <mat-error *ngIf=\"columnLabel.invalid && (columnLabel.dirty || columnLabel.touched) && columnLabel.errors.required\">\r\n                  label is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        \r\n          <br><br>\r\n            \r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            \r\n            <mat-select #columnType=\"ngModel\" placeholder=\"Column Type\"  [(ngModel)]=\"type\" name=\"type\">\r\n              <mat-option *ngFor=\"let type of columnTypes\" [value]=\"type.value\">\r\n                {{ type.viewValue }}\r\n              </mat-option>\r\n            </mat-select>  \r\n            \r\n            <mat-hint align=\"start\"><strong>Type of column</strong> </mat-hint>\r\n            \r\n            <mat-error *ngIf=\"columnType.invalid && (columnType.dirty || columnType.touched) && columnType.errors.required\">\r\n                  Type is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n        \r\n          <br><br>\r\n               \r\n\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            <input matInput #columnFormat=\"ngModel\" appCommandValidator placeholder=\"Column Format\" [(ngModel)]=\"format\" name=\"format\">\r\n            <mat-hint align=\"start\"><strong>Format of column</strong> </mat-hint>\r\n           \r\n          </mat-form-field>\r\n        \r\n          <br><br>\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            \r\n            <mat-select #columnType=\"ngModel\" placeholder=\"Primary Key\"  [(ngModel)]=\"primaryKey\" name=\"primaryKey\">\r\n              <mat-option *ngFor=\"let type of primaryKeyType\" [value]=\"type\">\r\n                {{ type }}\r\n              </mat-option>\r\n            </mat-select>  \r\n            \r\n            <mat-hint align=\"start\"><strong>Type of column</strong> </mat-hint>\r\n            \r\n            <mat-error *ngIf=\"columnType.invalid && (columnType.dirty || columnType.touched) && columnType.errors.required\">\r\n                  Type is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          \r\n          <br><br>\r\n\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            <input matInput #columnFormat=\"ngModel\" appCommandValidator placeholder=\"Precision\" [(ngModel)]=\"precision\" name=\"precision\">\r\n            <mat-hint align=\"start\"><strong>Precision</strong> </mat-hint>\r\n           \r\n          </mat-form-field>\r\n          <br><br>\r\n\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n            <input matInput #columnFormat=\"ngModel\" appCommandValidator placeholder=\"Scale\" [(ngModel)]=\"scale\" name=\"scale\">\r\n            <mat-hint align=\"start\"><strong>Scale</strong> </mat-hint>\r\n           \r\n          </mat-form-field>          \r\n        \r\n          <br><br>          \r\n               \r\n            <button *ngIf=\"columnId!=null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"editColumn()\" color=\"primary\">\r\n              <mat-icon aria-label=\"Submit\">create</mat-icon>&nbsp;Update Column\r\n            </button>  \r\n            <button *ngIf=\"columnId==null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"addColumn()\" color=\"primary\">\r\n                <mat-icon aria-label=\"Submit\">add</mat-icon>&nbsp;Add Column\r\n            </button>  \r\n\r\n    </form>\r\n\r\n   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-column/add-column.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddColumnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddColumnComponent = (function () {
    function AddColumnComponent(dialogRef, data, analyticsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.analyticsService = analyticsService;
        this.columnId = '';
        this.name = '';
        this.label = '';
        this.type = '';
        this.format = '';
        this.primaryKey = '';
        this.columnTypes = [{ value: 'S', viewValue: 'String' }, { value: 'D', viewValue: 'Date' },
            { value: 'I', viewValue: 'Integer' }, { value: 'F', viewValue: 'Decimal' }, { value: 'A', viewValue: 'Date Time' }, { value: 'T', viewValue: 'Time' }];
        this.primaryKeyType = ['No', 'Yes'];
        this.precision = null;
        this.scale = null;
    }
    AddColumnComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.columnId) {
            this.columnId = this.data.columnId;
            this.analyticsService.getReportColumn(this.data.columnId)
                .subscribe(function (data) {
                _this.name = data.name;
                _this.label = data.label;
                _this.type = data.type;
                _this.format = data.format;
                if (data.primaryKey == 1) {
                    _this.primaryKey = 'Yes';
                }
                else {
                    _this.primaryKey = 'No';
                }
                _this.precision = data.precision;
                _this.scale = data.scale;
            });
        }
    };
    AddColumnComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    AddColumnComponent.prototype.addColumn = function () {
        var _this = this;
        var primarydataKey = 0;
        if (this.primaryKey == 'Yes') {
            primarydataKey = 1;
        }
        this.analyticsService.
            addReportColumn(this.name, +this.data.reportId, this.label, this.type, this.format, primarydataKey, this.precision, this.scale)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        });
    };
    AddColumnComponent.prototype.editColumn = function () {
        var _this = this;
        var primarydataKey = 0;
        if (this.primaryKey == 'Yes') {
            primarydataKey = 1;
        }
        this.analyticsService.
            updateReportColumn(+this.columnId, this.name, +this.data.reportId, this.label, this.type, this.format, primarydataKey, this.precision, this.scale)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        });
    };
    AddColumnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-column',
            template: __webpack_require__("../../../../../src/app/add-column/add-column.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-column/add-column.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]])
    ], AddColumnComponent);
    return AddColumnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-database/add-database.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  .alert {\r\n    padding: 20px;\r\n    background-color: #f44336;\r\n    color: white;\r\n  }\r\n  \r\n  .closebtn {\r\n    margin-left: 15px;\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .closebtn:hover {\r\n    color: black;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-database/add-database.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <button class=\"close\" style=\"float: right;\" mat-button (click)=\"onNoClick()\">X</button>\r\n    <h1 mat-dialog-title>Add Database</h1>\r\n    <div class=\"alert\" *ngIf=\"errorTextIndicator\">\r\n      <span class=\"closebtn\">&times;</span> \r\n      <strong>{{errorText}}</strong>\r\n    </div>\r\n    <form class=\"example-form\" #form=\"ngForm\" autocomplete=\"off\">\r\n        \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #columnName=\"ngModel\" appCommandValidator placeholder=\"Database Name\" [(ngModel)]=\"name\" name=\"name\" required> \r\n              <mat-hint align=\"start\"><strong>Name of Database</strong> </mat-hint>\r\n              \r\n              <mat-error *ngIf=\"columnName.invalid && (columnName.dirty || columnName.touched) && columnName.errors.required\">\r\n                    Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n  \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #dbDescription=\"ngModel\" appCommandValidator placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\" required>\r\n              <mat-hint align=\"start\"><strong>Description of Database</strong> </mat-hint>\r\n              \r\n              <mat-error *ngIf=\"dbDescription.invalid && (dbDescription.dirty || dbDescription.touched) && dbDescription.errors.required\">\r\n                    Description is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n              \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbURL=\"ngModel\" appCommandValidator placeholder=\"Connection URL\" [(ngModel)]=\"url\" name=\"url\" required>\r\n                <mat-hint align=\"start\"><strong>DB Connection URL</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbURL.invalid && (dbURL.dirty || dbURL.touched) && dbURL.errors.required\">\r\n                    Connection URL is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <br><br>\r\n              \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbURL=\"ngModel\" appCommandValidator placeholder=\"Driver Class Name\" [(ngModel)]=\"driverClassName\" name=\"driverClassName\" >\r\n                <mat-hint align=\"start\"><strong>Driver Class Name</strong> </mat-hint>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n                 \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbUsername=\"ngModel\" appCommandValidator placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\r\n                <mat-hint align=\"start\"><strong>DB username</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbUsername.invalid && (dbUsername.dirty || dbUsername.touched) && dbUsername.errors.required\">\r\n                   Username is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n\r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbPassword=\"ngModel\" appCommandValidator placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required>\r\n                <mat-hint align=\"start\"><strong>DB Password</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbPassword.invalid && (dbPassword.dirty || dbPassword.touched) && dbPassword.errors.required\">\r\n                    Password is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n\r\n  \r\n              <button *ngIf=\"dsId!=null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"editDB()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">create</mat-icon>&nbsp;Update Database\r\n              </button>  \r\n              <button *ngIf=\"dsId==null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"addDB()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">add</mat-icon>&nbsp;Add Database\r\n              </button>  \r\n      </form>\r\n  \r\n     \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/add-database/add-database.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddDatabaseComponent = (function () {
    function AddDatabaseComponent(dialogRef, data, analyticsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.analyticsService = analyticsService;
        this.errorTextIndicator = false;
        this.title = 'Add Database';
    }
    AddDatabaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.dsId) {
            this.dsId = this.data.dsId;
            this.analyticsService.getDatabase(this.data.dsId)
                .subscribe(function (data) {
                var dataSource = data;
                _this.name = dataSource.name;
                _this.description = dataSource.description;
                _this.url = dataSource.url;
                _this.dsId = dataSource.dsId;
                _this.username = dataSource.dbUsername;
                _this.password = dataSource.dbPassword;
                _this.driverClassName = dataSource.driverClassName;
                _this.title = 'Edit Database ' + dataSource.name;
            });
        }
    };
    AddDatabaseComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    AddDatabaseComponent.prototype.addDB = function () {
        var _this = this;
        this.analyticsService.
            addDatabase(this.name, this.description, this.url, this.username, this.password, this.driverClassName)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        }, function (err) {
            if (err.error.message) {
                _this.errorTextIndicator = true;
                _this.errorText = err.error.message;
            }
            console.log(err);
        });
    };
    AddDatabaseComponent.prototype.editDB = function () {
        var _this = this;
        this.analyticsService.
            updateDatabase(this.dsId, this.name, this.description, this.url, this.username, this.password, this.driverClassName)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        }, function (err) {
            if (err.error.message) {
                _this.errorTextIndicator = true;
                _this.errorText = err.error.message;
            }
            console.log(err);
        });
    };
    AddDatabaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-database',
            template: __webpack_require__("../../../../../src/app/add-database/add-database.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]],
            styles: [__webpack_require__("../../../../../src/app/add-database/add-database.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]])
    ], AddDatabaseComponent);
    return AddDatabaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-report/add-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-form {\r\n    min-width: 150px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.mat-input-invalid {\r\n    margin-bottom: 5px;\r\n}  \r\n\r\n.progress-spinner {\r\n  left: 35%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-report/add-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\" style=\"height:500px\">\r\n    <mat-progress-spinner *ngIf=\"loading==true\"\r\n        class=\"progress-spinner\"\r\n        color=\"primary\"\r\n        mode=\"indeterminate\"\r\n        value=\"50\">\r\n    </mat-progress-spinner>\r\n    <h1 mat-dialog-title>{{title}}</h1>\r\n    <form class=\"example-form\" #form=\"ngForm\" autocomplete=\"off\">\r\n            <p style=\"color:#f44336\">{{errorMessage}}</p>\r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #reportName=\"ngModel\" appCommandValidator placeholder=\"Report Name\" [(ngModel)]=\"name\" name=\"name\" required>\r\n              <mat-hint align=\"start\"><strong>Name of report</strong> </mat-hint>\r\n\r\n              <mat-error *ngIf=\"reportName.invalid && (reportName.dirty || reportName.touched) && reportName.errors.forbiddenCommand\">\r\n                    Comand cannot start with <strong>open</strong>.\r\n              </mat-error>\r\n              <mat-error *ngIf=\"reportName.invalid && (reportName.dirty || reportName.touched) && reportName.errors.required\">\r\n                    Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n\r\n            <br><br>\r\n\r\n            <mat-form-field color=\"accent\"class=\"example-full-width\" >\r\n\r\n                    <mat-select #dbType=\"ngModel\" placeholder=\"Type\"  [(ngModel)]=\"selectedDB\" name=\"type\" >\r\n                        <mat-option *ngFor=\"let type of dbTypes\" [value]=\"type.dsId\" >\r\n                          {{ type.name }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <mat-hint align=\"start\"><strong >DB Type</strong> </mat-hint>\r\n\r\n                </mat-form-field>\r\n                <br><br>\r\n                <mat-form-field color=\"accent\"class=\"example-full-width\" >\r\n\r\n                    <mat-select #dbType=\"ngModel\" placeholder=\"Type\"  [(ngModel)]=\"selectedForceDB\" name=\"type\" >\r\n                        <mat-option *ngFor=\"let type of forceDbTypes\" [value]=\"type.dsId\" >\r\n                          {{ type.name }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <mat-hint align=\"start\"><strong >Force Type</strong> </mat-hint>\r\n\r\n                </mat-form-field>\r\n                <br><br>\r\n              <mat-form-field class=\"example-full-width\" color=\"accent\"  >\r\n                  <textarea rows=\"5\" matInput placeholder=\"Query\" [(ngModel)]=\"query\" name=\"query\" required></textarea>\r\n                  <mat-hint align=\"start\"><strong >Query to generate report</strong> </mat-hint>\r\n\r\n                </mat-form-field>\r\n              <br><br>\r\n              <mat-form-field class=\"example-full-width\" color=\"accent\"  >\r\n               <textarea rows=\"5\" matInput placeholder=\"recordCountQuery\" [(ngModel)]=\"recordCountQuery\" name=\"recordCountQuery\" ></textarea>\r\n                  <mat-hint align=\"start\"><strong >Query to generate record count</strong> </mat-hint>\r\n\r\n              </mat-form-field>\r\n              <br><br>\r\n             <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #reportName=\"ngModel\" appCommandValidator placeholder=\"App Name\" [(ngModel)]=\"appName\" name=\"appName\">\r\n              <mat-hint align=\"start\"><strong>Einstein App Name</strong> </mat-hint>\r\n            </mat-form-field> \r\n            <br><br>\r\n             <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #reportName=\"ngModel\" appCommandValidator placeholder=\"Flow Name\" [(ngModel)]=\"flowName\" name=\"flowName\">\r\n              <mat-hint align=\"start\"><strong>Einstein Flow Name</strong> </mat-hint>\r\n            </mat-form-field>             \r\n            <br><br>             \r\n               <mat-form-field color=\"accent\"class=\"example-full-width\" >\r\n\r\n                    <mat-select #dbType=\"ngModel\" placeholder=\"Type\"  [(ngModel)]=\"loadType\" name=\"loadType\" >\r\n                        <mat-option *ngFor=\"let type of loadTypes\" [value]=\"type\" >\r\n                          {{ type }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <mat-hint align=\"start\"><strong >Load Type</strong> </mat-hint>\r\n\r\n                </mat-form-field>\r\n                <br><br>\r\n                  <mat-form-field color=\"accent\"class=\"example-full-width\" >\r\n\r\n                    <mat-select #dbType=\"ngModel\" placeholder=\"methodType\"  [(ngModel)]=\"methodType\" name=\"methodType\" >\r\n                        <mat-option *ngFor=\"let type of methodTypes\" [value]=\"type\" >\r\n                          {{ type }}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                      <mat-hint align=\"start\"><strong >Method Type</strong> </mat-hint>\r\n\r\n                </mat-form-field>\r\n                <br><br>\r\n                    <mat-checkbox  #dbType=\"ngModel\" placeholder=\"isIncremental\"  [(ngModel)]=\"isIncremental\" name=\"isIncremental\"></mat-checkbox>\r\n                      <mat-hint align=\"start\"><strong >Is Incremental</strong> </mat-hint>\r\n                <br><br>\r\n                <mat-form-field color=\"accent\" class=\"example-full-width\">\r\n                      <input matInput #creator=\"ngModel\" placeholder=\"Run Priority\" appUrlValidator  [(ngModel)]=\"priority\" name=\"priority\" required>\r\n                      <mat-hint align=\"start\"><strong >Priority</strong> </mat-hint>\r\n                </mat-form-field>\r\n\r\n\r\n                <br><br>\r\n                <mat-form-field color=\"accent\" class=\"example-full-width\">\r\n                      <input matInput #creator=\"ngModel\" placeholder=\"Hour To Run\" appUrlValidator  [(ngModel)]=\"runTime\" name=\"runTime\">\r\n                      <mat-hint align=\"start\"><strong >Hour To Run</strong> </mat-hint>\r\n                </mat-form-field>\r\n\r\n\r\n                <br><br>\r\n                <mat-form-field color=\"accent\" class=\"example-full-width\">\r\n                      <input matInput #creator=\"ngModel\" placeholder=\"Created By\" appUrlValidator  [(ngModel)]=\"createdBy\" name=\"createdBy\" required>\r\n                      <mat-hint align=\"start\"><strong >Report Creator user Id</strong> </mat-hint>\r\n\r\n                      <mat-error *ngIf=\"creator.invalid && (creator.dirty || creator.touched) && creator.errors.required\">\r\n                              Creator is <strong>required</strong>\r\n                        </mat-error>\r\n                </mat-form-field>\r\n\r\n\r\n                <br><br>\r\n\r\n              <button *ngIf=\"reportId==null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"addReport()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">add</mat-icon>&nbsp;Add Report\r\n              </button>\r\n              <button *ngIf=\"reportId!=null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"updateReport()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">create</mat-icon>&nbsp;Update Report\r\n              </button>\r\n\r\n\r\n      </form>\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/add-report/add-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddReportComponent = (function () {
    function AddReportComponent(dialogRef, data, analyticsService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.analyticsService = analyticsService;
        this.name = '';
        this.query = '';
        this.createdBy = '';
        this.dbTypes = [];
        this.title = 'Add Report';
        this.reportId = null;
        this.loading = false;
        this.errorMessage = '';
        this.loadType = '';
        this.priority = '';
        this.loadTypes = ['Once', 'Daily', 'Hourly'];
        this.runTime = '';
        this.recordCountQuery = '';
        this.methodTypes = ['Overwrite', 'Append', 'Upsert'];
        this.methodType = '';
        this.forceDbTypes = [];
        this.isIncremental = false;
        this.appName = '';
        this.flowName = '';
        this.analyticsService.getDatabases().subscribe(function (data) {
            _this.dbTypes = data;
            _this.selectedDB = _this.dbTypes[0].dsId;
        });
        this.analyticsService.getForceDatabases().subscribe(function (data) {
            _this.forceDbTypes = data;
            _this.selectedForceDB = _this.forceDbTypes[0].dsId;
        });
    }
    AddReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.reportId) {
            this.reportId = this.data.reportId;
            this.analyticsService.getReport(this.data.reportId)
                .subscribe(function (data) {
                var report = data;
                _this.name = report.name;
                _this.title = 'Edit Report ' + report.name;
                _this.query = report.query;
                _this.selectedDB = report.dataSource.dsId;
                _this.createdBy = report.createdBy;
                if (report.loadType != null) {
                    if (report.loadType == 0) {
                        _this.loadType = 'Once';
                    }
                    else if (report.loadType == 1) {
                        _this.loadType = 'Daily';
                    }
                    else if (report.loadType == 2) {
                        _this.loadType = 'Hourly';
                    }
                }
                if (report.method != null) {
                    _this.methodType = report.method;
                }
                _this.priority = report.priority;
                _this.runTime = report.runTime;
                _this.recordCountQuery = report.recordCountQuery;
                _this.isIncremental = report.isIncremental;
                _this.appName = report.appName;
                _this.flowName = report.flowName;
            });
        }
    };
    AddReportComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    AddReportComponent.prototype.addReport = function () {
        var _this = this;
        this.loading = true;
        this.errorMessage = '';
        this.analyticsService.
            addReport(this.name, this.query, this.selectedDB, this.selectedForceDB, this.createdBy, this.loadType, this.methodType, this.priority, this.runTime, this.recordCountQuery, this.isIncremental, this.appName, this.flowName)
            .subscribe(function (data) {
            _this.loading = false;
            _this.dialogRef.close(true);
        }, function (err) {
            console.log(err.error.message);
            _this.errorMessage = err.error.message;
            _this.loading = false;
        });
    };
    AddReportComponent.prototype.updateReport = function () {
        var _this = this;
        this.analyticsService.updateReport(this.reportId, this.name, this.query, this.selectedDB, this.selectedForceDB, this.createdBy, this.loadType, this.methodType, this.priority, this.runTime, this.recordCountQuery, this.isIncremental, this.appName, this.flowName)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        });
    };
    AddReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-report',
            providers: [__WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]],
            template: __webpack_require__("../../../../../src/app/add-report/add-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-report/add-report.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]])
    ], AddReportComponent);
    return AddReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n    padding: 20px;\r\n    background-color: #f44336;\r\n    color: white;\r\n  }\r\n  \r\n  .closebtn {\r\n    margin-left: 15px;\r\n    color: white;\r\n    font-weight: bold;\r\n    float: right;\r\n    font-size: 22px;\r\n    line-height: 20px;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n  }\r\n  \r\n  .closebtn:hover {\r\n    color: black;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <!--button mat-icon-button aria-label=\"close dialog\" mat-dialog-close>\r\n    <mat-icon>close</mat-icon>\r\n  </button-->\r\n    <!--button type=\"button\" class=\"btn-close btn-close-white\" aria-label=\"Close\"></button-->\r\n    <button class=\"close\" style=\"float: right;\" mat-button (click)=\"onNoClick()\">X</button>\r\n    <h1 mat-dialog-title>Add Force Database</h1>\r\n    <div class=\"alert\" *ngIf=\"errorTextIndicator\">\r\n      <span class=\"closebtn\">&times;</span> \r\n      <strong>{{errorText}}</strong>\r\n    </div>\r\n       <form class=\"example-form\" #form=\"ngForm\" autocomplete=\"off\" style=\"margin-top: 20px;\">\r\n\r\n             <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #columnName=\"ngModel\" appCommandValidator placeholder=\"Database Name\" [(ngModel)]=\"name\" name=\"name\" required>\r\n              <mat-hint align=\"start\"><strong>Name of Database</strong> </mat-hint>\r\n              \r\n              <mat-error *ngIf=\"columnName.invalid && (columnName.dirty || columnName.touched) && columnName.errors.required\">\r\n                    Name is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n  \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              <input matInput #dbDescription=\"ngModel\" appCommandValidator placeholder=\"Description\" [(ngModel)]=\"description\" name=\"description\" required>\r\n              <mat-hint align=\"start\"><strong>Description of Database</strong> </mat-hint>\r\n              \r\n              <mat-error *ngIf=\"dbDescription.invalid && (dbDescription.dirty || dbDescription.touched) && dbDescription.errors.required\">\r\n                    Description is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n              \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbURL=\"ngModel\" appCommandValidator placeholder=\"Connection URL\" [(ngModel)]=\"url\" name=\"url\" required>\r\n                <mat-hint align=\"start\"><strong>DB Connection URL</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbURL.invalid && (dbURL.dirty || dbURL.touched) && dbURL.errors.required\">\r\n                    Connection URL is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n             <br><br>\r\n                             \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbusername=\"ngModel\" appCommandValidator placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\r\n                <mat-hint align=\"start\"><strong>username</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbusername.invalid && (dbusername.dirty || dbusername.touched) && dbusername.errors.required\">\r\n                   Username is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n\r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n                <input matInput #dbpassword=\"ngModel\" appCommandValidator placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" required>\r\n                <mat-hint align=\"start\"><strong>Password</strong> </mat-hint>\r\n                \r\n              <mat-error *ngIf=\"dbpassword.invalid && (dbpassword.dirty ||dbpassword.touched) && dbpassword.errors.required\">\r\n                    Password is <strong>required</strong>\r\n              </mat-error>\r\n            </mat-form-field>\r\n          \r\n            <br><br>\r\n              \r\n            <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n              <input matInput #clientIdKey=\"ngModel\" appCommandValidator placeholder=\"Client Key\" [(ngModel)]=\"clientId\" name=\"clientId\" required>\r\n              <mat-hint align=\"start\"><strong>Client Key</strong> </mat-hint>\r\n              \r\n            <mat-error *ngIf=\"clientIdKey.invalid && (clientIdKey.dirty || clientIdKey.touched) && clientIdKey.errors.required\">\r\n                  Client Key is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n          <br><br>\r\n          <mat-form-field class=\"example-full-width\" color=\"accent\">\r\n              \r\n            <input matInput #clientSecretKey=\"ngModel\" appCommandValidator placeholder=\"Client Secret\" [(ngModel)]=\"clientSecret\" name=\"clientSecret\" required>\r\n            <mat-hint align=\"start\"><strong>Client Key</strong> </mat-hint>\r\n            \r\n          <mat-error *ngIf=\"clientSecretKey.invalid && (clientSecretKey.dirty || clientSecretKey.touched) && clientSecretKey.errors.required\">\r\n                Client Secret is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n        <br><br>\r\n  \r\n              <button *ngIf=\"dsId!=null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"editDB()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">create</mat-icon>&nbsp;Update Force Database\r\n              </button>  \r\n              <button *ngIf=\"dsId==null\" mat-raised-button [disabled]=\"form.invalid\" (click)=\"addDB()\" color=\"primary\">\r\n                  <mat-icon aria-label=\"Submit\">add</mat-icon>&nbsp;Add Force Database\r\n              </button>  \r\n              \r\n      </form>\r\n  \r\n     \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSfdcdatasourceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddSfdcdatasourceComponent = (function () {
    function AddSfdcdatasourceComponent(dialogRef, data, analyticsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.analyticsService = analyticsService;
        this.errorTextIndicator = false;
        this.title = 'Add Force Database';
    }
    AddSfdcdatasourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.data && this.data.dsId) {
            this.dsId = this.data.dsId;
            this.analyticsService.getForceDatabase(this.data.dsId)
                .subscribe(function (data) {
                var dataSource = data;
                _this.name = dataSource.name;
                _this.description = dataSource.description;
                _this.url = dataSource.url;
                _this.dsId = dataSource.dsId;
                _this.username = dataSource.username;
                _this.password = dataSource.password;
                _this.clientId = dataSource.clientId;
                _this.clientSecret = dataSource.clientSecret;
                _this.title = 'Edit Force Database ' + dataSource.name;
            });
        }
    };
    AddSfdcdatasourceComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    AddSfdcdatasourceComponent.prototype.addDB = function () {
        var _this = this;
        this.analyticsService.
            addForceDatabase(this.name, this.description, this.url, this.username, this.password, this.clientId, this.clientSecret)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        }, function (err) {
            if (err.error.message) {
                _this.errorTextIndicator = true;
                _this.errorText = err.error.message;
            }
            console.log(err);
        });
    };
    AddSfdcdatasourceComponent.prototype.editDB = function () {
        var _this = this;
        this.analyticsService.
            updateForceDatabase(this.dsId, this.name, this.description, this.url, this.username, this.password, this.clientId, this.clientSecret)
            .subscribe(function (data) {
            _this.dialogRef.close(true);
        }, function (err) {
            if (err.error.message) {
                _this.errorTextIndicator = true;
                _this.errorText = err.error.message;
            }
            console.log(err);
        });
    };
    AddSfdcdatasourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-sfdcdatasource',
            template: __webpack_require__("../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]],
            styles: [__webpack_require__("../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__analytics_service__["a" /* AnalyticsService */]])
    ], AddSfdcdatasourceComponent);
    return AddSfdcdatasourceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsService = (function () {
    function AnalyticsService(http) {
        this.http = http;
        this.prefix = '/api';
    }
    AnalyticsService.prototype.getReports = function () {
        return this.http.get(this.prefix + '/reports/');
    };
    AnalyticsService.prototype.getReport = function (reportId) {
        return this.http.get(this.prefix + '/reports/' + reportId);
    };
    AnalyticsService.prototype.addReport = function (name, query, dataSource, sfdcDataSource, createdBy, loadType, methodType, priority, runTime, recordCountQuery, isIncremental, appName, flowName) {
        return this.http.post(this.prefix + '/reports/', { name: name, query: query, label: '', dataSource: dataSource, sfdcDataSource: sfdcDataSource, createdBy: createdBy, type: loadType, methodType: methodType, priority: priority, runTime: runTime, recordCountQuery: recordCountQuery, isIncremental: isIncremental, appName: appName, flowName: flowName });
    };
    AnalyticsService.prototype.updateReport = function (reportId, name, query, dataSource, sfdcDataSource, createdBy, loadType, methodType, priority, runTime, recordCountQuery, isIncremental, appName, flowName) {
        return this.http.post(this.prefix + '/reports/', { reportId: reportId, name: name, query: query, label: '', dataSource: dataSource, sfdcDataSource: sfdcDataSource, createdBy: createdBy, type: loadType, methodType: methodType, priority: priority, runTime: runTime, recordCountQuery: recordCountQuery, isIncremental: isIncremental, appName: appName, flowName: flowName });
    };
    AnalyticsService.prototype.deleteReport = function (reportId) {
        return this.http.delete(this.prefix + '/reports/delete/' + reportId);
    };
    AnalyticsService.prototype.getReportColumn = function (columnId) {
        return this.http.get(this.prefix + '/columns/column/' + columnId);
    };
    AnalyticsService.prototype.getReportColumns = function (reportId) {
        return this.http.get(this.prefix + '/columns/' + reportId);
    };
    AnalyticsService.prototype.getHistory = function (reportId) {
        return this.http.get(this.prefix + '/history/' + reportId);
    };
    AnalyticsService.prototype.addReportColumn = function (name, reportId, label, type, format, primaryKey, precision, scale) {
        return this.http.post(this.prefix + '/columns/create', { name: name, reportId: reportId, label: label, type: type, format: format, primaryKey: primaryKey, precision: precision, scale: scale });
    };
    AnalyticsService.prototype.updateReportColumn = function (columnId, name, reportId, label, type, format, primaryKey, precision, scale) {
        return this.http.post(this.prefix +
            '/columns/create', { columnId: columnId, name: name, reportId: reportId, label: label, type: type, format: format, primaryKey: primaryKey, precision: precision, scale: scale });
    };
    AnalyticsService.prototype.deleteReportColumn = function (columnId, reportId) {
        return this.http.delete(this.prefix + '/columns/delete/' + columnId + '/' + reportId);
    };
    AnalyticsService.prototype.getDatabases = function () {
        return this.http.get(this.prefix + '/ds/');
    };
    AnalyticsService.prototype.getDatabase = function (dsId) {
        return this.http.get(this.prefix + '/ds/' + dsId);
    };
    AnalyticsService.prototype.addDatabase = function (name, description, url, username, password, driverClassName) {
        return this.http.post(this.prefix + '/ds/', { name: name, description: description, url: url, dbUsername: username, dbPassword: password, driverClassName: driverClassName });
    };
    AnalyticsService.prototype.updateDatabase = function (dsId, name, description, url, username, password, driverClassName) {
        return this.http.post(this.prefix + '/ds/', { dsId: dsId, name: name, description: description, url: url, dbUsername: username, dbPassword: password, driverClassName: driverClassName });
    };
    AnalyticsService.prototype.deleteDatabase = function (dsId) {
        return this.http.delete(this.prefix + '/ds/' + dsId);
    };
    AnalyticsService.prototype.runReport = function (reportId) {
        return this.http.get(this.prefix + '/load/' + reportId);
    };
    AnalyticsService.prototype.getForceDatabases = function () {
        return this.http.get(this.prefix + '/forceDs/');
    };
    AnalyticsService.prototype.getForceDatabase = function (dsId) {
        return this.http.get(this.prefix + '/forceDs/' + dsId);
    };
    AnalyticsService.prototype.addForceDatabase = function (name, description, url, username, password, clientId, clientSecret) {
        return this.http.post(this.prefix + '/forceDs/', { name: name, description: description, url: url, username: username, password: password, clientId: clientId, clientSecret: clientSecret });
    };
    AnalyticsService.prototype.updateForceDatabase = function (dsId, name, description, url, username, password, clientId, clientSecret) {
        return this.http.post(this.prefix + '/forceDs/', { dsId: dsId, name: name, description: description, url: url, username: username, password: password, clientId: clientId, clientSecret: clientSecret });
    };
    AnalyticsService.prototype.deleteForceDatabase = function (dsId) {
        return this.http.delete(this.prefix + '/forceDs/' + dsId);
    };
    AnalyticsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__databases_databases_component__ = __webpack_require__("../../../../../src/app/databases/databases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_columns_report_columns_component__ = __webpack_require__("../../../../../src/app/report-columns/report-columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sfdcdatasource_sfdcdatasource_component__ = __webpack_require__("../../../../../src/app/sfdcdatasource/sfdcdatasource.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/reports', pathMatch: 'full' },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_2__reports_reports_component__["a" /* ReportsComponent */] },
    { path: 'datasources', component: __WEBPACK_IMPORTED_MODULE_3__databases_databases_component__["a" /* DatabasesComponent */] },
    { path: 'history/:report-id', component: __WEBPACK_IMPORTED_MODULE_5__history_history_component__["a" /* HistoryComponent */] },
    { path: 'columns/:report-id', component: __WEBPACK_IMPORTED_MODULE_4__report_columns_report_columns_component__["a" /* ReportColumnsComponent */] },
    { path: 'sfdcDatasources', component: __WEBPACK_IMPORTED_MODULE_6__sfdcdatasource_sfdcdatasource_component__["a" /* SfdcdatasourceComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.page-title{\r\n    margin-left: auto;\r\n}\r\n\r\n.site-title {\r\n    margin-left: auto;\r\n    \r\n}\r\n\r\n.main-container {\r\n    position: fixed;\r\n    height:100%;\r\n    width:98%;\r\n}\r\n\r\n\r\n\r\n.mat-drawer{\r\n    height: 100%;\r\n    position: fixed;\r\n    border-right: 1px solid rgba(255, 255, 255, 0.12);\r\n}\r\n\r\n.menu-title {\r\n    margin: 0;\r\n    padding: 21px;\r\n    text-align: center;\r\n    background-color: rgba(255, 255, 255, 0.32);\r\n}\r\n\r\nmat-list-item.mat-list-item.active {\r\n    /* color: #f44336; */\r\n    background-color: rgba(0,0,0,.87);\r\n}\r\n\r\n.mat-list, .mat-nav-list, .mat-selection-list {\r\n    padding-top:0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav mode=\"side\" [opened]=\"showNav\" mat-divider>\r\n            <nav>\r\n                <h3 class=\"menu-title\">Menu</h3>\r\n                <mat-nav-list>\r\n                        <mat-list-item (click)=\"showNav=false;title='Reports'\" [routerLink]=\"['/reports']\"  routerLinkActive=\"active\"><mat-icon style=\"vertical-align: middle;\">report</mat-icon>&nbsp;Reports</mat-list-item>\r\n                        <mat-divider></mat-divider>\r\n                        <mat-list-item (click)=\"showNav=false;title='Data Sources'\"  [routerLink]=\"['/datasources']\"  routerLinkActive=\"active\"><mat-icon style=\"vertical-align: middle;\">cloud</mat-icon>&nbsp;Data Sources</mat-list-item>\r\n                        <mat-divider></mat-divider>\r\n                        <mat-list-item (click)=\"showNav=false;title='Force Data Sources'\"  [routerLink]=\"['/sfdcDatasources']\"  routerLinkActive=\"active\"><mat-icon style=\"vertical-align: middle;\">cloud</mat-icon>&nbsp;Force Data Sources</mat-list-item>\r\n                        <mat-divider></mat-divider>\r\n                      </mat-nav-list>\r\n            </nav>\r\n           \r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n            <mat-toolbar color=\"warn\">\r\n                    <mat-icon *ngIf=\"!showNav\" class=\"demo-toolbar-icon\" style=\"cursor:pointer\" (click)=\"showNav=true\">menu</mat-icon>&nbsp;\r\n                    <mat-icon *ngIf=\"showNav\" class=\"demo-toolbar-icon\" style=\"cursor:pointer\" (click)=\"showNav=false\">keyboard_backspace</mat-icon>&nbsp;\r\n                    \r\n                    <!-- <img src=\"/assets/bnsf-logo.png\" style=\"height:85%\"/> -->\r\n                    <span class=\"site-title\">Force Analytics</span>\r\n                    <!--span class=\"page-title\"><mat-icon style=\"vertical-align: middle;\">report</mat-icon>&nbsp; {{title}}</span-->\r\n                    \r\n                   \r\n                  </mat-toolbar>\r\n        <div  (click)=\"showNav=false\">\r\n                <router-outlet></router-outlet>\r\n        </div>          \r\n        \r\n        \r\n\r\n        <div style=\"text-align:center; margin-top:10px\"><mat-card-footer >  </mat-card-footer> </div>         \r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Reports';
        this.showNav = false;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_columns_report_columns_component__ = __webpack_require__("../../../../../src/app/report-columns/report-columns.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_report_add_report_component__ = __webpack_require__("../../../../../src/app/add-report/add-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__add_column_add_column_component__ = __webpack_require__("../../../../../src/app/add-column/add-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__databases_databases_component__ = __webpack_require__("../../../../../src/app/databases/databases.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__add_database_add_database_component__ = __webpack_require__("../../../../../src/app/add-database/add-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__report_columns_type_pipe__ = __webpack_require__("../../../../../src/app/report-columns/type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reports_query_pipe__ = __webpack_require__("../../../../../src/app/reports/query.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sfdcdatasource_sfdcdatasource_component__ = __webpack_require__("../../../../../src/app/sfdcdatasource/sfdcdatasource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__add_sfdcdatasource_add_sfdcdatasource_component__ = __webpack_require__("../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__report_columns_report_columns_component__["a" /* ReportColumnsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_report_add_report_component__["a" /* AddReportComponent */],
                __WEBPACK_IMPORTED_MODULE_12__add_column_add_column_component__["a" /* AddColumnComponent */],
                __WEBPACK_IMPORTED_MODULE_13__databases_databases_component__["a" /* DatabasesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__add_database_add_database_component__["a" /* AddDatabaseComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sfdcdatasource_sfdcdatasource_component__["a" /* SfdcdatasourceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__add_sfdcdatasource_add_sfdcdatasource_component__["a" /* AddSfdcdatasourceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__report_columns_type_pipe__["a" /* TypePipe */],
                __WEBPACK_IMPORTED_MODULE_16__reports_query_pipe__["a" /* QueryPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCheckboxModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_9__add_report_add_report_component__["a" /* AddReportComponent */], __WEBPACK_IMPORTED_MODULE_12__add_column_add_column_component__["a" /* AddColumnComponent */], __WEBPACK_IMPORTED_MODULE_14__add_database_add_database_component__["a" /* AddDatabaseComponent */], __WEBPACK_IMPORTED_MODULE_18__add_sfdcdatasource_add_sfdcdatasource_component__["a" /* AddSfdcdatasourceComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/databases/databases.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-title{\r\n    margin-left: auto;\r\n}\r\n\r\n.site-title {\r\n    margin-left: 20px;\r\n    \r\n}\r\n\r\n.main-container {\r\n    position: fixed;\r\n    height:100%;\r\n    width:98%;\r\n}\r\n\r\n\r\n\r\n.page-container {\r\n    padding:10px;\r\n}\r\n\r\n.page-title{\r\n   font-family:   Roboto,\"Helvetica Neue\",sans-serif;\r\n   margin:0;\r\n}\r\n\r\n\r\n.add-button {\r\n    position:absolute;\r\n    top:100px;\r\n    right:95px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/databases/databases.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-container\">\r\n    <button mat-fab (click)=\"addDatabase(dsId)\" color=\"primary\"  matTooltip=\"Add Database\" style=\"position:fixed;top:95px;right:95px\">\r\n        <mat-icon >add</mat-icon>\r\n      </button>\r\n\r\n      <h3 class=\"page-title\">Registered Databases</h3>\r\n\r\n\r\n\r\n\r\n\r\n<br><br>\r\n<div class=\"alert\" *ngIf=\"errorTextIndicator\">\r\n  <span class=\"closebtn\">&times;</span>\r\n  <strong>{{errorText}}</strong>\r\n</div>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n      <mat-progress-bar *ngIf=\"loading\"\r\n          class=\"example-margin\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\">\r\n      </mat-progress-bar>\r\n      <mat-table #table [dataSource]=\"datasource\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> NAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef> DESCRIPTION </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\r\n          </ng-container>\r\n\r\n        <ng-container matColumnDef=\"url\">\r\n          <mat-header-cell *matHeaderCellDef> URL </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.url}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dbUsername\">\r\n          <mat-header-cell *matHeaderCellDef> USERNAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.dbUsername}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dbPassword\">\r\n          <mat-header-cell *matHeaderCellDef> PASSWORD </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> *********** </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <mat-header-cell *matHeaderCellDef> ACTIONS </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" class=\"button-row\">\r\n\r\n                    <button mat-mini-fab color=\"accent\" matTooltip=\"Edit Data Source\" (click)=\"addDatabase(element.dsId)\">\r\n                        <mat-icon >create</mat-icon>\r\n                      </button>\r\n                      <button mat-mini-fab color=\"warn\" matTooltip=\"Delete Data Source\" (click)=\"delete(element.dsId)\">\r\n                          <mat-icon >delete_forever</mat-icon>\r\n                        </button>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/databases/databases.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabasesComponent; });
/* unused harmony export DsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_database_add_database_component__ = __webpack_require__("../../../../../src/app/add-database/add-database.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DatabasesComponent = (function () {
    function DatabasesComponent(analyticsService, dialog, snackBar) {
        this.analyticsService = analyticsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.datasource = new DsDataSource();
        this.displayedColumns = ['name', 'description', 'url', 'dbUsername', 'dbPassword', 'actions'];
        this.loading = true;
        this.errorTextIndicator = false;
    }
    DatabasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyticsService.getDatabases().subscribe(function (data) {
            dataSources = data;
            _this.datasource = new DsDataSource();
            _this.loading = false;
        });
    };
    DatabasesComponent.prototype.delete = function (dsId) {
        var _this = this;
        this.loading = true;
        this.analyticsService.deleteDatabase(+dsId).subscribe(function (data) {
            dataSources = data;
            _this.datasource = new DsDataSource();
            _this.loading = false;
            _this.snackBar.open('Data Source Deleted', null, {
                duration: 1000
            });
        });
    };
    DatabasesComponent.prototype.addDatabase = function (dsId) {
        var _this = this;
        var dialogRef;
        if (dsId) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_database_add_database_component__["a" /* AddDatabaseComponent */], {
                width: '500px', data: { dsId: dsId }
            });
        }
        else {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_database_add_database_component__["a" /* AddDatabaseComponent */], {
                width: '500px'
            });
        }
        dialogRef.afterClosed().subscribe(function (refreshValues) {
            console.log('The dialog was closed ' + refreshValues);
            if (refreshValues) {
                _this.loading = true;
                _this.analyticsService.getDatabases().subscribe(function (data) {
                    dataSources = data;
                    _this.datasource = new DsDataSource();
                    _this.loading = false;
                });
            }
        });
    };
    DatabasesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-databases',
            template: __webpack_require__("../../../../../src/app/databases/databases.component.html"),
            styles: [__webpack_require__("../../../../../src/app/databases/databases.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */]])
    ], DatabasesComponent);
    return DatabasesComponent;
}());

var dataSources = [];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var DsDataSource = (function (_super) {
    __extends(DsDataSource, _super);
    function DsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(private siteId:string, private adminService:AdminService){
      super();
    }*/
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    DsDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(dataSources);
    };
    DsDataSource.prototype.disconnect = function () { };
    return DsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div> <a [routerLink]=\"['/reports']\"  style=\"text-decoration:none; color: #f44336;\">Registered Reports</a> &nbsp;\r\n      / &nbsp; <p style=\"display:inline\" class=\"page-title\">Report History</p> </div>\r\n\r\n      \r\n  \r\n  <br><br>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"loading\"\r\n            class=\"example-margin\"\r\n            color=\"primary\"\r\n            mode=\"indeterminate\">\r\n        </mat-progress-bar>\r\n        <mat-table #table [dataSource]=\"datasource\">\r\n      \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n          <ng-container matColumnDef=\"message\">\r\n            <mat-header-cell *matHeaderCellDef> Message </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.message}} </mat-cell>\r\n          </ng-container>\r\n           \r\n          <ng-container matColumnDef=\"startDateStr\">\r\n            <mat-header-cell *matHeaderCellDef> Start Date </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.startDateStr}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <ng-container matColumnDef=\"endDateStr\">\r\n              <mat-header-cell *matHeaderCellDef> End Date </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.endDateStr}} </mat-cell>\r\n          </ng-container>  \r\n\r\n          <ng-container matColumnDef=\"recordCountBefore\">\r\n            <mat-header-cell *matHeaderCellDef> Count Before Run </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.recordCountBefore}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <ng-container matColumnDef=\"recordCountAfter\">\r\n            <mat-header-cell *matHeaderCellDef> Count After Run </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.recordCountAfter}} </mat-cell>\r\n          </ng-container> \r\n          \r\n                      \r\n       \r\n          \r\n  \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n  \r\n\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* unused harmony export ReportHistoriesDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoryComponent = (function () {
    function HistoryComponent(route, analyticsService, dialog) {
        this.route = route;
        this.analyticsService = analyticsService;
        this.dialog = dialog;
        this.datasource = new ReportHistoriesDataSource();
        this.displayedColumns = ['startDateStr', 'endDateStr', 'recordCountBefore', 'recordCountAfter', 'message'];
        this.loading = true;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportId = +this.route.snapshot.paramMap.get('report-id');
        this.analyticsService.getHistory(this.reportId).subscribe(function (data) {
            histories = data;
            _this.datasource = new ReportHistoriesDataSource();
            _this.loading = false;
        });
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]])
    ], HistoryComponent);
    return HistoryComponent;
}());

var histories = [];
var ReportHistoriesDataSource = (function (_super) {
    __extends(ReportHistoriesDataSource, _super);
    function ReportHistoriesDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(private siteId:string, private adminService:AdminService){
      super();
    }*/
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ReportHistoriesDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(histories);
    };
    ReportHistoriesDataSource.prototype.disconnect = function () { };
    return ReportHistoriesDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/report-columns/report-columns.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-title{\r\n    margin-left: auto;\r\n}\r\n\r\n.site-title {\r\n    margin-left: 20px;\r\n    \r\n}\r\n\r\n.main-container {\r\n    position: fixed;\r\n    height:100%;\r\n    width:98%;\r\n}\r\n\r\n\r\n.page-container {\r\n    padding:10px;\r\n}\r\n\r\n.page-title{\r\n   font-family:   Roboto,\"Helvetica Neue\",sans-serif;\r\n   margin:0;\r\n}\r\n\r\n\r\n.add-button {\r\n    position: absolute;\r\n    top:100px;\r\n    right:95px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report-columns/report-columns.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n    <div> <a [routerLink]=\"['/reports']\"  style=\"text-decoration:none; color: #f44336;\">Registered Reports</a> &nbsp;\r\n      / &nbsp; <p style=\"display:inline\" class=\"page-title\">Registered Columns</p> </div>\r\n    \r\n    \r\n    <!--button mat-fab (click)=\"addEditColumn()\" color=\"primary\"  matTooltip=\"Add Column\" class=\"add-button\">\r\n        <mat-icon >add</mat-icon>\r\n      </button--> \r\n      \r\n  \r\n  <br><br>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"loading\"\r\n            class=\"example-margin\"\r\n            color=\"primary\"\r\n            mode=\"indeterminate\">\r\n        </mat-progress-bar>\r\n        <mat-table #table [dataSource]=\"datasource\">\r\n      \r\n          <!--- Note that these columns can be defined in any order.\r\n                The actual rendered columns are set as a property on the row definition\" -->\r\n      \r\n          \r\n          <ng-container matColumnDef=\"name\">\r\n            <mat-header-cell *matHeaderCellDef> NAME </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <ng-container matColumnDef=\"label\">\r\n              <mat-header-cell *matHeaderCellDef> LABEL </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.label}} </mat-cell>\r\n            </ng-container>  \r\n\r\n          <ng-container matColumnDef=\"type\">\r\n            <mat-header-cell *matHeaderCellDef> TYPE </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.type | type}} </mat-cell>\r\n          </ng-container>\r\n      \r\n          <ng-container matColumnDef=\"format\">\r\n            <mat-header-cell *matHeaderCellDef> FORMAT </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.format}} </mat-cell>\r\n          </ng-container> \r\n          \r\n           \r\n       \r\n          <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef> ACTIONS </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" class=\"button-row\"> \r\n                  \r\n                      <button mat-mini-fab color=\"accent\" matTooltip=\"edit column\" (click)=\"addEditColumn(element.columnId)\">\r\n                          <mat-icon >create</mat-icon>\r\n                        </button>    \r\n                        <!--button mat-mini-fab color=\"warn\" matTooltip=\"delete column\" (click)=\"delete(element.columnId)\">\r\n                            <mat-icon >delete_forever</mat-icon>\r\n                          </button-->     \r\n            </mat-cell>\r\n          </ng-container>  \r\n       \r\n  \r\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n      </div>\r\n  \r\n\r\n    </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/report-columns/report-columns.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportColumnsComponent; });
/* unused harmony export ColumnsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_column_add_column_component__ = __webpack_require__("../../../../../src/app/add-column/add-column.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportColumnsComponent = (function () {
    function ReportColumnsComponent(route, analyticsService, dialog) {
        this.route = route;
        this.analyticsService = analyticsService;
        this.dialog = dialog;
        this.datasource = new ColumnsDataSource();
        this.displayedColumns = ['name', 'label', 'type', 'format', 'actions'];
        this.loading = true;
    }
    ReportColumnsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportId = +this.route.snapshot.paramMap.get('report-id');
        this.analyticsService.getReportColumns(this.reportId).subscribe(function (data) {
            columns = data;
            _this.datasource = new ColumnsDataSource();
            _this.loading = false;
        });
    };
    ReportColumnsComponent.prototype.delete = function (columnId) {
        var _this = this;
        this.loading = true;
        this.analyticsService.deleteReportColumn(+columnId, this.reportId).subscribe(function (data) {
            columns = data;
            _this.datasource = new ColumnsDataSource();
            _this.loading = false;
        });
    };
    ReportColumnsComponent.prototype.addEditColumn = function (columnId) {
        var _this = this;
        var dialogRef;
        if (columnId) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_column_add_column_component__["a" /* AddColumnComponent */], {
                width: '500px', data: { columnId: columnId, reportId: this.reportId }
            });
        }
        else {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_column_add_column_component__["a" /* AddColumnComponent */], {
                width: '500px', data: { reportId: this.reportId }
            });
        }
        dialogRef.afterClosed().subscribe(function (refreshValues) {
            console.log('The dialog was closed ' + refreshValues);
            if (refreshValues) {
                _this.loading = true;
                _this.analyticsService.getReportColumns(_this.reportId).subscribe(function (data) {
                    columns = data;
                    _this.datasource = new ColumnsDataSource();
                    _this.loading = false;
                });
            }
        });
    };
    ReportColumnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-report-columns',
            template: __webpack_require__("../../../../../src/app/report-columns/report-columns.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report-columns/report-columns.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialog */]])
    ], ReportColumnsComponent);
    return ReportColumnsComponent;
}());

var columns = [];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ColumnsDataSource = (function (_super) {
    __extends(ColumnsDataSource, _super);
    function ColumnsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(private siteId:string, private adminService:AdminService){
      super();
    }*/
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ColumnsDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(columns);
    };
    ColumnsDataSource.prototype.disconnect = function () { };
    return ColumnsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/report-columns/type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypePipe = (function () {
    function TypePipe() {
    }
    TypePipe.prototype.transform = function (value, args) {
        if (value === 'S') {
            return 'String';
        }
        else if (value === 'D') {
            return 'Date';
        }
        else if (value === 'I') {
            return 'Integer';
        }
        else if (value === 'F') {
            return 'Decimal';
        }
        else if (value === 'A') {
            return 'Date Time';
        }
        else if (value === 'T') {
            return 'Time';
        }
        return null;
    };
    TypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'type'
        })
    ], TypePipe);
    return TypePipe;
}());



/***/ }),

/***/ "../../../../../src/app/reports/query.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QueryPipe = (function () {
    function QueryPipe() {
    }
    QueryPipe.prototype.transform = function (value, args) {
        return value.substring(0, 50) + '...';
    };
    QueryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'query'
        })
    ], QueryPipe);
    return QueryPipe;
}());



/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    position: fixed;\r\n    height:100%;\r\n    width:98%;\r\n}\r\n\r\n.page-container {\r\n    padding:10px;\r\n}\r\n\r\n.page-title{\r\n   font-family:   Roboto,\"Helvetica Neue\",sans-serif;\r\n   margin:0;\r\n}\r\n\r\n\r\n.add-button {\r\n    position:absolute;\r\n    top:100px;\r\n    right:95px\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n\r\n    <button mat-fab (click)=\"addEditReport(reportId)\" color=\"primary\"  matTooltip=\"Add Report\" class=\"add-button\">\r\n        <mat-icon >add</mat-icon>\r\n      </button>\r\n      <h3 class=\"page-title\">Registered Reports </h3>\r\n\r\n\r\n\r\n<br><br>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n      <mat-progress-bar *ngIf=\"loading\"\r\n          class=\"example-margin\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\">\r\n      </mat-progress-bar>\r\n      <mat-table #table [dataSource]=\"datasource\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> NAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n\r\n        <ng-container matColumnDef=\"query\">\r\n            <mat-header-cell *matHeaderCellDef> QUERY </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\" style=\"padding-right:10px\" [matTooltip]=\"element.query\"> {{element.query | query }} </mat-cell>\r\n          </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"type\">\r\n          <mat-header-cell *matHeaderCellDef>DB TYPE </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.dataSource.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"sfdctype\">\r\n          <mat-header-cell *matHeaderCellDef>Force TYPE </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.sfdcDataSource.name}} </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"createdBy\">\r\n          <mat-header-cell *matHeaderCellDef> CREATED BY </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.createdBy}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <mat-header-cell *matHeaderCellDef> ACTIONS </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" class=\"button-row\">\r\n                  <button mat-mini-fab matTooltip=\"view columns\" color=\"primary\"  [routerLink]=\"['/columns', element.reportId]\">\r\n                    <mat-icon >view_column</mat-icon>\r\n                  </button>\r\n                  <button mat-mini-fab style=\"background-color: #18BC9C\"  matTooltip=\"run report\" (click)=\"runReport(element.reportId)\">\r\n                    <mat-icon >play_arrow</mat-icon>\r\n                  </button>\r\n                  <button mat-mini-fab style=\"background-color: #69f0ae\"  matTooltip=\"history\" [routerLink]=\"['/history', element.reportId]\">\r\n                      <mat-icon >history</mat-icon>\r\n                    </button>\r\n                  <button mat-mini-fab color=\"accent\" matTooltip=\"edit report\" (click)=\"addEditReport(element.reportId)\">\r\n                      <mat-icon >create</mat-icon>\r\n                    </button>\r\n                  <button mat-mini-fab color=\"warn\" matTooltip=\"delete report\" (click)=\"delete(element.reportId)\">\r\n                      <mat-icon >delete_forever</mat-icon>\r\n                    </button>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* unused harmony export ReportsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_report_add_report_component__ = __webpack_require__("../../../../../src/app/add-report/add-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportsComponent = (function () {
    function ReportsComponent(analyticsService, dialog, snackBar) {
        this.analyticsService = analyticsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.datasource = new ReportsDataSource();
        this.displayedColumns = ['name', 'query', 'type', 'createdBy', 'actions'];
        this.loading = true;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyticsService.getReports().subscribe(function (data) {
            reports = data;
            _this.datasource = new ReportsDataSource();
            _this.loading = false;
        });
    };
    ReportsComponent.prototype.delete = function (reportId) {
        var _this = this;
        this.loading = true;
        this.analyticsService.deleteReport(+reportId).subscribe(function (data) {
            reports = data;
            _this.datasource = new ReportsDataSource();
            _this.loading = false;
            _this.snackBar.open('Report Deleted', null, {
                duration: 1000
            });
        });
    };
    ReportsComponent.prototype.runReport = function (reportId) {
        var _this = this;
        this.analyticsService.runReport(+reportId)
            .subscribe(function (result) {
            _this.snackBar.open('Report triggered', null, {
                duration: 1000
            });
        });
    };
    ReportsComponent.prototype.addEditReport = function (reportId) {
        var _this = this;
        var dialogRef;
        if (reportId) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_report_add_report_component__["a" /* AddReportComponent */], {
                width: '500px', data: { reportId: reportId }
            });
        }
        else {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_report_add_report_component__["a" /* AddReportComponent */], {
                width: '500px'
            });
        }
        dialogRef.afterClosed().subscribe(function (refreshValues) {
            console.log('The dialog was closed ' + refreshValues);
            if (refreshValues) {
                _this.loading = true;
                _this.analyticsService.getReports().subscribe(function (data) {
                    reports = data;
                    _this.datasource = new ReportsDataSource();
                    _this.loading = false;
                });
            }
        });
    };
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reports',
            template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */]])
    ], ReportsComponent);
    return ReportsComponent;
}());

var reports = [];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var ReportsDataSource = (function (_super) {
    __extends(ReportsDataSource, _super);
    function ReportsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(private siteId:string, private adminService:AdminService){
      super();
    }*/
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ReportsDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(reports);
    };
    ReportsDataSource.prototype.disconnect = function () { };
    return ReportsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/sfdcdatasource/sfdcdatasource.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cdk-overlay-pane.example-container {\r\n    position: relative!important;\r\n  }\r\n  .close.mat-button {\r\n    position: absolute;\r\n    float: right;\r\n    top: 0;\r\n    right: 0;\r\n    padding: 5px;\r\n    line-height: 14px;\r\n    min-width: auto;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sfdcdatasource/sfdcdatasource.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-container\">\r\n    <button mat-fab (click)=\"addDatabase(dsId)\" color=\"primary\"  matTooltip=\"Add SFDC Connection\" style=\"position:fixed;top:95px;right:95px\">\r\n        <mat-icon >add</mat-icon>\r\n      </button>\r\n\r\n      <h3 class=\"page-title\">Registered SFDC Connections</h3>\r\n\r\n\r\n\r\n\r\n\r\n<br><br>\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n      <mat-progress-bar *ngIf=\"loading\"\r\n          class=\"example-margin\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\">\r\n      </mat-progress-bar>\r\n      <mat-table #table [dataSource]=\"datasource\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> NAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"description\">\r\n            <mat-header-cell *matHeaderCellDef> DESCRIPTION </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> {{element.description}} </mat-cell>\r\n          </ng-container>\r\n\r\n        <ng-container matColumnDef=\"url\">\r\n          <mat-header-cell *matHeaderCellDef> URL </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.url}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"username\">\r\n          <mat-header-cell *matHeaderCellDef> USERNAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.username}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"password\">\r\n          <mat-header-cell *matHeaderCellDef> PASSWORD </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> *********** </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <mat-header-cell *matHeaderCellDef> ACTIONS </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\" class=\"button-row\">\r\n\r\n                    <button mat-mini-fab color=\"accent\" matTooltip=\"Edit Data Source\" (click)=\"addDatabase(element.dsId)\">\r\n                        <mat-icon >create</mat-icon>\r\n                      </button>\r\n                      <button mat-mini-fab color=\"warn\" matTooltip=\"Delete Data Source\" (click)=\"delete(element.dsId)\">\r\n                          <mat-icon >delete_forever</mat-icon>\r\n                        </button>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sfdcdatasource/sfdcdatasource.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SfdcdatasourceComponent; });
/* unused harmony export DsDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analytics_service__ = __webpack_require__("../../../../../src/app/analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_sfdcdatasource_add_sfdcdatasource_component__ = __webpack_require__("../../../../../src/app/add-sfdcdatasource/add-sfdcdatasource.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SfdcdatasourceComponent = (function () {
    function SfdcdatasourceComponent(analyticsService, dialog, snackBar) {
        this.analyticsService = analyticsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.datasource = new DsDataSource();
        this.displayedColumns = ['name', 'description', 'url', 'username', 'password', 'actions'];
        this.loading = true;
    }
    SfdcdatasourceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.analyticsService.getForceDatabases().subscribe(function (data) {
            dataSources = data;
            _this.datasource = new DsDataSource();
            _this.loading = false;
        });
    };
    SfdcdatasourceComponent.prototype.delete = function (dsId) {
        var _this = this;
        this.loading = true;
        this.analyticsService.deleteForceDatabase(+dsId).subscribe(function (data) {
            dataSources = data;
            _this.datasource = new DsDataSource();
            _this.loading = false;
            _this.snackBar.open('Data Source Deleted', null, {
                duration: 1000
            });
        });
    };
    SfdcdatasourceComponent.prototype.addDatabase = function (dsId) {
        var _this = this;
        var dialogRef;
        if (dsId) {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_sfdcdatasource_add_sfdcdatasource_component__["a" /* AddSfdcdatasourceComponent */], {
                width: '500px', data: { dsId: dsId }
            });
        }
        else {
            dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_sfdcdatasource_add_sfdcdatasource_component__["a" /* AddSfdcdatasourceComponent */], {
                width: '500px'
            });
        }
        dialogRef.afterClosed().subscribe(function (refreshValues) {
            console.log('The dialog was closed ' + refreshValues);
            if (refreshValues) {
                _this.loading = true;
                _this.analyticsService.getForceDatabases().subscribe(function (data) {
                    dataSources = data;
                    _this.datasource = new DsDataSource();
                    _this.loading = false;
                });
            }
        });
    };
    SfdcdatasourceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sfdcdatasource',
            template: __webpack_require__("../../../../../src/app/sfdcdatasource/sfdcdatasource.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sfdcdatasource/sfdcdatasource.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__analytics_service__["a" /* AnalyticsService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */]])
    ], SfdcdatasourceComponent);
    return SfdcdatasourceComponent;
}());

var dataSources = [];
/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
var DsDataSource = (function (_super) {
    __extends(DsDataSource, _super);
    function DsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*constructor(private siteId:string, private adminService:AdminService){
      super();
    }*/
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    DsDataSource.prototype.connect = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(dataSources);
    };
    DsDataSource.prototype.disconnect = function () { };
    return DsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    name: 'default',
    baseUrl: 'http://localhost:8080/analytics/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map