(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ihYB:function(t,e,n){"use strict";n.r(e),n.d(e,"DispatcherRoutingModule",(function(){return x})),n.d(e,"DispatcherModule",(function(){return N}));var a=n("ofXK"),o=n("tyNb"),c=n("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["dispatcher-index"]],decls:3,vars:0,template:function(t,e){1&t&&(c.Sb(0,"p"),c.Hc(1,"dispatcher-index works!"),c.Rb(),c.Hc(2,"\n"))},styles:[""]}),t})();var s=n("q4ZW"),r=n("kt0X"),u=n("XhcP"),l=n("W8U/"),b=n("qyGu"),h=n("bTqV"),d=n("sYmb");function p(t,e){1&t&&(c.Sb(0,"button",10),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Jc(" ",c.gc(2,1,"dispatcher.SourceCodes"),""))}function v(t,e){1&t&&(c.Sb(0,"button",11),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Batch")))}function m(t,e){1&t&&(c.Sb(0,"button",12),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Experiments")))}function f(t,e){1&t&&(c.Sb(0,"button",13),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Atlas")))}function g(t,e){1&t&&(c.Sb(0,"button",14),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Variables")))}function A(t,e){1&t&&(c.Sb(0,"button",15),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Functions")))}function k(t,e){1&t&&(c.Sb(0,"button",16),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Processors")))}function R(t,e){1&t&&(c.Sb(0,"button",17),c.Hc(1),c.fc(2,"translate"),c.Rb()),2&t&&(c.Ab(1),c.Ic(c.gc(2,1,"dispatcher.Accounts")))}let L=(()=>{class t{constructor(t,e,n){this.store=t,this.authenticationService=e,this.router=n,this.store.subscribe(t=>{this.settings=t.settings,this.updateSidenavState()}),this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.roles=this.authenticationService.getUserRole()}accessSourceCodes(){return!!(this.roles.has(s.Role.Admin)||this.roles.has(s.Role.Manager)||this.roles.has(s.Role.Data))}accessBatch(){return!!(this.roles.has(s.Role.Admin)||this.roles.has(s.Role.Manager)||this.roles.has(s.Role.Operator))}accessFunctions(){return!!(this.roles.has(s.Role.Admin)||this.roles.has(s.Role.Manager)||this.roles.has(s.Role.Data))}accessGlobalVariables(){return!(!this.roles.has(s.Role.Admin)&&!this.roles.has(s.Role.Data))}accessExperiments(){return!!(this.roles.has(s.Role.Admin)||this.roles.has(s.Role.Manager)||this.roles.has(s.Role.Data))}accessAtlas(){return!(!this.roles.has(s.Role.Admin)&&!this.roles.has(s.Role.Data))}accessProcessors(){return!!this.roles.has(s.Role.Admin)}accessAccounts(){return!!this.roles.has(s.Role.Admin)}updateSidenavState(){this.sidenavOpened=!1,!0===this.settings.sidenav&&(this.sidenavOpened=!0)}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(r.b),c.Mb(s.AuthenticationService),c.Mb(o.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["dispatcher-root"]],decls:34,vars:9,consts:[["mode","side",3,"opened"],[1,"navigation"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/source-codes",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/batch",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/experiments",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/atlas/experiments",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/global-variables",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/functions",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/processors",4,"ngIf"],["class","mat-button","mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/accounts",4,"ngIf"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/source-codes",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/batch",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/experiments",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/atlas/experiments",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/global-variables",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/functions",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/processors",1,"mat-button"],["mat-button","","size","forNavigation","routerLinkActive","active","routerLink","/dispatcher/accounts",1,"mat-button"]],template:function(t,e){1&t&&(c.Sb(0,"mat-sidenav-container"),c.Hc(1,"\n    "),c.Sb(2,"mat-sidenav",0),c.Hc(3,"\n        "),c.Sb(4,"div",1),c.Hc(5,"\n            "),c.Fc(6,p,3,3,"button",2),c.Hc(7,"\n\n            "),c.Fc(8,v,3,3,"button",3),c.Hc(9,"\n            \n            "),c.Fc(10,m,3,3,"button",4),c.Hc(11,"\n            \n            "),c.Fc(12,f,3,3,"button",5),c.Hc(13,"\n            \n            "),c.Fc(14,g,3,3,"button",6),c.Hc(15,"\n\n            "),c.Fc(16,A,3,3,"button",7),c.Hc(17,"\n            \n            "),c.Fc(18,k,3,3,"button",8),c.Hc(19,"\n            \n            "),c.Fc(20,R,3,3,"button",9),c.Hc(21,"\n        "),c.Rb(),c.Hc(22,"\n    "),c.Rb(),c.Hc(23,"\n    "),c.Sb(24,"mat-sidenav-content"),c.Hc(25,"\n        "),c.Sb(26,"ct-content"),c.Hc(27,"\n            "),c.Nb(28,"router-outlet"),c.Hc(29,"\n            "),c.Nb(30,"copy-right"),c.Hc(31,"\n        "),c.Rb(),c.Hc(32,"\n    "),c.Rb(),c.Hc(33,"\n"),c.Rb()),2&t&&(c.Ab(2),c.kc("opened",e.sidenavOpened),c.Ab(4),c.kc("ngIf",e.accessSourceCodes()),c.Ab(2),c.kc("ngIf",e.accessBatch()),c.Ab(2),c.kc("ngIf",e.accessExperiments()),c.Ab(2),c.kc("ngIf",e.accessAtlas()),c.Ab(2),c.kc("ngIf",e.accessGlobalVariables()),c.Ab(2),c.kc("ngIf",e.accessFunctions()),c.Ab(2),c.kc("ngIf",e.accessProcessors()),c.Ab(2),c.kc("ngIf",e.accessAccounts()))},directives:[u.b,u.a,a.l,u.c,l.a,o.g,b.a,h.b,o.d,o.c],pipes:[d.c],styles:["mat-sidenav-content[_ngcontent-%COMP%]{overflow:hidden}mat-sidenav[_ngcontent-%COMP%]{position:fixed;top:54px}.navigation[_ngcontent-%COMP%]{width:150px;display:flex;flex-direction:column;padding:9px}.navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:9px}"]}),t})();var H=n("vCXQ"),I=n("fEFe"),S=n("9kxi"),C=n("wIh8");const M=[{path:"",canActivate:[I.a],component:L,children:[{path:"",component:i}]},{path:"source-codes",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"wCdv")).then(t=>t.SourceCodeModule),data:{section:"source-codes"}},{path:"experiments",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(2),n.e(7)]).then(n.bind(null,"CNBl")).then(t=>t.ExperimentsModule),data:{section:"experiments"}},{path:"global-variables",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"BQRg")).then(t=>t.GlobalVariablesModule),data:{section:"global-variables"}},{path:"functions",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"1YC9")).then(t=>t.FunctionsModule)},{path:"processors",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"6lBk")).then(t=>t.ProcessorsModule),data:{section:"processors"}},{path:"accounts",canActivate:[I.a],component:L,loadChildren:()=>n.e(8).then(n.bind(null,"I89L")).then(t=>t.AccountsModule),data:{section:"accounts"}},{path:"batch",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"gFOi")).then(t=>t.BatchModule),data:{section:"batch"}},{path:"atlas",canActivate:[I.a],component:L,loadChildren:()=>Promise.all([n.e(2),n.e(0),n.e(9)]).then(n.bind(null,"6j+O")).then(t=>t.AtlasModule),data:{section:"atlas"}}];let x=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(M)],o.f]}),t})(),N=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[a.c,x,S.a,C.a,H.a,d.b.forChild({})]]}),t})()}}]);