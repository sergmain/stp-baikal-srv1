(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{gFOi:function(t,c,e){"use strict";e.r(c),e.d(c,"BatchRoutingModule",(function(){return Qt})),e.d(c,"BatchModule",(function(){return $t}));var n=e("ofXK"),a=e("3Pt+"),s=e("tyNb"),b=e("sYmb"),i=e("vCXQ"),o=e("+0xr"),r=e("lJGJ"),l=e("4u49"),d=e("q4ZW"),h=e("0dXh"),u=e("rV6N"),f=e("Iab2"),G=e("fXoL"),p=e("0IaG"),S=e("Hz+5"),m=e("ri4K"),R=e("l7P3"),g=e("2ljo"),w=e("1P+h"),y=e("25/r"),I=e("CaYE"),k=e("No2e"),x=e("Xc1m"),C=e("bTqV"),A=e("Ne1S"),v=e("Kt2f"),O=e("6xdO"),E=e("FMVq"),T=e("V6TR"),M=e("NFeN"),B=function(t,c){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,c)};const F=["nextTable"],D=["prevTable"],j=["table"];function H(t,c){1&t&&G.Ob(0)}function P(t,c){1&t&&(G.Sb(0,"span",24),G.Gc(1,"\u2713\xa0\xa0"),G.Rb())}function N(t,c){1&t&&(G.Sb(0,"span",24),G.Gc(1,"\u2717\xa0\xa0"),G.Rb())}function U(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Hc(G.gc(2,1,"batch.Id")))}function z(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1),G.Rb()),2&t){const t=c.$implicit;G.Ab(1),G.Ic("",t.batch.id," ")}}function _(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("",G.gc(2,1,"batch.Created On"),"\n                        "))}function L(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1),G.fc(2,"date"),G.Rb()),2&t){const t=c.$implicit;G.Ab(1),G.Ic("\n                            ",G.hc(2,1,t.batch.createdOn,"MMM d, yyyy, HH:mm:ss")," ")}}function Q(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("",G.gc(2,1,"batch.Owner's username"),"\n                        "))}function $(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1),G.Rb()),2&t){const t=c.$implicit;G.Ab(1),G.Hc(t.username)}}function q(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("\n                            ",G.gc(2,1,"batch.Is Batch Consistent?")," "))}function K(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Hc(G.gc(2,1,"batch.isBatchConsistent.true")))}function J(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Hc(G.gc(2,1,"batch.isBatchConsistent.false")))}function V(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1," "),G.Ec(2,K,3,3,"span",27),G.Ec(3,J,3,3,"span",27),G.Rb()),2&t){const t=c.$implicit;G.Ab(2),G.kc("ngIf",t.ok),G.Ab(1),G.kc("ngIf",!t.ok)}}function X(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1,"\n                            "),G.Sb(2,"div",28),G.Gc(3),G.fc(4,"translate"),G.Rb(),G.Gc(5,"\n                            "),G.Sb(6,"div",28),G.Gc(7),G.fc(8,"translate"),G.Rb(),G.Gc(9,"\n                        "),G.Rb()),2&t&&(G.Ab(3),G.Hc(G.gc(4,2,"batch.Source Code")),G.Ab(4),G.Hc(G.gc(8,4,"batch.File name")))}function W(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1,"\n                            "),G.Sb(2,"div",28),G.Gc(3),G.Rb(),G.Gc(4,"\n                            "),G.Sb(5,"div",28),G.Gc(6),G.Rb(),G.Gc(7,"\n                        "),G.Rb()),2&t){const t=c.$implicit;G.Ab(3),G.Hc(t.sourceCodeUid),G.Ab(3),G.Hc(t.uploadedFileName)}}function Y(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic(" ",G.gc(2,1,"batch.Exec State"),"\n                        "))}function Z(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("\n                                ",G.gc(2,1,"batch.isBatchConsistent.Error"),"\n                            "))}function tt(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("\n                                ",G.gc(2,1,"batch.isBatchConsistent.Preparing"),"\n                            "))}function ct(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("\n                                ",G.gc(2,1,"batch.isBatchConsistent.Processing"),"\n                            "))}function et(t,c){1&t&&(G.Sb(0,"span"),G.Gc(1),G.fc(2,"translate"),G.Rb()),2&t&&(G.Ab(1),G.Ic("\n                                ",G.gc(2,1,"batch.isBatchConsistent.Finished"),"\n                            "))}function nt(t,c){if(1&t&&(G.Sb(0,"td",26),G.Gc(1,"\n                            "),G.Ec(2,Z,3,3,"span",27),G.Gc(3,"\n                            "),G.Ec(4,tt,3,3,"span",27),G.Gc(5,"\n                            "),G.Ec(6,ct,3,3,"span",27),G.Gc(7,"\n                            "),G.Ec(8,et,3,3,"span",27),G.Gc(9,"\n                        "),G.Rb()),2&t){const t=c.$implicit;G.Ab(2),G.kc("ngIf",-1===t.execState),G.Ab(2),G.kc("ngIf",2===t.execState),G.Ab(2),G.kc("ngIf",3===t.execState),G.Ab(2),G.kc("ngIf",4===t.execState)}}function at(t,c){1&t&&(G.Sb(0,"th",25),G.Gc(1," "),G.Rb())}const st=function(t,c,e){return["/batch",t,"source-code",c,"exec-context",e,"state"]},bt=function(t){return["/batch",t,"status"]};function it(t,c){if(1&t){const t=G.Tb();G.Sb(0,"td",26),G.Gc(1,"\n                            "),G.Sb(2,"ct-flex",29),G.Gc(3,"\n                                "),G.Sb(4,"ct-flex-item"),G.Gc(5,"\n                                    "),G.Sb(6,"a",30),G.Gc(7),G.fc(8,"translate"),G.Rb(),G.Gc(9,"\n                                "),G.Rb(),G.Gc(10,"\n\n                                "),G.Sb(11,"ct-flex-item"),G.Gc(12,"\n                                    "),G.Sb(13,"button",31),G.Gc(14),G.fc(15,"translate"),G.Rb(),G.Gc(16,"\n                                "),G.Rb(),G.Gc(17,"\n                                "),G.Gc(18,"\n                                "),G.Sb(19,"ct-flex-item"),G.Gc(20,"\n                                    "),G.Sb(21,"button",32),G.ac("click",(function(){G.uc(t);const e=c.$implicit;return G.ec().downloadFile(e.batch.id)})),G.Gc(22),G.fc(23,"translate"),G.Rb(),G.Gc(24,"\n                                "),G.Rb(),G.Gc(25,"\n                                "),G.Sb(26,"ct-flex-item"),G.Gc(27,"\n                                    "),G.Sb(28,"button",33),G.ac("click",(function(){G.uc(t);const e=c.$implicit;return G.ec().delete(e)})),G.Gc(29,"\n                                        "),G.Sb(30,"mat-icon"),G.Gc(31,"delete"),G.Rb(),G.Gc(32,"\n                                    "),G.Rb(),G.Gc(33,"\n                                "),G.Rb(),G.Gc(34,"\n                            "),G.Rb(),G.Gc(35,"\n                        "),G.Rb()}if(2&t){const t=c.$implicit;G.Ab(6),G.kc("routerLink",G.pc(13,st,t.batch.id,t.batch.sourceCodeId,t.batch.execContextId)),G.Ab(1),G.Ic("\n                                        ",G.gc(8,7,"batch.Task states"),""),G.Ab(6),G.kc("disabled",4!==t.execState)("routerLink",G.nc(17,bt,t.batch.id)),G.Ab(1),G.Ic("\n                                        ",G.gc(15,9,"batch.Status"),""),G.Ab(7),G.kc("disabled",4!==t.execState),G.Ab(1),G.Ic("\n                                        ",G.gc(23,11,"batch.Download Result"),"")}}function ot(t,c){1&t&&(G.Sb(0,"tr",34),G.Gc(1," "),G.Rb())}function rt(t,c){if(1&t&&G.Nb(0,"tr",35),2&t){const t=c.$implicit,e=G.ec();G.Eb("deleted-table-row",e.isDeleted(t))}}function lt(t,c){1&t&&G.Ob(0)}function dt(t,c){1&t&&(G.Gc(0,"\n    "),G.Sb(1,"button",36),G.Gc(2),G.fc(3,"translate"),G.Rb(),G.Gc(4,"\n")),2&t&&(G.Ab(1),G.kc("disabled",!1),G.Ab(1),G.Ic("\n        ",G.gc(3,2,"batch.Upload files and start processing"),""))}let ht=(()=>{class t{constructor(t,c,e,n,a,s){this.translate=t,this.dialog=c,this.batchService=e,this.authenticationService=n,this.store=a,this.changeDetector=s,this.subs=[],this.dataSource=new o.k([]),this.columnsToDisplay=["id","createdOn","Owner","isBatchConsistent","sourceCode","execState","bts"],this.deletedRows=[]}ngOnInit(){this.subs.push(this.store.subscribe(t=>{this.isFilterBatches=t.settings.filterBatches,this.batches=t.batches,this.updateTable()})),this.store.dispatch(Object(h.a)({page:0,filterBatches:this.isFilterBatches}))}ngOnDestroy(){this.subs.forEach(t=>t.unsubscribe())}toggleFilterBatches(){this.store.dispatch(Object(u.f)({payload:!this.isFilterBatches})),this.store.dispatch(Object(h.a)({page:0,filterBatches:this.isFilterBatches}))}updateTable(){!0!==this.batches.isLoading?this.table.show():this.table.wait(),this.batches.response&&(this.columnsToDisplay=this.authenticationService.getUserRole().has(d.Role.ROLE_OPERATOR)?["id","createdOn","Owner","sourceCode","execState","bts"]:["id","createdOn","Owner","isBatchConsistent","sourceCode","execState","bts"],this.dataSource=new o.k(this.batches.list||[]),this.prevTable.disabled=this.batches.response.batches.first,this.nextTable.disabled=this.batches.response.batches.last)}isDeleted(t){return!!this.deletedRows.filter(c=>c.batch.id===t.batch.id).length}downloadFile(t){this.batchService.downloadFile(t).subscribe(t=>{let c="result.zip";try{c=t.headers.get("Content-Disposition").split("''")[1]}catch(e){console.log(e)}this._saveFile(t.body,decodeURIComponent(c))})}_saveFile(t,c){const e=new Blob([t],{type:"application/octet-stream"});f.saveAs(e,c)}delete(t){this.deletedRows.push(t),this.batchService.processResourceDeleteCommit(t.batch.id.toString()).subscribe()}next(){this.table.wait(),this.prevTable.disabled=!0,this.nextTable.disabled=!0,this.store.dispatch(Object(h.a)({page:this.batches.response.batches.number+1,filterBatches:this.isFilterBatches}))}prev(){this.table.wait(),this.prevTable.disabled=!0,this.nextTable.disabled=!0,this.store.dispatch(Object(h.a)({page:this.batches.response.batches.number-1,filterBatches:this.isFilterBatches}))}}return t.\u0275fac=function(c){return new(c||t)(G.Mb(b.d),G.Mb(p.b),G.Mb(S.a),G.Mb(m.a),G.Mb(R.b),G.Mb(G.h))},t.\u0275cmp=G.Gb({type:t,selectors:[["batch"]],viewQuery:function(t,c){var e;1&t&&(G.zc(F,!0),G.zc(D,!0),G.zc(j,!0)),2&t&&(G.rc(e=G.bc())&&(c.nextTable=e.first),G.rc(e=G.bc())&&(c.prevTable=e.first),G.rc(e=G.bc())&&(c.table=e.first))},decls:153,vars:14,consts:[["justify-content","space-between","align-items","center","gap","unit(1)"],["justify-content","flex-end","align-items","center","gap","unit(1)"],[4,"ngTemplateOutlet"],["mat-stroked-button","",3,"disabled","click"],["style","vertical-align: baseline;",4,"ngIf"],["table",""],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdOn"],["matColumnDef","Owner"],["matColumnDef","isBatchConsistent"],["matColumnDef","sourceCode"],["matColumnDef","execState"],["matColumnDef","bts"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"deleted-table-row",4,"matRowDef","matRowDefColumns"],["justify-content","space-between"],["justify-content","flex-start","gap","8px"],["mat-flat-button","","color","primary","disabled","disabled",3,"click"],["prevTable",""],["nextTable",""],["uploadFilesButton",""],[2,"vertical-align","baseline"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],[1,"no-wrap"],["justify-content","flex-end","gap","9px"],["mat-flat-button","","size","forTableRow","color","primary",3,"routerLink"],["mat-flat-button","","size","forTableRow","color","primary",3,"disabled","routerLink"],["mat-flat-button","","size","forTableRow","color","primary",3,"disabled","click"],["mat-flat-button","","color","warn","size","forTableRow","title","Delete",3,"click"],["mat-header-row",""],["mat-row",""],["mat-flat-button","","color","primary","routerLink","/batch/add",3,"disabled"]],template:function(t,c){if(1&t&&(G.Sb(0,"ct-section"),G.Gc(1,"\n    "),G.Sb(2,"ct-section-header"),G.Gc(3,"\n        "),G.Sb(4,"ct-section-header-row"),G.Gc(5,"\n            "),G.Sb(6,"ct-flex",0),G.Gc(7,"\n                "),G.Sb(8,"ct-flex-item"),G.Gc(9,"\n                    "),G.Sb(10,"ct-heading"),G.Gc(11),G.fc(12,"translate"),G.Rb(),G.Gc(13,"\n                "),G.Rb(),G.Gc(14,"\n                "),G.Sb(15,"ct-flex-item"),G.Gc(16,"\n                    "),G.Sb(17,"ct-flex",1),G.Gc(18,"\n                        "),G.Sb(19,"ct-flex-item"),G.Gc(20,"\n                            "),G.Ec(21,H,1,0,"ng-container",2),G.Gc(22,"\n                        "),G.Rb(),G.Gc(23,"\n                        "),G.Sb(24,"ct-flex-item"),G.Gc(25,"\n                            "),G.Sb(26,"button",3),G.ac("click",(function(){return c.toggleFilterBatches()})),G.Gc(27,"\n                                "),G.Ec(28,P,2,0,"span",4),G.Gc(29,"\n                                "),G.Ec(30,N,2,0,"span",4),G.Gc(31,"\n                                "),G.Sb(32,"span"),G.Gc(33),G.fc(34,"translate"),G.Rb(),G.Gc(35,"\n                            "),G.Rb(),G.Gc(36,"\n                        "),G.Rb(),G.Gc(37,"\n                    "),G.Rb(),G.Gc(38,"\n                "),G.Rb(),G.Gc(39,"\n            "),G.Rb(),G.Gc(40,"\n        "),G.Rb(),G.Gc(41,"\n    "),G.Rb(),G.Gc(42,"\n    "),G.Sb(43,"ct-section-body"),G.Gc(44,"\n        "),G.Sb(45,"ct-section-body-row"),G.Gc(46,"\n            "),G.Sb(47,"ct-table",null,5),G.Gc(49,"\n                "),G.Sb(50,"table",6),G.Gc(51,"\n                    "),G.Qb(52,7),G.Gc(53,"\n                        "),G.Ec(54,U,3,3,"th",8),G.Gc(55,"\n                        "),G.Ec(56,z,2,1,"td",9),G.Gc(57,"\n                    "),G.Pb(),G.Gc(58,"\n                    "),G.Qb(59,10),G.Gc(60,"\n                        "),G.Ec(61,_,3,3,"th",8),G.Gc(62,"\n                        "),G.Ec(63,L,3,4,"td",9),G.Gc(64,"\n                    "),G.Pb(),G.Gc(65,"\n                    "),G.Qb(66,11),G.Gc(67,"\n                        "),G.Ec(68,Q,3,3,"th",8),G.Gc(69,"\n                        "),G.Ec(70,$,2,1,"td",9),G.Gc(71,"\n                    "),G.Pb(),G.Gc(72,"\n                    "),G.Qb(73,12),G.Gc(74,"\n                        "),G.Ec(75,q,3,3,"th",8),G.Gc(76,"\n                        "),G.Ec(77,V,4,2,"td",9),G.Gc(78,"\n                    "),G.Pb(),G.Gc(79,"\n                    "),G.Qb(80,13),G.Gc(81,"\n                        "),G.Ec(82,X,10,6,"th",8),G.Gc(83,"\n                        "),G.Ec(84,W,8,2,"td",9),G.Gc(85,"\n                    "),G.Pb(),G.Gc(86,"\n                    "),G.Qb(87,14),G.Gc(88,"\n                        "),G.Ec(89,Y,3,3,"th",8),G.Gc(90,"\n                        "),G.Ec(91,nt,10,4,"td",9),G.Gc(92,"\n                    "),G.Pb(),G.Gc(93,"\n                    "),G.Qb(94,15),G.Gc(95,"\n                        "),G.Ec(96,at,2,0,"th",8),G.Gc(97,"\n                        "),G.Ec(98,it,36,19,"td",9),G.Gc(99,"\n                    "),G.Pb(),G.Gc(100,"\n                    "),G.Ec(101,ot,2,0,"tr",16),G.Gc(102,"\n                    "),G.Ec(103,rt,1,2,"tr",17),G.Gc(104,"\n                "),G.Rb(),G.Gc(105,"\n            "),G.Rb(),G.Gc(106,"\n        "),G.Rb(),G.Gc(107,"\n        "),G.Gc(108,"\n    "),G.Rb(),G.Gc(109,"\n    "),G.Sb(110,"ct-section-footer"),G.Gc(111,"\n        "),G.Sb(112,"ct-section-footer-row"),G.Gc(113,"\n            "),G.Sb(114,"ct-flex",18),G.Gc(115,"\n                "),G.Sb(116,"ct-flex-item"),G.Gc(117,"\n                    "),G.Sb(118,"ct-flex",19),G.Gc(119,"\n                        "),G.Sb(120,"ct-flex-item"),G.Gc(121,"\n                            "),G.Sb(122,"button",20,21),G.ac("click",(function(){return c.prev()})),G.Gc(124,"\n                                "),G.Sb(125,"mat-icon"),G.Gc(126,"arrow_back_ios"),G.Rb(),G.Gc(127,"\n                            "),G.Rb(),G.Gc(128,"\n                        "),G.Rb(),G.Gc(129,"\n                        "),G.Sb(130,"ct-flex-item"),G.Gc(131,"\n                            "),G.Sb(132,"button",20,22),G.ac("click",(function(){return c.next()})),G.Gc(134,"\n                                "),G.Sb(135,"mat-icon"),G.Gc(136,"arrow_forward_ios"),G.Rb(),G.Gc(137,"\n                            "),G.Rb(),G.Gc(138,"\n                        "),G.Rb(),G.Gc(139,"\n                    "),G.Rb(),G.Gc(140,"\n                "),G.Rb(),G.Gc(141,"\n                "),G.Sb(142,"ct-flex-item"),G.Gc(143,"\n                    "),G.Ec(144,lt,1,0,"ng-container",2),G.Gc(145,"\n                "),G.Rb(),G.Gc(146,"\n            "),G.Rb(),G.Gc(147,"\n        "),G.Rb(),G.Gc(148,"\n    "),G.Rb(),G.Gc(149,"\n"),G.Rb(),G.Gc(150,"\n\n\n\n"),G.Ec(151,dt,5,4,"ng-template",null,23,G.Fc)),2&t){const t=G.sc(152);G.Ab(11),G.Ic("",G.gc(12,10,"batch.Batch")," "),G.Ab(10),G.kc("ngTemplateOutlet",t),G.Ab(5),G.kc("disabled",!1),G.Ab(2),G.kc("ngIf",c.isFilterBatches),G.Ab(2),G.kc("ngIf",!c.isFilterBatches),G.Ab(3),G.Hc(G.gc(34,12,"batch.onlyMyBatches")),G.Ab(17),G.kc("dataSource",c.dataSource),G.Ab(51),G.kc("matHeaderRowDef",c.columnsToDisplay),G.Ab(2),G.kc("matRowDefColumns",c.columnsToDisplay),G.Ab(41),G.kc("ngTemplateOutlet",t)}},directives:[g.a,w.a,y.a,I.a,k.a,x.a,n.r,C.b,n.m,A.a,v.a,O.a,o.j,o.c,o.e,o.b,o.g,o.i,E.a,T.a,M.a,o.d,o.a,C.a,s.e,s.c,o.f,o.h],pipes:[b.c,n.e],styles:[""]}),function(t,c,e,n){var a,s=arguments.length,b=s<3?c:null===n?n=Object.getOwnPropertyDescriptor(c,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)b=Reflect.decorate(t,c,e,n);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(b=(s<3?a(b):s>3?a(c,e,b):a(c,e))||b);s>3&&b&&Object.defineProperty(c,e,b)}([Object(r.a)({question:t=>({text:Object(l.a)("batch.delete-dialog.Do you want to delete Batch _batchId_"),params:{batchId:t.batch.id}}),rejectTitle:""+Object(l.a)("batch.delete-dialog.Cancel"),resolveTitle:""+Object(l.a)("batch.delete-dialog.Delete")}),B("design:type",Function),B("design:paramtypes",[Object]),B("design:returntype",void 0)],t.prototype,"delete",null),t})();var ut=e("u8e3"),ft=e("bv9b"),Gt=e("IRPT");function pt(t,c){1&t&&(G.Sb(0,"ct-section-body-row"),G.Gc(1,"\n      "),G.Nb(2,"mat-progress-bar",1),G.Gc(3,"\n    "),G.Rb())}function St(t,c){if(1&t&&(G.Sb(0,"ct-section-body-row"),G.Gc(1," \n      "),G.Sb(2,"ct-pre"),G.Gc(3),G.Rb(),G.Gc(4,"\n    "),G.Rb()),2&t){const t=G.ec();G.Ab(3),G.Hc(t.response.console)}}const mt=function(t){return{batchId:t}},Rt=function(t,c){return[t,c]};let gt=(()=>{class t{constructor(t,c,e){this.route=t,this.batchService=c,this.router=e,this.states=ut.a,this.currentState=ut.a.firstLoading}ngOnInit(){this.batchId=this.route.snapshot.paramMap.get("batchId"),this.updateResponse()}updateResponse(){this.batchService.getProcessingResourceStatus(this.batchId).subscribe(t=>{this.response=t,this.currentState=this.states.show})}}return t.\u0275fac=function(c){return new(c||t)(G.Mb(s.a),G.Mb(S.a),G.Mb(s.b))},t.\u0275cmp=G.Gb({type:t,selectors:[["batch-status"]],decls:23,vars:11,consts:[[4,"ngIf"],["mode","indeterminate"]],template:function(t,c){1&t&&(G.Gc(0,"\n"),G.Sb(1,"ct-section"),G.Gc(2,"\n  "),G.Sb(3,"ct-section-header"),G.Gc(4,"\n    "),G.Sb(5,"ct-section-header-row"),G.Gc(6,"\n      "),G.Sb(7,"ct-heading"),G.Gc(8,"  \n        "),G.Sb(9,"div"),G.Gc(10),G.fc(11,"translate"),G.Rb(),G.Gc(12,"\n      "),G.Rb(),G.Gc(13,"\n    "),G.Rb(),G.Gc(14,"\n  "),G.Rb(),G.Gc(15,"\n  "),G.Sb(16,"ct-section-body"),G.Gc(17,"\n    "),G.Ec(18,pt,4,0,"ct-section-body-row",0),G.Gc(19,"\n    "),G.Ec(20,St,5,1,"ct-section-body-row",0),G.Gc(21,"\n  "),G.Rb(),G.Gc(22,"\n"),G.Rb()),2&t&&(G.Ab(10),G.Ic("",G.hc(11,3,"batch-status.Status of execution of batch _batchId_",G.nc(6,mt,c.batchId))," "),G.Ab(8),G.kc("ngIf",c.currentState==c.states.firstLoading),G.Ab(2),G.kc("ngIf",G.oc(8,Rt,c.states.wait,c.states.show).includes(c.currentState)))},directives:[g.a,w.a,y.a,x.a,A.a,n.m,v.a,ft.a,Gt.a],pipes:[b.c],styles:["pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}"]}),t})();var wt=e("uB0V"),yt=e("MbdJ"),It=e("eWij"),kt=e("I6qf"),xt=e("MI58"),Ct=e("kmnG"),At=e("d3UM"),vt=e("PVyz"),Ot=e("05qC"),Et=e("FKr1");const Tt=["fileUpload"];function Mt(t,c){1&t&&(G.Sb(0,"ct-section"),G.Gc(1,"\n    "),G.Sb(2,"ct-section-body"),G.Gc(3,"\n        "),G.Sb(4,"ct-section-body-row"),G.Gc(5,"\n            "),G.Sb(6,"ct-section-content"),G.Gc(7,"\n                "),G.Nb(8,"mat-progress-bar",1),G.Gc(9,"\n            "),G.Rb(),G.Gc(10,"\n        "),G.Rb(),G.Gc(11,"\n    "),G.Rb(),G.Gc(12,"\n"),G.Rb())}function Bt(t,c){if(1&t&&(G.Sb(0,"div"),G.Gc(1,"\n                                "),G.Sb(2,"mat-option",12),G.Gc(3),G.Rb(),G.Gc(4,"\n                            "),G.Rb()),2&t){const t=c.$implicit;G.Ab(2),G.kc("value",t),G.Ab(1),G.Hc(t.uid)}}function Ft(t,c){if(1&t){const t=G.Tb();G.Sb(0,"ct-cols"),G.Gc(1,"\n    "),G.Sb(2,"ct-col",2),G.Gc(3,"\n        "),G.Sb(4,"ct-section"),G.Gc(5,"\n            "),G.Sb(6,"ct-section-header"),G.Gc(7,"\n                "),G.Sb(8,"ct-section-header-row"),G.Gc(9,"\n                    "),G.Sb(10,"ct-heading"),G.Gc(11),G.fc(12,"translate"),G.Rb(),G.Gc(13,"\n                "),G.Rb(),G.Gc(14,"\n            "),G.Rb(),G.Gc(15,"\n            "),G.Sb(16,"ct-section-body"),G.Gc(17,"\n                "),G.Sb(18,"ct-section-body-row"),G.Gc(19,"\n                    "),G.Sb(20,"mat-form-field",3),G.Gc(21,"\n                        "),G.Sb(22,"mat-label"),G.Gc(23),G.fc(24,"translate"),G.Rb(),G.Gc(25,"\n                        "),G.Sb(26,"mat-select",4),G.ac("ngModelChange",(function(c){return G.uc(t),G.ec().sourceCode=c})),G.Gc(27,"\n                            "),G.Ec(28,Bt,5,2,"div",5),G.Gc(29,"\n                        "),G.Rb(),G.Gc(30,"\n                        "),G.Sb(31,"mat-hint"),G.Gc(32),G.fc(33,"translate"),G.Rb(),G.Gc(34,"\n                    "),G.Rb(),G.Gc(35,"\n\n                    "),G.Nb(36,"br"),G.Gc(37,"\n                    "),G.Nb(38,"br"),G.Gc(39,"\n\n                    "),G.Sb(40,"div"),G.Gc(41,"\n                        "),G.Sb(42,"ct-file-upload",6,7),G.ac("changed",(function(){return G.uc(t),G.ec().fileUploadChanged()})),G.fc(44,"translate"),G.Gc(45,"\n                        "),G.Rb(),G.Gc(46,"\n                        "),G.Sb(47,"ct-hint"),G.Gc(48),G.fc(49,"translate"),G.Rb(),G.Gc(50,"\n                        "),G.Sb(51,"ct-hint"),G.Gc(52),G.fc(53,"translate"),G.Rb(),G.Gc(54,"\n                    "),G.Rb(),G.Gc(55,"\n                "),G.Rb(),G.Gc(56,"\n            "),G.Rb(),G.Gc(57,"\n            "),G.Sb(58,"ct-section-footer"),G.Gc(59,"\n                "),G.Sb(60,"ct-section-footer-row"),G.Gc(61,"\n                    "),G.Sb(62,"ct-flex",8),G.Gc(63,"\n                        "),G.Sb(64,"ct-flex-item"),G.Gc(65,"\n                            "),G.Sb(66,"button",9),G.ac("click",(function(){return G.uc(t),G.ec().back()})),G.Gc(67),G.fc(68,"translate"),G.Rb(),G.Gc(69,"\n                        "),G.Rb(),G.Gc(70,"\n                        "),G.Sb(71,"ct-flex-item"),G.Gc(72,"\n                            "),G.Sb(73,"button",10),G.ac("click",(function(){return G.uc(t),G.ec().upload()})),G.Gc(74),G.fc(75,"translate"),G.Rb(),G.Gc(76,"\n                        "),G.Rb(),G.Gc(77,"\n                    "),G.Rb(),G.Gc(78,"\n                "),G.Rb(),G.Gc(79,"\n            "),G.Rb(),G.Gc(80,"\n        "),G.Rb(),G.Gc(81,"\n    "),G.Rb(),G.Gc(82,"\n    "),G.Sb(83,"ct-col",2),G.Gc(84,"\n        "),G.Nb(85,"ct-rest-status",11),G.Gc(86,"\n    "),G.Rb(),G.Gc(87,"\n"),G.Rb()}if(2&t){const t=G.ec();G.Ab(11),G.Hc(G.gc(12,12,"batch-add.Upload file for processing")),G.Ab(12),G.Ic(" ",G.gc(24,14,"batch-add.List of Source Codes"),""),G.Ab(3),G.kc("ngModel",t.sourceCode),G.Ab(2),G.kc("ngForOf",t.listOfSourceCodes),G.Ab(4),G.Hc(G.gc(33,16,"batch-add.This is a required field.")),G.Ab(10),G.lc("buttonTitle",G.gc(44,18,"batch-add.Select File")),G.Ab(6),G.Hc(G.gc(49,20,"batch-add.This is a required field.")),G.Ab(4),G.Hc(G.gc(53,22,"batch-add.Only .xml and .zip files are supported")),G.Ab(15),G.Ic("\n                                ",G.gc(68,24,"batch-add.Cancel"),""),G.Ab(6),G.kc("disabled",!t.sourceCode||!t.file),G.Ab(1),G.Ic(" ",G.gc(75,26,"batch-add.Upload File"),""),G.Ab(11),G.kc("content",t.uploadResponse)}}let Dt=(()=>{class t{constructor(t,c,e,n,a){this.batchService=t,this.router=c,this.route=e,this.translate=n,this.store=a,this.currentStates=new Set,this.listOfSourceCodes=[],a.subscribe(t=>{this.translate.use(t.settings.language)})}ngOnInit(){this.updateResponse()}updateResponse(){this.batchService.batchAdd().subscribe(t=>{this.response=t,this.listOfSourceCodes=this.response.items})}back(){this.router.navigate(["../"],{relativeTo:this.route})}upload(){this.batchService.uploadFile(this.sourceCode.id.toString(),this.fileUpload.fileInput.nativeElement.files[0]).subscribe(t=>{t.status===wt.a.OK&&this.back(),this.uploadResponse=t})}fileUploadChanged(){this.file=this.fileUpload.fileInput.nativeElement.files[0]||!1}}return t.\u0275fac=function(c){return new(c||t)(G.Mb(S.a),G.Mb(s.b),G.Mb(s.a),G.Mb(b.d),G.Mb(R.b))},t.\u0275cmp=G.Gb({type:t,selectors:[["batch-add"]],viewQuery:function(t,c){var e;1&t&&G.Kc(Tt,!0),2&t&&G.rc(e=G.bc())&&(c.fileUpload=e.first)},decls:3,vars:2,consts:[[4,"ngIf"],["mode","indeterminate"],["size","6"],["appearance","outline"],[3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["acceptTypes",".zip, .xml",3,"buttonTitle","changed"],["fileUpload",""],["justify-content","flex-end","gap","8px"],["mat-stroked-button","mat-stroked-button",3,"click"],["mat-flat-button","mat-flat-button","color","primary",3,"disabled","click"],[3,"content"],[3,"value"]],template:function(t,c){1&t&&(G.Ec(0,Mt,13,0,"ct-section",0),G.Gc(1,"\n\n"),G.Ec(2,Ft,88,28,"ct-cols",0)),2&t&&(G.kc("ngIf",!c.response),G.Ab(2),G.kc("ngIf",c.response))},directives:[n.m,g.a,A.a,v.a,It.a,ft.a,kt.a,xt.a,w.a,y.a,x.a,Ct.b,Ct.f,At.a,a.k,a.n,n.l,Ct.e,yt.a,vt.a,E.a,T.a,I.a,k.a,C.b,Ot.a,Et.n],pipes:[b.c],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),t})();var jt=e("9kxi"),Ht=e("W8U/"),Pt=e("6Q+1"),Nt=e("qyGu");let Ut=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=G.Gb({type:t,selectors:[["batch-root"]],decls:8,vars:0,template:function(t,c){1&t&&(G.Sb(0,"ct-content"),G.Gc(1,"\n    "),G.Nb(2,"router-outlet"),G.Gc(3,"\n    "),G.Nb(4,"ct-back-button"),G.Gc(5,"\n    "),G.Nb(6,"copy-right"),G.Gc(7,"\n"),G.Rb())},directives:[Ht.a,s.g,Pt.a,Nt.a],styles:[""]}),t})();var zt=e("wIh8"),_t=e("2qjw");const Lt=[{path:"",component:Ut,children:[{path:"",component:ht},{path:":batchId/status",component:gt,data:{backConfig:["../","../"]}},{path:"add",component:Dt,data:{backConfig:["../"]}},{path:":batchId/source-code/:sourceCodeId/exec-context/:execContextId/state",component:(()=>{class t{constructor(t){this.route=t,this.sourceCodeId=this.route.snapshot.paramMap.get("sourceCodeId"),this.execContextId=this.route.snapshot.paramMap.get("execContextId")}}return t.\u0275fac=function(c){return new(c||t)(G.Mb(s.a))},t.\u0275cmp=G.Gb({type:t,selectors:[["batch-state"]],decls:19,vars:2,consts:[[3,"sourceCodeId","execContextId"]],template:function(t,c){1&t&&(G.Sb(0,"ct-section"),G.Gc(1,"\n    "),G.Sb(2,"ct-section-header"),G.Gc(3,"\n        "),G.Sb(4,"ct-section-header-row"),G.Gc(5,"\n            "),G.Sb(6,"ct-heading"),G.Gc(7,"State of Tasks"),G.Rb(),G.Gc(8,"\n        "),G.Rb(),G.Gc(9,"\n    "),G.Rb(),G.Gc(10,"\n    "),G.Sb(11,"ct-section-body"),G.Gc(12,"\n        "),G.Sb(13,"ct-section-body-row"),G.Gc(14,"\n            "),G.Nb(15,"ct-state-of-tasks",0),G.Gc(16,"\n        "),G.Rb(),G.Gc(17,"\n    "),G.Rb(),G.Gc(18,"\n"),G.Rb()),2&t&&(G.Ab(15),G.kc("sourceCodeId",c.sourceCodeId)("execContextId",c.execContextId))},directives:[g.a,w.a,y.a,x.a,A.a,v.a,_t.a],styles:[""]}),t})(),data:{backConfig:["../","../","../","../","../","../"]}}]}];let Qt=(()=>{class t{}return t.\u0275mod=G.Kb({type:t}),t.\u0275inj=G.Jb({factory:function(c){return new(c||t)},imports:[[s.f.forChild(Lt)],s.f]}),t})(),$t=(()=>{class t{}return t.\u0275mod=G.Kb({type:t}),t.\u0275inj=G.Jb({factory:function(c){return new(c||t)},imports:[[n.c,Qt,jt.a,i.a,a.g,a.o,zt.a,b.b.forChild({})]]}),t})()}}]);