(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xdO":function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var n=c("fXoL"),a=c("Xa2L");const o=["*"];let s=(()=>{class t{constructor(t){this.changeDetector=t,this.state={wait:!1}}ngOnInit(){}ngOnDestroy(){this.changeDetector.detach()}wait(){this.state.wait=!0,this.changeDetector.destroyed||this.changeDetector.detectChanges()}show(){this.state.wait=!1,this.changeDetector.destroyed||this.changeDetector.detectChanges()}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.h))},t.\u0275cmp=n.Gb({type:t,selectors:[["ct-table"]],ngContentSelectors:o,decls:12,vars:2,consts:[[1,"ct-table"],[1,"ct-table__body"],[1,"ct-table__wait"]],template:function(t,e){1&t&&(n.jc(),n.Sb(0,"div",0),n.Hc(1,"\n    "),n.Sb(2,"div",1),n.Hc(3,"\n        "),n.ic(4),n.Hc(5,"\n    "),n.Rb(),n.Hc(6,"\n    "),n.Sb(7,"div",2),n.Hc(8,"\n        "),n.Nb(9,"mat-spinner"),n.Hc(10,"\n    "),n.Rb(),n.Hc(11,"\n"),n.Rb()),2&t&&n.Eb("ct-table--wait",e.state.wait)},directives:[a.b],styles:["[_nghost-%COMP%]{display:block;position:relative;margin:0;overflow-y:auto}[_nghost-%COMP%]     .mat-table{width:100%;border-collapse:collapse;background:none}[_nghost-%COMP%]     .mat-header-row{height:auto}[_nghost-%COMP%]     .mat-cell, [_nghost-%COMP%]     .mat-footer-cell, [_nghost-%COMP%]     .mat-header-cell{border-bottom-width:1px;border-bottom-style:solid;border-top-width:1px;border-top-style:solid;padding:9px;font-family:Roboto Condensed,sans-serif;font-size:14.94px;line-height:18px}[_nghost-%COMP%]     .mat-header-cell{white-space:nowrap;font-weight:700;vertical-align:baseline;color:inherit}[_nghost-%COMP%]     .mat-cell{vertical-align:baseline}[_nghost-%COMP%]     .mat-cell:first-child, [_nghost-%COMP%]     .mat-header-cell:first-child{padding-left:9px}[_nghost-%COMP%]     .mat-cell:last-child, [_nghost-%COMP%]     .mat-header-cell:last-child{padding-right:9px}[_nghost-%COMP%]     .mat-row{height:auto}.light-theme[_nghost-%COMP%]     .mat-cell, .light-theme   [_nghost-%COMP%]     .mat-cell, .light-theme[_nghost-%COMP%]     .mat-footer-cell, .light-theme   [_nghost-%COMP%]     .mat-footer-cell, .light-theme[_nghost-%COMP%]     .mat-header-cell, .light-theme   [_nghost-%COMP%]     .mat-header-cell{border-top-color:#f0f0f0;border-bottom-color:#f0f0f0}.dark-theme[_nghost-%COMP%]     .mat-cell, .dark-theme   [_nghost-%COMP%]     .mat-cell, .dark-theme[_nghost-%COMP%]     .mat-footer-cell, .dark-theme   [_nghost-%COMP%]     .mat-footer-cell, .dark-theme[_nghost-%COMP%]     .mat-header-cell, .dark-theme   [_nghost-%COMP%]     .mat-header-cell{border-top-color:#474747;border-bottom-color:#474747}.ct-table[_ngcontent-%COMP%]{position:relative}.ct-table__wait[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:none;align-items:center;justify-content:center;background-color:hsla(0,0%,100%,.1);overflow:hidden}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__body[_ngcontent-%COMP%]{opacity:.5}.ct-table--wait[_ngcontent-%COMP%]   .ct-table__wait[_ngcontent-%COMP%]{display:flex}"]}),t})()},IRPT:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var n=c("fXoL");const a=["*"];let o=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["ct-pre"]],ngContentSelectors:a,decls:1,vars:0,template:function(t,e){1&t&&(n.jc(),n.ic(0))},styles:["[_nghost-%COMP%]{display:block;font-family:Roboto Mono,Courier New,Courier,monospace;padding:0;font-size:12px;line-height:1.6;word-break:break-word;white-space:pre-wrap}[overflow-x=auto][_nghost-%COMP%]{overflow-x:auto}"]}),t})()},Iab2:function(t,e,c){var n,a;void 0===(a="function"==typeof(n=function(){"use strict";function e(t,e,c){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){o(n.response,e,c)},n.onerror=function(){console.error("could not download file")},n.send()}function c(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function n(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(c)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,o,s){var i=a.URL||a.webkitURL,r=document.createElement("a");r.download=o=o||t.name||"download",r.rel="noopener","string"==typeof t?(r.href=t,r.origin===location.origin?n(r):c(r.href)?e(t,o,s):n(r,r.target="_blank")):(r.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(r.href)}),4e4),setTimeout((function(){n(r)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,o){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),a);else if(c(t))e(t,a,o);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){n(s)}))}}:function(t,c,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,c,n);var s="application/octet-stream"===t.type,i=/constructor/i.test(a.HTMLElement)||a.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||s&&i)&&"object"==typeof FileReader){var b=new FileReader;b.onloadend=function(){var t=b.result;t=r?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},b.readAsDataURL(t)}else{var l=a.URL||a.webkitURL,d=l.createObjectURL(t);o?o.location=d:location.href=d,o=null,setTimeout((function(){l.revokeObjectURL(d)}),4e4)}});a.saveAs=o.saveAs=o,t.exports=o})?n.apply(e,[]):n)||(t.exports=a)},gFOi:function(t,e,c){"use strict";c.r(e),c.d(e,"BatchRoutingModule",(function(){return Bt})),c.d(e,"BatchModule",(function(){return Dt}));var n=c("ofXK"),a=c("3Pt+"),o=c("tyNb"),s=c("sYmb"),i=c("vCXQ"),r=c("lJGJ"),b=c("0dXh"),l=c("rV6N"),d=c("Iab2"),h=c("q4ZW"),f=c("+0xr"),u=c("fXoL"),p=c("0IaG"),H=c("Hz+5"),g=c("ri4K"),m=c("kt0X"),S=c("2ljo"),R=c("1P+h"),w=c("25/r"),v=c("CaYE"),y=c("No2e"),C=c("Xc1m"),k=c("bTqV"),O=c("Ne1S"),M=c("Kt2f"),x=c("6xdO"),A=c("FMVq"),I=c("V6TR"),_=c("NFeN"),F=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const T=["nextTable"],P=["prevTable"],j=["table"];function B(t,e){1&t&&(u.Sb(0,"span",22),u.Hc(1,"\u2713\xa0\xa0"),u.Rb())}function D(t,e){1&t&&(u.Sb(0,"span",22),u.Hc(1,"\u2717\xa0\xa0"),u.Rb())}function L(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.Id")))}function U(t,e){if(1&t&&(u.Sb(0,"td",24),u.Hc(1),u.Rb()),2&t){const t=e.$implicit;u.Ab(1),u.Jc("",t.batch.id," ")}}function E(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.Created On")))}function J(t,e){if(1&t&&(u.Sb(0,"td",24),u.Hc(1),u.fc(2,"date"),u.Rb()),2&t){const t=e.$implicit;u.Ab(1),u.Jc("",u.hc(2,1,t.batch.createdOn,"MMM d, yyyy, HH:mm:ss")," ")}}function q(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Jc("",u.gc(2,1,"batch.Is Batch Consistent?")," "))}function N(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.true")))}function G(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.false")))}function X(t,e){if(1&t&&(u.Sb(0,"td",24),u.Hc(1," "),u.Fc(2,N,3,3,"span",25),u.Fc(3,G,3,3,"span",25),u.Rb()),2&t){const t=e.$implicit;u.Ab(2),u.kc("ngIf",t.ok),u.Ab(1),u.kc("ngIf",!t.ok)}}function $(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1,"\n                            "),u.Sb(2,"div",26),u.Hc(3),u.fc(4,"translate"),u.Rb(),u.Hc(5,"\n                            "),u.Sb(6,"div",26),u.Hc(7),u.fc(8,"translate"),u.Rb(),u.Hc(9,"\n                        "),u.Rb()),2&t&&(u.Ab(3),u.Ic(u.gc(4,2,"batch.Source Code")),u.Ab(4),u.Ic(u.gc(8,4,"batch.File name")))}function z(t,e){if(1&t&&(u.Sb(0,"td",24),u.Hc(1,"\n                            "),u.Sb(2,"div",26),u.Hc(3),u.Rb(),u.Hc(4,"\n                            "),u.Sb(5,"div",26),u.Hc(6),u.Rb(),u.Hc(7,"\n                        "),u.Rb()),2&t){const t=e.$implicit;u.Ab(3),u.Ic(t.sourceCode),u.Ab(3),u.Ic(t.uploadedFileName)}}function Q(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Jc(" ",u.gc(2,1,"batch.Exec State"),""))}function K(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.Error")))}function V(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.Preparing")))}function Y(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.Processing")))}function W(t,e){1&t&&(u.Sb(0,"span"),u.Hc(1),u.fc(2,"translate"),u.Rb()),2&t&&(u.Ab(1),u.Ic(u.gc(2,1,"batch.isBatchConsistent.Finished")))}function Z(t,e){if(1&t&&(u.Sb(0,"td",24),u.Hc(1," "),u.Fc(2,K,3,3,"span",25),u.Hc(3,"\n                            "),u.Fc(4,V,3,3,"span",25),u.Hc(5,"\n                            "),u.Fc(6,Y,3,3,"span",25),u.Hc(7,"\n                            "),u.Fc(8,W,3,3,"span",25),u.Rb()),2&t){const t=e.$implicit;u.Ab(2),u.kc("ngIf",-1===t.execState),u.Ab(2),u.kc("ngIf",2===t.execState),u.Ab(2),u.kc("ngIf",3===t.execState),u.Ab(2),u.kc("ngIf",4===t.execState)}}function tt(t,e){1&t&&(u.Sb(0,"th",23),u.Hc(1," "),u.Rb())}const et=function(t){return["/dispatcher/batch",t,"status"]};function ct(t,e){if(1&t){const t=u.Tb();u.Sb(0,"td",24),u.Hc(1,"\n                            "),u.Sb(2,"ct-flex",27),u.Hc(3,"\n                                "),u.Sb(4,"ct-flex-item"),u.Hc(5,"\n                                    "),u.Sb(6,"button",28),u.Hc(7),u.fc(8,"translate"),u.Rb(),u.Hc(9,"\n                                "),u.Rb(),u.Hc(10,"\n                                "),u.Hc(11,"\n                                "),u.Sb(12,"ct-flex-item"),u.Hc(13,"\n                                    "),u.Sb(14,"button",29),u.ac("click",(function(){u.vc(t);const c=e.$implicit;return u.ec().downloadFile(c.batch.id)})),u.Hc(15),u.fc(16,"translate"),u.Rb(),u.Hc(17,"\n                                "),u.Rb(),u.Hc(18,"\n                                "),u.Sb(19,"ct-flex-item"),u.Hc(20,"\n                                    "),u.Sb(21,"button",30),u.ac("click",(function(){u.vc(t);const c=e.$implicit;return u.ec().delete(c)})),u.Hc(22,"\n                                        "),u.Sb(23,"mat-icon"),u.Hc(24,"delete"),u.Rb(),u.Hc(25,"\n                                    "),u.Rb(),u.Hc(26,"\n                                "),u.Rb(),u.Hc(27,"\n                            "),u.Rb(),u.Hc(28,"\n                        "),u.Rb()}if(2&t){const t=e.$implicit;u.Ab(6),u.kc("routerLink",u.oc(7,et,t.batch.id)),u.Ab(1),u.Jc(" ",u.gc(8,3,"batch.Status"),""),u.Ab(8),u.Jc(" ",u.gc(16,5,"batch.Download Result"),"")}}function nt(t,e){1&t&&(u.Sb(0,"tr",31),u.Hc(1," "),u.Rb())}function at(t,e){if(1&t&&u.Nb(0,"tr",32),2&t){const t=e.$implicit,c=u.ec();u.Eb("deleted-table-row",c.deletedRows.includes(t))}}let ot=(()=>{class t{constructor(t,e,c,n,a){this.translate=t,this.dialog=e,this.batchService=c,this.authenticationService=n,this.store=a,this.dataSource=new f.k([]),this.columnsToDisplay=["id","createdOn","isBatchConsistent","sourceCode","execState","bts"],this.deletedRows=[]}ngOnInit(){this.storeSubscriber=this.store.subscribe(t=>{this.isFilterBatches=t.settings.filterBatches,this.batches=t.batches,this.updateTable()}),this.store.dispatch(Object(b.a)({page:0,filterBatches:this.isFilterBatches}))}ngOnDestroy(){this.storeSubscriber&&this.storeSubscriber.unsubscribe()}toggleFilterBatches(){this.store.dispatch(Object(l.f)({payload:!this.isFilterBatches})),this.store.dispatch(Object(b.a)({page:0,filterBatches:this.isFilterBatches}))}updateTable(){!0!==this.batches.isLoading?this.table.show():this.table.wait(),this.batches.response&&(this.columnsToDisplay=this.authenticationService.getUserRole().has(h.Role.Operator)?["id","createdOn","sourceCode","execState","bts"]:["id","createdOn","isBatchConsistent","sourceCode","execState","bts"],this.dataSource=new f.k(this.batches.response.batches.content||[]),this.prevTable.disabled=this.batches.response.batches.first,this.nextTable.disabled=this.batches.response.batches.last)}downloadFile(t){this.batchService.downloadFile(t).subscribe(t=>{let e="result.zip";try{e=t.headers.get("Content-Disposition").split("''")[1]}catch(c){console.log(c)}this._saveFile(t.body,decodeURIComponent(e))})}_saveFile(t,e){const c=new Blob([t],{type:"application/octet-stream"});d.saveAs(c,e)}delete(t){this.deletedRows.push(t),this.batchService.batch.deleteCommit(t.batch.id.toString()).subscribe()}next(){this.table.wait(),this.prevTable.disabled=!0,this.nextTable.disabled=!0,this.store.dispatch(Object(b.a)({page:this.batches.response.batches.number+1,filterBatches:this.isFilterBatches}))}prev(){this.table.wait(),this.prevTable.disabled=!0,this.nextTable.disabled=!0,this.store.dispatch(Object(b.a)({page:this.batches.response.batches.number-1,filterBatches:this.isFilterBatches}))}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(s.d),u.Mb(p.b),u.Mb(H.a),u.Mb(g.a),u.Mb(m.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["batch"]],viewQuery:function(t,e){var c;1&t&&(u.Ac(T,!0),u.Ac(P,!0),u.Ac(j,!0)),2&t&&(u.sc(c=u.bc())&&(e.nextTable=c.first),u.sc(c=u.bc())&&(e.prevTable=c.first),u.sc(c=u.bc())&&(e.table=c.first))},decls:147,vars:20,consts:[["justify-content","space-between","align-items","center","gap","unit(1)"],["justify-content","flex-end","align-items","center","gap","unit(1)"],["mat-flat-button","mat-flat-button","color","primary","routerLink","/dispatcher/batch/add",3,"disabled"],["mat-stroked-button","",3,"disabled","click"],["style","vertical-align: baseline;",4,"ngIf"],["table",""],["mat-table","mat-table",1,"mat-table",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","mat-header-cell",4,"matHeaderCellDef"],["mat-cell","mat-cell",4,"matCellDef"],["matColumnDef","createdOn"],["matColumnDef","isBatchConsistent"],["matColumnDef","sourceCode"],["matColumnDef","execState"],["matColumnDef","bts"],["mat-header-row","mat-header-row",4,"matHeaderRowDef"],["mat-row","mat-row",3,"deleted-table-row",4,"matRowDef","matRowDefColumns"],["justify-content","space-between"],["justify-content","flex-start","gap","8px"],["mat-flat-button","mat-flat-button","color","primary","disabled","disabled",3,"click"],["prevTable",""],["nextTable",""],[2,"vertical-align","baseline"],["mat-header-cell","mat-header-cell"],["mat-cell","mat-cell"],[4,"ngIf"],[1,"no-wrap"],["justify-content","flex-end","gap","9px"],["mat-flat-button","mat-flat-button","size","forTableRow","color","primary",3,"routerLink"],["mat-flat-button","mat-flat-button","size","forTableRow","color","primary",3,"click"],["mat-flat-button","mat-flat-button","color","warn","size","forTableRow","title","Delete",3,"click"],["mat-header-row","mat-header-row"],["mat-row","mat-row"]],template:function(t,e){1&t&&(u.Sb(0,"ct-section"),u.Hc(1,"\n    "),u.Sb(2,"ct-section-header"),u.Hc(3,"\n        "),u.Sb(4,"ct-section-header-row"),u.Hc(5,"\n            "),u.Sb(6,"ct-flex",0),u.Hc(7,"\n                "),u.Sb(8,"ct-flex-item"),u.Hc(9,"\n                    "),u.Sb(10,"ct-heading"),u.Hc(11),u.fc(12,"translate"),u.Rb(),u.Hc(13,"\n                "),u.Rb(),u.Hc(14,"\n                "),u.Sb(15,"ct-flex-item"),u.Hc(16,"\n                    "),u.Sb(17,"ct-flex",1),u.Hc(18,"\n                        "),u.Sb(19,"ct-flex-item"),u.Hc(20,"\n                            "),u.Sb(21,"button",2),u.Hc(22),u.fc(23,"translate"),u.Rb(),u.Hc(24,"\n                        "),u.Rb(),u.Hc(25,"\n                        "),u.Sb(26,"ct-flex-item"),u.Hc(27,"\n                            "),u.Sb(28,"button",3),u.ac("click",(function(){return e.toggleFilterBatches()})),u.Hc(29,"\n\t\t\t\t\t\t\t\t"),u.Fc(30,B,2,0,"span",4),u.Hc(31,"\n                                "),u.Fc(32,D,2,0,"span",4),u.Hc(33,"\n                                "),u.Sb(34,"span"),u.Hc(35),u.fc(36,"translate"),u.Rb(),u.Hc(37,"\n                            "),u.Rb(),u.Hc(38,"\n                        "),u.Rb(),u.Hc(39,"\n                    "),u.Rb(),u.Hc(40,"\n                "),u.Rb(),u.Hc(41,"\n            "),u.Rb(),u.Hc(42,"\n        "),u.Rb(),u.Hc(43,"\n    "),u.Rb(),u.Hc(44,"\n    "),u.Sb(45,"ct-section-body"),u.Hc(46,"\n        "),u.Sb(47,"ct-section-body-row"),u.Hc(48,"\n            "),u.Sb(49,"ct-table",null,5),u.Hc(51,"\n                "),u.Sb(52,"table",6),u.Hc(53,"\n                    "),u.Qb(54,7),u.Hc(55,"\n                        "),u.Fc(56,L,3,3,"th",8),u.Hc(57,"\n                        "),u.Fc(58,U,2,1,"td",9),u.Hc(59,"\n                    "),u.Pb(),u.Hc(60,"\n                    "),u.Qb(61,10),u.Hc(62,"\n                        "),u.Fc(63,E,3,3,"th",8),u.Hc(64,"\n                        "),u.Fc(65,J,3,4,"td",9),u.Hc(66,"\n                    "),u.Pb(),u.Hc(67,"\n                    "),u.Qb(68,11),u.Hc(69,"\n                        "),u.Fc(70,q,3,3,"th",8),u.Hc(71,"\n                        "),u.Fc(72,X,4,2,"td",9),u.Hc(73,"\n                    "),u.Pb(),u.Hc(74,"\n                    "),u.Qb(75,12),u.Hc(76,"\n                        "),u.Fc(77,$,10,6,"th",8),u.Hc(78,"\n                        "),u.Fc(79,z,8,2,"td",9),u.Hc(80,"\n                    "),u.Pb(),u.Hc(81,"\n                    "),u.Qb(82,13),u.Hc(83,"\n                        "),u.Fc(84,Q,3,3,"th",8),u.Hc(85,"\n                        "),u.Fc(86,Z,9,4,"td",9),u.Hc(87,"\n                    "),u.Pb(),u.Hc(88,"\n                    "),u.Qb(89,14),u.Hc(90,"\n                        "),u.Fc(91,tt,2,0,"th",8),u.Hc(92,"\n                        "),u.Fc(93,ct,29,9,"td",9),u.Hc(94,"\n                    "),u.Pb(),u.Hc(95,"\n                    "),u.Fc(96,nt,2,0,"tr",15),u.Hc(97,"\n                    "),u.Fc(98,at,1,2,"tr",16),u.Hc(99,"\n                "),u.Rb(),u.Hc(100,"\n            "),u.Rb(),u.Hc(101,"\n        "),u.Rb(),u.Hc(102,"\n        "),u.Hc(103,"\n    "),u.Rb(),u.Hc(104,"\n    "),u.Sb(105,"ct-section-footer"),u.Hc(106,"\n        "),u.Sb(107,"ct-section-footer-row"),u.Hc(108,"\n            "),u.Sb(109,"ct-flex",17),u.Hc(110,"\n                "),u.Sb(111,"ct-flex-item"),u.Hc(112,"\n                    "),u.Sb(113,"ct-flex",18),u.Hc(114,"\n                        "),u.Sb(115,"ct-flex-item"),u.Hc(116,"\n                            "),u.Sb(117,"button",19,20),u.ac("click",(function(){return e.prev()})),u.Hc(119,"\n                                "),u.Sb(120,"mat-icon"),u.Hc(121,"arrow_back_ios"),u.Rb(),u.Hc(122,"\n                            "),u.Rb(),u.Hc(123,"\n                        "),u.Rb(),u.Hc(124,"\n                        "),u.Sb(125,"ct-flex-item"),u.Hc(126,"\n                            "),u.Sb(127,"button",19,21),u.ac("click",(function(){return e.next()})),u.Hc(129,"\n                                "),u.Sb(130,"mat-icon"),u.Hc(131,"arrow_forward_ios"),u.Rb(),u.Hc(132,"\n                            "),u.Rb(),u.Hc(133,"\n                        "),u.Rb(),u.Hc(134,"\n                    "),u.Rb(),u.Hc(135,"\n                "),u.Rb(),u.Hc(136,"\n                "),u.Sb(137,"ct-flex-item"),u.Hc(138,"\n                    "),u.Sb(139,"button",2),u.Hc(140),u.fc(141,"translate"),u.Rb(),u.Hc(142,"\n                "),u.Rb(),u.Hc(143,"\n            "),u.Rb(),u.Hc(144,"\n        "),u.Rb(),u.Hc(145,"\n    "),u.Rb(),u.Hc(146,"\n"),u.Rb()),2&t&&(u.Ab(11),u.Jc("",u.gc(12,12,"batch.Batch")," "),u.Ab(10),u.kc("disabled",!1),u.Ab(1),u.Jc("\n                                ",u.gc(23,14,"batch.Upload files and start processing"),"\n                            "),u.Ab(6),u.kc("disabled",!1),u.Ab(2),u.kc("ngIf",e.isFilterBatches),u.Ab(2),u.kc("ngIf",!e.isFilterBatches),u.Ab(3),u.Ic(u.gc(36,16,"batch.onlyMyBatches")),u.Ab(17),u.kc("dataSource",e.dataSource),u.Ab(44),u.kc("matHeaderRowDef",e.columnsToDisplay),u.Ab(2),u.kc("matRowDefColumns",e.columnsToDisplay),u.Ab(41),u.kc("disabled",!1),u.Ab(1),u.Jc(" ",u.gc(141,18,"batch.Upload files and start processing"),""))},directives:[S.a,R.a,w.a,v.a,y.a,C.a,k.b,o.c,n.l,O.a,M.a,x.a,f.j,f.c,f.e,f.b,f.g,f.i,A.a,I.a,_.a,f.d,f.a,f.f,f.h],pipes:[s.c,n.e],styles:[""]}),function(t,e,c,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,c):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,c,n);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(s=(o<3?a(s):o>3?a(e,c,s):a(e,c))||s);o>3&&s&&Object.defineProperty(e,c,s)}([Object(r.a)({question:t=>({text:"batch.delete-dialog.Do you want to delete Batch _batchId_",params:{batchId:t.batch.id}}),rejectTitle:"batch.delete-dialog.Cancel",resolveTitle:"batch.delete-dialog.Delete"}),F("design:type",Function),F("design:paramtypes",[Object]),F("design:returntype",void 0)],t.prototype,"delete",null),t})();var st=c("u8e3"),it=c("bv9b"),rt=c("IRPT");function bt(t,e){1&t&&(u.Sb(0,"ct-section-body-row"),u.Hc(1,"\n      "),u.Nb(2,"mat-progress-bar",1),u.Hc(3,"\n    "),u.Rb())}function lt(t,e){if(1&t&&(u.Sb(0,"ct-section-body-row"),u.Hc(1," \n      "),u.Sb(2,"ct-pre"),u.Hc(3),u.Rb(),u.Hc(4,"\n    "),u.Rb()),2&t){const t=u.ec();u.Ab(3),u.Ic(t.response.console)}}const dt=function(t){return{batchId:t}},ht=function(t,e){return[t,e]};let ft=(()=>{class t{constructor(t,e,c){this.route=t,this.batchService=e,this.router=c,this.states=st.a,this.currentState=st.a.firstLoading}ngOnInit(){this.batchId=this.route.snapshot.paramMap.get("id"),this.updateResponse()}updateResponse(){const t=this.batchService.batch.status(this.batchId).subscribe(t=>{this.response=t,this.currentState=this.states.show},()=>{},()=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(o.a),u.Mb(H.a),u.Mb(o.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["batch-status"]],decls:23,vars:11,consts:[[4,"ngIf"],["mode","indeterminate"]],template:function(t,e){1&t&&(u.Hc(0,"\n"),u.Sb(1,"ct-section"),u.Hc(2,"\n  "),u.Sb(3,"ct-section-header"),u.Hc(4,"\n    "),u.Sb(5,"ct-section-header-row"),u.Hc(6,"\n      "),u.Sb(7,"ct-heading"),u.Hc(8,"  \n        "),u.Sb(9,"div"),u.Hc(10),u.fc(11,"translate"),u.Rb(),u.Hc(12,"\n      "),u.Rb(),u.Hc(13,"\n    "),u.Rb(),u.Hc(14,"\n  "),u.Rb(),u.Hc(15,"\n  "),u.Sb(16,"ct-section-body"),u.Hc(17,"\n    "),u.Fc(18,bt,4,0,"ct-section-body-row",0),u.Hc(19,"\n    "),u.Fc(20,lt,5,1,"ct-section-body-row",0),u.Hc(21,"\n  "),u.Rb(),u.Hc(22,"\n"),u.Rb()),2&t&&(u.Ab(10),u.Jc("",u.hc(11,3,"batch-status.Status of execution of batch _batchId_",u.oc(6,dt,e.batchId))," "),u.Ab(8),u.kc("ngIf",e.currentState==e.states.firstLoading),u.Ab(2),u.kc("ngIf",u.pc(8,ht,e.states.wait,e.states.show).includes(e.currentState)))},directives:[S.a,R.a,w.a,C.a,O.a,n.l,M.a,it.a,rt.a],pipes:[s.c],styles:["pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}"]}),t})();var ut=c("S7bA"),pt=c("MbdJ"),Ht=c("eWij"),gt=c("I6qf"),mt=c("MI58"),St=c("kmnG"),Rt=c("d3UM"),wt=c("FKr1");const vt=["*"];let yt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Gb({type:t,selectors:[["ct-hint"]],ngContentSelectors:vt,decls:1,vars:0,template:function(t,e){1&t&&(u.jc(),u.ic(0))},styles:["[_nghost-%COMP%]{font-size:75%;display:block}.light-theme[_nghost-%COMP%], .light-theme   [_nghost-%COMP%]{color:rgba(0,0,0,.54)}.dark-theme[_nghost-%COMP%], .dark-theme   [_nghost-%COMP%]{color:hsla(0,0%,100%,.7)}"]}),t})();const Ct=["fileUpload"];function kt(t,e){1&t&&(u.Sb(0,"ct-section"),u.Hc(1,"\n    "),u.Sb(2,"ct-section-body"),u.Hc(3,"\n        "),u.Sb(4,"ct-section-body-row"),u.Hc(5,"\n            "),u.Sb(6,"ct-section-content"),u.Hc(7,"\n                "),u.Nb(8,"mat-progress-bar",1),u.Hc(9,"\n            "),u.Rb(),u.Hc(10,"\n        "),u.Rb(),u.Hc(11,"\n    "),u.Rb(),u.Hc(12,"\n"),u.Rb())}function Ot(t,e){if(1&t&&(u.Sb(0,"div"),u.Hc(1,"\n                                    "),u.Sb(2,"mat-option",8),u.Hc(3),u.Rb(),u.Hc(4,"\n                                "),u.Rb()),2&t){const t=e.$implicit;u.Ab(2),u.kc("value",t),u.Ab(1),u.Ic(t.uid)}}function Mt(t,e){if(1&t){const t=u.Tb();u.Sb(0,"ct-section-body-row"),u.Hc(1,"\n                    "),u.Sb(2,"ct-section-content"),u.Hc(3,"\n                        "),u.Sb(4,"mat-form-field"),u.Hc(5,"\n                            "),u.Sb(6,"mat-label"),u.Hc(7),u.fc(8,"translate"),u.Rb(),u.Hc(9,"\n                            "),u.Sb(10,"mat-select",6),u.ac("ngModelChange",(function(e){return u.vc(t),u.ec(2).sourceCode=e})),u.Hc(11,"\n                                "),u.Fc(12,Ot,5,2,"div",7),u.Hc(13,"\n                            "),u.Rb(),u.Hc(14,"\n                            "),u.Sb(15,"mat-hint"),u.Hc(16),u.fc(17,"translate"),u.Rb(),u.Hc(18,"\n                        "),u.Rb(),u.Hc(19,"\n                    "),u.Rb(),u.Hc(20,"\n                "),u.Rb()}if(2&t){const t=u.ec(2);u.Ab(7),u.Jc(" ",u.gc(8,4,"batch-add.List of Source Codes"),""),u.Ab(3),u.kc("ngModel",t.sourceCode),u.Ab(2),u.kc("ngForOf",t.listOfSourceCodes),u.Ab(4),u.Ic(u.gc(17,6,"batch-add.This is a required field."))}}function xt(t,e){if(1&t){const t=u.Tb();u.Sb(0,"ct-section-body-row"),u.Hc(1,"\n                    "),u.Sb(2,"ct-section-content"),u.Hc(3,"\n                        "),u.Sb(4,"ct-file-upload",9,10),u.ac("changed",(function(){return u.vc(t),u.ec(2).fileUploadChanged()})),u.fc(6,"translate"),u.Rb(),u.Hc(7,"\n                        "),u.Sb(8,"ct-hint"),u.Hc(9),u.fc(10,"translate"),u.Rb(),u.Hc(11,"\n                        "),u.Sb(12,"ct-hint"),u.Hc(13),u.fc(14,"translate"),u.Rb(),u.Hc(15,"\n                    "),u.Rb(),u.Hc(16,"\n                "),u.Rb()}2&t&&(u.Ab(4),u.lc("buttonTitle",u.gc(6,3,"batch-add.Select File")),u.Ab(5),u.Ic(u.gc(10,5,"batch-add.This is a required field.")),u.Ab(4),u.Ic(u.gc(14,7,"batch-add.Only .xml and .zip files are supported")))}function At(t,e){if(1&t&&(u.Sb(0,"p"),u.Hc(1),u.Rb()),2&t){const t=e.$implicit;u.Ab(1),u.Ic(t)}}function It(t,e){if(1&t&&(u.Sb(0,"p"),u.Hc(1),u.Rb()),2&t){const t=e.$implicit;u.Ab(1),u.Ic(t)}}function _t(t,e){if(1&t&&(u.Sb(0,"ct-section"),u.Hc(1,"\n            "),u.Sb(2,"ct-section-body"),u.Hc(3,"\n                "),u.Sb(4,"ct-section-body-row"),u.Hc(5,"\n                    "),u.Sb(6,"ct-section-content"),u.Hc(7,"\n                        "),u.Sb(8,"div"),u.Hc(9,"\n                            "),u.Sb(10,"div"),u.Hc(11),u.fc(12,"translate"),u.Rb(),u.Hc(13,"\n                            "),u.Fc(14,At,2,1,"p",7),u.Hc(15,"\n                            "),u.Fc(16,It,2,1,"p",7),u.Hc(17,"\n                        "),u.Rb(),u.Hc(18,"\n                    "),u.Rb(),u.Hc(19,"\n                "),u.Rb(),u.Hc(20,"\n            "),u.Rb(),u.Hc(21,"\n        "),u.Rb()),2&t){const t=u.ec(2);u.Ab(11),u.Kc("",u.gc(12,4,"batch-add.STATUS"),": ",t.uploadResponse.status,""),u.Ab(3),u.kc("ngForOf",t.uploadResponse.errorMessages),u.Ab(2),u.kc("ngForOf",t.uploadResponse.infoMessages)}}function Ft(t,e){if(1&t){const t=u.Tb();u.Sb(0,"ct-cols"),u.Hc(1,"\n    "),u.Sb(2,"ct-col",2),u.Hc(3,"\n        "),u.Sb(4,"ct-section"),u.Hc(5,"\n            "),u.Sb(6,"ct-section-header"),u.Hc(7,"\n                "),u.Sb(8,"ct-section-header-row"),u.Hc(9,"\n                    "),u.Sb(10,"ct-heading"),u.Hc(11),u.fc(12,"translate"),u.Rb(),u.Hc(13,"\n                "),u.Rb(),u.Hc(14,"\n            "),u.Rb(),u.Hc(15,"\n            "),u.Sb(16,"ct-section-body"),u.Hc(17,"\n                "),u.Fc(18,Mt,21,8,"ct-section-body-row",0),u.Hc(19,"\n                "),u.Fc(20,xt,17,9,"ct-section-body-row",0),u.Hc(21,"\n            "),u.Rb(),u.Hc(22,"\n            "),u.Sb(23,"ct-section-footer"),u.Hc(24,"\n                "),u.Sb(25,"ct-section-footer-row"),u.Hc(26,"\n                    "),u.Sb(27,"ct-flex",3),u.Hc(28,"\n                        "),u.Sb(29,"ct-flex-item"),u.Hc(30,"\n                            "),u.Sb(31,"button",4),u.ac("click",(function(){return u.vc(t),u.ec().back()})),u.Hc(32),u.fc(33,"translate"),u.Rb(),u.Hc(34,"\n                        "),u.Rb(),u.Hc(35,"\n                        "),u.Sb(36,"ct-flex-item"),u.Hc(37,"\n                            "),u.Sb(38,"button",5),u.ac("click",(function(){return u.vc(t),u.ec().upload()})),u.Hc(39),u.fc(40,"translate"),u.Rb(),u.Hc(41,"\n                        "),u.Rb(),u.Hc(42,"\n                    "),u.Rb(),u.Hc(43,"\n                "),u.Rb(),u.Hc(44,"\n            "),u.Rb(),u.Hc(45,"\n        "),u.Rb(),u.Hc(46,"\n    "),u.Rb(),u.Hc(47,"\n    "),u.Sb(48,"ct-col",2),u.Hc(49,"\n        "),u.Fc(50,_t,22,6,"ct-section",0),u.Hc(51,"\n    "),u.Rb(),u.Hc(52,"\n"),u.Rb()}if(2&t){const t=u.ec();u.Ab(11),u.Ic(u.gc(12,7,"batch-add.Upload file for processing")),u.Ab(7),u.kc("ngIf",t.currentStates.has(t.states.show)),u.Ab(2),u.kc("ngIf",t.currentStates.has(t.states.show)),u.Ab(12),u.Jc(" ",u.gc(33,9,"batch-add.Cancel"),""),u.Ab(6),u.kc("disabled",!t.sourceCode||!t.file),u.Ab(1),u.Jc(" ",u.gc(40,11,"batch-add.Upload File"),""),u.Ab(11),u.kc("ngIf",t.uploadResponse)}}let Tt=(()=>{class t{constructor(t,e,c,n){this.batchService=t,this.router=e,this.translate=c,this.store=n,this.states=st.a,this.currentStates=new Set,this.listOfSourceCodes=[],this.currentStates.add(this.states.firstLoading),n.subscribe(t=>{this.translate.use(t.settings.language)})}ngOnInit(){this.updateResponse()}updateResponse(){const t=this.batchService.batch.add().subscribe(t=>{this.response=t,this.listOfSourceCodes=this.response.items},()=>{},()=>{this.currentStates.delete(this.states.firstLoading),this.currentStates.delete(this.states.loading),this.currentStates.add(this.states.show),t.unsubscribe()})}back(){this.router.navigate(["/dispatcher","batch"])}upload(){this.batchService.batch.upload(this.sourceCode.id.toString(),this.fileUpload.fileInput.nativeElement.files[0]).subscribe(t=>{t.status===ut.a.OK&&this.back(),this.uploadResponse=t})}fileUploadChanged(){this.file=this.fileUpload.fileInput.nativeElement.files[0]||!1}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(H.a),u.Mb(o.b),u.Mb(s.d),u.Mb(m.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["batch-add"]],viewQuery:function(t,e){var c;1&t&&u.Lc(Ct,!0),2&t&&u.sc(c=u.bc())&&(e.fileUpload=c.first)},decls:3,vars:2,consts:[[4,"ngIf"],["mode","indeterminate"],["size","6"],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[3,"value"],["acceptTypes",".zip, .xml",3,"buttonTitle","changed"],["fileUpload",""]],template:function(t,e){1&t&&(u.Fc(0,kt,13,0,"ct-section",0),u.Hc(1,"\n"),u.Fc(2,Ft,53,13,"ct-cols",0)),2&t&&(u.kc("ngIf",e.currentStates.has(e.states.firstLoading)),u.Ab(2),u.kc("ngIf",e.currentStates.has(e.states.show)))},directives:[n.l,S.a,O.a,M.a,Ht.a,it.a,gt.a,mt.a,R.a,w.a,C.a,A.a,I.a,v.a,y.a,k.b,St.b,St.f,Rt.a,a.k,a.n,n.k,St.e,wt.n,pt.a,yt],pipes:[s.c],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();var Pt=c("9kxi");const jt=[{path:"",component:ot},{path:":id/status",component:ft},{path:"add",component:Tt}];let Bt=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(jt)],o.f]}),t})(),Dt=(()=>{class t{}return t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({factory:function(e){return new(e||t)},imports:[[n.c,Bt,Pt.a,i.a,a.g,a.o,s.b.forChild({})]]}),t})()},lJGJ:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));var n=c("0IaG"),a=c("cp0P"),o=c("fXoL"),s=c("bTqV");let i=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}onNoClick(){this.dialogRef.close(0)}onYesClick(){this.dialogRef.close(1)}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(n.d),o.Mb(n.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-dialog-confirmation"]],decls:19,vars:3,consts:[[1,"mat-dialog-content"],[1,"mat-dialog-actions"],[1,"mat-dialog-action"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","warn",3,"click"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Hc(1),o.Rb(),o.Nb(2,"br"),o.Hc(3,"\n"),o.Sb(4,"div",1),o.Hc(5,"\n  "),o.Sb(6,"div",2),o.Hc(7,"\n    "),o.Sb(8,"button",3),o.ac("click",(function(){return e.onNoClick()})),o.Hc(9),o.Rb(),o.Hc(10,"\n  "),o.Rb(),o.Hc(11,"\n  "),o.Sb(12,"div",2),o.Hc(13,"\n    "),o.Sb(14,"button",4),o.ac("click",(function(){return e.onYesClick()})),o.Hc(15),o.Rb(),o.Hc(16,"\n  "),o.Rb(),o.Hc(17,"\n"),o.Rb(),o.Hc(18," ")),2&t&&(o.Ab(1),o.Ic(e.data.question),o.Ab(8),o.Ic(e.data.rejectTitle),o.Ab(6),o.Ic(e.data.resolveTitle))},directives:[s.b],styles:[".mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:0 -8px}.mat-dialog-action[_ngcontent-%COMP%]{flex:1;margin:0 8px}.mat-dialog-action[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%}.mat-dialog-content[_ngcontent-%COMP%]{max-height:auto!important;overflow:hidden!important}"]}),t})();function r(t){return function(e,c,n){const o=n.value;return n.value=function(...e){let c={text:"",params:!1};"string"==typeof t.question(...e)?c.text=t.question(...e):c=t.question(...e),this.dialog||function(){throw new Error("\ncomponent require MatDialog\n\nimport { MatDialog } from '@angular/material';\n...\nconstructor(\n    ...\n    private dialog: MatDialog\n    ...\n) {}\n                ")}(),c.params&&!this.translate&&function(){throw new Error("\ncomponent require TranslateService\n\nimport { TranslateService } from '@ngx-translate/core';\n...\nconstructor(\n    ...\n    private translate: TranslateService\n    ...\n) {}\n                ")}(),this.translate?Object(a.a)(this.translate.get(c.text,c.params),this.translate.get(t.resolveTitle),this.translate.get(t.rejectTitle)).subscribe(t=>{this.dialog.open(i,{width:"500px",data:{question:t[0],resolveTitle:t[1],rejectTitle:t[2]}}).afterClosed().subscribe(t=>{t&&o.apply(this,e)})}):this.dialog.open(i,{width:"500px",data:{question:c.text,resolveTitle:t.resolveTitle,rejectTitle:t.rejectTitle}}).afterClosed().subscribe(t=>{t&&o.apply(this,e)})},n}}},u8e3:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var n=function(t){return t[t.show=0]="show",t[t.loading=1]="loading",t[t.empty=2]="empty",t[t.wait=3]="wait",t[t.firstLoading=4]="firstLoading",t}({})}}]);