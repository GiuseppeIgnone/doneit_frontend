function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatboxChatboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Contacts -->\r\n<div class=\"container-fluid\">\r\n    <div id=\"test\">\r\n        <div id=\"content\">\r\n            <ul class=\"list-group list-group-flush\">\r\n                <div *ngFor=\"let p of personalCards\">\r\n                    <li *ngIf=\"username !== p.user.username\" class=\"list-group-item\" (click)=\"openChat(p)\"\r\n                        [ngClass]=\"{'bold': notifyMessageArrived(p)}\">\r\n                        <img [src]=\"p.base64StringImage\" class=\"md-avatar rounded-circle\" alt=\"avatar image\">\r\n                        {{p.user.username}}\r\n                        <span *ngIf=\" notifyMessageArrived(p)\" class=\"badge badge-danger ml-2\">+1</span>\r\n                    </li>\r\n                </div>\r\n            </ul>\r\n        </div>\r\n        <button class=\"btn light-blue darken-3 float btn-block\">Chat</button>\r\n    </div>\r\n</div>\r\n\r\n<!-- Box -->\r\n<div id=\"chat-content\" *ngIf=\"!closeChat\">\r\n\r\n    <div id=\"chat-inbox\" *ngIf=\"showChat\">\r\n\r\n        <div class=\"mesgs\">\r\n            <div class=\"msg_history\" #scrollMe>\r\n                <div class=\"incoming_msg\" *ngFor=\"let c of currentChat\">\r\n\r\n                    <div class=\"received_msg\" *ngIf=\"isReceived(c)\">\r\n                        <div class=\"received_withd_msg\">\r\n                            <p>{{c.content}}</p>\r\n                            <span class=\"time_date\"> </span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"outgoing_msg\" *ngIf=\"isSent(c)\">\r\n                        <div class=\"sent_msg\">\r\n                            <p>{{c.content}}</p>\r\n                            <span class=\"time_date\"></span>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"type_msg\">\r\n                <div class=\"input_msg_write\">\r\n                    <form>\r\n                        <div class=\"form-group\">\r\n                            <textarea class=\"form-control\" (keydown.enter)=\"sendMessage($event)\" name=\"message\"\r\n                                [(ngModel)]=\"message\" id=\"exampleFormControlTextarea3\" rows=\"2\"\r\n                                placeholder=\"Scrivi qualcosa\"></textarea>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"chat-bx\">\r\n        <div class=\"btn\">\r\n            <div class=\"row justify-content-between\">\r\n                <div class=\"col-lg-11 text-center\" (click)=\"handleChatBox()\">{{activeUser}}</div>\r\n                <div class=\"col-lg-1\"><i class=\"fa fa-times\" (click)=\"closeChatBox()\"></i></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\r\n    <div class=\"messaging\">\r\n        <div class=\"inbox_msg\">\r\n            <div class=\"inbox_people\">\r\n                <div class=\"headind_srch\">\r\n                    <div class=\"recent_heading\">\r\n                        <h4>Amici</h4>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"inbox_chat\">\r\n                    <div *ngFor=\"let p of personalCards; let i = index\">\r\n                        <div class=\"chat_list\" *ngIf=\"username !== p.user.username\"\r\n                            [ngClass]=\"{'active_chat': isActive(i)}\">\r\n                            <div class=\"chat_people\" (click)=\"getMessage(p, i)\">\r\n                                <div class=\"chat_img\"> <img class=\"md-avatar rounded-circle\" [src]=\"p.base64StringImage\"\r\n                                        alt=\"sunil\" height=\"30px\" width=\"30px\"> </div>\r\n                                <div class=\"chat_ib\">\r\n                                    <h5 [ngClass]=\"{'chat_ib_active': toBeRead(i)}\">\r\n                                        {{p.user.username}} <span class=\"chat_date\"></span>\r\n                                    </h5>\r\n                                    <p *ngIf=\"lastMessage[p.user.username]\" [ngClass]=\"{'chat_ib_active': toBeRead(i)}\">\r\n                                        {{lastMessage[p.user.username]}}</p>\r\n                                    <p *ngIf=\"!lastMessage[p.user.username]\">Conversazione con {{p.user.username}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mesgs\" *ngIf=\"showInboxMessage\">\r\n                <div class=\"msg_history\" #scrollMe>\r\n                    <div *ngFor=\" let c of chatMessage\">\r\n                        <div class=\"incoming_msg\">\r\n                            <div *ngIf=\"isReceived(c)\">\r\n                                <div class=\"incoming_msg_img\"> <img class=\"md-avatar rounded-circle\"\r\n                                        [src]=\"currentUser.base64StringImage\" alt=\"sunil\" height=\"30px\" width=\"30px\">\r\n                                </div>\r\n                                <div class=\"received_msg\">\r\n                                    <div class=\"received_withd_msg\">\r\n                                        <p>{{c.content}}</p>\r\n                                        <span class=\"time_date\"> 11:01 AM | June 9</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"outgoing_msg\" *ngIf=\"isSent(c)\">\r\n                            <div class=\"sent_msg\">\r\n                                <p>{{c.content}}</p>\r\n                                <span class=\"time_date\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"type_msg\">\r\n                    <div class=\"input_msg_write\">\r\n                        <form (ngSubmit)=\"sendMessage()\">\r\n                            <input type=\"text\" class=\"write_msg\" placeholder=\"Scrivi un messaggio\"\r\n                                [(ngModel)]=\"sendingMessage\" name=\"sendingMessage\" />\r\n                            <button class=\"msg_send_btn\" type=\"submit\"><i class=\"fa fa-paper-plane-o\"\r\n                                    aria-hidden=\"true\"></i></button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCompleteRegisterCompleteRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-around container-fluid no-gutters\">\r\n    <div class=\"col-lg-7 align-self-center\">\r\n        <div class=\"card\">\r\n\r\n            <div class=\"background\">\r\n            </div>\r\n\r\n            <div class=\"alert alert-success text-center\" role=\"alert\">\r\n                <h4 class=\"alert-heading\">Grazie {{personalCard.user.name}}!</h4>\r\n                <p>Ti sei appena iscritto a DoneIt! Hai guadagnato <b>180 CFU</b>.</p>\r\n                <hr>\r\n                <p class=\"mb-0\">Se ti va, puoi aggiungere qualcosa su di te.</p>\r\n            </div>\r\n\r\n\r\n\r\n            <form class=\"p-5\" action=\"#!\">\r\n\r\n\r\n\r\n\r\n                <div class=\"card-body\">\r\n                    <div class=\"row justify-content-around\">\r\n                        <div class=\"col-xl-4\">\r\n\r\n                            <input type=\"text\" id=\"defaultContactFormName\" class=\"form-control mb-4\"\r\n                                placeholder=\"Università\" name=\"university\" [(ngModel)]=\"personalCard.university\">\r\n\r\n\r\n                            <input type=\"email\" id=\"defaultContactFormEmail\" class=\"form-control mb-4\"\r\n                                placeholder=\"Facoltà\" name=\"faculty\" [(ngModel)]=\"personalCard.faculty\">\r\n                            <input type=\"number\" class=\"form-control mb-4\" placeholder=\"Telefono\" name=\"telephone\"\r\n                                [(ngModel)]=\"personalCard.telephone\">\r\n\r\n\r\n                            <div class=\"form-group\">\r\n                                <textarea class=\"form-control rounded-0\" id=\"exampleFormControlTextarea2\" rows=\"6\"\r\n                                    placeholder=\"Qualcosa su di te\" name=\"statusDescription\"\r\n                                    [(ngModel)]=\"personalCard.statusDescription\"></textarea>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-4 align-self-center\">\r\n\r\n\r\n                            <div class=\"row justify-content-center\">\r\n                                <img *ngIf=\"url\" id=\"profile_image\" [src]=\"url\" class=\"rounded-circle\" height=\"250px\"\r\n                                    width=\"250px\">\r\n                            </div>\r\n                            <form>\r\n\r\n\r\n                                <div class=\"custom-file\">\r\n                                    <input type=\"file\" accept=\"image/*\" class=\"custom-file-input\" id=\"customFile\"\r\n                                        (change)=\"addFile($event)\">\r\n                                    <label class=\"custom-file-label\" for=\"customFile\">Foto</label>\r\n\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"row justify-content-center\">\r\n                    <button class=\"btn light-blue darken-3\" (click)=\"completeRegister()\" type=\"button\">Conferma</button>\r\n\r\n                </div>\r\n\r\n\r\n            </form>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>error works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <form (ngSubmit)='handleEventCreation()'>\r\n        <fieldset class=\"form-group\">\r\n            <label>Titolo: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='eventPost.title'>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n            <label>Descrizione: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='eventPost.description'>\r\n        </fieldset>\r\n\r\n        \r\n        <fieldset class = \"form-group\">\r\n            <label>Data: </label>\r\n            <input type = \"date\" name = \"Data evento\" [(ngModel)] = \"eventPost.date\">\r\n        </fieldset>\r\n        \r\n        <fieldset class = \"form-group\">\r\n            <label>Luogo: </label>\r\n            <input type = \"text\" name = \"place\" [(ngModel)] = \"eventPost.place\" ngx-google-places-autocomplete [options]=\"{\r\n                types: [],\r\n                componentRestrictions: { country: 'IT' }\r\n                }\" #placesRef=\"ngx-places\"  (onAddressChange)=\"handleAddressChange($event)\"/>\r\n            \r\n        </fieldset>\r\n\r\n        <div style=\"text-align: right;\">\r\n            <button *ngIf=\"!todoId\" type=\"submit\" class=\"btn btn-success\">Crea</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\r\n<footer class=\"page-footer font-small blue fixed-bottom\">\r\n\r\n    <!-- Copyright -->\r\n    <div class=\"footer-copyright text-center py-3\">© 2020 Copyright:\r\n      <a href=\"https://mdbootstrap.com/education/bootstrap/\"> MDBootstrap.com</a>\r\n    </div>\r\n    <!-- Copyright -->\r\n  \r\n  </footer>\r\n  <!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeCarouselCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Card group -->\r\n<div class=\"carousel-item active\">\r\n    <!-- Card deck -->\r\n    <div class=\"card-deck\" style=\"height: 250px; width: 250px\">\r\n\r\n        <!-- Card -->\r\n        <div class=\"card mb-4\">\r\n\r\n            <!--Card image-->\r\n            <div class=\"view overlay\">\r\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/16.jpg\"\r\n                    alt=\"Card image cap\">\r\n                <a href=\"#!\">\r\n                    <div class=\"mask rgba-white-slight\"></div>\r\n                </a>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <!-- Card -->\r\n\r\n        <!-- Card -->\r\n        <div class=\"card mb-4\">\r\n\r\n            <!--Card image-->\r\n            <div class=\"view overlay\">\r\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/14.jpg\"\r\n                    alt=\"Card image cap\">\r\n                <a href=\"#!\">\r\n                    <div class=\"mask rgba-white-slight\"></div>\r\n                </a>\r\n            </div>\r\n\r\n            <!--Card content-->\r\n\r\n\r\n        </div>\r\n        <!-- Card -->\r\n\r\n        <!-- Card -->\r\n        <div class=\"card mb-4\">\r\n\r\n            <!--Card image-->\r\n            <div class=\"view overlay\">\r\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\"\r\n                    alt=\"Card image cap\">\r\n                <a href=\"#!\">\r\n                    <div class=\"mask rgba-white-slight\"></div>\r\n                </a>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n        <!-- Card -->\r\n\r\n        <div class=\"card mb-4\">\r\n\r\n            <!--Card image-->\r\n            <div class=\"view overlay\">\r\n                <img class=\"card-img-top\" src=\"https://mdbootstrap.com/img/Photos/Others/images/15.jpg\"\r\n                    alt=\"Card image cap\">\r\n                <a href=\"#!\">\r\n                    <div class=\"mask rgba-white-slight\"></div>\r\n                </a>\r\n            </div>\r\n\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- Card deck -->\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeCreateFormCreateFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div style=\"background-color: white;\">\r\n        <div class=\"card-body text-center\">\r\n            <select class=\"form-control\" (change)=\"showForm($event.target.value)\">\r\n                <option value=\"todo\">Todo</option>\r\n                <option value=\"event\">Evento</option>\r\n                <option>Storia</option>\r\n            </select>\r\n              <div *ngIf =\"todoResponseMessage == 6\" class=\"alert alert-success\" role=\"alert\">\r\n                Todo creato correttamente\r\n              </div>\r\n\r\n              <div *ngIf =\"todoResponseMessage == 15\" class=\"alert alert-danger\" role=\"alert\">\r\n                Non hai i cfu necessari per creare il todo\r\n              </div>\r\n\r\n              <div *ngIf =\"eventResponseMessage == 17\" class=\"alert alert-success\" role=\"alert\">\r\n                Evento creato correttamente\r\n              </div>\r\n              \r\n            <app-todo *ngIf=\"activatedForm == 'todo'\"></app-todo>\r\n            <app-event *ngIf=\"activatedForm == 'event'\"></app-event>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeGenericBoardGenericBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"padding: 0px; background-color: #fafafa;\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 0}\">\r\n                    <a class=\"nav-link\" (click)= \"showBoard(0)\">Todo</a>\r\n                </li>\r\n                <li class = \"nav-item\" [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 1}\">\r\n                    <a class=\"nav-link\" (click) = \"showBoard(1)\">Eventi</a>\r\n                </li>\r\n              \r\n\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a data-toggle=\"modal\" data-target=\"#basicExampleModal\"> <i class=\"fa fa-plus-circle\"\r\n                            style=\"color: whitesmoke; font-size: 1.5rem;\"></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n    <div style=\"padding: 25px\">\r\n        <app-todo-board *ngIf= \"activatedBoard === 0\"></app-todo-board>\r\n        <app-event-board *ngIf= \"activatedBoard === 1\"></app-event-board>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div (click) = \"closeModal()\" class=\"modal fade\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cosa vuoi creare?</h5>\r\n                <button (click) = \"closeModal()\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <app-create-form></app-create-form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- (clickOutside)=\"onClickedOutsideModal($event)\" -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n\r\n        <div class=\"alert alert-warning\" *ngIf=\"isRegisterCompleted()\" role=\"alert\">\r\n            Non hai completato la registrazione. Per completarla, <a routerLink=\"/complete-register\"\r\n                class=\"text-primary\">clicca qui</a>\r\n        </div>\r\n\r\n        <div class=\"col-lg-9\">\r\n            <app-generic-board></app-generic-board>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeStoryViewerStoryViewerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\r\n    <div class=\"card-header\">\r\n        Le storie del giorno\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n        <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <div class=\"carousel-inner\">\r\n                <app-carousel></app-carousel>\r\n            </div>\r\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\r\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\r\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeTodoBoardTodoBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\r\n            <div *ngFor=\"let t of todoList\">\r\n                <div *ngIf=\"personal\">\r\n                    <app-my-todo-card [todo]='t'></app-my-todo-card>\r\n                </div>\r\n                <div *ngIf=\"!personal\">\r\n                    <app-todo-card (messageEvent)=\"openModal($event)\" [todo]=\"t\"></app-todo-card>\r\n                </div>\r\n\r\n                <div style=\"height: 20px; background-color: #fafafa;\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n      <span (click)=\"closeModal()\" class=\"close\">×</span>\r\n      <span id=\"modal-title\">Utenti proposti</span>\r\n      <div class=\"modal-list\">\r\n        <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\r\n          <div class = \"modal-user\" >{{proposal.user.username}}</div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n</div>\r\n  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeUserInfoUserInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" id=\"test\">\r\n    <div id=\"content\">\r\n\r\n        <div>\r\n            <div class=\"list-group-flush\">\r\n                <div class=\"list-group-item\" routerLink=\"/home\" routerLinkActive=\"active-item\"\r\n                    (mouseover)=\"selectActive(0)\" (mouseout)=\"selectActive(-1)\">\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 0, 'active-fa': iconNumber === 0}\">\r\n                        <i class=\"fa fa-clipboard\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n                    Bacheca\r\n                </div>\r\n\r\n                <div class=\"list-group-item\" routerLink={{getMyProfileLink()}} routerLinkActive=\"active-item\"\r\n                    (mouseover)=\"selectActive(1)\" (mouseout)=\"selectActive(-1)\">\r\n\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 1, 'active-fa': iconNumber === 1}\">\r\n                        <i class=\"fa fa-user-circle\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n                    Il mio profilo\r\n\r\n                </div>\r\n                <div class=\"list-group-item\" routerLink=\"/my-todo-board\" routerLinkActive=\"active-item\"\r\n                    (mouseover)=\"selectActive(2)\" (mouseout)=\"selectActive(-1)\">\r\n\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 2, 'active-fa': iconNumber === 2}\">\r\n                        <i class=\"fa fa-id-badge\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n\r\n                    I miei Todo\r\n\r\n                </div>\r\n\r\n                <div class=\"list-group-item\" routerLink=\"/my-events-board\" routerLinkActive=\"active-item\"\r\n                    (mouseover)=\"selectActive(5)\" (mouseout)=\"selectActive(-1)\">\r\n\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 5, 'active-fa': iconNumber === 5}\">\r\n                        <i class=\"fa fa-calendar\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n\r\n                    I miei Eventi\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"list-group-item\" routerLink=\"/chat\" routerLinkActive=\"active-item\"\r\n                    (mouseover)=\"selectActive(3)\" (mouseout)=\"selectActive(-1)\">\r\n\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 3, 'active-fa': iconNumber === 3}\">\r\n                        <i class=\"fa fa-comment\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n\r\n                    Chat\r\n                </div>\r\n\r\n                <div routerLink=\"/logout\" class=\"list-group-item\" (mouseover)=\"selectActive(4)\"\r\n                    (mouseout)=\"selectActive(-1)\">\r\n\r\n                    <span [ngClass]=\"{'default-fa': iconNumber != 4, 'active-fa': iconNumber === 4}\">\r\n                        <i class=\"fa fa-sign-out\" routerLinkActive=\"active-fa\"></i>\r\n                    </span>\r\n                    Logout\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsListTodoListTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"todo\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>\r\n                <th>Description</th>\r\n                <th>Target Date</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let t of todo\">\r\n                <td>{{t.title}}</td>\r\n                <td>{{t.description}}</td>\r\n                <td><button (click)=\"updateTodo(t.id)\" class=\"btn  btn-success\">Update</button></td>\r\n                <td><button (click)=\"deleteTodo(t.id)\" class=\"btn  btn-warning\">Delete</button></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"mb-1 navbar navbar-expand-lg navbar-dark light-blue darken-3 lighten-1 sticky-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">Done It</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-555\"\r\n        aria-controls=\"navbarSupportedContent-555\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-555\">\r\n\r\n        <form (ngSubmit)=\"handleLogin()\" #loginForm=\"ngForm\" class=\"form-inline ml-auto\">\r\n            <div class=\"md-form my-0\">\r\n                <input class=\"form-control mr-sm-2\" [(ngModel)]=\"user.username\" name=\"username\" type=\"text\"\r\n                    placeholder=\"Username\">\r\n                <input class=\"form-control mr-sm-2\" [(ngModel)]=\"user.password\" name=\"password\" type=\"password\"\r\n                    placeholder=\"Password\">\r\n                <button type=\"submit\" class=\"btn btn-outline-white btn-sm my-0\">Login</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</nav>\r\n\r\n<div id=\"test\" class=\"container-fluid h-100 row justify-content-center no-gutters\"> \r\n\r\n    <!-- <div class=\"col-xl-4 align-self-center\">\r\n                <img id=\"doneit-image\"\r\n                    src=\"https://km0digital.it/wp-content/uploads/2019/05/Comunicazione-SociaL-Media-1024x952.jpg\"\r\n                    class=\"img-fluid\" alt=\"Responsive image\">\r\n            </div> -->\r\n\r\n          \r\n    <app-register></app-register>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"background\">\r\n</div> \r\n\r\n\r\n<!--\r\n<input ngx-google-places-autocomplete [options]=\"{\r\n    types: [],\r\n    componentRestrictions: { country: 'IT' }\r\n    }\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\r\n\r\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyEventMyEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"row justify-content-center no-gutters\" style=\"margin: 0px;\">\r\n        <div class=\"col-lg-9 no-gutters\" style=\"background-color: #fafafa;\">\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\r\n                <a class=\"navbar-brand\" href=\"#\">Eventi di @{{username}}</a>\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                    <ul class=\"navbar-nav ml-auto\">\r\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'active'}\">\r\n                            <a class=\"nav-link\" (click)=\"getMyEventList('active')\">In corso</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'joined'}\">\r\n                            <a class=\"nav-link\" (click)=\"getJoinedEvents()\">Seguiti</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'ended'}\">\r\n                            <a class=\"nav-link\" (click)=\"getMyEventList('ended')\">Terminati</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n            <div style=\"margin: 25px\" *ngIf=\"activatedBoard === 'active'\">\r\n                <div *ngFor=\"let e of myEventsList\">\r\n                    <app-event-card (messageEvent)=\"openMap($event)\"\r\n                        (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=e [personal]=true>\r\n                    </app-event-card>\r\n                </div>\r\n            </div>\r\n            <div style=\"margin: 25px\" *ngIf=\"activatedBoard === 'joined'\">\r\n                <div *ngFor=\"let e of myJoinedEventList\">\r\n                    <app-event-card (messageEvent)=\"openMap($event)\"\r\n                        (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=e [personal]=true>\r\n                    </app-event-card>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span (click)=\"closeModal()\" class=\"close\">×</span>\r\n        <span id=\"modal-title\">Utenti proposti</span>\r\n        <div class=\"modal-list\">\r\n            <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\r\n                <div class=\"col-4 modal-user\">{{proposal.user.username}}</div>\r\n                <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"acceptProposal(proposal)\"\r\n                        class=\"btn btn-success\">accetta</button></div>\r\n                <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"refuseProposal(proposal)\"\r\n                        class=\"btn btn-danger\">rifiuta</button></div>\r\n                <div class=\"col-8\" *ngIf=\"proposal.state == 'refused'\"><b>Hai rifiutato questo contatto </b> <a\r\n                        (click)=\"undoRefuse(proposal)\">Annulla</a></div>\r\n                <div class=\"col-8\" *ngIf=\"proposal.state == 'accepted'\"><b>Questa persona sta portando a termine il tuo\r\n                        todo</b>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span (click)=\"closeMap()\" class=\"close\">×</span>\r\n        <span id=\"modal-title\">Mappa</span>\r\n        <iframe height=\"450\" frameborder=\"0\" style=\"border:0\" [src]='sanitizeUrl()' allowfullscreen>\r\n        </iframe>\r\n    </div>\r\n</div>\r\n\r\n<div (click)=\"closePartecipantsModal()\" *ngIf=\"isPartecipantsModalOpen\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span class=\"close\" (click)=\"closePartecipantsModal()\" *>×</span>\r\n        <span id=\"modal-title\">Partecipanti</span>\r\n\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let p of partecipants\">\r\n            <li class=\"list-group-item\">{{p.user.username}}</li>\r\n        </ul>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyTodoBoardMyTodoBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"row justify-content-center no-gutters\" style=\"margin: 0px;\">\r\n    <div class=\"col-lg-9 no-gutters\" style=\"background-color: #fafafa;\">\r\n      <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\r\n        <a class=\"navbar-brand\" href=\"#\">Todo di {{username}}</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n          aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav ml-auto\">\r\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'published'}\">\r\n              <a class=\"nav-link\" (click)=\"getMyTodoList('published')\">In corso</a>\r\n            </li>\r\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'accepted'}\">\r\n              <a class=\"nav-link\" (click)=\"getMyTodoList('accepted')\">Accettati</a>\r\n            </li>\r\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'completed'}\">\r\n              <a class=\"nav-link\" (click)=\"getMyTodoList('completed')\">Conclusi</a>\r\n            </li>\r\n            <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 'pending'}\">\r\n              <a class=\"nav-link\" (click)=\"getJoinedTodoList()\">In attesa</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n\r\n      <div style=\"margin: 25px\">\r\n        <div *ngFor=\"let t of todoList\">\r\n          <app-my-todo-card (messageEvent)=\"receiveMessage($event)\" [todo]=\"t\"></app-my-todo-card>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-3\"></div>\r\n    <div class=\"col-2\"><a (click)=\"getMyTodoList('published')\">PUBLISHED</a></div>\r\n    <div class=\"col-2\"><a (click)=\"getMyTodoList('accepted')\">ACCEPTED</a></div>\r\n    <div class=\"col-2\"><a (click)=\"getMyTodoList('completed')\">TERMINATED</a></div>\r\n    <div class=\"col-3\"></div>\r\n    <br><br>\r\n    <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\r\n      <div *ngFor=\"let t of todoList\">\r\n        <app-my-todo-card (messageEvent)=\"receiveMessage($event)\" [todo]=\"t\"></app-my-todo-card>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n\r\n\r\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <span (click)=\"closeModal()\" class=\"close\">×</span>\r\n    <span id=\"modal-title\">Utenti proposti</span>\r\n    <div class=\"modal-list\">\r\n      <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\r\n        <div class=\"col-4 modal-user\">{{proposal.user.username}}</div>\r\n\r\n        <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"acceptProposal(proposal)\"\r\n            class=\"btn btn-success\">accetta</button></div>\r\n        <div class=\"col-4\" *ngIf=\"proposal.state == 'in progress'\"><button (click)=\"refuseProposal(proposal)\"\r\n            class=\"btn btn-danger\">rifiuta</button></div>\r\n\r\n        <div class=\"col-8\" *ngIf=\"proposal.state == 'refused'\"><b>Hai rifiutato questo contatto </b> <a\r\n            (click)=\"undoRefuse(proposal)\">Annulla</a></div>\r\n        <div class=\"col-8\" *ngIf=\"proposal.state == 'accepted'\"><b>Questa persona sta portando a termine il tuo\r\n            todo</b>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMyTodoCardMyTodoCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\r\n            <ul class=\"nav nav-tabs card-header-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 1}\" (click)=\"changeBody(3)\"\r\n                        (click)=\"changeBody(1)\">Todo</a>\r\n                </li>\r\n\r\n                <!-- <li class=\"nav-item\">\r\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 3}\"\r\n                        (click)=\"changeBody(3)\">Feedback</a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n        <div class=\"card-body\" style=\"background-color: #ffffff;\">\r\n\r\n\r\n            <div *ngIf=\"showCorrectBody === 1\">\r\n                <div class=\"row align-items-center \">\r\n                    <div class=\"col-xl-3\">\r\n                        <a class=\"nav-link p-0\" href=\"#\">\r\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\r\n                                height=\"50px\" width=\"50px\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <h5 style=\"color: #01579b;\">{{todo.user.username}}</h5>\r\n                    </div>\r\n                    <div class=\"col-xl-3\">\r\n                        <h5 id=\"time\">2 minuti fa</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\" id=\"todo-title\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h5>{{todo.title}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\r\n                                style=\"padding: 10px; border-radius: 10px;\">{{todo.description}}</textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center \">\r\n                    <div *ngIf=\"!acceptedUser\" id=\"info-todo\" class=\"col-xl-4\"><a (click)=\"sendMessage()\"><b>{{getProponentsNumber()}}</b> persone si sono proposte</a></div>\r\n                    <div *ngIf=\"acceptedUser\" id=\"info-todo\" class=\"col-xl-4\">{{acceptedUser.username}} sta portando a termine questo todo  <a  (click) = \"undoAcceptProposal(todo)\"><b>Annulla</b></a></div>\r\n                    <div class=\"col-xl-4\">\r\n                    </div>\r\n                    <div id=\"icon-div1\" class=\"col-xl-2\">\r\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\">\r\n                            <span style=\"color: #f39200\">\r\n                                <a><i class=\"fa fa-edit\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <div id=\"icon-div2\" class=\"col-xl-2\">\r\n                        <span style=\"font-size: 2rem;\">\r\n                            <span style=\"color: #d34545\">\r\n                                <a><i class=\"fa fa-times\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav *ngIf=\"isUserLoggedIn()\" class=\"mb-1 navbar navbar-expand-lg sticky-top navbar-dark light-blue darken-3\">\r\n  <a class=\"navbar-brand\" href=\"#\">Done It</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent-555\"\r\n    aria-controls=\"navbarSupportedContent-555\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent-555\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto mr-auto\">\r\n      <form class=\"form-inline\" id=\"searchbar-form\">\r\n        <div id=\"searchbar\" class=\"md-form my-0\">\r\n          <!-- <input id=\"search-input\" class=\"form-control\" type=\"text\" placeholder=\"Cerca\" aria-label=\"Search\"> -->\r\n          <app-search></app-search>\r\n        </div>\r\n      </form>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <ul class=\"navbar-nav mr-auto nav-flex-icons\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-effect waves-light\">{{personalCard.wallet.cfu}}&nbsp;<i class=\"fa fa-credit-card\"></i></a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav mr-auto nav-flex-icons\">\r\n        <li class=\"nav-item \">\r\n          <a class=\"nav-link waves-effect waves-light\">{{personalCard.user.name}}</a>\r\n        </li>\r\n        <li class=\"nav-item avatar\">\r\n          <a class=\"nav-link p-0\" href=\"#\">\r\n            <img *ngIf=\"imagePath\" [src]=\"imagePath\" class=\"md-avatar rounded-circle\" alt=\"avatar image\">\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div *ngIf=\"userAuth.isUserLoggedIn() && hideMenu()\">\r\n  <app-user-info></app-user-info>\r\n\r\n  <!-- <button *ngIf=\"showChatButton()\" id=\"floating-btn\" type=\"button\" class=\"btn btn-primary btn-circle btn-xl\">\r\n    <i class=\"fa fa-comment\"></i>\r\n  </button> -->\r\n\r\n  <div *ngIf=\"showChatButton()\">\r\n    <app-chatbox></app-chatbox>\r\n  </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileBoardProfileBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" style=\"padding: 0px; background-color: #fafafa;\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n            aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 0}\">\r\n                    <a class=\"nav-link\" (click)= \"showTodoBoard()\">Todo</a>\r\n                </li>\r\n\r\n                <li class = \"nav-item\" [ngClass]=\"{'nav-item': true, 'active': activatedBoard === 2}\">\r\n                    <a class=\"nav-link\" (click) = \"showEventBoard()\">Eventi</a>\r\n                </li>\r\n              \r\n             </ul>\r\n        </div>\r\n    </nav>\r\n    <div style=\"padding: 25px\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\r\n                    <div *ngFor=\"let t of todoList\">\r\n                        <app-todo-card (messageEvent)=\"openModal($event)\" [todo]=\"t\"></app-todo-card>\r\n                        <div style=\"height: 20px; background-color: #fafafa;\"></div>\r\n                    </div>\r\n\r\n                    <div *ngFor=\"let e of eventList\">\r\n                        <app-event-card (messageEvent)=\"openMap($event)\" [eventPost]=\"e\"></app-event-card>\r\n                        <div style=\"height: 20px; background-color: #fafafa;\"></div>\r\n                    </div>\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n      <span (click)=\"closeMap()\" class=\"close\">×</span>\r\n      <span id=\"modal-title\">Mappa</span>\r\n      <iframe height=\"450\" frameborder=\"0\" style=\"border:0\"\r\n        [src]='sanitizeUrl()' allowfullscreen>\r\n      </iframe>\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"currentTodo\" (click)=\"closeModal()\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n      <span (click)=\"closeModal()\" class=\"close\">×</span>\r\n      <span id=\"modal-title\">Utenti proposti</span>\r\n      <div class=\"modal-list\">\r\n        <div class=\"row\" *ngFor=\"let proposal of currentTodo.proposals\">\r\n          <div class = \"modal-user\" >{{proposal.user.username}}</div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n\r\n    <div id=\"user-card\" class=\"row justify-content-center\">\r\n        <div class=\"col-xl-9\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-lg-4 text-center align-self-center\">\r\n                        <img *ngIf=\"personalCard.imageUrl\" [src]=\"personalCard.imageUrl\" class=\"rounded-circle\"\r\n                            height=\"200px\" width=\"200px\">\r\n                    </div>\r\n                    <div class=\"col-lg-6 no-gutters align-self-center\">\r\n                        <div class=\"card-body text-left\">\r\n                            <h2 class=\"card-title text-center\">@{{personalCard.user.username}}\r\n                            </h2>\r\n                            <h6 class=\"card-title text-center\">{{personalCard.university}}\r\n                            </h6>\r\n                            <h6 class=\"card-title text-center\">{{personalCard.faculty}}\r\n                            </h6>\r\n\r\n\r\n                            <div class=\"row justify-content-center\">\r\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\r\n                                    (click)=\"changePanel(0)\">\r\n                                    <h4 *ngIf=\"followers\" class=\"text-center\">{{followers.length}} F</h4>\r\n                                    <h4 *ngIf=\"!followers\" class=\"text-center\">0 F</h4>\r\n                                </div>\r\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\r\n                                    (click)=\"changePanel(1)\">\r\n                                    <h4 *ngIf=\"following\" class=\"text-center\">{{following.length}} S</h4>\r\n                                    <h4 *ngIf=\"!following\" class=\"text-center\">0 S</h4>\r\n                                </div>\r\n                                <div class=\"col-lg-3\">\r\n                                    <h4 class=\"text-center\">0 T</h4>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <app-profile-board [username] = personalCard.user.username></app-profile-board>\r\n   \r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" style=\"margin-top: 100px;\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-body\" style=\"padding: 0px;\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"card-header\">\r\n                        <ul class=\"nav nav-tabs card-header-tabs\">\r\n                            <li class=\"nav-item\">\r\n                                <a (click)=\"changePanel(0)\"\r\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 0}\">Followers</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a (click)=\"changePanel(1)\"\r\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 1}\">Seguiti</a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <div *ngIf=\"showCorrectPanel === 0\" class=\"card-body\">\r\n                        <hr>\r\n                        <div *ngFor=\"let u of followers\">\r\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"showCorrectPanel === 1\" class=\"card-body\">\r\n                        <hr>\r\n                        <div *ngFor=\"let u of following\">\r\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"alert alert-warning text-center\" *ngIf='errorRegister' [innerHTML]=\"errorRegister\"></div>\r\n\r\n\r\n<div class=\"alert alert-success text-center\" *ngIf='messageCode === 4'>Registrazione avvenuta con successo</div>\r\n\r\n\r\n\r\n<div class=\"card\">\r\n    <div class=\"card-body\">\r\n        <div class=\"card-text\">\r\n            <div class=\"container\">\r\n\r\n                <form (ngSubmit)=\"handleRegister()\" #loginForm=\"ngForm\" class=\"text-center\">\r\n                    <p class=\"h6\">Non hai un account? Registrati</p>\r\n\r\n                    <div class=\"form-row mb-4\">\r\n                        <div class=\"col\">\r\n                            <!-- First name -->\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Nome\" [(ngModel)]=\"user.name\"\r\n                                name=\"name\">\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <!-- Last name -->\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Cognome\" [(ngModel)]=user.surname\r\n                                name=\"surname\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <input type=\"text\" class=\"form-control mb-4\" name=\"username\" [(ngModel)]=\"user.username\"\r\n                        placeholder=\"Username\">\r\n\r\n                    <small class=\"form-text text-muted mb-4\">\r\n                        Solo caratteri alfanumerici e/o underscore.\r\n                    </small>\r\n\r\n\r\n                    <!-- E-mail -->\r\n                    <input type=\"email\" class=\"form-control mb-4\" placeholder=\"E-mail\" [(ngModel)]=user.email\r\n                        name=\"email\">\r\n\r\n                    <!-- Password -->\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" id=\"defaultRegisterFormPassword\"\r\n                        class=\"form-control\" placeholder=\"Password\"\r\n                        aria-describedby=\"defaultRegisterFormPasswordHelpBlock\">\r\n                    <small class=\"form-text text-muted mb-4\">\r\n                        Almeno 8 caratteri, di cui almeno una maiuscola, una minuscola, un numero e un carattere\r\n                        speciale.\r\n                    </small>\r\n\r\n                    <input type=\"password\" name=\"password\" [(ngModel)]=\"confirmPassword\" class=\"form-control\"\r\n                        placeholder=\"Password\" aria-describedby=\"defaultRegisterFormPasswordHelpBlock\"\r\n                        name=\"confirmPassword\">\r\n                    <small id=\"defaultRegisterFormPasswordHelpBlock2\" class=\"form-text text-muted mb-4\">\r\n                        Conferma Password\r\n                    </small>\r\n\r\n                    <!-- Sign up button -->\r\n                    <button type=\"submit\" class=\"btn btn-success my-4 btn-block\">Registrati</button>\r\n                </form>\r\n                <!-- Default form register -->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <form (ngSubmit)=\"handleRegister()\" #loginForm=\"ngForm\">\r\n                <div class=\"alert alert-warning\" *ngIf='errorRegister'>{{errorRegister}}</div>\r\n                <fieldset class=\"form-group\">\r\n                    <label>Username: </label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\">\r\n                </fieldset>\r\n\r\n                <fieldset class=\"form-group\">\r\n                    <label>Password: </label>\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\">\r\n                </fieldset>\r\n                <button type=\"submit\" class=\"btn btn-success\">Registrati</button>\r\n            </form> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTodoCardTodoCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\r\n            <ul class=\"nav nav-tabs card-header-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 1}\" (click)=\"changeBody(3)\"\r\n                        (click)=\"changeBody(1)\">Todo</a>\r\n                </li>\r\n                <li class=\"nav-item nav-link\">\r\n                    <a class=\"text-primary\" *ngIf=\"!alreadyProposed && !isMyTodo()\"\r\n                        (click)=\" handleTodoProposal()\">Proponiti</a>\r\n                    <a class=\"text-warning\" *ngIf=\"alreadyProposed && !isMyTodo()\">Già proposto</a>\r\n                    <b class=\"text-primary\" *ngIf=\"isMyTodo()\">Creato da te</b>\r\n                </li>\r\n                <li class=\"nav-item nav-link\">\r\n                    <a class=\"text-success\">Feedback</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a [ngClass]=\"{'nav-link': true, 'active': showCorrectBody === 3}\"\r\n                        (click)=\"changeBody(3)\">Feedback</a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n\r\n            <div *ngIf=\"showCorrectBody === 1\">\r\n                <div class=\"row align-items-center \">\r\n                    <div class=\"col-xl-3\">\r\n                        <a class=\"nav-link p-0\" routerLink=\"/show-profile/{{todo.user.username}}\">\r\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\r\n                                height=\"50px\" width=\"50px\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xl-6\">\r\n                        <h5 style=\"color: #01579b;\">{{todo.user.username}}</h5>\r\n                    </div>\r\n                    <div class=\"col-xl-3\">\r\n                        <h5 id=\"time\">2 minuti fa</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\" id=\"todo-title\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h5>{{todo.title}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\r\n                                style=\"padding: 10px; border-radius: 10px;\">{{todo.description}}</textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center \">\r\n                    <div id=\"info-todo\" (click) = \"sendMessage()\" class=\"col-xl-4\"><a><b>{{proponentsNumber}}</b> persone seguono questo todo</a>\r\n                    </div>\r\n                    <div class=\"col-xl-4\">\r\n                        <!-- <p><a href=\"#\" class=\"text-primary\">Proponiti</a></p> -->\r\n                        <!-- <div class=\"\" *ngIf=\"!alreadyProposed()\" (click)=\"handleTodoProposal()\">Do It\r\n                        </div> -->\r\n                        <!-- <p *ngIf=\"alreadyProposed()\">Ti sei già proposto</p> -->\r\n                    </div>\r\n                    <div id=\"icon-div1\" class=\"col-xl-2\">\r\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\">\r\n                            <span style=\"color: #dcebf8\">\r\n                                <a><i class=\"fa fa-heart\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                    <div id=\"icon-div2\" class=\"col-xl-2\">\r\n                        <span style=\"font-size: 2rem;\">\r\n                            <span style=\"color: #4a8bc9\">\r\n                                <a><i class=\"fa fa-envelope\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTodoTodoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!todoId\" class=\"container\">\r\n    <form (ngSubmit)='handleTodoCreation()'>\r\n        <fieldset class=\"form-group\">\r\n            <label>Titolo: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='todo.title'>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n            <label>Descrizione: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='todo.description'>\r\n        </fieldset>\r\n\r\n        \r\n        <fieldset class = \"form-group\">\r\n            <label>Data di scadenza: </label>\r\n            <input type = \"date\" name = \"Scadenza\" [(ngModel)] = \"todo.expirationDate\">\r\n        </fieldset>\r\n        \r\n        <fieldset class = \"form-group\">\r\n            <select class=\"browser-default custom-select custom-select-lg mb-3\" [(ngModel)]=\"todo.category\" name=\"selectedValue\">\r\n                <option *ngFor=\"let category of categories\" [ngValue]=\"category\">{{category.name}} ({{category.cfuPrice}} cfu)</option>\r\n            </select>\r\n        </fieldset>\r\n\r\n        <div style=\"text-align: right;\">\r\n            <button *ngIf=\"!todoId\" type=\"submit\" class=\"btn btn-success\">Crea</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n<h1 *ngIf=\"todoId\">Aggiorna Todo</h1>\r\n\r\n<div class=\"container\">\r\n    <form *ngIf=\"todoId\" (ngSubmit)='handleTodoUpdate()'>\r\n        <fieldset class=\"form-group\">\r\n            <label>Titolo: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]='todo.title'>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"form-group\">\r\n            <label>Descrizione: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]='todo.description'>\r\n        </fieldset>\r\n\r\n        <button *ngIf=\"todoId\" type=\"submit\" class=\"btn btn-success\">Aggiorna</button>\r\n    </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" *ngIf=\"show\">\r\n\r\n    <div id=\"user-card\" class=\"row justify-content-center\">\r\n        <div class=\"col-xl-9\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-lg-4 text-center align-self-center\">\r\n                        <img *ngIf=\"personalCard.imageUrl\" [src]=\"personalCard.imageUrl\" class=\"rounded-circle\"\r\n                            height=\"200px\" width=\"200px\">\r\n                    </div>\r\n                    <div class=\"col-lg-6 no-gutters align-self-center\">\r\n                        <div class=\"card-body text-left\">\r\n                            <h2 class=\"card-title text-center\">@{{personalCard.user.username}}\r\n\r\n                                <button class=\"btn  btn-success btn-sm\" (click)=\"followUser(personalCard.user.username)\"\r\n                                    *ngIf=\"!alreadyFollow && !isMyProfile()\">segui</button>\r\n                                <button class=\"btn  btn-warning btn-sm\" *ngIf=\"alreadyFollow && !isMyProfile()\">segui già</button>\r\n                                <button *ngIf = \"!isMyProfile()\" class=\"btn  btn-info btn-sm\">chat</button>\r\n                            </h2>\r\n                            <h6 class=\"card-title text-center\">{{personalCard.university}}\r\n                            </h6>\r\n                            <h6 class=\"card-title text-center\">{{personalCard.faculty}}\r\n                            </h6>\r\n\r\n                            <div class=\"row justify-content-center\">\r\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\r\n                                    (click)=\"changePanel(0)\">\r\n                                    <h4 *ngIf=\"followers\" class=\"text-center\">{{followers.length}} F</h4>\r\n                                    <h4 *ngIf=\"!followers\" class=\"text-center\">0 F</h4>\r\n                                </div>\r\n                                <div class=\"col-lg-3\" data-toggle=\"modal\" data-target=\"#basicExampleModal\"\r\n                                    (click)=\"changePanel(1)\">\r\n                                    <h4 *ngIf=\"following\" class=\"text-center\">{{following.length}} S</h4>\r\n                                    <h4 *ngIf=\"!following\" class=\"text-center\">0 S</h4>\r\n                                </div>\r\n                                <div class=\"col-lg-3\">\r\n                                    <h4 class=\"text-center\">0 T</h4>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-xl-9\">\r\n            <app-profile-board [username]=personalCard.user.username></app-profile-board>\r\n        </div>\r\n    </div>\r\n\r\n    <!--\r\n    <div class=\"row justify-content-around no-gutters\">\r\n\r\n\r\n        <div id=\"user-board\" class=\"col-xl-9 no-gutters\" style=\"background-color: #fafafa;\">\r\n\r\n            <nav class=\"navbar navbar-expand-lg navbar-dark primary-color light-blue darken-3\">\r\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                    <span class=\"navbar-toggler-icon\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                    <ul class=\"navbar-nav\">\r\n                        <li class=\"nav-item active\">\r\n                            <a class=\"nav-link\" href=\"#\">Todo <span class=\"sr-only\">(current)</span></a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">Post</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">Feedback</a>\r\n                        </li>\r\n\r\n\r\n                    </ul>\r\n                    <ul class=\"navbar-nav ml-auto\">\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" href=\"#\">About me</a>\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </nav>\r\n            <div style=\"padding: 25px\">\r\n                <app-todo-board></app-todo-board>\r\n            </div>\r\n        </div>\r\n\r\n    \r\n\r\n\r\n    </div>\r\n    -->\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" style=\"margin-top: 100px;\" id=\"basicExampleModal\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n\r\n            <div class=\"modal-body\" style=\"padding: 0px;\">\r\n                <div class=\"text-center\">\r\n                    <div class=\"card-header\">\r\n                        <ul class=\"nav nav-tabs card-header-tabs\">\r\n                            <li class=\"nav-item\">\r\n                                <a (click)=\"changePanel(0)\"\r\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 0}\">Followers</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a (click)=\"changePanel(1)\"\r\n                                    [ngClass]=\"{'nav-link': true, 'active': showCorrectPanel === 1}\">Seguiti</a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                    <div *ngIf=\"showCorrectPanel === 0\" class=\"card-body\">\r\n                        <hr>\r\n                        <div *ngFor=\"let u of followers\">\r\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"showCorrectPanel === 1\" class=\"card-body\">\r\n                        <hr>\r\n                        <div *ngFor=\"let u of following\">\r\n                            <app-list-item-user [user]=\"u\"></app-list-item-user>\r\n                            <hr>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventBoardEventBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 no-gutters\" style=\"background-color: white;\">\r\n            <div *ngFor=\"let e of eventList\">\r\n                <app-event-card (messageEvent)=\"openMap($event)\"\r\n                    (messageEventPartecipant)=\"openPartecipantModal($event)\" [eventPost]=\"e\"></app-event-card>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div (click)=\"closeMap()\" *ngIf=\"isMapOpen\" id=\"myModal\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span (click)=\"closeMap()\" class=\"close\">×</span>\r\n        <span id=\"modal-title\">Mappa</span>\r\n        <iframe height=\"450\" frameborder=\"0\" style=\"border:0\" [src]='sanitizeUrl()' allowfullscreen>\r\n        </iframe>\r\n    </div>\r\n</div>\r\n\r\n<div (click)=\"closePartecipantsModal()\" *ngIf=\"isPartecipantsModalOpen\" class=\"modal\">\r\n    <div class=\"modal-content\">\r\n        <span class=\"close\" (click)=\"closePartecipantsModal()\" *>×</span>\r\n        <span id=\"modal-title\">Partecipanti</span>\r\n\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let p of partecipants\">\r\n            <li class=\"list-group-item\">{{p.user.username}}</li>\r\n        </ul>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventCardEventCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <div class=\"card-header\" style=\"background-color: #fafafa;\">\r\n            <ul class=\"nav nav-tabs card-header-tabs\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\">Evento</a>\r\n                </li>\r\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && !alreadyPartecipated && !isCreatedByUser()\">\r\n                    <a class=\"text-primary\" (click)=\"joinEvent()\">Partecipa</a>\r\n                </li>\r\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && alreadyPartecipated && !isCreatedByUser()\">\r\n                    <a class=\"text-warning\">Partecipi già</a>\r\n                </li>\r\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal && isCreatedByUser()\">\r\n                    <a class=\"text-danger\">Creato da Te</a>\r\n                </li>\r\n\r\n                <li class=\"nav-item nav-link\" *ngIf=\"!personal\">\r\n                    <a class=\"text-success\">Feedback</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div>\r\n                <div class=\"row align-items-center \">\r\n                    <div class=\"col-lg-3\">\r\n                        <a class=\"nav-link p-0\" routerLink=\"/show-profile/{{eventPost.user.username}}\">\r\n                            <img src=\" https://ptetutorials.com/images/user-profile.png\" class=\"rounded-circle\"\r\n                                height=\"50px\" width=\"50px\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-lg-6\">\r\n                        <h5 style=\"color: #01579b;\">{{eventPost.user.username}}</h5>\r\n                    </div>\r\n                    <div class=\"col-lg-3\">\r\n                        <h5 id=\"time\">{{eventPost.date | date: 'dd/MM/yyyy'}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\" id=\"todo-title\">\r\n                    <div class=\"col-sm-12\">\r\n                        <h5>{{eventPost.title}}</h5>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row align-items-center\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <textarea readonly class=\"form-control\" id=\"exampleFormControlTextarea3\" rows=\"3\"\r\n                                style=\"padding: 10px; border-radius: 10px;\">{{eventPost.description}}</textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row justify-content-between align-items-center\">\r\n                    <a id=\"info-todo\" (click)=\"openPartecipantsModal()\"\r\n                        class=\"col-lg-7\"><b>{{eventPost.eventPartecipations.length}}</b> persone\r\n                        partecipano a questo evento </a>\r\n\r\n\r\n                    <div id=\"icon-div2\" class=\"col-lg-3\">\r\n                        <span style=\"font-size: 2rem;\" *ngIf=\"personal\">\r\n                            <span style=\"color: #d34545\">\r\n                                <a><i class=\"fa fa-times\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                        <span id=\"follow-todo\" style=\"font-size: 2rem;\" *ngIf=\"personal\">\r\n                            <span style=\"color: #f39200\">\r\n                                <a><i class=\"fa fa-edit\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                        <span style=\"font-size: 2rem;\">\r\n                            <span style=\"color: #4a8bc9\">\r\n                                <a (click)=\"openMap()\" title=\"{{eventPost.place}}\"><i class=\"fa fa-map-marker\"\r\n                                        aria-hidden=\"true\"></i></a>\r\n                            </span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListItemUserListItemUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row no-gutters justify-content-center\">\r\n    <div class=\"col-lg-3\">\r\n        <a *ngIf=\"imagePath\"> <img [src]=\"imagePath\" class=\"md-avatar rounded-circle\" alt=\"avatar image\"></a>\r\n    </div>\r\n    <div class=\"col-lg-6 align-self-center\">\r\n        <a>{{user.username}}</a>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-form-field style=\"height: 35px; width: 275px; color: aliceblue;\">\r\n    <form (submit)=confirmSearch(searchString)>\r\n        <input matInput [(ngModel)]=\"searchString\" name=\"searchString\" [matAutocomplete]=\"auto\" (input)=\"search()\"\r\n            (change)=\"reset()\">\r\n    </form>\r\n</mat-form-field>\r\n<i class=\"fa fa-search text-white ml-3\" aria-hidden=\"true\"></i>\r\n<mat-autocomplete #auto=\"matAutocomplete\">\r\n    <mat-option *ngFor=\"let option of options\" [value]=\" option\" (click)=confirmSearch(option)>{{option}}\r\n    </mat-option>\r\n</mat-autocomplete>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/route-guard.service */
    "./src/app/services/route-guard.service.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/todo/todo.component */
    "./src/app/components/todo/todo.component.ts");
    /* harmony import */


    var _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/logout/logout.component */
    "./src/app/components/home/logout/logout.component.ts");
    /* harmony import */


    var _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/list-todo/list-todo.component */
    "./src/app/components/list-todo/list-todo.component.ts");
    /* harmony import */


    var _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/todo-card/todo-card.component */
    "./src/app/components/todo-card/todo-card.component.ts");
    /* harmony import */


    var _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/complete-register/complete-register.component */
    "./src/app/components/complete-register/complete-register.component.ts");
    /* harmony import */


    var _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/my-todo-board/my-todo-board.component */
    "./src/app/components/my-todo-board/my-todo-board.component.ts");
    /* harmony import */


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/my-event/my-event.component */
    "./src/app/components/my-event/my-event.component.ts");

    var routes = [{
      path: '',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'update-todo/:id',
      component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'create-todo',
      component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_8__["TodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'list-todos',
      component: _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_10__["ListTodoComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'todo-card',
      component: _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_11__["TodoCardComponent"]
    }, {
      path: 'logout',
      component: _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, // da cancellare: { path: 'show-my-profile', component: ProfileComponent, canActivate: [RouteGuardService] },
    {
      path: 'show-profile/:username',
      component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: 'complete-register',
      component: _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_12__["CompleteRegisterComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "my-todo-board",
      component: _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_13__["MyTodoBoardComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "my-events-board",
      component: _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_16__["MyEventComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, {
      path: "chat",
      component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"],
      canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_6__["RouteGuardService"]]
    }, // {path: 'register', component: RegisterComponent, canActivate: [RouteGuardService]},
    {
      path: '**',
      component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'doneit';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/error/error.component */
    "./src/app/components/error/error.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_home_todo_board_todo_board_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/home/todo-board/todo-board.component */
    "./src/app/components/home/todo-board/todo-board.component.ts");
    /* harmony import */


    var _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/home/logout/logout.component */
    "./src/app/components/home/logout/logout.component.ts");
    /* harmony import */


    var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/http-interceptor.service */
    "./src/app/services/http-interceptor.service.ts");
    /* harmony import */


    var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/todo/todo.component */
    "./src/app/components/todo/todo.component.ts");
    /* harmony import */


    var _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/list-todo/list-todo.component */
    "./src/app/components/list-todo/list-todo.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/todo-card/todo-card.component */
    "./src/app/components/todo-card/todo-card.component.ts");
    /* harmony import */


    var _components_home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/home/user-info/user-info.component */
    "./src/app/components/home/user-info/user-info.component.ts");
    /* harmony import */


    var _components_home_create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/create-form/create-form.component */
    "./src/app/components/home/create-form/create-form.component.ts");
    /* harmony import */


    var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/chat/chat.component */
    "./src/app/components/chat/chat.component.ts");
    /* harmony import */


    var _components_home_generic_board_generic_board_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/home/generic-board/generic-board.component */
    "./src/app/components/home/generic-board/generic-board.component.ts");
    /* harmony import */


    var _components_home_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/home/story-viewer/story-viewer.component */
    "./src/app/components/home/story-viewer/story-viewer.component.ts");
    /* harmony import */


    var _components_home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/home/carousel/carousel.component */
    "./src/app/components/home/carousel/carousel.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/complete-register/complete-register.component */
    "./src/app/components/complete-register/complete-register.component.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/my-todo-board/my-todo-board.component */
    "./src/app/components/my-todo-board/my-todo-board.component.ts");
    /* harmony import */


    var _components_my_todo_card_my_todo_card_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/my-todo-card/my-todo-card.component */
    "./src/app/components/my-todo-card/my-todo-card.component.ts");
    /* harmony import */


    var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/user-profile/user-profile.component */
    "./src/app/components/user-profile/user-profile.component.ts");
    /* harmony import */


    var _list_item_user_list_item_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./list-item-user/list-item-user.component */
    "./src/app/list-item-user/list-item-user.component.ts");
    /* harmony import */


    var _components_event_event_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/event/event.component */
    "./src/app/components/event/event.component.ts");
    /* harmony import */


    var _event_board_event_board_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./event-board/event-board.component */
    "./src/app/event-board/event-board.component.ts");
    /* harmony import */


    var _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./event-card/event-card.component */
    "./src/app/event-card/event-card.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./chatbox/chatbox.component */
    "./src/app/chatbox/chatbox.component.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__);
    /* harmony import */


    var _components_profile_board_profile_board_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/profile-board/profile-board.component */
    "./src/app/components/profile-board/profile-board.component.ts");
    /* harmony import */


    var _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/my-event/my-event.component */
    "./src/app/components/my-event/my-event.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components_home_todo_board_todo_board_component__WEBPACK_IMPORTED_MODULE_13__["TodoBoardComponent"], _components_home_logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"], _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"], _components_list_todo_list_todo_component__WEBPACK_IMPORTED_MODULE_17__["ListTodoComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"], _components_todo_card_todo_card_component__WEBPACK_IMPORTED_MODULE_21__["TodoCardComponent"], _components_home_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_22__["UserInfoComponent"], _components_home_create_form_create_form_component__WEBPACK_IMPORTED_MODULE_23__["CreateFormComponent"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_24__["ChatComponent"], _components_home_generic_board_generic_board_component__WEBPACK_IMPORTED_MODULE_25__["GenericBoardComponent"], _components_home_story_viewer_story_viewer_component__WEBPACK_IMPORTED_MODULE_26__["StoryViewerComponent"], _components_home_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_27__["CarouselComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"], _components_complete_register_complete_register_component__WEBPACK_IMPORTED_MODULE_29__["CompleteRegisterComponent"], _components_my_todo_board_my_todo_board_component__WEBPACK_IMPORTED_MODULE_31__["MyTodoBoardComponent"], _components_my_todo_card_my_todo_card_component__WEBPACK_IMPORTED_MODULE_32__["MyTodoCardComponent"], _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"], _list_item_user_list_item_user_component__WEBPACK_IMPORTED_MODULE_34__["ListItemUserComponent"], _components_event_event_component__WEBPACK_IMPORTED_MODULE_35__["EventComponent"], _event_board_event_board_component__WEBPACK_IMPORTED_MODULE_36__["EventBoardComponent"], _event_card_event_card_component__WEBPACK_IMPORTED_MODULE_37__["EventCardComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_38__["SearchComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_40__["ChatboxComponent"], _components_profile_board_profile_board_component__WEBPACK_IMPORTED_MODULE_42__["ProfileBoardComponent"], _components_my_event_my_event_component__WEBPACK_IMPORTED_MODULE_43__["MyEventComponent"]],
      imports: [ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_41__["GooglePlaceModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"]],
      exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_15__["HttpInterceptorService"],
        multi: true
      }, [ngx_image_compress__WEBPACK_IMPORTED_MODULE_30__["NgxImageCompressService"]]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.css":
  /*!***********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatboxChatboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.list-group-flush{\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .fa{\r\n      margin-right: 12px;\r\n  }\r\n  \r\n  .img-thumbnail{\r\n      margin-top: 10px;\r\n  }\r\n  \r\n  #content{\r\n      height:  calc(100% - 40px);\r\n      position: absolute;\r\n      bottom: 50px;\r\n      width: 100%;\r\n      overflow-y: scroll;\r\n  }\r\n  \r\n  #test{\r\n    background-color: #fafafa;\r\n    border-radius: 0;\r\n      position: fixed;\r\n      bottom: 0;\r\n      right: 0;\r\n      top: 58px;\r\n      width: 12vw;\r\n      max-height: 100%;\r\n      overflow: auto;\r\n      z-index: 1;\r\n      padding: 0px;\r\n      z-index: 1;\r\n  }\r\n  \r\n  .bold{\r\n    font-weight: bold;\r\n  }\r\n  \r\n  #content::-webkit-scrollbar {\r\n      display: none;\r\n    }\r\n  \r\n  #content {\r\n      -ms-overflow-style: none;\r\n    }\r\n  \r\n  @media screen and (max-width: 992px) {\r\n      .container-fluid {\r\n        display: none;\r\n      }\r\n      #chat-content{\r\n        display: none;\r\n      }\r\n    }\r\n  \r\n  .list-group-item{\r\n      background-color: #fafafa;\r\n      font-size: small;\r\n      margin-top: 10px;\r\n    }\r\n  \r\n  .list-group-item:hover{\r\n      color: white !important;\r\n      background-color: #009df8 !important;\r\n      cursor: pointer;\r\n    }\r\n  \r\n  #username{\r\n      text-align: center;\r\n      margin-top: 50px;\r\n  \r\n    }\r\n  \r\n  h4{\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .active-item{\r\n    color: white !important;\r\n    background-color: #0277bd !important; \r\n  }\r\n  \r\n  .default-fa{\r\n    color: gray;\r\n  }\r\n  \r\n  .active-fa{\r\n    color: white\r\n  }\r\n  \r\n  .float{\r\n      height: 40px;\r\n      position: absolute;\r\n      bottom: 0;\r\n      right: 0;\r\n      text-transform: none;\r\n      \r\n  }\r\n  \r\n  .md-avatar {\r\n    vertical-align: middle;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-right: 5px;\r\n}\r\n  \r\n  #chat-bx{\r\n \r\n}\r\n  \r\n  #chat-bx div{\r\n  margin: 0px;\r\n  text-transform: none;\r\n  width: 350px;\r\n  height: 40px;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  background-color: #009df8;\r\n}\r\n  \r\n  #chat-content{\r\n  width: 350px;\r\n  margin-right: 20px;\r\n  position: fixed;\r\n  right: 13vw;\r\n  bottom: 0;\r\n  z-index: 1;\r\n}\r\n  \r\n  #chat-inbox{\r\n  height: 400px;\r\n  background-color: #fafafa;\r\n}\r\n  \r\n  @media screen and (min-width: 992px) {\r\n  .container-fluid{\r\n      margin-left: 13vw; \r\n      width: 87vw !important;\r\n  }\r\n  \r\n}\r\n  \r\n  .container-fluid{\r\n    margin-top: 50px\r\n}\r\n  \r\n  .incoming_msg_img {\r\n  display: inline-block;\r\n  width: 6%;\r\n}\r\n  \r\n  .received_msg {\r\n  display: inline-block;\r\n  padding: 0 0 0 10px;\r\n  vertical-align: top;\r\n  width: 92%;\r\n }\r\n  \r\n  .received_withd_msg p {\r\n  background: #ebebeb none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  color: #646464;\r\n  font-size: 14px;\r\n  margin: 0;\r\n  padding: 5px 10px 5px 12px;\r\n  width: 100%;\r\n}\r\n  \r\n  .time_date {\r\n  color: #747474;\r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 8px 0 0;\r\n}\r\n  \r\n  .received_withd_msg { width: 57%;}\r\n  \r\n  .mesgs {\r\n\r\n  height: calc(100% - 50px);\r\n\r\n  padding: 30px 15px 0 25px;\r\n  width: 100%;\r\n}\r\n  \r\n  .sent_msg p {\r\n  background: #0277bd none repeat scroll 0 0;\r\n  border-radius: 3px;\r\n  font-size: 14px;\r\n  margin: 0; color:#fff;\r\n  padding: 5px 10px 5px 12px;\r\n  width:100%;\r\n}\r\n  \r\n  .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\r\n  \r\n  .sent_msg {\r\n  float: right;\r\n  width: 46%;\r\n}\r\n  \r\n  .input_msg_write input {\r\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n  border: medium none;\r\n  color: #4c4c4c;\r\n  font-size: 15px;\r\n  height: 50px;\r\n  width: 100%;\r\n\r\n}\r\n  \r\n  textarea{\r\n  margin-top: 10px;\r\n  padding: 10px;\r\n  background-color: white;\r\n}\r\n  \r\n  textarea:hover{\r\n\r\n  background-color: white;\r\n}\r\n  \r\n  .msg_send_btn {\r\n  background: #0277bd  none repeat scroll 0 0;\r\n  border: medium none;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 17px;\r\n  height: 33px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 11px;\r\n  width: 33px;\r\n}\r\n  \r\n  .messaging { padding: 0 0 50px 0;}\r\n  \r\n  .msg_history {\r\n  height: 280px;\r\n  overflow-y: auto;\r\n}\r\n  \r\n  .incoming_msg_img {\r\n  display: inline-block;\r\n  width: 6%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztFQUVBO01BQ0ksMEJBQTBCO01BQzFCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osV0FBVztNQUNYLGtCQUFrQjtFQUN0Qjs7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7TUFDZCxlQUFlO01BQ2YsU0FBUztNQUNULFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsVUFBVTtNQUNWLFlBQVk7TUFDWixVQUFVO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7TUFDSSxhQUFhO0lBQ2Y7O0VBRUE7TUFDRSx3QkFBd0I7SUFDMUI7O0VBRUE7TUFDRTtRQUNFLGFBQWE7TUFDZjtNQUNBO1FBQ0UsYUFBYTtNQUNmO0lBQ0Y7O0VBSUE7TUFDRSx5QkFBeUI7TUFDekIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtJQUNsQjs7RUFFQTtNQUNFLHVCQUF1QjtNQUN2QixvQ0FBb0M7TUFDcEMsZUFBZTtJQUNqQjs7RUFJQTtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7O0lBRWxCOztFQUVGO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUtBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFO0VBQ0Y7O0VBRUE7TUFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1Isb0JBQW9COztFQUV4Qjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7RUFHQTs7QUFFQTs7RUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtBQUNaOztFQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7RUFRQTtFQUNFO01BQ0ksaUJBQWlCO01BQ2pCLHNCQUFzQjtFQUMxQjs7QUFFRjs7RUFFQTtJQUNJO0FBQ0o7O0VBWUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztBQUNYOztFQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtDQUNYOztFQUNBO0VBQ0MsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztFQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7RUFDQSxzQkFBc0IsVUFBVSxDQUFDOztFQUVqQzs7RUFFRSx5QkFBeUI7O0VBRXpCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0VBRUM7RUFDQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixTQUFTLEVBQUUsVUFBVTtFQUNyQiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztFQUNBLGVBQWUsZUFBZSxFQUFFLGtCQUFrQixDQUFDOztFQUNuRDtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0VBQ0E7RUFDRSxtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7O0FBRWI7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7RUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0VBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztBQUNiOztFQUNBLGFBQWEsbUJBQW1CLENBQUM7O0VBQ2pDO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym94L2NoYXRib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGlzdC1ncm91cC1mbHVzaHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuaW1nLXRodW1ibmFpbHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRlbnR7XHJcbiAgICAgIGhlaWdodDogIGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI3Rlc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDU4cHg7XHJcbiAgICAgIHdpZHRoOiAxMnZ3O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgei1pbmRleDogMTtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGVudCB7XHJcbiAgICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgI2NoYXQtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcclxuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlkZjggIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICAgI3VzZXJuYW1le1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgaDR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAuYWN0aXZlLWl0ZW17XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQgIWltcG9ydGFudDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5kZWZhdWx0LWZhe1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUtZmF7XHJcbiAgICBjb2xvcjogd2hpdGVcclxuICB9XHJcblxyXG4gIC5mbG9hdHtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5tZC1hdmF0YXIge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG4jY2hhdC1ieHtcclxuIFxyXG59XHJcblxyXG4jY2hhdC1ieCBkaXZ7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmODtcclxufVxyXG5cclxuI2NoYXQtY29udGVudHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTN2dztcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2NoYXQtaW5ib3h7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcclxuICAgICAgd2lkdGg6IDg3dncgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2JTtcclxufVxyXG4ucmVjZWl2ZWRfbXNnIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiB9XHJcbiAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xyXG4gIGJhY2tncm91bmQ6ICNlYmViZWIgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGltZV9kYXRlIHtcclxuICBjb2xvcjogIzc0NzQ3NDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiA4cHggMCAwO1xyXG59XHJcbi5yZWNlaXZlZF93aXRoZF9tc2cgeyB3aWR0aDogNTclO31cclxuXHJcbi5tZXNncyB7XHJcblxyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcblxyXG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiAuc2VudF9tc2cgcCB7XHJcbiAgYmFja2dyb3VuZDogIzAyNzdiZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwOyBjb2xvcjojZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxyXG4uc2VudF9tc2cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNDYlO1xyXG59XHJcbi5pbnB1dF9tc2dfd3JpdGUgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gIGNvbG9yOiAjNGM0YzRjO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxudGV4dGFyZWE6aG92ZXJ7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubXNnX3NlbmRfYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDI3N2JkICBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDExcHg7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbn1cclxuLm1lc3NhZ2luZyB7IHBhZGRpbmc6IDAgMCA1MHB4IDA7fVxyXG4ubXNnX2hpc3Rvcnkge1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmluY29taW5nX21zZ19pbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNiU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatboxComponent */

  /***/
  function srcAppChatboxChatboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function () {
      return ChatboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _models_chat_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/chat-message */
    "./src/app/models/chat-message.ts");

    var ChatboxComponent =
    /*#__PURE__*/
    function () {
      function ChatboxComponent(userService, chatService) {
        _classCallCheck(this, ChatboxComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.showChat = false;
        this.closeChat = true;
        this.chatInfo = new Map();
        this.chatContent = new Map();
        this.currentChat = [];
        this.activeUser = '';
        this.message = '';
        this.firstIterationIgnore = false;
      }

      _createClass(ChatboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.username = sessionStorage.getItem("username");
          console.warn("OK");
          this.userService.getAllUsers().subscribe(function (result) {
            _this2.personalCards = result;
          });
          this.scrollToBottom();
          this.chatService.socketChatMessageSubject.subscribe(function (result) {
            var socketChatMessage = result;

            if (socketChatMessage.content && _this2.firstIterationIgnore) {
              _this2.addReceivedMessage(socketChatMessage);

              _this2.notifyUserMessageReceived(socketChatMessage);
            }

            _this2.firstIterationIgnore = true;
          }, function (error) {});
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.warn("Destroy");
        }
      }, {
        key: "isSent",
        value: function isSent(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.from.username;
          return u1 === u2;
        } //oppure se è un messaggio ricevuto

      }, {
        key: "isReceived",
        value: function isReceived(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.to.username;
          return u1 === u2;
        }
      }, {
        key: "addReceivedMessage",
        value: function addReceivedMessage(socketChatMessage) {
          if (!this.chatContent[socketChatMessage.userFrom]) {
            this.chatContent[socketChatMessage.userFrom] = [];
          }

          var userFrom = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userFrom, "");
          var userTo = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userTo, "");
          var chatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](userFrom, userTo, socketChatMessage.content);
          this.chatContent[socketChatMessage.userFrom].push(chatMessage);
          this.currentChat = this.chatContent[socketChatMessage.userFrom];
        }
      }, {
        key: "addSentMessage",
        value: function addSentMessage(message) {
          if (!this.chatContent[this.activeUser]) {
            this.chatContent[this.activeUser] = [];
          }

          var userFrom = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          var userTo = new _models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.activeUser, "");
          var chatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](userFrom, userTo, message);
          this.chatContent[this.activeUser].push(chatMessage);
          this.currentChat = this.chatContent[this.activeUser];
        }
      }, {
        key: "notifyUserMessageReceived",
        value: function notifyUserMessageReceived(socketChatMessage) {
          if (this.activeUser !== socketChatMessage.userFrom) {
            this.chatInfo[socketChatMessage.userFrom] = true;
          }
        }
      }, {
        key: "handleChatBox",
        value: function handleChatBox() {
          if (this.showChat) {
            this.showChat = false;
          } else {
            this.showChat = true;
          }
        }
      }, {
        key: "closeChatBox",
        value: function closeChatBox() {
          this.closeChat = true;
          this.activeUser = '';
        }
      }, {
        key: "openChat",
        value: function openChat(p) {
          this.closeChat = false;
          this.showChat = true;
          this.activeUser = p.user.username;
          console.log("Ora tolgo: " + this.activeUser);
          this.chatInfo[this.activeUser] = null;
          this.currentChat = this.chatContent[this.activeUser];
        }
      }, {
        key: "notifyMessageArrived",
        value: function notifyMessageArrived(p) {
          return this.chatInfo[p.user.username];
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(event) {
          event.preventDefault();
          this.addSentMessage(this.message);
          this.chatService.sendChatMessage(this.activeUser, this.message);
          this.message = '';
        }
      }]);

      return ChatboxComponent;
    }();

    ChatboxComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', {
      static: false
    })], ChatboxComponent.prototype, "myScrollContainer", void 0);
    ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatbox.component.css */
      "./src/app/chatbox/chatbox.component.css")).default]
    })], ChatboxComponent);
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/chat/chat.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 87vw !important;\r\n    }\r\n    \r\n  }\r\n\r\n  .container-fluid{\r\n      margin-top: 50px\r\n  }\r\n\r\n  .container{max-width:1170px; margin:auto;}\r\n\r\n  img{ max-width:100%;}\r\n\r\n  .inbox_people {\r\n    background: #fffefe none repeat scroll 0 0;\r\n    float: left;\r\n    overflow: hidden;\r\n    width: 40%; border-right:1px solid #c4c4c4;\r\n  }\r\n\r\n  .inbox_msg {\r\n    border: 1px solid #c4c4c4;\r\n    clear: both;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .top_spac{ margin: 20px 0 0;}\r\n\r\n  .recent_heading {float: left; width:40%;}\r\n\r\n  .srch_bar {\r\n    display: inline-block;\r\n    text-align: right;\r\n    width: 60%; \r\n  }\r\n\r\n  .headind_srch{ padding:10px 29px 10px 20px; overflow:hidden; border-bottom:1px solid #c4c4c4;}\r\n\r\n  .recent_heading h4 {\r\n    color: #05728f;\r\n    font-size: 21px;\r\n    margin: auto;\r\n  }\r\n\r\n  .srch_bar input{ border:1px solid #cdcdcd; border-width:0 0 1px 0; width:80%; padding:2px 0 4px 6px; background:none;}\r\n\r\n  .srch_bar .input-group-addon button {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: medium none;\r\n    padding: 0;\r\n    color: #707070;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .srch_bar .input-group-addon { margin: 0 0 0 -27px;}\r\n\r\n  .chat_ib h5{ font-size:15px; color:#464646; margin:0 0 8px 0;}\r\n\r\n  .chat_ib h5 span{ font-size:13px; float:right;}\r\n\r\n  .chat_ib p{ font-size:14px; color:#989898; margin:auto}\r\n\r\n  .chat_img {\r\n    float: left;\r\n\r\n  }\r\n\r\n  .chat_ib_active{\r\n    font-weight: bold;\r\n    color: black;\r\n  }\r\n\r\n  .chat_ib {\r\n    float: left;\r\n    padding: 0 0 0 15px;\r\n    width: 88%;\r\n  }\r\n\r\n  .chat_people{ overflow:hidden; clear:both;}\r\n\r\n  .chat_list {\r\n    border-bottom: 1px solid #c4c4c4;\r\n    margin: 0;\r\n    padding: 18px 16px 10px;\r\n  }\r\n\r\n  .inbox_chat { max-height: 600px; overflow-y: scroll;}\r\n\r\n  .active_chat{ background:#ebebeb;}\r\n\r\n  .incoming_msg_img {\r\n    display: inline-block;\r\n  }\r\n\r\n  .received_msg {\r\n    display: inline-block;\r\n    padding: 0 0 0 10px;\r\n    vertical-align: top;\r\n    width: 92%;\r\n   }\r\n\r\n  .received_withd_msg p {\r\n    background: #ebebeb none repeat scroll 0 0;\r\n    border-radius: 3px;\r\n    color: #646464;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 5px 10px 5px 12px;\r\n    width: 100%;\r\n  }\r\n\r\n  .time_date {\r\n    color: #747474;\r\n    display: block;\r\n    font-size: 12px;\r\n    margin: 8px 0 0;\r\n  }\r\n\r\n  .received_withd_msg { width: 57%;}\r\n\r\n  .mesgs {\r\n    float: left;\r\n    padding: 30px 15px 0 25px;\r\n    width: 60%;\r\n  }\r\n\r\n  .sent_msg p {\r\n    background: #0277bd none repeat scroll 0 0;\r\n    border-radius: 3px;\r\n    font-size: 14px;\r\n    margin: 0; color:#fff;\r\n    padding: 5px 10px 5px 12px;\r\n    width:100%;\r\n  }\r\n\r\n  .outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\r\n\r\n  .sent_msg {\r\n    float: right;\r\n    width: 46%;\r\n  }\r\n\r\n  .input_msg_write input {\r\n    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\r\n    border: medium none;\r\n    color: #4c4c4c;\r\n    font-size: 15px;\r\n    min-height: 48px;\r\n    width: 100%;\r\n  }\r\n\r\n  .type_msg {border-top: 1px solid #c4c4c4;position: relative;}\r\n\r\n  .msg_send_btn {\r\n    background: #0277bd  none repeat scroll 0 0;\r\n    border: medium none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-size: 17px;\r\n    height: 33px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 11px;\r\n    width: 33px;\r\n  }\r\n\r\n  .messaging { padding: 0 0 50px 0;}\r\n\r\n  .msg_history {\r\n    height: 516px;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .chat_list:hover{\r\n    background:#ebebeb;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjs7RUFFQTtNQUNJO0VBQ0o7O0VBR0EsV0FBVyxnQkFBZ0IsRUFBRSxXQUFXLENBQUM7O0VBQ3pDLEtBQUssY0FBYyxDQUFDOztFQUNwQjtJQUNFLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBRSw4QkFBOEI7RUFDNUM7O0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFDQSxXQUFXLGdCQUFnQixDQUFDOztFQUc1QixpQkFBaUIsV0FBVyxFQUFFLFNBQVMsQ0FBQzs7RUFFeEM7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjs7RUFFQSxlQUFlLDJCQUEyQixFQUFFLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQzs7RUFFN0Y7SUFDRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFDQSxpQkFBaUIsd0JBQXdCLEVBQUUsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsQ0FBQzs7RUFDckg7SUFDRSxtREFBbUQ7SUFDbkQsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFDQSwrQkFBK0IsbUJBQW1CLENBQUM7O0VBRW5ELGFBQWEsY0FBYyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQzs7RUFDN0Qsa0JBQWtCLGNBQWMsRUFBRSxXQUFXLENBQUM7O0VBQzlDLFlBQVksY0FBYyxFQUFFLGFBQWEsRUFBRSxXQUFXOztFQUN0RDtJQUNFLFdBQVc7O0VBRWI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUEsY0FBYyxlQUFlLEVBQUUsVUFBVSxDQUFDOztFQUMxQztJQUNFLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsdUJBQXVCO0VBQ3pCOztFQUNBLGNBQWMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7O0VBRXBELGNBQWMsa0JBQWtCLENBQUM7O0VBRWpDO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtHQUNYOztFQUNBO0lBQ0MsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsV0FBVztFQUNiOztFQUNBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtFQUNqQjs7RUFDQSxzQkFBc0IsVUFBVSxDQUFDOztFQUNqQztJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsVUFBVTtFQUNaOztFQUVDO0lBQ0MsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUyxFQUFFLFVBQVU7SUFDckIsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjs7RUFDQSxlQUFlLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQzs7RUFDbkQ7SUFDRSxZQUFZO0lBQ1osVUFBVTtFQUNaOztFQUNBO0lBQ0UsbURBQW1EO0lBQ25ELG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUEsV0FBVyw2QkFBNkIsQ0FBQyxrQkFBa0IsQ0FBQzs7RUFDNUQ7SUFDRSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUNBLGFBQWEsbUJBQW1CLENBQUM7O0VBQ2pDO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcclxuICAgICAgICB3aWR0aDogODd2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbnRhaW5lcnttYXgtd2lkdGg6MTE3MHB4OyBtYXJnaW46YXV0bzt9XHJcbiAgaW1neyBtYXgtd2lkdGg6MTAwJTt9XHJcbiAgLmluYm94X3Blb3BsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZWZlIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogNDAlOyBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgfVxyXG4gIC5pbmJveF9tc2cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLnRvcF9zcGFjeyBtYXJnaW46IDIwcHggMCAwO31cclxuICBcclxuICBcclxuICAucmVjZW50X2hlYWRpbmcge2Zsb2F0OiBsZWZ0OyB3aWR0aDo0MCU7fVxyXG5cclxuICAuc3JjaF9iYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogNjAlOyBcclxuICB9XHJcblxyXG4gIC5oZWFkaW5kX3NyY2h7IHBhZGRpbmc6MTBweCAyOXB4IDEwcHggMjBweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzRjNGM0O31cclxuICBcclxuICAucmVjZW50X2hlYWRpbmcgaDQge1xyXG4gICAgY29sb3I6ICMwNTcyOGY7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5zcmNoX2JhciBpbnB1dHsgYm9yZGVyOjFweCBzb2xpZCAjY2RjZGNkOyBib3JkZXItd2lkdGg6MCAwIDFweCAwOyB3aWR0aDo4MCU7IHBhZGRpbmc6MnB4IDAgNHB4IDZweDsgYmFja2dyb3VuZDpub25lO31cclxuICAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAuc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XHJcbiAgXHJcbiAgLmNoYXRfaWIgaDV7IGZvbnQtc2l6ZToxNXB4OyBjb2xvcjojNDY0NjQ2OyBtYXJnaW46MCAwIDhweCAwO31cclxuICAuY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxyXG4gIC5jaGF0X2liIHB7IGZvbnQtc2l6ZToxNHB4OyBjb2xvcjojOTg5ODk4OyBtYXJnaW46YXV0b31cclxuICAuY2hhdF9pbWcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuICAuY2hhdF9pYl9hY3RpdmV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmNoYXRfaWIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICB9XHJcbiAgXHJcbiAgLmNoYXRfcGVvcGxleyBvdmVyZmxvdzpoaWRkZW47IGNsZWFyOmJvdGg7fVxyXG4gIC5jaGF0X2xpc3Qge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGM0YzQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcclxuICB9XHJcbiAgLmluYm94X2NoYXQgeyBtYXgtaGVpZ2h0OiA2MDBweDsgb3ZlcmZsb3cteTogc2Nyb2xsO31cclxuICBcclxuICAuYWN0aXZlX2NoYXR7IGJhY2tncm91bmQ6I2ViZWJlYjt9XHJcbiAgXHJcbiAgLmluY29taW5nX21zZ19pbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAucmVjZWl2ZWRfbXNnIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgfVxyXG4gICAucmVjZWl2ZWRfd2l0aGRfbXNnIHAge1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudGltZV9kYXRlIHtcclxuICAgIGNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDhweCAwIDA7XHJcbiAgfVxyXG4gIC5yZWNlaXZlZF93aXRoZF9tc2cgeyB3aWR0aDogNTclO31cclxuICAubWVzZ3Mge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9XHJcbiAgXHJcbiAgIC5zZW50X21zZyBwIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMjc3YmQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMDsgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgLm91dGdvaW5nX21zZ3sgb3ZlcmZsb3c6aGlkZGVuOyBtYXJnaW46MjZweCAwIDI2cHg7fVxyXG4gIC5zZW50X21zZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDYlO1xyXG4gIH1cclxuICAuaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICBjb2xvcjogIzRjNGM0YztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnR5cGVfbXNnIHtib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gIC5tc2dfc2VuZF9idG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAyNzdiZCAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgfVxyXG4gIC5tZXNzYWdpbmcgeyBwYWRkaW5nOiAwIDAgNTBweCAwO31cclxuICAubXNnX2hpc3Rvcnkge1xyXG4gICAgaGVpZ2h0OiA1MTZweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2hhdF9saXN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDojZWJlYmViO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chat/chat.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/chat/chat.component.ts ***!
    \***************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/chat-message */
    "./src/app/models/chat-message.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(userService, chatService) {
        _classCallCheck(this, ChatComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.currentUser = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
        this.contactsNumber = 0;
        this.index = -1;
        this.showInboxMessage = false;
        this.sendingMessage = '';
        this.map = new Map();
        this.chatInfo = new Map();
        this.lastMessage = new Map();
        this.firstIterationIgnore = false;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.username = sessionStorage.getItem("username");
          this.chatService.socketChatMessageSubject.subscribe(function (result) {
            var socketChatMessage = result;

            if (socketChatMessage.content && _this3.firstIterationIgnore) {
              _this3.addReceivedMessage(socketChatMessage);
            }

            _this3.firstIterationIgnore = true;
          }, function (error) {});
          this.scrollToBottom();
          this.userService.getAllUsers().subscribe(function (result) {
            _this3.personalCards = result;
            _this3.contactsNumber = _this3.personalCards.length;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.scrollToBottom();
        } //on click, vengono caricati i messaggi relativi alla coppia di utenti

      }, {
        key: "getMessage",
        value: function getMessage(personalCard, index) {
          if (this.currentUser.user.username === personalCard.user.username) {
            return;
          }

          this.index = index;
          this.loadChatContent(personalCard.user.username);
          this.showInboxMessage = true;
          this.currentUser = personalCard;
          this.chatInfo[personalCard.user.username] = false;
        }
      }, {
        key: "isActive",
        value: function isActive(i) {
          return this.index === i;
        }
      }, {
        key: "toBeRead",
        value: function toBeRead(i) {
          var username = this.personalCards[i].user.username;
          return this.chatInfo[username];
        } //carica la lista di messaggi corretta

      }, {
        key: "loadChatContent",
        value: function loadChatContent(username) {
          if (this.map[username] === undefined) {
            this.map[username] = [];
          }

          this.chatMessage = this.map[username];
        } //determina se è inviato da me

      }, {
        key: "isSent",
        value: function isSent(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.from.username;
          return u1 === u2;
        } //oppure se è un messaggio ricevuto

      }, {
        key: "isReceived",
        value: function isReceived(chatMessage) {
          var u1 = sessionStorage.getItem('username');
          var u2 = chatMessage.to.username;
          return u1 === u2;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var userTo = this.currentUser.user.username;
          this.chatService.sendChatMessage(userTo, this.sendingMessage);
          this.addSentMessage(userTo);
          this.sendingMessage = '';
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom() {
          try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
          } catch (err) {}
        }
      }, {
        key: "addReceivedMessage",
        value: function addReceivedMessage(socketChatMessage) {
          if (this.map[socketChatMessage.userFrom] === undefined) {
            this.map[socketChatMessage.userFrom] = [];
          }

          var from = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](socketChatMessage.userFrom, "");
          var to = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          this.lastMessage[socketChatMessage.userFrom] = socketChatMessage.content;
          var chatMessage = new src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](from, to, socketChatMessage.content);
          this.map[socketChatMessage.userFrom].push(chatMessage);
          this.notifyUser(socketChatMessage.userFrom);
        }
      }, {
        key: "notifyUser",
        value: function notifyUser(userFrom) {
          var i = 0;
          var personalCard;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.personalCards[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var p = _step.value;

              if (p.user.username === userFrom) {
                if (i === 0) {
                  break;
                }

                this.personalCards.splice(i, 1);
                this.personalCards.unshift(p);
                break;
              }

              i += 1;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (this.index !== i) {
            this.chatInfo[userFrom] = true;
          }

          this.handleIndex(this.index, i);
        }
      }, {
        key: "handleIndex",
        value: function handleIndex(selectedChat, oldPositionChat) {
          if (this.index === -1) {} else if (selectedChat === oldPositionChat && selectedChat !== 0) {
            this.index = 0;
          } else if (selectedChat < oldPositionChat) {
            this.index++;
          }
        }
      }, {
        key: "addSentMessage",
        value: function addSentMessage(userTo) {
          if (this.map[userTo] === undefined) {
            this.map[userTo] = [];
          }

          var from = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](sessionStorage.getItem("username"), "");
          var to = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](userTo, "");
          var chatMessage = new src_app_models_chat_message__WEBPACK_IMPORTED_MODULE_5__["ChatMessage"](from, to, this.sendingMessage);
          this.map[userTo].push(chatMessage);
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', {
      static: false
    })], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.css */
      "./src/app/components/chat/chat.component.css")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/components/complete-register/complete-register.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/complete-register/complete-register.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCompleteRegisterCompleteRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n    margin-top: 25px;\r\n    \r\n}\r\n\r\nform{\r\n    padding-top: 0px !important;\r\n}\r\n\r\ninput{\r\n\r\n    padding: 10px;\r\n}\r\n\r\n#profile_image{\r\n    margin-bottom: 25px;\r\n}\r\n\r\ntextarea{\r\n    padding: 10px;\r\n}\r\n\r\n.background{\r\n    position: fixed;\r\n    top: 65%;\r\n    left: 0;\r\n    background-color: #0277bd;\r\n    width: 100%;\r\n    z-index: -1;\r\n    height: 100%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZS1yZWdpc3Rlci9jb21wbGV0ZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFHQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixRQUFRO0lBQ1IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wbGV0ZS1yZWdpc3Rlci9jb21wbGV0ZS1yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmlucHV0e1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNwcm9maWxlX2ltYWdle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/complete-register/complete-register.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/complete-register/complete-register.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CompleteRegisterComponent */

  /***/
  function srcAppComponentsCompleteRegisterCompleteRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteRegisterComponent", function () {
      return CompleteRegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-image-compress */
    "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
    /* harmony import */


    var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var CompleteRegisterComponent =
    /*#__PURE__*/
    function () {
      function CompleteRegisterComponent(imageCompress, registerService, router, userService) {
        _classCallCheck(this, CompleteRegisterComponent);

        this.imageCompress = imageCompress;
        this.registerService = registerService;
        this.router = router;
        this.userService = userService;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__["PersonalCard"]();
      }

      _createClass(CompleteRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.userService.personalCardSubject.subscribe(function (personalCard) {
            _this4.personalCard = personalCard;

            _this4.showUserImage(personalCard);
          });
          this.userService.getMyPersonalCard().subscribe(function (result) {
            console.log(result);
          }, function (error) {});
        }
      }, {
        key: "showUserImage",
        value: function showUserImage(personalCard) {
          if (personalCard.imageUrl) {
            this.url = personalCard.imageUrl;
          }
        }
      }, {
        key: "compressFile",
        value: function compressFile(image) {
          var _this5 = this;

          this.imgResultBeforeCompress = image;
          console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
          this.imageCompress.compressFile(image, ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__["DOC_ORIENTATION"], 25, 25).then(function (result) {
            _this5.imgResultAfterCompress = result;
            _this5.url = _this5.imgResultAfterCompress;
            console.warn('Size in bytes is now:', _this5.imageCompress.byteCount(result));
          });
        }
      }, {
        key: "addFile",
        value: function addFile(event) {
          var _this6 = this;

          if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (event) {
              _this6.url = event.target.result;

              _this6.compressFile(_this6.url);

              _this6.getBase64ImageFromUrl(_this6.url).then(function (result) {
                return _this6.handleResult(result);
              }).catch(function (err) {
                return console.error(err);
              });
            };

            reader.readAsDataURL(event.target.files[0]);
          }
        }
      }, {
        key: "getBase64ImageFromUrl",
        value: function getBase64ImageFromUrl(imageUrl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var res, blob;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(imageUrl);

                  case 2:
                    res = _context.sent;
                    _context.next = 5;
                    return res.blob();

                  case 5:
                    blob = _context.sent;
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      var reader = new FileReader();
                      reader.addEventListener("load", function () {
                        resolve(reader.result);
                      }, false);

                      reader.onerror = function () {
                        return reject(_this7);
                      };

                      reader.readAsDataURL(blob);
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "handleReaderLoaded",
        value: function handleReaderLoaded(e) {
          this.personalCard.base64StringImage = 'data:image/png;base64,' + btoa(e.target.result);
        }
      }, {
        key: "handleResult",
        value: function handleResult(result) {
          this.personalCard.base64StringImage = String(result);
          console.log(this.personalCard);
        }
      }, {
        key: "completeRegister",
        value: function completeRegister() {
          var _this8 = this;

          this.registerService.completeUserRegister(this.personalCard).subscribe(function (result) {
            _this8.handleResponse(result);
          }, function (error) {
            console.log("NO OK");
          });
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(result) {
          this.responseMessage = result;

          if (this.responseMessage.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].SUCCESSFUL_REGISTER) {
            sessionStorage.removeItem("firstLogin");
            this.router.navigate(['home']);
          } else if (this.responseMessage.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].INCOMPLETE_REGISTER) {
            this.router.navigate(['home']);
          } else {
            console.log("qualcosa è andato storto");
          }
        }
      }]);

      return CompleteRegisterComponent;
    }();

    CompleteRegisterComponent.ctorParameters = function () {
      return [{
        type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__["NgxImageCompressService"]
      }, {
        type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }];
    };

    CompleteRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-complete-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./complete-register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complete-register/complete-register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./complete-register.component.css */
      "./src/app/components/complete-register/complete-register.component.css")).default]
    })], CompleteRegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/error/error.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/error/error.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/error/error.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/error/error.component.ts ***!
    \*****************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppComponentsErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/components/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/components/event/event.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/event/event.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .pac-container {   \r\n    z-index: 9999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAucGFjLWNvbnRhaW5lciB7ICAgXHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/event/event.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/event/event.component.ts ***!
    \*****************************************************/

  /*! exports provided: EventComponent, Event */

  /***/
  function srcAppComponentsEventEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventComponent", function () {
      return EventComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Event", function () {
      return Event;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var EventComponent =
    /*#__PURE__*/
    function () {
      function EventComponent(eventService) {
        _classCallCheck(this, EventComponent);

        this.eventService = eventService;
        this.eventPost = new Event();
      }

      _createClass(EventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.eventService.eventResponseMessage.subscribe(function (e) {
            _this9.eventResponseMessage = e;
          });
        }
      }, {
        key: "handleEventCreation",
        value: function handleEventCreation() {
          var _this10 = this;

          this.eventService.createEvent(this.eventPost).subscribe(function (response) {
            console.log(response);

            _this10.eventService.setEventCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_3__["MessageCode"].EVENT_CREATED);

            _this10.cleanFields();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange($event) {
          this.eventPost.place = $event.formatted_address;
          this.eventPost.placeId = $event.place_id;
        }
      }, {
        key: "cleanFields",
        value: function cleanFields() {
          this.eventPost.title = "";
          this.eventPost.description = "";
          this.eventPost.date = null;
          this.eventPost.place = "";
        }
      }]);

      return EventComponent;
    }();

    EventComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    EventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event/event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event.component.css */
      "./src/app/components/event/event.component.css")).default]
    })], EventComponent);

    var Event = function Event() {
      _classCallCheck(this, Event);
    };
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/carousel/carousel.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/components/home/carousel/carousel.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeCarouselCarouselComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/home/carousel/carousel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/home/carousel/carousel.component.ts ***!
    \****************************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppComponentsHomeCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CarouselComponent =
    /*#__PURE__*/
    function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarouselComponent;
    }();

    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carousel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/carousel/carousel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carousel.component.css */
      "./src/app/components/home/carousel/carousel.component.css")).default]
    })], CarouselComponent);
    /***/
  },

  /***/
  "./src/app/components/home/create-form/create-form.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/home/create-form/create-form.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeCreateFormCreateFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    margin-top: 50px;\r\n}\r\n\r\n.card-header{\r\n    background-color: #0277bd;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NyZWF0ZS1mb3JtL2NyZWF0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jcmVhdGUtZm9ybS9jcmVhdGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/create-form/create-form.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/home/create-form/create-form.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateFormComponent */

  /***/
  function srcAppComponentsHomeCreateFormCreateFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateFormComponent", function () {
      return CreateFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");

    var CreateFormComponent =
    /*#__PURE__*/
    function () {
      function CreateFormComponent(todoService, eventService) {
        _classCallCheck(this, CreateFormComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.activatedForm = "todo";
      }

      _createClass(CreateFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this11.todoResponseMessage = m;
          });
          this.eventService.eventResponseMessage.subscribe(function (e) {
            _this11.eventResponseMessage = e;
          });
        }
      }, {
        key: "selectForm",
        value: function selectForm(formNumber) {
          this.showCorrectForm = formNumber;
        }
      }, {
        key: "showForm",
        value: function showForm(form) {
          this.activatedForm = form;
          console.log(form);
        }
      }]);

      return CreateFormComponent;
    }();

    CreateFormComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    CreateFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/create-form/create-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-form.component.css */
      "./src/app/components/home/create-form/create-form.component.css")).default]
    })], CreateFormComponent);
    /***/
  },

  /***/
  "./src/app/components/home/generic-board/generic-board.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/components/home/generic-board/generic-board.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeGenericBoardGenericBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid{\r\n    margin-top: 20px;\r\n}\r\n\r\nnav{\r\n    background-color: white;\r\n    border: solid 2px #1565c0;\r\n    border-radius: 5px;\r\n}\r\n\r\na{\r\n    color: white !important;\r\n    font-size: large;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2dlbmVyaWMtYm9hcmQvZ2VuZXJpYy1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2dlbmVyaWMtYm9hcmQvZ2VuZXJpYy1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzE1NjVjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/generic-board/generic-board.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/home/generic-board/generic-board.component.ts ***!
    \**************************************************************************/

  /*! exports provided: GenericBoardComponent */

  /***/
  function srcAppComponentsHomeGenericBoardGenericBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenericBoardComponent", function () {
      return GenericBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var GenericBoardComponent =
    /*#__PURE__*/
    function () {
      function GenericBoardComponent(todoService, eventService, refreshService) {
        _classCallCheck(this, GenericBoardComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.refreshService = refreshService;
        this.activatedBoard = 0;
      }

      _createClass(GenericBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this12.todoResponseMessage = m;

            if (m == src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__["MessageCode"].TODO_CREATED) {
              _this12.showBoard(0);

              _this12.refreshService.refreshTodoBoard();
            }
          });
          this.eventService.eventResponseMessage.subscribe(function (m) {
            _this12.eventResponseMessage = m;

            if (m == src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_4__["MessageCode"].EVENT_CREATED) {
              _this12.showBoard(1);

              _this12.refreshService.refreshEventBoard();
            }
          });
        }
      }, {
        key: "showBoard",
        value: function showBoard(board) {
          this.activatedBoard = board;
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.todoService.setTodoCreationResponse(-1);
          this.eventService.setEventCreationResponse(-1);
        }
      }]);

      return GenericBoardComponent;
    }();

    GenericBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_5__["RefreshService"]
      }];
    };

    GenericBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generic-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generic-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/generic-board/generic-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generic-board.component.css */
      "./src/app/components/home/generic-board/generic-board.component.css")).default]
    })], GenericBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n@media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        width: 74vw;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIHdpZHRoOiA3NHZ3O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '');
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.getMyPersonalCard().subscribe();
        }
      }, {
        key: "isRegisterCompleted",
        value: function isRegisterCompleted() {
          return sessionStorage.getItem("firstLogin");
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/logout/logout.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/home/logout/logout.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/home/logout/logout.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/home/logout/logout.component.ts ***!
    \************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppComponentsHomeLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.handleLogout();
        }
      }, {
        key: "handleLogout",
        value: function handleLogout() {
          sessionStorage.clear();
          this.router.navigate(['login']);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/components/home/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/components/home/story-viewer/story-viewer.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home/story-viewer/story-viewer.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeStoryViewerStoryViewerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header{\r\n    background-color: #0277bd;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.card{\r\n    margin-top: 25px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3J5LXZpZXdlci9zdG9yeS12aWV3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3J5LXZpZXdlci9zdG9yeS12aWV3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjc3YmQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/story-viewer/story-viewer.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/home/story-viewer/story-viewer.component.ts ***!
    \************************************************************************/

  /*! exports provided: StoryViewerComponent */

  /***/
  function srcAppComponentsHomeStoryViewerStoryViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoryViewerComponent", function () {
      return StoryViewerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StoryViewerComponent =
    /*#__PURE__*/
    function () {
      function StoryViewerComponent() {
        _classCallCheck(this, StoryViewerComponent);
      }

      _createClass(StoryViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoryViewerComponent;
    }();

    StoryViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-story-viewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./story-viewer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/story-viewer/story-viewer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./story-viewer.component.css */
      "./src/app/components/home/story-viewer/story-viewer.component.css")).default]
    })], StoryViewerComponent);
    /***/
  },

  /***/
  "./src/app/components/home/todo-board/todo-board.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/home/todo-board/todo-board.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeTodoBoardTodoBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\r\n    padding: 0 !important;\r\n}\r\n\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n/* Modal Content */\r\n\r\n.modal-content{\r\n        background-color: #fefefe;\r\n        margin: auto;\r\n        padding: 20px;\r\n        border: 1px solid #888;\r\n        width: 50%;  \r\n        max-height: 80vh;\r\n      }\r\n\r\n#modal-title{\r\n        align-content: left;\r\n        border-bottom: 1px solid #888;\r\n        padding:10px;\r\n        margin-bottom: 10px;\r\n        font-weight: bold;\r\n        font-size: x-large;\r\n      }\r\n\r\n.modal-list{\r\n        overflow-y: scroll;\r\n      }\r\n\r\n.row{\r\n        margin:20px;\r\n      }\r\n\r\n.modal-user{\r\n        font-size: large;\r\n      }\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    text-align: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvZG8tYm9hcmQvdG9kby1ib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYyxFQUFFLHNCQUFzQjtJQUN0QyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLGtCQUFrQixFQUFFLHdCQUF3QjtJQUM1QyxPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVcsRUFBRSxlQUFlO0lBQzVCLFlBQVksRUFBRSxnQkFBZ0I7SUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtJQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7SUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0VBQzFEOztBQUVFLGtCQUFrQjs7QUFDbEI7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLGdCQUFnQjtNQUNsQjs7QUFFQTtRQUNFLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO01BQ3BCOztBQUVBO1FBQ0Usa0JBQWtCO01BQ3BCOztBQUdBO1FBQ0UsV0FBVztNQUNiOztBQUVBO1FBQ0UsZ0JBQWdCO01BQ2xCOztBQUdKLHFCQUFxQjs7QUFDckI7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0FBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3RvZG8tYm9hcmQvdG9kby1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG5cclxuICAgIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuICAgIC5tb2RhbC1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogNTAlOyAgXHJcbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgI21vZGFsLXRpdGxle1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLm1vZGFsLWxpc3R7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICBcclxuICAgICAgLnJvd3tcclxuICAgICAgICBtYXJnaW46MjBweDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5tb2RhbC11c2Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuICAuY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/todo-board/todo-board.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/home/todo-board/todo-board.component.ts ***!
    \********************************************************************/

  /*! exports provided: TodoBoardComponent */

  /***/
  function srcAppComponentsHomeTodoBoardTodoBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoBoardComponent", function () {
      return TodoBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var TodoBoardComponent =
    /*#__PURE__*/
    function () {
      function TodoBoardComponent(todoService, refreshService) {
        _classCallCheck(this, TodoBoardComponent);

        this.todoService = todoService;
        this.refreshService = refreshService;
      }

      _createClass(TodoBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.showAllTodo();
          this.refreshService.todoRefreshMessage.subscribe(function (m) {
            _this13.showAllTodo();
          });
        }
      }, {
        key: "showAllTodo",
        value: function showAllTodo() {
          var _this14 = this;

          this.todoService.getAllTodo().subscribe(function (response) {
            _this14.todoList = response;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "openModal",
        value: function openModal($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.showAllTodo();
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
        }
      }]);

      return TodoBoardComponent;
    }();

    TodoBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_refresh_service__WEBPACK_IMPORTED_MODULE_3__["RefreshService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoBoardComponent.prototype, "personal", void 0);
    TodoBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/todo-board/todo-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-board.component.css */
      "./src/app/components/home/todo-board/todo-board.component.css")).default]
    })], TodoBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/home/user-info/user-info.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/components/home/user-info/user-info.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeUserInfoUserInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.list-group-flush{\r\n  margin-top: 20px;\r\n}\r\n\r\n.fa{\r\n    margin-right: 12px;\r\n}\r\n\r\n.img-thumbnail{\r\n    margin-top: 10px;\r\n}\r\n\r\n#test{\r\n  background-color: #fafafa;\r\n  border-radius: 0;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    top: 40px;\r\n    width: 13vw;\r\n    max-height: 100%;\r\n    overflow: auto;\r\n    z-index: 1;\r\n    padding: 0px;\r\n    z-index: 0;\r\n}\r\n\r\n#test::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n/* Hide scrollbar for IE and Edge */\r\n\r\n#test {\r\n    -ms-overflow-style: none;\r\n  }\r\n\r\n@media screen and (max-width: 992px) {\r\n    .container {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n.list-group-item{\r\n    background-color: #fafafa;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    padding: 15px;\r\n    border: none !important;\r\n  }\r\n\r\n.list-group-item:hover{\r\n    color: white !important;\r\n    background-color: #009df8 !important;\r\n    cursor: pointer;\r\n  }\r\n\r\n#username{\r\n    text-align: center;\r\n    margin-top: 50px;\r\n\r\n  }\r\n\r\nh4{\r\n  margin-top: 30px;\r\n}\r\n\r\n.active-item{\r\n  color: white !important;\r\n  background-color: #0277bd !important; \r\n}\r\n\r\n.default-fa{\r\n  color: gray;\r\n}\r\n\r\n.active-fa{\r\n  color: white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBSUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0lBQ2QsZUFBZTtJQUNmLFNBQVM7SUFDVCxPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFDRSx3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjtFQUNGOztBQUlBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjs7QUFJQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0VBRWxCOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUtBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5saXN0LWdyb3VwLWZsdXNoe1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLmltZy10aHVtYm5haWx7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiN0ZXN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICB3aWR0aDogMTN2dztcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4jdGVzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFIGFuZCBFZGdlICovXHJcbiAgI3Rlc3Qge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuICAubGlzdC1ncm91cC1pdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOWRmOCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAjdXNlcm5hbWV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICB9XHJcblxyXG5oNHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYWN0aXZlLWl0ZW17XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzdiZCAhaW1wb3J0YW50OyBcclxufVxyXG5cclxuLmRlZmF1bHQtZmF7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5hY3RpdmUtZmF7XHJcbiAgY29sb3I6IHdoaXRlXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/user-info/user-info.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/home/user-info/user-info.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppComponentsHomeUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserInfoComponent =
    /*#__PURE__*/
    function () {
      function UserInfoComponent() {
        _classCallCheck(this, UserInfoComponent);

        this.iconNumber = -1;
      }

      _createClass(UserInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectActive",
        value: function selectActive(number) {
          this.iconNumber = number;
        }
      }, {
        key: "getMyProfileLink",
        value: function getMyProfileLink() {
          return "/show-profile/" + sessionStorage.getItem("username");
        }
      }]);

      return UserInfoComponent;
    }();

    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/user-info/user-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.component.css */
      "./src/app/components/home/user-info/user-info.component.css")).default]
    })], UserInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/list-todo/list-todo.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/list-todo/list-todo.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsListTodoListTodoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC10b2RvL2xpc3QtdG9kby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/list-todo/list-todo.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/list-todo/list-todo.component.ts ***!
    \*************************************************************/

  /*! exports provided: ListTodoComponent */

  /***/
  function srcAppComponentsListTodoListTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListTodoComponent", function () {
      return ListTodoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListTodoComponent =
    /*#__PURE__*/
    function () {
      function ListTodoComponent(todoService, router) {
        _classCallCheck(this, ListTodoComponent);

        this.todoService = todoService;
        this.router = router;
      }

      _createClass(ListTodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMyTodo();
        }
      }, {
        key: "showMyTodo",
        value: function showMyTodo() {
          var _this15 = this;

          this.todoService.getMyTodoList("published").subscribe(function (response) {
            _this15.todo = response;
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todoId) {
          var _this16 = this;

          this.todoService.deleteTodo(todoId).subscribe(function (response) {
            console.log(response);

            _this16.showMyTodo();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(todoId) {
          this.router.navigate(['update-todo/', todoId]);
        }
      }]);

      return ListTodoComponent;
    }();

    ListTodoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ListTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-todo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-todo/list-todo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-todo.component.css */
      "./src/app/components/list-todo/list-todo.component.css")).default]
    })], ListTodoComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1{\r\n    text-align: center;\r\n    padding: 12px;\r\n}\r\n\r\n#doneit-image{\r\n    padding-right: 15px;\r\n}\r\n\r\n@media screen and (max-width: 1200px) { \r\n    #doneit-image{\r\n        display: none;\r\n    }\r\n }\r\n\r\n.background{\r\n    position: fixed;\r\n    top: 60%;\r\n    left: 0;\r\n    background-color: #0277bd;\r\n    width: 100%;\r\n    z-index: -1;\r\n    height: 100%;\r\n\r\n}\r\n\r\n#test{\r\n    margin-top: 48px;\r\n}\r\n\r\n/* // Medium devices (tablets, 768px and up)\r\n@media (min-width: 768px) { }\r\n\r\n// Large devices (desktops, 992px and up)\r\n@media (min-width: 992px) { ... }\r\n\r\n// Extra large devices (large desktops, 1200px and up)\r\n@media (min-width: 1200px) { ... } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7Q0FDSDs7QUFHQTtJQUNHLGVBQWU7SUFDZixRQUFRO0lBQ1IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUdBOzs7Ozs7O29DQU9vQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuI2RvbmVpdC1pbWFnZXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgeyBcclxuICAgICNkb25laXQtaW1hZ2V7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuIH1cclxuXHJcblxyXG4gLmJhY2tncm91bmR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDYwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbiN0ZXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG5cclxuXHJcbi8qIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyB9XHJcblxyXG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgLi4uIH1cclxuXHJcbi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IC4uLiB9ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(loginAuth, router) {
        _classCallCheck(this, LoginComponent);

        this.loginAuth = loginAuth;
        this.router = router;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('seppu_97', 'Password1234!');
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.loginAuth.isUserLoggedIn()) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "handleLogin",
        value: function handleLogin() {
          var _this17 = this;

          console.log(this.user);
          this.loginAuth.executeLoginAuthentication(this.user).subscribe(function (data) {
            _this17.handleResponse(data);
          }, function (error) {
            _this17.errorLogin = 'Impossibile effettuare il login. Ci scusiamo per il disagio.';
          });
        }
      }, {
        key: "createUserSession",
        value: function createUserSession(firstLogin) {
          sessionStorage.setItem("username", this.user.getUsername());
          sessionStorage.setItem("token", "Bearer ".concat(this.responseMessage.token));

          if (firstLogin) {
            sessionStorage.setItem("firstLogin", "true");
          }
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.responseMessage = data;
          this.errorCode = this.responseMessage.messageCode;

          switch (this.errorCode) {
            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].INVALID_CREDENTIAL:
              console.log("nome utente o password errati");
              this.errorLogin = this.responseMessage.message;
              break;

            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].SUCCESSFUL_LOGIN:
              console.log("Login effettuato con successo");
              console.log(this.responseMessage);
              this.createUserSession(false);
              this.router.navigate(['home']);
              break;

            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].FIRST_LOGIN:
              console.log("Primo Login");
              console.log(this.responseMessage);
              this.createUserSession(true);
              this.router.navigate(['complete-register']);
              break;
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/my-event/my-event.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/my-event/my-event.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyEventMyEventComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " /* The Modal (background) */\r\n .modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n @media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 74vw !important;\r\n    }\r\n    \r\n  }\r\n /* Modal Content */\r\n .modal-content{\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;  \r\n    max-height: 80vh;\r\n  }\r\n #modal-title{\r\n    align-content: left;\r\n    border-bottom: 1px solid #888;\r\n    padding:10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: x-large;\r\n  }\r\n .modal-list{\r\n    overflow-y: scroll;\r\n  }\r\n .row{\r\n    margin:20px;\r\n  }\r\n .modal-user{\r\n    font-size: large;\r\n  }\r\n /* The Close Button */\r\n .close {\r\n    color: #aaaaaa;\r\n    text-align: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n .close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n @media screen and (min-width: 992px){\r\n    .container-fluid{\r\n      margin-left: 13vw;\r\n      margin-right: 0px !important;\r\n      padding: 0px !important;\r\n      width: 87vw;\r\n    }\r\n  }\r\n @media screen and (max-width: 992px){\r\n    .container-fluid{\r\n      margin: 0px;\r\n    }\r\n  }\r\n .container-fluid{\r\n    margin-top: 25px;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1ldmVudC9teS1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDLDJCQUEyQjtDQUMzQjtJQUNHLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDtDQUVBO0lBQ0U7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCOztFQUVGO0NBRUEsa0JBQWtCO0NBQ2xCO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7Q0FFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0NBRUE7SUFDRSxrQkFBa0I7RUFDcEI7Q0FHQTtJQUNFLFdBQVc7RUFDYjtDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0NBR0EscUJBQXFCO0NBQ3JCO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0NBRUE7O0lBRUUsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCO0NBR0E7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQiw0QkFBNEI7TUFDNUIsdUJBQXVCO01BQ3ZCLFdBQVc7SUFDYjtFQUNGO0NBRUE7SUFDRTtNQUNFLFdBQVc7SUFDYjtFQUNGO0NBRUE7SUFDRSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWV2ZW50L215LWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4gLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTN2dzsgXHJcbiAgICAgICAgd2lkdGg6IDc0dncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBNb2RhbCBDb250ZW50ICovXHJcbiAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNTAlOyAgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuICBcclxuICAjbW9kYWwtdGl0bGV7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtbGlzdHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiBcclxuXHJcbiAgLnJvd3tcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLXVzZXJ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuICAuY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuIFxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTN2dztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiA4N3Z3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/my-event/my-event.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/my-event/my-event.component.ts ***!
    \***********************************************************/

  /*! exports provided: MyEventComponent */

  /***/
  function srcAppComponentsMyEventMyEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyEventComponent", function () {
      return MyEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var MyEventComponent =
    /*#__PURE__*/
    function () {
      function MyEventComponent(eventService, sanitizer) {
        _classCallCheck(this, MyEventComponent);

        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.activatedBoard = 'active';
        this.username = '';
        this.isMapOpen = false;
        this.isPartecipantsModalOpen = false;
        this.partecipants = [];
      }

      _createClass(MyEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.username = sessionStorage.getItem("username");
          this.eventService.getMyEventList().subscribe(function (result) {
            _this18.myEventsList = result;
          }, function (error) {});
        }
      }, {
        key: "getJoinedEvents",
        value: function getJoinedEvents() {
          var _this19 = this;

          this.activatedBoard = 'joined';
          this.eventService.getMyJoinedEvents().subscribe(function (result) {
            _this19.myJoinedEventList = result;
            console.log(_this19.myJoinedEventList);
          });
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }, {
        key: "getMyEventList",
        value: function getMyEventList(status) {
          this.activatedBoard = status;
          this.eventService.getMyEventList();
        }
      }, {
        key: "openPartecipantModal",
        value: function openPartecipantModal(event) {
          this.isPartecipantsModalOpen = true;
          this.partecipants = event;
        }
      }, {
        key: "closePartecipantsModal",
        value: function closePartecipantsModal() {
          this.isPartecipantsModalOpen = false;
          this.partecipants = [];
        }
      }]);

      return MyEventComponent;
    }();

    MyEventComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    MyEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-event',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-event/my-event.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-event.component.css */
      "./src/app/components/my-event/my-event.component.css")).default]
    })], MyEventComponent);
    /***/
  },

  /***/
  "./src/app/components/my-todo-board/my-todo-board.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/my-todo-board/my-todo-board.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyTodoBoardMyTodoBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " /* The Modal (background) */\r\n .modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n @media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 74vw !important;\r\n    }\r\n    \r\n  }\r\n /* Modal Content */\r\n .modal-content{\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;  \r\n    max-height: 80vh;\r\n  }\r\n #modal-title{\r\n    align-content: left;\r\n    border-bottom: 1px solid #888;\r\n    padding:10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: x-large;\r\n  }\r\n .modal-list{\r\n    overflow-y: scroll;\r\n  }\r\n .row{\r\n    margin:20px;\r\n  }\r\n .modal-user{\r\n    font-size: large;\r\n  }\r\n /* The Close Button */\r\n .close {\r\n    color: #aaaaaa;\r\n    text-align: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n .close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n @media screen and (min-width: 992px){\r\n    .container-fluid{\r\n      margin-left: 13vw;\r\n      margin-right: 0px !important;\r\n      padding: 0px !important;\r\n      width: 87vw;\r\n    }\r\n  }\r\n @media screen and (max-width: 992px){\r\n    .container-fluid{\r\n      margin: 0px;\r\n    }\r\n  }\r\n .container-fluid{\r\n    margin-top: 25px;\r\n  }\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWJvYXJkL215LXRvZG8tYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQywyQkFBMkI7Q0FDM0I7SUFDRyxjQUFjLEVBQUUsc0JBQXNCO0lBQ3RDLGVBQWUsRUFBRSxrQkFBa0I7SUFDbkMsVUFBVSxFQUFFLGVBQWU7SUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7Q0FFQTtJQUNFO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjtDQUVBLGtCQUFrQjtDQUNsQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0NBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjtDQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0NBR0E7SUFDRSxXQUFXO0VBQ2I7Q0FFQTtJQUNFLGdCQUFnQjtFQUNsQjtDQUdBLHFCQUFxQjtDQUNyQjtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtDQUVBOztJQUVFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtDQUdBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsNEJBQTRCO01BQzVCLHVCQUF1QjtNQUN2QixXQUFXO0lBQ2I7RUFDRjtDQUVBO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjtDQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWJvYXJkL215LXRvZG8tYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXHJcbiAubW9kYWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcclxuICAgICAgICB3aWR0aDogNzR2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1vZGFsIENvbnRlbnQgKi9cclxuICAubW9kYWwtY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHdpZHRoOiA1MCU7ICBcclxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4gIFxyXG4gICNtb2RhbC10aXRsZXtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg4ODtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1saXN0e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxuIFxyXG5cclxuICAucm93e1xyXG4gICAgbWFyZ2luOjIwcHg7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtdXNlcntcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gIC5jbG9zZSB7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDg3dnc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250YWluZXItZmx1aWR7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIH1cclxuICBcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/my-todo-board/my-todo-board.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/my-todo-board/my-todo-board.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MyTodoBoardComponent */

  /***/
  function srcAppComponentsMyTodoBoardMyTodoBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTodoBoardComponent", function () {
      return MyTodoBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");

    var MyTodoBoardComponent =
    /*#__PURE__*/
    function () {
      function MyTodoBoardComponent(todoService) {
        _classCallCheck(this, MyTodoBoardComponent);

        this.todoService = todoService;
        this.username = '';
      }

      _createClass(MyTodoBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMyTodoList('published');
          this.activatedBoard = "published";
          this.username = sessionStorage.getItem("username");
        }
      }, {
        key: "getMyTodoList",
        value: function getMyTodoList(state) {
          var _this20 = this;

          this.todoService.getMyTodoList(state).subscribe(function (response) {
            console.log(response);
            _this20.todoList = response;
            _this20.activatedBoard = state;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getJoinedTodoList",
        value: function getJoinedTodoList() {
          var _this21 = this;

          this.activatedBoard = 'pending';
          this.todoService.getJoinedTodo().subscribe(function (result) {
            _this21.todoList = result;
          }, function (error) {});
        }
      }, {
        key: "receiveMessage",
        value: function receiveMessage($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.getMyTodoList('accepted');
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
        }
      }, {
        key: "acceptProposal",
        value: function acceptProposal(proposal) {
          var _this22 = this;

          console.log("proposal id: " + proposal.id);
          this.todoService.acceptProposal(this.currentTodo, proposal.id).subscribe(function (response) {
            console.log(response);

            _this22.closeModal();

            _this22.getMyTodoList('accepted');
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "refuseProposal",
        value: function refuseProposal(proposal) {
          var _this23 = this;

          console.log("rifiuto la proposta:" + proposal.id);
          this.todoService.refuseProposal(proposal.id).subscribe(function (response) {
            console.log(response);

            _this23.updateProposal(proposal, "refused");
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "undoRefuse",
        value: function undoRefuse(proposal) {
          var _this24 = this;

          this.todoService.undoRefuseProposal(proposal.id).subscribe(function (response) {
            console.log(response);

            _this24.updateProposal(proposal, "in progress");
          }, function (error) {
            console.log(error);
          });
          console.log("annullo la proposta:" + proposal.id);
        }
      }, {
        key: "updateProposal",
        value: function updateProposal(proposal, newState) {
          var i = this.currentTodo.proposals.indexOf(proposal);
          this.currentTodo.proposals[i].state = newState;
        }
      }]);

      return MyTodoBoardComponent;
    }();

    MyTodoBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    MyTodoBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-todo-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-todo-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-board/my-todo-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-todo-board.component.css */
      "./src/app/components/my-todo-board/my-todo-board.component.css")).default]
    })], MyTodoBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/my-todo-card/my-todo-card.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/my-todo-card/my-todo-card.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMyTodoCardMyTodoCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\r\n    margin: 30px;\r\n}\r\n\r\n#follow-todo{\r\n    margin: 12px;\r\n}\r\n\r\n#todo-user{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n#time{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n#info-todo{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n.container{\r\n    padding: 0px !important;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media screen and (min-width: 1200px) { \r\n    #icon-div1{\r\n        text-align: right !important;\r\n        padding: 2px !important;\r\n    \r\n    }\r\n    #icon-div2{\r\n        text-align: left !important;\r\n        padding: 2px !important;\r\n    }\r\n }\r\n\r\n#description-text{\r\n     margin: 12px !important;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS10b2RvLWNhcmQvbXktdG9kby1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLHVCQUF1Qjs7SUFFM0I7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktdG9kby1jYXJkL215LXRvZG8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbiNmb2xsb3ctdG9kb3tcclxuICAgIG1hcmdpbjogMTJweDtcclxufVxyXG5cclxuI3RvZG8tdXNlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjN2M3YzdjO1xyXG59XHJcblxyXG4jaW5mby10b2Rve1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM3YzdjN2M7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgeyBcclxuICAgICNpY29uLWRpdjF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgI2ljb24tZGl2MntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gI2Rlc2NyaXB0aW9uLXRleHR7XHJcbiAgICAgbWFyZ2luOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/my-todo-card/my-todo-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/my-todo-card/my-todo-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MyTodoCardComponent */

  /***/
  function srcAppComponentsMyTodoCardMyTodoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyTodoCardComponent", function () {
      return MyTodoCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");

    var MyTodoCardComponent =
    /*#__PURE__*/
    function () {
      function MyTodoCardComponent(todoService) {
        _classCallCheck(this, MyTodoCardComponent);

        this.todoService = todoService;
        this.showCorrectBody = 1;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log(this.todo);
      }

      _createClass(MyTodoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAcceptedUser();
        }
      }, {
        key: "changeBody",
        value: function changeBody(numBody) {
          this.showCorrectBody = numBody;
        }
      }, {
        key: "getProponentsNumber",
        value: function getProponentsNumber() {
          return this.todo.proposals.length;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.messageEvent.emit(this.todo);
        }
      }, {
        key: "getAcceptedUser",
        value: function getAcceptedUser() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.todo.proposals[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var proposal = _step2.value;
              console.log(proposal);

              if (proposal.state == "accepted") {
                this.acceptedUser = proposal.user;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      }, {
        key: "undoAcceptProposal",
        value: function undoAcceptProposal(todo) {
          var _this25 = this;

          this.todoService.undoAcceptProposal(todo.id).subscribe(function (response) {
            console.log(response);

            _this25.messageEvent.emit(null);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return MyTodoCardComponent;
    }();

    MyTodoCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MyTodoCardComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MyTodoCardComponent.prototype, "messageEvent", void 0);
    MyTodoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-todo-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-todo-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-todo-card/my-todo-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-todo-card.component.css */
      "./src/app/components/my-todo-card/my-todo-card.component.css")).default]
    })], MyTodoCardComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hm-gradient {\r\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#f3e7e9), color-stop(99%, #e3eeff), to(#e3eeff));\r\n    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);\r\n}\r\n.darken-grey-text {\r\n    color: #2E2E2E;\r\n}\r\n.navbar .dropdown-menu a:hover {\r\n    background-color: #01579b !important;\r\n}\r\n.darken-grey-text {\r\n    color: #2E2E2E;\r\n}\r\n.dropdown-item{\r\n    margin-left: 3%;\r\n    width: 95%;\r\n    margin-right: 3%;\r\n    border-radius: 5%;\r\n}\r\n#searchbar{\r\n    width: 100% !important;\r\n}\r\n#search-input{\r\n    width: 400px !important;\r\n}\r\n#searchbar-form{\r\n    margin-right: 0px !important;\r\n}\r\n#sidebar-btn{\r\n    margin-right: 10px;\r\n}\r\n.md-avatar {\r\n    vertical-align: middle;\r\n    width: 35px;\r\n    height: 35px;\r\n    margin-right: 12px;\r\n}\r\nnav{\r\n    z-index: 1;\r\n}\r\n#floating-btn{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    z-index: 2;\r\n    margin: 5px;\r\n}\r\n#bar-btn{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.xyz { \r\n    background-size: auto; \r\n    text-align: center; \r\n    padding-top: 100px; \r\n}\r\n.btn-circle.btn-sm { \r\n    width: 30px; \r\n    height: 30px; \r\n    padding: 6px 0px; \r\n    border-radius: 15px; \r\n    font-size: 8px; \r\n    text-align: center; \r\n}\r\n.btn-circle.btn-md { \r\n    width: 50px; \r\n    height: 50px; \r\n    padding: 7px 10px; \r\n    border-radius: 25px; \r\n    font-size: 10px; \r\n    text-align: center; \r\n}\r\n.btn-circle.btn-xl { \r\n    width: 50px; \r\n    height: 50px; \r\n    padding: 10px 16px; \r\n    border-radius: 35px; \r\n    font-size: 12px; \r\n    text-align: center; \r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1SEFBZ0Y7SUFBaEYsZ0ZBQWdGO0FBQ3BGO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtBQUNkO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhtLWdyYWRpZW50IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmM2U3ZTkgMCUsICNlM2VlZmYgOTklLCAjZTNlZWZmIDEwMCUpO1xyXG59XHJcbi5kYXJrZW4tZ3JleS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG59XHJcblxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5YiAhaW1wb3J0YW50O1xyXG59XHJcbi5kYXJrZW4tZ3JleS10ZXh0IHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG59XHJcbi5kcm9wZG93bi1pdGVte1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxufVxyXG5cclxuI3NlYXJjaGJhcntcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWFyY2gtaW5wdXR7XHJcbiAgICB3aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NlYXJjaGJhci1mb3Jte1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NpZGViYXItYnRue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWQtYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxubmF2e1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI2Zsb2F0aW5nLWJ0bntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4jYmFyLWJ0bntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ueHl6IHsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXHJcbn0gXHJcbi5idG4tY2lyY2xlLmJ0bi1zbSB7IFxyXG4gICAgd2lkdGg6IDMwcHg7IFxyXG4gICAgaGVpZ2h0OiAzMHB4OyBcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgXHJcbiAgICBmb250LXNpemU6IDhweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59IFxyXG4uYnRuLWNpcmNsZS5idG4tbWQgeyBcclxuICAgIHdpZHRoOiA1MHB4OyBcclxuICAgIGhlaWdodDogNTBweDsgXHJcbiAgICBwYWRkaW5nOiA3cHggMTBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTBweDsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59IFxyXG4uYnRuLWNpcmNsZS5idG4teGwgeyBcclxuICAgIHdpZHRoOiA1MHB4OyBcclxuICAgIGhlaWdodDogNTBweDsgXHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDsgXHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSAiXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(userAuth, userService, router) {
        _classCallCheck(this, NavbarComponent);

        this.userAuth = userAuth;
        this.userService = userService;
        this.router = router;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.userService.personalCardSubject.subscribe(function (personalCard) {
            _this26.updateUserInfoNav(personalCard);

            _this26.showChatButton();
          });

          if (this.isUserLoggedIn()) {
            this.userService.getMyPersonalCard().subscribe();
          }
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          this.username = sessionStorage.getItem("username");
          return this.userAuth.isUserLoggedIn();
        }
      }, {
        key: "updateUserInfoNav",
        value: function updateUserInfoNav(personalCard) {
          this.personalCard = personalCard;

          if (this.personalCard.imageUrl) {
            this.imagePath = this.personalCard.imageUrl;
          }
        }
      }, {
        key: "showChatButton",
        value: function showChatButton() {
          return this.router.routerState.snapshot.url !== '/chat';
        }
      }, {
        key: "hideMenu",
        value: function hideMenu() {
          return this.router.routerState.snapshot.url != '/complete-register';
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile-board/profile-board.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/profile-board/profile-board.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileBoardProfileBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\r\n    padding: 0 !important;\r\n}\r\n\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n.modal-content{\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;  \r\n    max-height: 80vh;\r\n  }\r\n\r\n#modal-title{\r\n    align-content: left;\r\n    border-bottom: 1px solid #888;\r\n    padding:10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: x-large;\r\n  }\r\n\r\n.modal-list{\r\n    overflow-y: scroll;\r\n  }\r\n\r\n.row{\r\n    margin:20px;\r\n  }\r\n\r\n.modal-user{\r\n    font-size: large;\r\n  }\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    text-align: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlLWJvYXJkL3Byb2ZpbGUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBR0E7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUMscUJBQXFCOztBQUNyQjtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUtYm9hcmQvcHJvZmlsZS1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG5cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNTAlOyAgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuICBcclxuICAjbW9kYWwtdGl0bGV7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtbGlzdHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbiBcclxuXHJcbiAgLnJvd3tcclxuICAgIG1hcmdpbjoyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLXVzZXJ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuICAgLmNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlOmhvdmVyLFxyXG4gIC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/components/profile-board/profile-board.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/profile-board/profile-board.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfileBoardComponent */

  /***/
  function srcAppComponentsProfileBoardProfileBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileBoardComponent", function () {
      return ProfileBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ProfileBoardComponent =
    /*#__PURE__*/
    function () {
      function ProfileBoardComponent(todoService, eventService, sanitizer) {
        _classCallCheck(this, ProfileBoardComponent);

        this.todoService = todoService;
        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.activatedBoard = 0;
        this.isMapOpen = false;
      }

      _createClass(ProfileBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showTodoBoard();
        }
      }, {
        key: "showTodoBoard",
        value: function showTodoBoard() {
          var _this27 = this;

          this.activatedBoard = 0;
          this.eventList = null;
          this.todoService.getProfileTodoList(this.username).subscribe(function (response) {
            console.log(response);
            _this27.todoList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showEventBoard",
        value: function showEventBoard() {
          var _this28 = this;

          this.activatedBoard = 2;
          this.todoList = null;
          this.eventService.getEventListByUsername(this.username).subscribe(function (response) {
            _this28.eventList = response;
          }, function (error) {});
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }, {
        key: "openModal",
        value: function openModal($event) {
          if ($event) {
            this.currentTodo = $event;
          } else {
            this.showTodoBoard();
          }
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.currentTodo = null;
        }
      }]);

      return ProfileBoardComponent;
    }();

    ProfileBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfileBoardComponent.prototype, "username", void 0);
    ProfileBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile-board/profile-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-board.component.css */
      "./src/app/components/profile-board/profile-board.component.css")).default]
    })], ProfileBoardComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 74vw !important;\r\n    }\r\n    \r\n  }\r\n\r\n\r\n.img{\r\n    height: 250px !important;\r\n    width: 250px !important;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n#user-card{\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n#user-board{\r\n    margin-top: 25px;\r\n}\r\n\r\n\r\n#username{\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.container-fluid{\r\n    padding: 0px !important;\r\n}\r\n\r\n\r\n.card-text{\r\n    padding: 25px;\r\n}\r\n\r\n\r\n.fa-user-plus{\r\n    margin-left: 10px;\r\n    color: #f44c36 !important;\r\n    font-size: 2rem !important;\r\n}\r\n\r\n\r\n.fa{\r\n    font-size: 1.5rem;\r\n    margin-right: 10px;\r\n    color: gray;\r\n}\r\n\r\n\r\n.list-group-item{\r\n    border-bottom: none !important;\r\n}\r\n\r\n\r\n.list-group{\r\n    margin-top: 30px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n#user-card{\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjs7RUFFRjs7O0FBR0Y7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuY29udGFpbmVyLWZsdWlke1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3Z3OyBcclxuICAgICAgICB3aWR0aDogNzR2dyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbi5pbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbiN1c2VyLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4jdXNlci1ib2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiN1c2VybmFtZXtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRleHR7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uZmEtdXNlci1wbHVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI2Y0NGMzNiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYXtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0LWdyb3Vwe1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jdXNlci1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(userService, _sanitizer) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this._sanitizer = _sanitizer;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_2__["PersonalCard"]();
        this.showCorrectPanel = 0;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.userService.getMyPersonalCard().subscribe(function (result) {
            _this29.personalCard = result;
          });
          this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(function (result) {});
          this.userService.getUserFollowers(sessionStorage.getItem("username")).subscribe(function (result) {
            _this29.followers = result;
          });
          this.userService.getUserFollowing(sessionStorage.getItem("username")).subscribe(function (result) {
            _this29.following = result;
          }, function (error) {});
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#register-card{\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n}\r\n\r\nform{\r\n    padding: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3Rlci1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/register.service */
    "./src/app/services/register.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/login-authentication.service */
    "./src/app/services/login-authentication.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(loginAuth, registerService, router) {
        _classCallCheck(this, RegisterComponent);

        this.loginAuth = loginAuth;
        this.registerService = registerService;
        this.router = router;
        this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('', '');
        this.confirmPassword = '';
        this.errorRegister = '';
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.loginAuth.isUserLoggedIn()) {
            this.router.navigate(['home']);
          }
        }
      }, {
        key: "handleRegister",
        value: function handleRegister() {
          var _this30 = this;

          if (this.errorRegister != '') {
            this.errorRegister = '';
          }

          if (this.validate()) {
            this.registerService.executeUserRegistration(this.user).subscribe(function (data) {
              _this30.handleResponse(data);
            }, function (error) {
              _this30.responseMessage = error.error;
              console.log(_this30.responseMessage);
              _this30.errorRegister = _this30.responseMessage.message;
            });
          } else {}
        }
      }, {
        key: "handleResponse",
        value: function handleResponse(data) {
          this.responseMessage = data;
          this.messageCode = this.responseMessage.messageCode;

          switch (this.messageCode) {
            case src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__["MessageCode"].SUCCESSFUL_REGISTER:
              this.clear();
              break;
          }
        }
      }, {
        key: "validate",
        value: function validate() {
          if (this.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_6__["MessageCode"].SUCCESSFUL_REGISTER) {
            this.messageCode = 0;
          }

          return this.validateField(this.user.getName(), "Nome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && this.validateField(this.user.getSurname(), "Cognome non valido", /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) && this.validateField(this.user.getUsername(), "Username non valido", /^[a-z0-9_-]{3,}$/igm) && this.validateField(this.user.getEmail(), "Email non valida", /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && this.validateField(this.user.getPassword(), "Password non valida", /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g) && this.arePasswordsMatching();
        }
      }, {
        key: "validateField",
        value: function validateField(field, message, regex) {
          if (!field.match(regex)) {
            this.errorRegister += message + "<br>";
            return false;
          }

          return true;
        }
      }, {
        key: "arePasswordsMatching",
        value: function arePasswordsMatching() {
          if (!(this.user.getPassword() === this.confirmPassword)) {
            console.log(this.user.getPassword());
            console.log(this.confirmPassword);
            this.errorRegister += "Le password non corrispondono" + "<br>";
            return false;
          }

          return true;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.user = new src_app_models_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]("", "");
          this.confirmPassword = "";
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_login_authentication_service__WEBPACK_IMPORTED_MODULE_5__["LoginAuthenticationService"]
      }, {
        type: src_app_services_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/todo-card/todo-card.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/todo-card/todo-card.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTodoCardTodoCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\r\n    margin: 30px;\r\n}\r\n\r\n#follow-todo{\r\n    margin: 12px;\r\n}\r\n\r\n#todo-user{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n#time{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n#info-todo{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n.container{\r\n    padding: 0px !important;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media screen and (min-width: 1200px) { \r\n    #icon-div1{\r\n        text-align: right !important;\r\n        padding: 2px !important;\r\n    \r\n    }\r\n    #icon-div2{\r\n        text-align: left !important;\r\n        padding: 2px !important;\r\n    }\r\n }\r\n\r\n#description-text{\r\n     margin: 12px !important;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWNhcmQvdG9kby1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLHVCQUF1Qjs7SUFFM0I7SUFDQTtRQUNJLDJCQUEyQjtRQUMzQix1QkFBdUI7SUFDM0I7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1jYXJkL3RvZG8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbiNmb2xsb3ctdG9kb3tcclxuICAgIG1hcmdpbjogMTJweDtcclxufVxyXG5cclxuI3RvZG8tdXNlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjN2M3YzdjO1xyXG59XHJcblxyXG4jaW5mby10b2Rve1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM3YzdjN2M7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgeyBcclxuICAgICNpY29uLWRpdjF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgI2ljb24tZGl2MntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gI2Rlc2NyaXB0aW9uLXRleHR7XHJcbiAgICAgbWFyZ2luOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/todo-card/todo-card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/todo-card/todo-card.component.ts ***!
    \*************************************************************/

  /*! exports provided: TodoCardComponent */

  /***/
  function srcAppComponentsTodoCardTodoCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoCardComponent", function () {
      return TodoCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TodoCardComponent =
    /*#__PURE__*/
    function () {
      function TodoCardComponent(todoService, router) {
        _classCallCheck(this, TodoCardComponent);

        this.todoService = todoService;
        this.router = router;
        this.showCorrectBody = 1;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TodoCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.alreadyProposed = this.checkAlreadyProposed();
          this.proponentsNumber = this.getProponentsNumber();
        }
      }, {
        key: "handleTodoProposal",
        value: function handleTodoProposal() {
          var _this31 = this;

          this.todoService.sendProposal(this.todo).subscribe(function (response) {
            _this31.refreshTodo();
          }, function (error) {});
        }
      }, {
        key: "changeBody",
        value: function changeBody(numBody) {
          this.showCorrectBody = numBody;
        }
      }, {
        key: "checkAlreadyProposed",
        value: function checkAlreadyProposed() {
          if (this.todo.proposals.length != 0) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.todo.proposals[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var proposal = _step3.value;

                if (proposal.user.username == sessionStorage.getItem("username")) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            return false;
          } else {
            return false;
          }
        }
      }, {
        key: "getProponentsNumber",
        value: function getProponentsNumber() {
          return this.todo.proposals.length;
        }
      }, {
        key: "refreshTodo",
        value: function refreshTodo() {
          var _this32 = this;

          this.alreadyProposed = true;
          this.todoService.getGenericTodo(this.todo.id).subscribe(function (response) {
            _this32.todo = response;
            _this32.proponentsNumber = _this32.getProponentsNumber();
          });
        }
      }, {
        key: "isMyTodo",
        value: function isMyTodo() {
          if (sessionStorage.getItem("username") == this.todo.user.username) {
            return true;
          }

          return false;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          this.messageEvent.emit(this.todo);
        }
      }]);

      return TodoCardComponent;
    }();

    TodoCardComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TodoCardComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TodoCardComponent.prototype, "messageEvent", void 0);
    TodoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo-card/todo-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo-card.component.css */
      "./src/app/components/todo-card/todo-card.component.css")).default]
    })], TodoCardComponent);
    /***/
  },

  /***/
  "./src/app/components/todo/todo.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/todo/todo.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTodoTodoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4{\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvL3RvZG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/todo/todo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/todo/todo.component.ts ***!
    \***************************************************/

  /*! exports provided: TodoComponent, Todo */

  /***/
  function srcAppComponentsTodoTodoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoComponent", function () {
      return TodoComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/todo.service */
    "./src/app/services/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/response-message/message-code */
    "./src/app/models/response-message/message-code.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var TodoComponent =
    /*#__PURE__*/
    function () {
      function TodoComponent(todoService, categoryService, userService, activatedRoute, router) {
        _classCallCheck(this, TodoComponent);

        this.todoService = todoService;
        this.categoryService = categoryService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.todo = new Todo();
      }

      _createClass(TodoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.todoService.todoResponseMessage.subscribe(function (m) {
            _this33.todoResponseMessage = m;
          });
          this.todoId = this.activatedRoute.snapshot.params['id'];

          if (this.todoId) {
            // se todoId è undefined vuol dire che si vuole creare un TODO
            this.retrieveTodo(this.todoId);
          }

          this.getCategories();
        }
      }, {
        key: "handleTodoCreation",
        value: function handleTodoCreation() {
          var _this34 = this;

          this.todoService.createTodo(this.todo).subscribe(function (response) {
            console.log(response);

            var ps = _this34.userService.getPersonalCard();

            ps.wallet.cfu = ps.wallet.cfu - _this34.todo.category.cfuPrice;

            _this34.userService.updatePersonalCard(ps);

            _this34.todoService.setTodoCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].TODO_CREATED);

            _this34.cleanFields();
          }, function (error) {
            console.log(error);

            if (error.error.messageCode === src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].CFU_INSUFFICIENT) {
              _this34.todoService.setTodoCreationResponse(src_app_models_response_message_message_code__WEBPACK_IMPORTED_MODULE_5__["MessageCode"].CFU_INSUFFICIENT);
            }
          });
        }
      }, {
        key: "handleTodoUpdate",
        value: function handleTodoUpdate() {
          var _this35 = this;

          this.todoService.updateTodo(this.todo).subscribe(function (response) {
            _this35.router.navigate(['home']);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "retrieveTodo",
        value: function retrieveTodo(todoId) {
          var _this36 = this;

          this.todoService.getTodo(todoId).subscribe(function (response) {
            _this36.todo = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this37 = this;

          this.categoryService.getAllCategories().subscribe(function (response) {
            _this37.categories = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "cleanFields",
        value: function cleanFields() {
          this.todo.title = "";
          this.todo.description = "";
          this.todo.expirationDate = null;
          this.todo.category = null;
        }
      }]);

      return TodoComponent;
    }();

    TodoComponent.ctorParameters = function () {
      return [{
        type: src_app_services_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-todo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./todo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/todo/todo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./todo.component.css */
      "./src/app/components/todo/todo.component.css")).default]
    })], TodoComponent);

    var Todo = function Todo() {
      _classCallCheck(this, Todo);
    };
    /***/

  },

  /***/
  "./src/app/components/user-profile/user-profile.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/user-profile/user-profile.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserProfileUserProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 74vw !important;\r\n    }\r\n    \r\n  }\r\n\r\n\r\n.img{\r\n    height: 250px !important;\r\n    width: 250px !important;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n#user-card{\r\n    margin-top: 50px;\r\n}\r\n\r\n\r\n#user-board{\r\n    margin-top: 25px;\r\n}\r\n\r\n\r\n#username{\r\n    padding-top: 15px;\r\n}\r\n\r\n\r\n.container-fluid{\r\n    padding: 0px !important;\r\n}\r\n\r\n\r\n.card-text{\r\n    padding: 25px;\r\n}\r\n\r\n\r\n.fa-user-plus{\r\n    margin-left: 10px;\r\n    color: #f44c36 !important;\r\n    font-size: 2rem !important;\r\n}\r\n\r\n\r\n.fa{\r\n    font-size: 1.5rem;\r\n    margin-right: 10px;\r\n    color: gray;\r\n}\r\n\r\n\r\n.list-group-item{\r\n    border-bottom: none !important;\r\n}\r\n\r\n\r\n.list-group{\r\n    margin-top: 30px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n\r\n#user-card{\r\n    margin-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixzQkFBc0I7SUFDMUI7O0VBRUY7OztBQUdGO0lBQ0ksd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5jb250YWluZXItZmx1aWR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzdnc7IFxyXG4gICAgICAgIHdpZHRoOiA3NHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuLmltZ3tcclxuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI3VzZXItY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbiN1c2VyLWJvYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuI3VzZXJuYW1le1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtdGV4dHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5mYS11c2VyLXBsdXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGNvbG9yOiAjZjQ0YzM2ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhe1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbXtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiN1c2VyLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/user-profile/user-profile.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/user-profile/user-profile.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppComponentsUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(userService, route) {
        _classCallCheck(this, UserProfileComponent);

        this.userService = userService;
        this.route = route;
        this.personalCard = new src_app_models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_3__["PersonalCard"]();
        this.show = false;
        this.showCorrectPanel = 0;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeRouter();
          this.username = this.route.snapshot.params['username'];
          this.getPersonalCard();
          this.getUserFollowers();
          this.getUserFollowing();
        }
      }, {
        key: "followUser",
        value: function followUser(username) {
          var _this38 = this;

          this.userService.followUser(username).subscribe(function (result) {
            _this38.userService.getUserFollowers(_this38.username).subscribe(function (result) {
              _this38.followers = result;

              _this38.checkIfAlreadyFollow(result);
            });
          }, function (error) {});
        }
      }, {
        key: "changePanel",
        value: function changePanel(number) {
          this.showCorrectPanel = number;
        }
      }, {
        key: "getPersonalCard",
        value: function getPersonalCard() {
          var _this39 = this;

          this.userService.getUserPersonalCard(this.username).subscribe(function (result) {
            if (result) {
              _this39.show = true;
              _this39.personalCard = result;
            } else {}
          }, function (error) {});
        }
      }, {
        key: "getUserFollowers",
        value: function getUserFollowers() {
          var _this40 = this;

          this.userService.getUserFollowers(this.username).subscribe(function (result) {
            _this40.followers = result;

            if (_this40.followers.length) {
              _this40.checkIfAlreadyFollow(_this40.followers);
            }
          });
        }
      }, {
        key: "getUserFollowing",
        value: function getUserFollowing() {
          var _this41 = this;

          this.userService.getUserFollowing(this.username).subscribe(function (result) {
            _this41.following = result;
          }, function (error) {});
        }
      }, {
        key: "subscribeRouter",
        value: function subscribeRouter() {
          var _this42 = this;

          this.route.params.subscribe(function (params) {
            _this42.username = params['username'];
            _this42.alreadyFollow = false;

            _this42.getPersonalCard();

            _this42.getUserFollowers();

            _this42.getUserFollowing();
          });
        }
      }, {
        key: "checkIfAlreadyFollow",
        value: function checkIfAlreadyFollow(followers) {
          var i = 0;
          console.log("chiamata");

          while (i < followers.length) {
            if (followers[i].username === sessionStorage.getItem('username')) {
              this.alreadyFollow = true;
            }

            i++;
          }
        }
      }, {
        key: "isMyProfile",
        value: function isMyProfile() {
          return this.username === sessionStorage.getItem("username");
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-profile/user-profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.component.css */
      "./src/app/components/user-profile/user-profile.component.css")).default]
    })], UserProfileComponent);
    /***/
  },

  /***/
  "./src/app/constants/constant.ts":
  /*!***************************************!*\
    !*** ./src/app/constants/constant.ts ***!
    \***************************************/

  /*! exports provided: API_URL */

  /***/
  function srcAppConstantsConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var API_URL = 'https://doneits.herokuapp.com';
    /***/
  },

  /***/
  "./src/app/event-board/event-board.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/event-board/event-board.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventBoardEventBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-sm-12{\r\n    padding: 0 !important;\r\n}\r\n\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    padding-top: 100px; /* Location of the box */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n  }\r\n\r\n.modal-content{\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 50%;  \r\n    max-height: 80vh;\r\n  }\r\n\r\n#modal-title{\r\n    align-content: left;\r\n    border-bottom: 1px solid #888;\r\n    padding:10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    font-size: x-large;\r\n  }\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n    color: #aaaaaa;\r\n    text-align: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtYm9hcmQvZXZlbnQtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWMsRUFBRSxzQkFBc0I7SUFDdEMsZUFBZSxFQUFFLGtCQUFrQjtJQUNuQyxVQUFVLEVBQUUsZUFBZTtJQUMzQixrQkFBa0IsRUFBRSx3QkFBd0I7SUFDNUMsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXLEVBQUUsZUFBZTtJQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCLGNBQWMsRUFBRSw0QkFBNEI7SUFDNUMsNEJBQTRCLEVBQUUsbUJBQW1CO0lBQ2pELGlDQUFpQyxFQUFFLHFCQUFxQjtFQUMxRDs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUMscUJBQXFCOztBQUNyQjtJQUNDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9ldmVudC1ib2FyZC9ldmVudC1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbiAgfVxyXG5cclxuLm1vZGFsLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNTAlOyAgXHJcbiAgICBtYXgtaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuICBcclxuICAjbW9kYWwtdGl0bGV7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAgLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xyXG4gICAuY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWFhYWE7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2U6aG92ZXIsXHJcbiAgLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/event-board/event-board.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/event-board/event-board.component.ts ***!
    \******************************************************/

  /*! exports provided: EventBoardComponent */

  /***/
  function srcAppEventBoardEventBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventBoardComponent", function () {
      return EventBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/services/event.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_refresh_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/refresh.service */
    "./src/app/services/refresh.service.ts");

    var EventBoardComponent =
    /*#__PURE__*/
    function () {
      function EventBoardComponent(eventService, sanitizer, refreshService) {
        _classCallCheck(this, EventBoardComponent);

        this.eventService = eventService;
        this.sanitizer = sanitizer;
        this.refreshService = refreshService;
        this.isMapOpen = false;
        this.isPartecipantsModalOpen = false;
        this.partecipants = [];
      }

      _createClass(EventBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          this.getActiveEvents();
          this.refreshService.eventRefreshMessage.subscribe(function (m) {
            _this43.getActiveEvents();
          });
        }
      }, {
        key: "getActiveEvents",
        value: function getActiveEvents() {
          var _this44 = this;

          this.eventService.getActiveEvents().subscribe(function (response) {
            console.log(response);
            _this44.eventList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "openMap",
        value: function openMap($event) {
          this.placeId = $event;
          this.isMapOpen = true;
        }
      }, {
        key: "closeMap",
        value: function closeMap() {
          this.isMapOpen = false;
          this.placeId = null;
        }
      }, {
        key: "openPartecipantModal",
        value: function openPartecipantModal(event) {
          this.isPartecipantsModalOpen = true;
          this.partecipants = event;
        }
      }, {
        key: "closePartecipantsModal",
        value: function closePartecipantsModal() {
          this.isPartecipantsModalOpen = false;
          this.partecipants = [];
        }
      }, {
        key: "sanitizeUrl",
        value: function sanitizeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyB1A4WVaFhrtCkvVdpx_cobXShk_RGtW-8&q=place_id:" + this.placeId);
        }
      }]);

      return EventBoardComponent;
    }();

    EventBoardComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }, {
        type: _services_refresh_service__WEBPACK_IMPORTED_MODULE_4__["RefreshService"]
      }];
    };

    EventBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-board/event-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-board.component.css */
      "./src/app/event-board/event-board.component.css")).default]
    })], EventBoardComponent);
    /***/
  },

  /***/
  "./src/app/event-card/event-card.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/event-card/event-card.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventCardEventCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#todo-title{\r\n    margin: 30px;\r\n}\r\n\r\n#follow-todo{\r\n    margin: 12px;\r\n}\r\n\r\n#todo-user{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n#time{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n#info-todo{\r\n    font-size: 1rem;\r\n    color: #7c7c7c;\r\n}\r\n\r\n.container{\r\n    padding: 0px !important;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n@media screen and (min-width: 1200px) { \r\n #icon-div2{\r\n        text-align: left !important;\r\n        padding: 2px !important;\r\n        margin-top:10px !important;\r\n    }\r\n }\r\n\r\n#description-text{\r\n     margin: 12px !important;\r\n }\r\n\r\n.card-body{\r\n    background-color: white;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnQtY2FyZC9ldmVudC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFHQTtDQUNDO1FBQ08sMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QiwwQkFBMEI7SUFDOUI7Q0FDSDs7QUFFQTtLQUNJLHVCQUF1QjtDQUMzQjs7QUFFQTtJQUNHLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWNhcmQvZXZlbnQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZG8tdGl0bGV7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbiNmb2xsb3ctdG9kb3tcclxuICAgIG1hcmdpbjogMTJweDtcclxufVxyXG5cclxuI3RvZG8tdXNlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjN2M3YzdjO1xyXG59XHJcblxyXG4jaW5mby10b2Rve1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICM3YzdjN2M7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7IFxyXG4gI2ljb24tZGl2MntcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiB9XHJcblxyXG4gI2Rlc2NyaXB0aW9uLXRleHR7XHJcbiAgICAgbWFyZ2luOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gfVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/event-card/event-card.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/event-card/event-card.component.ts ***!
    \****************************************************/

  /*! exports provided: EventCardComponent */

  /***/
  function srcAppEventCardEventCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventCardComponent", function () {
      return EventCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/event.service */
    "./src/app/services/event.service.ts");

    var EventCardComponent =
    /*#__PURE__*/
    function () {
      function EventCardComponent(eventService) {
        _classCallCheck(this, EventCardComponent);

        this.eventService = eventService;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.messageEventPartecipant = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.alreadyPartecipated = false;
      }

      _createClass(EventCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isUserPartecipating();
        }
      }, {
        key: "joinEvent",
        value: function joinEvent() {
          var _this45 = this;

          this.eventService.joinEvent(this.eventPost).subscribe(function (result) {
            _this45.eventService.getEvent(_this45.eventPost.id).subscribe(function (result) {
              _this45.eventPost = result;

              _this45.isUserPartecipating();
            });
          });
        }
      }, {
        key: "openMap",
        value: function openMap() {
          this.messageEvent.emit(this.eventPost.placeId);
        }
      }, {
        key: "isUserPartecipating",
        value: function isUserPartecipating() {
          if (this.eventPost.eventPartecipations.length) {
            var i = 0;

            while (i < this.eventPost.eventPartecipations.length) {
              if (this.eventPost.eventPartecipations[i].user.username === sessionStorage.getItem('username')) {
                this.alreadyPartecipated = true;
              }

              i++;
            }
          }
        }
      }, {
        key: "isCreatedByUser",
        value: function isCreatedByUser() {
          return this.eventPost.user.username === sessionStorage.getItem("username");
        }
      }, {
        key: "openPartecipantsModal",
        value: function openPartecipantsModal() {
          if (this.eventPost.eventPartecipations.length > 0) this.messageEventPartecipant.emit(this.eventPost.eventPartecipations);
        }
      }]);

      return EventCardComponent;
    }();

    EventCardComponent.ctorParameters = function () {
      return [{
        type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "eventPost", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventCardComponent.prototype, "personal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EventCardComponent.prototype, "messageEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EventCardComponent.prototype, "messageEventPartecipant", void 0);
    EventCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-card/event-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-card.component.css */
      "./src/app/event-card/event-card.component.css")).default]
    })], EventCardComponent);
    /***/
  },

  /***/
  "./src/app/list-item-user/list-item-user.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/list-item-user/list-item-user.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListItemUserListItemUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".md-avatar {\r\n    vertical-align: middle;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC1pdGVtLXVzZXIvbGlzdC1pdGVtLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtaXRlbS11c2VyL2xpc3QtaXRlbS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/list-item-user/list-item-user.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/list-item-user/list-item-user.component.ts ***!
    \************************************************************/

  /*! exports provided: ListItemUserComponent */

  /***/
  function srcAppListItemUserListItemUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemUserComponent", function () {
      return ListItemUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var ListItemUserComponent =
    /*#__PURE__*/
    function () {
      function ListItemUserComponent(userService) {
        _classCallCheck(this, ListItemUserComponent);

        this.userService = userService;
      }

      _createClass(ListItemUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.userService.getUserProfileImage(this.user.username).subscribe(function (result) {
            _this46.imagePath = result;
          });
        }
      }]);

      return ListItemUserComponent;
    }();

    ListItemUserComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListItemUserComponent.prototype, "user", void 0);
    ListItemUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-item-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-item-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-item-user/list-item-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-item-user.component.css */
      "./src/app/list-item-user/list-item-user.component.css")).default]
    })], ListItemUserComponent);
    /***/
  },

  /***/
  "./src/app/models/chat-message.ts":
  /*!****************************************!*\
    !*** ./src/app/models/chat-message.ts ***!
    \****************************************/

  /*! exports provided: ChatMessage, SocketChatMessage */

  /***/
  function srcAppModelsChatMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessage", function () {
      return ChatMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketChatMessage", function () {
      return SocketChatMessage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChatMessage =
    /*#__PURE__*/
    function () {
      function ChatMessage(userFrom, userTo, content) {
        _classCallCheck(this, ChatMessage);

        this.from = userFrom;
        this.to = userTo;
        this.content = content;
      }

      _createClass(ChatMessage, [{
        key: "getContent",
        value: function getContent() {
          return this.content;
        }
      }, {
        key: "getUserFrom",
        value: function getUserFrom() {
          return this.from;
        }
      }, {
        key: "getUserTo",
        value: function getUserTo() {
          return this.to;
        }
      }]);

      return ChatMessage;
    }();

    var SocketChatMessage = function SocketChatMessage() {
      _classCallCheck(this, SocketChatMessage);
    };
    /***/

  },

  /***/
  "./src/app/models/personal-card/personal-card.ts":
  /*!*******************************************************!*\
    !*** ./src/app/models/personal-card/personal-card.ts ***!
    \*******************************************************/

  /*! exports provided: PersonalCard */

  /***/
  function srcAppModelsPersonalCardPersonalCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalCard", function () {
      return PersonalCard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user/user.model */
    "./src/app/models/user/user.model.ts");
    /* harmony import */


    var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../wallet */
    "./src/app/models/wallet.ts");

    var PersonalCard = function PersonalCard() {
      _classCallCheck(this, PersonalCard);

      this.user = new _user_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]("", "");
      this.wallet = new _wallet__WEBPACK_IMPORTED_MODULE_2__["Wallet"]();
    };
    /***/

  },

  /***/
  "./src/app/models/response-message/message-code.ts":
  /*!*********************************************************!*\
    !*** ./src/app/models/response-message/message-code.ts ***!
    \*********************************************************/

  /*! exports provided: MessageCode */

  /***/
  function srcAppModelsResponseMessageMessageCodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageCode", function () {
      return MessageCode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MessageCode = function MessageCode() {
      _classCallCheck(this, MessageCode);
    };

    MessageCode.INVALID_CREDENTIAL = 1;
    MessageCode.INVALID_DATA = 2;
    MessageCode.SUCCESSFUL_LOGIN = 3;
    MessageCode.SUCCESSFUL_REGISTER = 4;
    MessageCode.USER_ALREADY_CREATED = 11;
    MessageCode.FIRST_LOGIN = 13;
    MessageCode.PROPOSAL_CREATED = 14;
    MessageCode.CFU_INSUFFICIENT = 15;
    MessageCode.INCOMPLETE_REGISTER = 16;
    MessageCode.TODO_CREATED = 6;
    MessageCode.EVENT_CREATED = 17;
    /***/
  },

  /***/
  "./src/app/models/user/user.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/user/user.model.ts ***!
    \*******************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User(username, password) {
        _classCallCheck(this, User);

        this.username = username;
        this.password = password;
        this.name = '';
        this.surname = '';
        this.email = '';
      }

      _createClass(User, [{
        key: "getUsername",
        value: function getUsername() {
          return this.username;
        }
      }, {
        key: "getPassword",
        value: function getPassword() {
          return this.password;
        }
      }, {
        key: "setPassword",
        value: function setPassword(password) {
          this.password = password;
        }
      }, {
        key: "setUsername",
        value: function setUsername(username) {
          this.username = username;
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.name;
        }
      }, {
        key: "getSurname",
        value: function getSurname() {
          return this.surname;
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.email;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/models/wallet.ts":
  /*!**********************************!*\
    !*** ./src/app/models/wallet.ts ***!
    \**********************************/

  /*! exports provided: Wallet */

  /***/
  function srcAppModelsWalletTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Wallet", function () {
      return Wallet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Wallet = function Wallet() {
      _classCallCheck(this, Wallet);
    };
    /***/

  },

  /***/
  "./src/app/search/search.component.css":
  /*!*********************************************!*\
    !*** ./src/app/search/search.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (min-width: 992px) {\r\n    .container-fluid{\r\n        margin-left: 13vw; \r\n        width: 87vw !important;\r\n    }\r\n    \r\n  }\r\n\r\n::ng-deep  .mat-form-field-infix {\r\n    padding: 0em 0;\r\n    border: 0px;\r\n  }\r\n\r\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{\r\n    padding: 0px !important;\r\n  }\r\n\r\ninput{\r\n      height: 250px;\r\n  }\r\n\r\n::ng-deep .mat-focused .mat-form-field-label {\r\n    /*change color of label*/\r\n    color: white !important;\r\n   }\r\n\r\n::ng-deep.mat-form-field-underline {\r\n    /*change color of underline*/\r\n    background-color: white !important;\r\n  }\r\n\r\n::ng-deep.mat-form-field-ripple {\r\n   /*change color of underline when focused*/\r\n   background-color: white !important;;\r\n  }\r\n\r\n::ng-deep.cdk-overlay-pane{\r\n      margin-top: 5px !important;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsc0JBQXNCO0lBQzFCOztFQUVGOztBQUVGO0lBQ0ksY0FBYztJQUNkLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFHQTtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSx3QkFBd0I7SUFDeEIsdUJBQXVCO0dBQ3hCOztBQUVBO0lBQ0MsNEJBQTRCO0lBQzVCLGtDQUFrQztFQUNwQzs7QUFFQTtHQUNDLHlDQUF5QztHQUN6QyxrQ0FBa0M7RUFDbkM7O0FBRUE7TUFDSSwwQkFBMEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTN2dzsgXHJcbiAgICAgICAgd2lkdGg6IDg3dncgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbjo6bmctZGVlcCAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgIHBhZGRpbmc6IDBlbSAwO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcblxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICBcclxuICAgOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDs7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAuY2RrLW92ZXJsYXktcGFuZXtcclxuICAgICAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(userService, router) {
        _classCallCheck(this, SearchComponent);

        this.userService = userService;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.searchString = '';
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search() {
          var _this47 = this;

          if (this.searchString.length > 2) {
            //chiamata al server con i nomi
            this.userService.getUsernameStartedWithString(this.searchString).subscribe(function (result) {
              _this47.options = result;
            }, function (error) {});
          } else {
            this.options = [];
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          if (this.searchString.length < 3) {
            this.options = [];
          }
        }
      }, {
        key: "confirmSearch",
        value: function confirmSearch(option) {
          console.log(option);
          this.router.navigateByUrl('/show-profile/' + option);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(httpClient) {
        _classCallCheck(this, CategoryService);

        this.httpClient = httpClient;
      }

      _createClass(CategoryService, [{
        key: "getAllCategories",
        value: function getAllCategories() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/all-categories"));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! stompjs */
    "./node_modules/stompjs/index.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var _models_chat_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/chat-message */
    "./src/app/models/chat-message.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService(httpClient) {
        var _this48 = this;

        _classCallCheck(this, ChatService);

        this.httpClient = httpClient;
        this.stompClient = null;
        this.connected = false;
        this.socketChatMessage = new _models_chat_message__WEBPACK_IMPORTED_MODULE_6__["SocketChatMessage"]();
        this.socketChatMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.socketChatMessage);
        this.statusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](this.status);
        this.statusSubject.subscribe(function (result) {
          if (result === 'disconnected') {
            console.log("Tentativo di riconnessione in corso!");
            setTimeout(function () {
              _this48.connect();
            }, 5000);
          } else if (result === 'connected') {
            console.log("non devo fa niente");
          }
        });
        this.connect();
      }

      _createClass(ChatService, [{
        key: "connect",
        value: function connect() {
          var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/gs-guide-websocket"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);

          var _this = this;

          _this.stompClient.connect({
            "Auth": sessionStorage.getItem("token")
          }, function (frame) {
            status = 'connected';

            _this.statusSubject.next(status);

            _this.stompClient.subscribe("/user/queue/reply", function (frame) {
              console.log(frame);
              var chatMessage = JSON.parse(frame.body);

              _this.updateSocketChatMessage(chatMessage);
            });
          }, function () {
            status = 'disconnected';

            _this.statusSubject.next(status);
          });
        }
      }, {
        key: "reconnect",
        value: function reconnect() {
          var socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/gs-guide-websocket"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_1__["over"](socket);

          var _this = this;

          _this.stompClient.connect({
            "Auth": sessionStorage.getItem("token")
          }, function (frame) {
            clearInterval(_this.interval);

            _this.stompClient.subscribe("/user/queue/reply", function (frame) {
              console.log(frame);
              var chatMessage = JSON.parse(frame.body);

              _this.updateSocketChatMessage(chatMessage);
            });
          });
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.stompClient != null) {
            this.stompClient.disconnect();
          }
        }
      }, {
        key: "test",
        value: function test() {
          console.log("CIAO");
        }
      }, {
        key: "sendChatMessage",
        value: function sendChatMessage(dest, message) {
          this.stompClient.send("/app/send", {}, JSON.stringify({
            'userTo': dest,
            'content': message
          }));
        }
      }, {
        key: "updateSocketChatMessage",
        value: function updateSocketChatMessage(chatMessage) {
          this.socketChatMessageSubject.next(chatMessage);
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/services/event.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/event.service.ts ***!
    \*******************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppServicesEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EventService =
    /*#__PURE__*/
    function () {
      function EventService(httpCLient) {
        _classCallCheck(this, EventService);

        this.httpCLient = httpCLient;
        this.eventCreationResponse = -1;
        this.eventResponseMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.eventCreationResponse);
      }

      _createClass(EventService, [{
        key: "setEventCreationResponse",
        value: function setEventCreationResponse(messageCode) {
          this.eventResponseMessage.next(messageCode);
        }
      }, {
        key: "createEvent",
        value: function createEvent(event) {
          return this.httpCLient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-event"), event);
        }
      }, {
        key: "getActiveEvents",
        value: function getActiveEvents() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/active-event-list"));
        }
      }, {
        key: "joinEvent",
        value: function joinEvent(event) {
          return this.httpCLient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/join-event"), event);
        }
      }, {
        key: "getMyEventList",
        value: function getMyEventList() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/my-events"));
        }
      }, {
        key: "getEventListByUsername",
        value: function getEventListByUsername(username) {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event-list/users/") + username);
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange($event) {
          console.log($event);
        }
      }, {
        key: "getEvent",
        value: function getEvent(id) {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/get-event/").concat(id));
        }
      }, {
        key: "getMyJoinedEvents",
        value: function getMyJoinedEvents() {
          return this.httpCLient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/event/get-my-joined-events"));
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EventService);
    /***/
  },

  /***/
  "./src/app/services/http-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/http-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: HttpInterceptorService */

  /***/
  function srcAppServicesHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function () {
      return HttpInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HttpInterceptorService =
    /*#__PURE__*/
    function () {
      function HttpInterceptorService() {
        _classCallCheck(this, HttpInterceptorService);
      }

      _createClass(HttpInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var token = sessionStorage.getItem("token");
          var username = sessionStorage.getItem("username");

          if (token && username) {
            request = request.clone({
              setHeaders: {
                Authorization: token
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return HttpInterceptorService;
    }();

    HttpInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpInterceptorService);
    /***/
  },

  /***/
  "./src/app/services/login-authentication.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/login-authentication.service.ts ***!
    \**********************************************************/

  /*! exports provided: LoginAuthenticationService */

  /***/
  function srcAppServicesLoginAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginAuthenticationService", function () {
      return LoginAuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var LoginAuthenticationService =
    /*#__PURE__*/
    function () {
      function LoginAuthenticationService(httpClient) {
        _classCallCheck(this, LoginAuthenticationService);

        this.httpClient = httpClient;
      }

      _createClass(LoginAuthenticationService, [{
        key: "executeLoginAuthentication",
        value: function executeLoginAuthentication(user) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/authenticate-user"), user);
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          return sessionStorage.getItem("username");
        }
      }, {
        key: "isFirstLogin",
        value: function isFirstLogin() {
          return sessionStorage.getItem("firstLogin");
        }
      }]);

      return LoginAuthenticationService;
    }();

    LoginAuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginAuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginAuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/refresh.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/refresh.service.ts ***!
    \*********************************************/

  /*! exports provided: RefreshService */

  /***/
  function srcAppServicesRefreshServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefreshService", function () {
      return RefreshService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RefreshService =
    /*#__PURE__*/
    function () {
      function RefreshService() {
        _classCallCheck(this, RefreshService);

        this.todoRefresh = false;
        this.eventRefresh = false;
        this.todoRefreshMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.todoRefresh);
        this.eventRefreshMessage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.eventRefresh);
      }

      _createClass(RefreshService, [{
        key: "refreshTodoBoard",
        value: function refreshTodoBoard() {
          this.todoRefreshMessage.next(true);
        }
      }, {
        key: "refreshEventBoard",
        value: function refreshEventBoard() {
          this.eventRefreshMessage.next(true);
        }
      }]);

      return RefreshService;
    }();

    RefreshService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RefreshService);
    /***/
  },

  /***/
  "./src/app/services/register.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/register.service.ts ***!
    \**********************************************/

  /*! exports provided: RegisterService */

  /***/
  function srcAppServicesRegisterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
      return RegisterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");

    var RegisterService =
    /*#__PURE__*/
    function () {
      function RegisterService(httpClient) {
        _classCallCheck(this, RegisterService);

        this.httpClient = httpClient;
      }

      _createClass(RegisterService, [{
        key: "executeUserRegistration",
        value: function executeUserRegistration(user) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/register-user"), user);
        }
      }, {
        key: "completeUserRegister",
        value: function completeUserRegister(personalCard) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/complete-register"), personalCard);
        }
      }]);

      return RegisterService;
    }();

    RegisterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegisterService);
    /***/
  },

  /***/
  "./src/app/services/route-guard.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/route-guard.service.ts ***!
    \*************************************************/

  /*! exports provided: RouteGuardService */

  /***/
  function srcAppServicesRouteGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteGuardService", function () {
      return RouteGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-authentication.service */
    "./src/app/services/login-authentication.service.ts");

    var RouteGuardService =
    /*#__PURE__*/
    function () {
      function RouteGuardService(loginAuth, router) {
        _classCallCheck(this, RouteGuardService);

        this.loginAuth = loginAuth;
        this.router = router;
      }

      _createClass(RouteGuardService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.loginAuth.isUserLoggedIn()) {
            return true;
          }

          this.router.navigate(['login']);
          return false;
        }
      }]);

      return RouteGuardService;
    }();

    RouteGuardService.ctorParameters = function () {
      return [{
        type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__["LoginAuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RouteGuardService);
    /***/
  },

  /***/
  "./src/app/services/todo.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/todo.service.ts ***!
    \******************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppServicesTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TodoService =
    /*#__PURE__*/
    function () {
      function TodoService(httpClient) {
        _classCallCheck(this, TodoService);

        this.httpClient = httpClient;
        this.todoCreationResponse = -1;
        this.todoResponseMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.todoCreationResponse);
      }

      _createClass(TodoService, [{
        key: "setTodoCreationResponse",
        value: function setTodoCreationResponse(messageCode) {
          this.todoResponseMessage.next(messageCode);
        }
      }, {
        key: "createTodo",
        value: function createTodo(todo) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-todo"), todo);
        }
      }, {
        key: "getMyTodoList",
        value: function getMyTodoList(state) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/my-todo-list/") + state);
        }
      }, {
        key: "getTodoListByUserAndState",
        value: function getTodoListByUserAndState(username, state) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/todo-list/users/") + username + "/state/" + state);
        }
      }, {
        key: "getProfileTodoList",
        value: function getProfileTodoList(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/profile-todo-list/users/") + username);
        }
      }, {
        key: "deleteTodo",
        value: function deleteTodo(todoId) {
          return this.httpClient.delete("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/delete-todo/").concat(todoId));
        }
      }, {
        key: "getTodo",
        value: function getTodo(todoId) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/get-todo/").concat(todoId));
        }
      }, {
        key: "getGenericTodo",
        value: function getGenericTodo(todoId) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/get-generic-todo/").concat(todoId));
        }
      }, {
        key: "updateTodo",
        value: function updateTodo(todo) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/update-todo"), todo);
        }
      }, {
        key: "getAllTodo",
        value: function getAllTodo() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/active-todo-list"));
        }
      }, {
        key: "sendProposal",
        value: function sendProposal(todo) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/create-proposal"), todo);
        }
      }, {
        key: "acceptProposal",
        value: function acceptProposal(todo, proposalId) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/accept-proposal/") + proposalId, todo);
        }
      }, {
        key: "refuseProposal",
        value: function refuseProposal(proposalId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/refuse-proposal/") + proposalId, null);
        }
      }, {
        key: "undoRefuseProposal",
        value: function undoRefuseProposal(proposalId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/undo-refuse-proposal/") + proposalId, null);
        }
      }, {
        key: "undoAcceptProposal",
        value: function undoAcceptProposal(todoId) {
          return this.httpClient.put("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/undo-accept-proposal/todo/") + todoId, null);
        }
      }, {
        key: "getJoinedTodo",
        value: function getJoinedTodo() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/todo/get-joined-todo"));
        }
      }]);

      return TodoService;
    }();

    TodoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TodoService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/constant */
    "./src/app/constants/constant.ts");
    /* harmony import */


    var _models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/personal-card/personal-card */
    "./src/app/models/personal-card/personal-card.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(httpClient, _sanitizer) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
        this._sanitizer = _sanitizer;
        this.personalCard = new _models_personal_card_personal_card__WEBPACK_IMPORTED_MODULE_4__["PersonalCard"]();
        this.personalCardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.personalCard);
      }

      _createClass(UserService, [{
        key: "getMyPersonalCard",
        value: function getMyPersonalCard() {
          var _this49 = this;

          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/my-personal-card")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            data.imageUrl = _this49._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);

            _this49.updatePersonalCard(data);

            return data;
          }));
        }
      }, {
        key: "updatePersonalCard",
        value: function updatePersonalCard(result) {
          this.personalCardSubject.next(result);
        }
      }, {
        key: "getPersonalCard",
        value: function getPersonalCard() {
          return this.personalCardSubject.getValue();
        }
      }, {
        key: "getUserPersonalCard",
        value: function getUserPersonalCard(username) {
          var _this50 = this;

          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user-personal-card/").concat(username)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
            data.imageUrl = _this50._sanitizer.bypassSecurityTrustResourceUrl(data.base64StringImage);
            return data;
          }));
        }
      }, {
        key: "followUser",
        value: function followUser(username) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/follow-user"), username);
        }
      }, {
        key: "getUserFollowers",
        value: function getUserFollowers(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-followers"));
        }
      }, {
        key: "getUserFollowing",
        value: function getUserFollowing(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-following"));
        }
      }, {
        key: "getUserProfileImage",
        value: function getUserProfileImage(username) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/").concat(username, "/get-image-profile"), {
            responseType: 'text'
          });
        }
      }, {
        key: "getUsernameStartedWithString",
        value: function getUsernameStartedWithString(partialUsername) {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-user-started-with/").concat(partialUsername));
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.httpClient.get("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-all-users"));
        }
      }, {
        key: "getUsersImages",
        value: function getUsersImages(users) {
          return this.httpClient.post("".concat(_constants_constant__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/user/get-users-images"), users);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\peppe\Desktop\DEPLOYMENT\doneit_frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map