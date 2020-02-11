webpackJsonp([9],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcionamentoResumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_acionamento_prov_acionamento_prov__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acionamento_detalhes_acionamento_detalhes__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_DatasModel__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcionamentoResumoPage = /** @class */ (function () {
    function AcionamentoResumoPage(navCtrl, navParams, loadingCtrl, acionamentoProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.acionamentoProvider = acionamentoProvider;
        this.alertCtrl = alertCtrl;
        this.now = new Date();
        this.loader = this.loadingCtrl.create();
        this.cont = this.objAcionamento;
        this.obterdados();
    }
    AcionamentoResumoPage.prototype.selecionado = function (valor) {
        var data = new Date();
        if (this.dat == null || this.dat == undefined) {
            var da = new __WEBPACK_IMPORTED_MODULE_4__models_DatasModel__["a" /* DataModel */];
            da.dataIni = data;
            da.dataFim = data;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acionamento_detalhes_acionamento_detalhes__["a" /* AcionamentoDetalhesPage */], { id: valor, dataIni: data.toLocaleDateString(), dataFim: data.toLocaleDateString() });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acionamento_detalhes_acionamento_detalhes__["a" /* AcionamentoDetalhesPage */], { id: valor, dataIni: this.dat.dataIni, dataFim: this.dat.dataFim });
        }
        console.log("TESTE");
    };
    AcionamentoResumoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcionamentoResumoPage');
    };
    AcionamentoResumoPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "<div class=\"custom-spinner-container style:text-align:center\">\n                <div class=\"custom-spinner-box\"> Aguarde...</div>\n              </div>",
        });
        this.loader.present();
    };
    AcionamentoResumoPage.prototype.obterdados = function () {
        var _this = this;
        this.presentLoading();
        var contId = this.navParams.get('id');
        this.acionamentoProvider.getAcionamentoResumo(contId).subscribe(function (valor) {
            _this.objAcionamento = valor;
            if (valor == null) {
                _this.loader.dismiss();
                _this.presentAlert();
            }
            console.log(_this.objAcionamento);
            _this.loader.dismiss();
        }, function () { _this.presentAlert(); });
    };
    AcionamentoResumoPage.prototype.obterdadosComData = function (dataIni, dataFim) {
        var _this = this;
        this.presentLoading();
        var contId = this.navParams.get('id');
        this.acionamentoProvider.getAcionamentoResumoComData(contId, dataIni, dataFim).subscribe(function (valor) {
            _this.objAcionamento = valor;
            if (valor == null) {
                _this.presentAlert();
            }
        }, function () { console.log("Erro"); });
    };
    AcionamentoResumoPage.prototype.getColor = function (QuantidadeTotal) {
        if (QuantidadeTotal >= 500) {
            return 'green';
        }
        else if (QuantidadeTotal <= 499 && QuantidadeTotal >= 100) {
            return 'orange  ';
        }
        if (QuantidadeTotal < 99) {
            return 'Red';
        }
    };
    AcionamentoResumoPage.prototype.presentPrompt = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Período',
            inputs: [
                {
                    name: 'dataIni',
                    type: "date",
                },
                {
                    name: 'dataFim',
                    type: 'date'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buscar',
                    handler: function (data) {
                        if (true) {
                            _this.dat = data;
                            _this.obterdadosComData(_this.dat.dataIni, _this.dat.dataFim);
                            _this.loader.dismiss();
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    AcionamentoResumoPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Não encontrado!',
            subTitle: 'O período selecionado não possui registros.',
            buttons: ['Fechar'],
        });
        this.loader.dismiss();
        alert.present();
    };
    AcionamentoResumoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acionamento-resumo',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\acionamento-resumo\acionamento-resumo.html"*/'<!--\n\n  Generated template for the AcionamentoResumoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Resumo de Ocorrências</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content >\n\n\n\n\n\n  <ion-grid style="background-color: darkcyan">\n\n    <ion-row>\n\n      <ion-col col-8></ion-col>\n\n      <ion-col col-3><button ion-button (click)="presentPrompt()" class="buttonIon">Período</button></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n<ion-item padding>\n\n\n\n  <ion-list >\n\n  <button ion-item *ngFor="let item of objAcionamento"  (click)="selecionado(item.AcaoId)" >\n\n\n\n  <ion-icon  name="" class="box" [ngStyle]="{\'background-color\':getColor(item.QuantidadeTotal)}"></ion-icon> - {{ item.Descricao }} - <strong>({{item.QuantidadeTotal}})</strong>\n\n\n\n  </button>\n\n</ion-list>\n\n\n\n</ion-item>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\acionamento-resumo\acionamento-resumo.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_acionamento_prov_acionamento_prov__["a" /* AcionamentoProvProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_acionamento_prov_acionamento_prov__["a" /* AcionamentoProvProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AcionamentoResumoPage);
    return AcionamentoResumoPage;
}());

//# sourceMappingURL=acionamento-resumo.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcionamentoDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_acionamento_prov_acionamento_prov__ = __webpack_require__(79);
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
 * Generated class for the AcionamentoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcionamentoDetalhesPage = /** @class */ (function () {
    function AcionamentoDetalhesPage(navCtrl, navParams, loadingCtrl, acionamentoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.acionamentoProvider = acionamentoProvider;
        this.loader = this.loadingCtrl.create();
        this.cont = this.objAcionamento;
        this.desc = this.objDescricao;
        this.obterdados();
    }
    AcionamentoDetalhesPage_1 = AcionamentoDetalhesPage;
    AcionamentoDetalhesPage.prototype.selecionado = function (valor) {
        console.log(valor);
        this.navCtrl.push(AcionamentoDetalhesPage_1, { id: valor });
        console.log();
    };
    AcionamentoDetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcionamentoDetalhePage');
    };
    AcionamentoDetalhesPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "<div class=\"custom-spinner-container style:text-align:center\">\n                <div class=\"custom-spinner-box\"> Aguarde...</div>\n              </div>",
        });
        this.loader.present();
    };
    AcionamentoDetalhesPage.prototype.obterdados = function () {
        var _this = this;
        this.presentLoading();
        var contId = this.navParams.get('id');
        var dataIni = this.navParams.get('dataIni');
        var dataFim = this.navParams.get('dataFim');
        var data = new Date().toLocaleDateString();
        if ((dataIni == undefined || dataFim == undefined)) {
            dataIni = data;
            dataFim = data;
        }
        this.acionamentoProvider.getAcionamentoDetalhe(contId, dataIni, dataFim).subscribe(function (valor) {
            _this.objAcionamento = valor;
            _this.loader.dismiss();
            _this.objDescricao = _this.objAcionamento.DescricaoGeral;
            console.log(_this.objAcionamento);
        }, function () { console.log("Erro"); });
    };
    AcionamentoDetalhesPage.prototype.getColor = function (QuantidadeTotal) {
        if (QuantidadeTotal >= 500) {
            return 'green';
        }
        else if (QuantidadeTotal <= 499 && QuantidadeTotal >= 100) {
            return 'orange  ';
        }
        if (QuantidadeTotal < 99) {
            return 'Red';
        }
    };
    AcionamentoDetalhesPage = AcionamentoDetalhesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acionamento-detalhes',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\acionamento-detalhes\acionamento-detalhes.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Acionamento por Operador</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n\n\n  <ion-content  >\n\n\n\n\n\n      <ion-grid style="background-color: darkcyan">\n\n          <ion-row>\n\n            <ion-col col-8></ion-col>\n\n            <ion-col col-3><button ion-button (click)="obterdados()" class="buttonIon">Atualizar</button></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n\n\n            <ion-item *ngIf="objAcionamento"  >\n\n\n\n                <ion-grid style="background-color: darkcyan; color:white">\n\n                    <ion-row>\n\n\n\n                      <ion-col col-8>{{objAcionamento.Descricao}}</ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col col-3>TOTAL: <strong>{{objAcionamento.QuantidadeTotal}}</strong></ion-col>\n\n                    </ion-row>\n\n                  </ion-grid>\n\n\n\n\n\n                 <!-- <div >\n\n              <ion-grid>\n\n                <ion-row style="font-size:20px">\n\n                    <ion-col col-9>\n\n                     {{objAcionamento.Descricao}}\n\n                     </ion-col>\n\n                     <ion-col col-3>\n\n                        <button ion-button default color="secondary" (click)="obterdados()" round><ion-icon name="md-refresh"></ion-icon></button>\n\n                     </ion-col>\n\n                </ion-row>\n\n                <ion-row style="font-size:20px">\n\n                    <ion-col col-8>\n\n                        TOTAL:  <strong>{{objAcionamento.QuantidadeTotal}}</strong>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n              </ion-grid>\n\n            </div> -->\n\n            </ion-item>\n\n                <ion-item *ngIf="objAcionamento">\n\n                  <ion-grid *ngFor="let item of objAcionamento.DescricaoGeral">\n\n                      <ion-row>\n\n                            <ion-col col-10>{{item.Usuario}}</ion-col>\n\n                            <ion-col col-2><strong style="font-size:18px">({{item.QuantidadeUsuario}})</strong></ion-col>\n\n                            <hr>\n\n                      </ion-row>\n\n                    </ion-grid>\n\n            </ion-item>\n\n\n\n\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\acionamento-detalhes\acionamento-detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_acionamento_prov_acionamento_prov__["a" /* AcionamentoProvProvider */]])
    ], AcionamentoDetalhesPage);
    return AcionamentoDetalhesPage;
    var AcionamentoDetalhesPage_1;
}());

//# sourceMappingURL=acionamento-detalhes.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcionamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acionamento_resumo_acionamento_resumo__ = __webpack_require__(103);
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
 * Generated class for the AcionamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcionamentoPage = /** @class */ (function () {
    function AcionamentoPage(navCtrl, navParams, contratanteProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contratanteProvider = contratanteProvider;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.cont = this.contModel;
        this.obterdados();
    }
    AcionamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcionamentoPage');
    };
    AcionamentoPage.prototype.obterdados = function () {
        var _this = this;
        this.contratanteProvider.getListaContratante().subscribe(function (valor) {
            console.log("request");
            console.log(valor);
            _this.contModel = valor;
        }, function () {
            console.log("Erro");
        });
    };
    AcionamentoPage.prototype.selecionado = function (valor) {
        var data = new Date();
        console.log(valor);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acionamento_resumo_acionamento_resumo__["a" /* AcionamentoResumoPage */], { id: valor, datIni: data.toLocaleDateString, dataFim: data.toLocaleDateString });
        console.log();
    };
    AcionamentoPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Não encontrado!',
            subTitle: 'Sem registro nos ultimos 10 dias.',
            buttons: ['Fechar']
        });
        alert.present();
    };
    AcionamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acionamento',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\acionamento\acionamento.html"*/'<!--\n\n  Generated template for the AcionamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left;"><ion-icon name="ios-paper"></ion-icon> Acionamentos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-searchbar placeholder="Digite o contratante..."\n\n\n\n                    clearInput style="background-color: darkcyan;">\n\n\n\n    </ion-searchbar>\n\n\n\n    <ion-list>\n\n          <ion-item *ngFor="let item of contModel"\n\n            (click)="selecionado(item.ContId)" >\n\n\n\n            <ion-icon name="ios-arrow-dropright-circle"></ion-icon> - {{item.Fantasia}}\n\n          </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\acionamento\acionamento.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__["a" /* ContratanteProvProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__["a" /* ContratanteProvProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AcionamentoPage);
    return AcionamentoPage;
}());

//# sourceMappingURL=acionamento.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcordoDetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_acordo_prov_acordo_prov__ = __webpack_require__(165);
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
 * Generated class for the AcordoDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AcordoDetalhesPage = /** @class */ (function () {
    function AcordoDetalhesPage(navCtrl, navParams, loadingCtrl, acordoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.acordoProvider = acordoProvider;
        this.loader = this.loadingCtrl.create();
        this.obterdados();
    }
    AcordoDetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcordoDetalhesPage');
    };
    AcordoDetalhesPage.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "<div class=\"custom-spinner-container style:text-align:center\">\n                <div class=\"custom-spinner-box\"> Aguarde...</div>\n              </div>",
        });
        this.loader.present();
    };
    AcordoDetalhesPage.prototype.obterdados = function () {
        var _this = this;
        this.presentLoading();
        var contId = this.navParams.get('id');
        this.acordoProvider.getAcordoSintetico(contId).subscribe(function (valor) { _this.objAcordo = valor; _this.loader.dismiss(); }, function () { console.log("Erro"); });
    };
    AcordoDetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acordo-detalhes',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\acordo-detalhes\acordo-detalhes.html"*/'<!--\n\n  Generated template for the AcordoDetalhesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Resumo de Acordos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content   style="margin-top:auto">\n\n\n\n        <ion-grid style="background-color: darkcyan">\n\n          <ion-row>\n\n            <ion-col col-8></ion-col>\n\n            <ion-col col-3><button ion-button (click)="obterdados()" class="buttonIon">Atualizar</button></ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n\n\n    <ion-card *ngIf="objAcordo">\n\n\n\n      <ion-item class="item">\n\n          <ion-card-title class="card-title-md" style="background-color:darkcyan">\n\n              <h2 style="text-align: center; color:rgb(255, 255, 255); padding: 1px">{{objAcordo.Empresa}}</h2>\n\n          </ion-card-title>\n\n                  <hr>\n\n                  <h2><strong>Valor Mensal:</strong></h2>\n\n                  <strong style="color:darkcyan; font-size: 20px">R${{objAcordo.ValorMes}}</strong>\n\n                  <br>\n\n                  <br>\n\n                  <h4><strong>-Quantidade de acordos este mês: </strong>\n\n                  <strong style="color:darkcyan; font-size: 20px">{{objAcordo.QuantidadeMes}}</strong></h4>\n\n                  <br>\n\n                  <hr>\n\n                  <h2><strong>Valor Hoje: </strong></h2>\n\n                  <strong style="color:darkcyan; font-size: 20px">R$ {{objAcordo.ValorHoje}}</strong>\n\n                  <br>\n\n                  <br>\n\n                  <h4><strong>-Quantidade de acordos hoje: </strong><strong style="color:darkcyan; font-size: 20px">{{objAcordo.QuantidadeHoje}}</strong></h4>\n\n                  <br>\n\n                  <hr>\n\n      </ion-item>\n\n      <!-- <ion-item style="margin-left:190px;">\n\n          <button ion-button default color="secondary" (click)="obterdados()" round style="text-align:left">Atualizar</button>\n\n      </ion-item> -->\n\n\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\acordo-detalhes\acordo-detalhes.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_acordo_prov_acordo_prov__["a" /* AcordoProvProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_acordo_prov_acordo_prov__["a" /* AcordoProvProvider */]])
    ], AcordoDetalhesPage);
    return AcordoDetalhesPage;
}());

//# sourceMappingURL=acordo-detalhes.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcordoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__acordo_detalhes_acordo_detalhes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AcordoPage = /** @class */ (function () {
    function AcordoPage(navCtrl, navParams, contratanteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contratanteProvider = contratanteProvider;
        this.searchQuery = '';
        this.queryText = '';
        this.cont = this.contModel;
        this.obterdados();
    }
    AcordoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AcordoPage');
    };
    AcordoPage.prototype.obterdados = function () {
        var _this = this;
        this.contratanteProvider.getListaContratante().subscribe(function (valor) {
            console.log("request");
            console.log(valor);
            _this.contModel = valor;
        }, function () {
            console.log("Erro");
        });
    };
    AcordoPage.prototype.filterContratante = function (co) {
        var val = co.target.value;
        if (val && val.trim() != '') {
            this.cont = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.values(this.todosCont);
            this.cont = this.cont.filter(function (fant) {
                return (fant.Fantasia.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.cont = this.todosCont;
        }
    };
    AcordoPage.prototype.selecionado = function (valor) {
        console.log(valor);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__acordo_detalhes_acordo_detalhes__["a" /* AcordoDetalhesPage */], { id: valor });
        console.log();
    };
    AcordoPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.contModel;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contModel = this.contModel.filter(function (item) {
                return (item.Fantasia.toLowerCase().includes(val.toLowerCase()));
            });
        }
    };
    AcordoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acordo',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\acordo\acordo.html"*/'<!--\n\n  Generated template for the AcordoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left"> <ion-icon name="ios-thumbs-up"></ion-icon> ACORDOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-searchbar placeholder="Digite o contratante..."\n\n                    clearInput>\n\n\n\n    </ion-searchbar>\n\n    <ion-list>\n\n          <ion-item *ngFor="let item of contModel" (click)="selecionado(item.ContId)" >\n\n            {{ item.Fantasia }}\n\n          </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\acordo\acordo.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__["a" /* ContratanteProvProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contratante_prov_contratante_prov__["a" /* ContratanteProvProvider */]])
    ], AcordoPage);
    return AcordoPage;
}());

//# sourceMappingURL=acordo.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the BoletoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BoletoPage = /** @class */ (function () {
    function BoletoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BoletoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BoletoPage');
    };
    BoletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-boleto',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\boleto\boleto.html"*/'<!--\n\n  Generated template for the BoletoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left"><ion-icon name="ios-thumbs-up"></ion-icon> BOLETOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\boleto\boleto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BoletoPage);
    return BoletoPage;
}());

//# sourceMappingURL=boleto.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevedorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the DevedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevedorPage = /** @class */ (function () {
    function DevedorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DevedorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevedorPage');
    };
    DevedorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devedor',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\devedor\devedor.html"*/'<!--\n\n  Generated template for the DevedorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left"><ion-icon name="ios-contact"></ion-icon> DEVEDOR</ion-title> \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\devedor\devedor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DevedorPage);
    return DevedorPage;
}());

//# sourceMappingURL=devedor.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the FilaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilaPage = /** @class */ (function () {
    function FilaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilaPage');
    };
    FilaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fila',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\fila\fila.html"*/'<!--\n\n  Generated template for the FilaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left"><ion-icon name="md-trending-up"></ion-icon> FILA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\fila\fila.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FilaPage);
    return FilaPage;
}());

//# sourceMappingURL=fila.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
 * Generated class for the PagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagamentoPage = /** @class */ (function () {
    function PagamentoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PagamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagamentoPage');
    };
    PagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagamento',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\pagamento\pagamento.html"*/'<!--\n\n  Generated template for the PagamentoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title> <ion-icon name="logo-usd"> </ion-icon> PAGAMENTOS</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\pagamento\pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PagamentoPage);
    return PagamentoPage;
}());

//# sourceMappingURL=pagamento.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acionamento-detalhes/acionamento-detalhes.module": [
		290,
		8
	],
	"../pages/acionamento-resumo/acionamento-resumo.module": [
		289,
		7
	],
	"../pages/acionamento/acionamento.module": [
		291,
		6
	],
	"../pages/acordo-detalhes/acordo-detalhes.module": [
		292,
		5
	],
	"../pages/acordo/acordo.module": [
		293,
		4
	],
	"../pages/boleto/boleto.module": [
		294,
		3
	],
	"../pages/devedor/devedor.module": [
		295,
		2
	],
	"../pages/fila/fila.module": [
		296,
		1
	],
	"../pages/pagamento/pagamento.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcordoProvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
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
  Generated class for the AcordoProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AcordoProvProvider = /** @class */ (function () {
    function AcordoProvProvider(http) {
        this.http = http;
        this.API = "http://179.185.160.70:1050/api/Acordo/";
        console.log('Hello AcordoproviderProvider Provider');
    }
    AcordoProvProvider.prototype.getAcordoSintetico = function (id) {
        return this.http.get(this.API + id);
    };
    AcordoProvProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AcordoProvProvider);
    return AcordoProvProvider;
}());

//# sourceMappingURL=acordo-prov.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title style="text-align: left" >Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n\n\n   <ion-item class="item">\n\n      <img src="assets/imgs/jca.jpg">\n\n\n\n      <br>\n\n      <h3 style="text-align:center"> JCA Soluções & Sistemas</h3>\n\n   </ion-item>\n\n\n\n\n\n </ion-card>\n\n<br>\n\n <ion-card>\n\n      <ion-item class="item">\n\n      <img src="assets/imgs/back3.jpg">\n\n\n\n      <br>\n\n      <h3 style="text-align:center"> JCA Soluções & Sistemas</h3>\n\n   </ion-item>\n\n </ion-card>\n\n\n\n <br>\n\n <ion-card>\n\n      <ion-item class="item">\n\n      <img src="assets/imgs/back3.jpg">\n\n\n\n      <br>\n\n      <h3 style="text-align:center"> JCA Soluções & Sistemas</h3>\n\n   </ion-item>\n\n </ion-card>\n\n  <!-- <button ion-button secondary menuToggle form="end">Toggle Menu</button> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_acordo_acordo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_boleto_boleto__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pagamento_pagamento__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acionamento_acionamento__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_devedor_devedor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_fila_fila__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_contratante_prov_contratante_prov__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_acordo_prov_acordo_prov__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_acordo_detalhes_acordo_detalhes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_acionamento_prov_acionamento_prov__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_acionamento_resumo_acionamento_resumo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_acionamento_detalhes_acionamento_detalhes__ = __webpack_require__(104);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_acordo_acordo__["a" /* AcordoPage */], __WEBPACK_IMPORTED_MODULE_16__pages_acordo_detalhes_acordo_detalhes__["a" /* AcordoDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_boleto_boleto__["a" /* BoletoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pagamento_pagamento__["a" /* PagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acionamento_acionamento__["a" /* AcionamentoPage */], __WEBPACK_IMPORTED_MODULE_18__pages_acionamento_resumo_acionamento_resumo__["a" /* AcionamentoResumoPage */], __WEBPACK_IMPORTED_MODULE_19__pages_acionamento_detalhes_acionamento_detalhes__["a" /* AcionamentoDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_devedor_devedor__["a" /* DevedorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fila_fila__["a" /* FilaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acionamento-resumo/acionamento-resumo.module#AcionamentoResumoPageModule', name: 'AcionamentoResumoPage', segment: 'acionamento-resumo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acionamento-detalhes/acionamento-detalhes.module#AcionamentoDetalhesPageModule', name: 'AcionamentoDetalhesPage', segment: 'acionamento-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acionamento/acionamento.module#AcionamentoPageModule', name: 'AcionamentoPage', segment: 'acionamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acordo-detalhes/acordo-detalhes.module#AcordoDetalhesPageModule', name: 'AcordoDetalhesPage', segment: 'acordo-detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/acordo/acordo.module#AcordoPageModule', name: 'AcordoPage', segment: 'acordo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/boleto/boleto.module#BoletoPageModule', name: 'BoletoPage', segment: 'boleto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/devedor/devedor.module#DevedorPageModule', name: 'DevedorPage', segment: 'devedor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fila/fila.module#FilaPageModule', name: 'FilaPage', segment: 'fila', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagamento/pagamento.module#PagamentoPageModule', name: 'PagamentoPage', segment: 'pagamento', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_acordo_acordo__["a" /* AcordoPage */], __WEBPACK_IMPORTED_MODULE_16__pages_acordo_detalhes_acordo_detalhes__["a" /* AcordoDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_boleto_boleto__["a" /* BoletoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pagamento_pagamento__["a" /* PagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acionamento_acionamento__["a" /* AcionamentoPage */], __WEBPACK_IMPORTED_MODULE_18__pages_acionamento_resumo_acionamento_resumo__["a" /* AcionamentoResumoPage */], __WEBPACK_IMPORTED_MODULE_19__pages_acionamento_detalhes_acionamento_detalhes__["a" /* AcionamentoDetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_devedor_devedor__["a" /* DevedorPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fila_fila__["a" /* FilaPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_contratante_prov_contratante_prov__["a" /* ContratanteProvProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_acordo_prov_acordo_prov__["a" /* AcordoProvProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_acionamento_prov_acionamento_prov__["a" /* AcionamentoProvProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataModel; });
var DataModel = /** @class */ (function () {
    function DataModel() {
    }
    return DataModel;
}());

//# sourceMappingURL=DatasModel.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_acordo_acordo__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pagamento_pagamento__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_acionamento_acionamento__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_fila_fila__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_devedor_devedor__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_boleto_boleto__ = __webpack_require__(108);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "ios-home" },
            // { title: 'List', component: ListPage },
            { title: 'Acordos', component: __WEBPACK_IMPORTED_MODULE_5__pages_acordo_acordo__["a" /* AcordoPage */], icon: "ios-thumbs-up" },
            { title: 'Pagamentos', component: __WEBPACK_IMPORTED_MODULE_6__pages_pagamento_pagamento__["a" /* PagamentoPage */], icon: "logo-usd" },
            { title: 'Acionamentos', component: __WEBPACK_IMPORTED_MODULE_7__pages_acionamento_acionamento__["a" /* AcionamentoPage */], icon: "ios-paper" },
            { title: 'Filas', component: __WEBPACK_IMPORTED_MODULE_8__pages_fila_fila__["a" /* FilaPage */], icon: "md-trending-up" },
            { title: 'Pesquisa Devedor', component: __WEBPACK_IMPORTED_MODULE_9__pages_devedor_devedor__["a" /* DevedorPage */], icon: "ios-contact" },
            { title: "Boletos", component: __WEBPACK_IMPORTED_MODULE_10__pages_boleto_boleto__["a" /* BoletoPage */], icon: "ios-mail" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\AppsIonic\ActyonMobile\src\app\app.html"*/'<ion-menu [content]="content">\n\n  \n\n  <ion-header class="hide-card">\n\n      \n\n          <img src="assets/imgs/actyon.png" class="custom-avatar"/>\n\n          <h1 style="margin-left: 5%;">Actyon Mobile</h1>\n\n          <hr>\n\n\n\n  </ion-header>\n\n\n\n  <ion-content class="lista" >\n\n    <ion-list >\n\n      <button class="lista" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n\n          {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\AppsIonic\ActyonMobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcionamentoProvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
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
  Generated class for the AcionamentoProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AcionamentoProvProvider = /** @class */ (function () {
    function AcionamentoProvProvider(http) {
        this.http = http;
        this.API = "http://179.185.160.70:1050/api/Acionamento/";
        this.API2 = "http://179.185.160.70:1050/api/Acionamento/detalhes/";
        console.log('Hello AcionamentoProvProvider Provider');
    }
    AcionamentoProvProvider.prototype.getAcionamentoResumo = function (id) {
        return this.http.get(this.API + id);
    };
    AcionamentoProvProvider.prototype.getAcionamentoResumoComData = function (id, dataIni, dataFim) {
        return this.http.get(this.API + "resumo/" + id + "?dataIni=" + dataIni + "&dataFim=" + dataFim);
    };
    AcionamentoProvProvider.prototype.getAcionamentoDetalhe = function (id, dataIni, dataFim) {
        return this.http.get(this.API2 + id + "?dataIni=" + dataIni + "&dataFim=" + dataFim);
    };
    AcionamentoProvProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AcionamentoProvProvider);
    return AcionamentoProvProvider;
}());

//# sourceMappingURL=acionamento-prov.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContratanteProvProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(46);
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
  Generated class for the ContratanteProvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ContratanteProvProvider = /** @class */ (function () {
    function ContratanteProvProvider(http) {
        this.http = http;
        this.API = "http://179.185.160.70:1050/api/Contratante";
        console.log('Hello ContratanteProvProvider Provider');
    }
    ContratanteProvProvider.prototype.getListaContratante = function () {
        return this.http.get(this.API);
    };
    ContratanteProvProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ContratanteProvProvider);
    return ContratanteProvProvider;
}());

//# sourceMappingURL=contratante-prov.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map