"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[26998],{78579:(e,a,o)=>{o.d(a,{A:()=>t});const t=o(24584).v},99511:(e,a,o)=>{o.d(a,{A:()=>t});const t=o(78579).A},78397:(e,a,o)=>{o.r(a),o.d(a,{default:()=>B});var t=o(73620),n=o(89379),s=(o(23792),o(62953),o(96540)),l=o(51037),i=o(3959),r=o(46942),d=o.n(r),c=o(81762),m=o(35122),u=o(800),E=o(22700),_=o(99511),A=o(81821),f=o(65346),g=o(76147),C=o(66146),S=o(44396),p=o(31018),L=o(33893);const{DEPRECATED_MSG_LOADED:b,DEPRECATED_MSG_REDIRECT:D,DEPRECATED_MSG_NAVIGATE:T,DEPRECATED_MSG_CLOSE:M,DEPRECATED_MSG_SNACKBAR:R,MSG_LOADED:v,MSG_CLOSE:I,MSG_CLOSABLE:k,MSG_SNACKBAR:w,MSG_NAVIGATE:h,MSG_REDIRECT:O,MSG_ASK_SELLER:G,MSG_SCROLL_TO_ELEMENT:N}=f.m,y=e=>{let{id:a,src:o,isRedirectFlow:r,title:f,show:y,renderMode:B,noScrolling:U,fallbackConfig:V,statsdConfig:F,isDismissible:K,showSnackbar:P,onDemandIframeClose:W,onDemandIframeUpdate:x,updateComponentsBottomSheet:q,onCloseVariations:$,onCreateQuestionFromAi:H,showVariationsError:Y,sequencerTrack:Q,customNamespace:j,noCloseButton:z}=e;const J=(0,s.useRef)(null),X=(0,s.useRef)(null),Z=(0,s.useRef)(null),[ee,ae]=(0,s.useState)(!1),[oe,te]=(0,s.useState)(null),[ne,se]=(0,s.useState)(null),{fallbackUrl:le,fallbackMessage:ie,timeoutInitialLoad:re,timeoutWebviewMessage:de}=V||{},{deviceType:ce}=(0,s.useContext)(L.Ay),me=d()("on-demand-iframe",{"on-demand-iframe--desktop":"desktop"===ce,"on-demand-iframe--mobile":"mobile"===ce,"on-demand-iframe--mobile__container":"mobile"===ce&&B===p.M8.CONTAINER,"on-demand-iframe--mobile__fullscreen":"mobile"===ce&&B===p.M8.FULLSCREEN,"on-demand-iframe--no__close__button":z,[`on-demand-iframe--${j}`]:j}),ue=e=>{let{message:a,additionalTags:o={},additionalInfo:t,shouldLogMessage:s}=e;(0,S.b)({key:g.O.SHOW_SNACKBAR,additionalTags:(0,n.A)({snackbar_type:"error"},o),additionalInfo:t,shouldLogMessage:s,statsdConfig:F}),P&&P({message:a,type:"error"})},Ee=e=>{let{url:a,target:o,newIsDismissible:t,newFallbackConfig:n,newRenderMode:s,noLoadedCheck:l}=e;if(a&&(0,A.A)({target:a,currentLocation:window.location})){if("parent"===o&&(window.location.href=a),"modal"===o&&x){l||ae(!1),te(null);const e={src:`${a}${a&&(0,E.b)(a,"?")?"&":"?"}navhash=${Date.now().toString().slice(-5)}`,isRedirectFlow:!0,fallbackConfig:l?null:n,isDismissible:t};s&&(e.renderMode=s),Q&&(0,u.sx)((0,p.LU)(Q,p.Y8.NAVIGATE_LOADING)),(0,S.b)({key:g.O.WEBVIEW_REDIRECT,statsdConfig:F}),x(e)}}else ue({additionalTags:{reason:C.n7.INVALID_REDIRECT_URL},additionalInfo:{url:a,target:o},shouldLogMessage:!0})},_e=()=>{$&&$(),W&&W(),oe&&((0,u.sx)(oe),te(null))},Ae=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{trackData:a=null,refreshCartIcon:o=!1,shouldUpdateComponents:t=!1,disableClose:s=!1,titleModal:l=null}=e;var i;clearTimeout(J.current),se(l),ae(!0),s&&x({isDismissible:!1}),a&&te({melidata_event:(0,n.A)({},a)}),Q&&(0,u.sx)((0,p.LU)(Q,X.current?p.Y8.NAVIGATE_LOADED:p.Y8.LOADED)),(0,S.b)({key:g.O.FLOW_END,additionalTags:{end_case:X.current?`${Z.current}_redirect`:Z.current},statsdConfig:F}),o&&(null===(i=m.A.freya)||void 0===i||i.emit("cart:refresh")),t&&q&&q()},fe=e=>{var a;if(y&&(null!=e&&null!==(a=e.data)&&void 0!==a&&a.type))switch(e.data.type){case b:case v:Ae(e.data.data);break;case M:case I:_e();break;case k:x({isDismissible:e.data.enabled});break;case R:case w:!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{snackbar:a,close:o}=e;if(a&&P){const{message:e,type:t,delay:n,called_from:s,action:l}=a;o&&_e(),l&&(l.onClick=()=>Ee({url:l.redirectUrl,target:"parent"})),P({message:e,type:t,delay:n,called_from:s,action:l})}}(e.data);break;case T:case h:!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{url:a,fallback:o,fallback_message:t,timeout:s,timeout_webview_message:l,no_loaded_check:i,is_dismissible:r,render_mode:d}=e;Ee({url:a,target:"modal",newRenderMode:d,newFallbackConfig:(0,n.A)((0,n.A)({},V),{},{fallbackUrl:o,fallbackMessage:t,timeoutInitialLoad:s,timeoutWebviewMessage:l}),noLoadedCheck:i,newIsDismissible:r})}(e.data);break;case D:case O:Ee({url:e.data.url,target:"parent"});break;case G:!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{itemId:a,question:o,snackbar_message:t,track:n}=e;o&&a&&H&&(_e(),H({itemId:a,text:o,snackbar_message:t,suggestionTrack:n,source:"webview"}))}(e.data);break;case N:!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{selector:a,shouldRaiseErrors:o,actionKey:t}=e;if(a){const e=document.querySelector(a);_e(),e.scrollIntoView({behavior:"smooth",block:"start"}),o&&Y(ce,t)}}(e.data)}};return(0,s.useEffect)((()=>{o&&V&&(J.current=setTimeout((()=>{Q&&(0,u.sx)((0,p.LU)(Q)),le&&(0,A.A)({target:le,currentLocation:window.location})?((0,S.b)({key:g.O.REDIRECT_TO_FALLBACK,additionalTags:{reason:C.n7.TIMEOUT_INITIAL_LOAD,flow_redirect:Boolean(X.current)},statsdConfig:F}),window.location.href=le):(ue({message:null==ie?void 0:ie.message,additionalTags:{reason:C.n7.TIMEOUT_INITIAL_LOAD,flow_redirect:Boolean(X.current)}}),_e())}),re||1e4))}),[o]),(0,s.useEffect)((()=>{var e,a;(y||ae(!1),$&&y)&&(null===(e=document.querySelector(".ui-pdp-backdrop-modal"))||void 0===e||e.setAttribute("style","height:0px"),null===(a=document.querySelectorAll(".andes-modal__overlay")[0])||void 0===a||a.setAttribute("style","height:0px"));return m.A.addEventListener("message",fe),()=>{m.A.removeEventListener("message",fe),clearTimeout(J.current)}}),[y]),(0,s.useEffect)((()=>{Z.current=B===p.M8.CONTAINER?"bottom_sheet":"landing",X.current=Boolean(r)}),[B,r]),(0,t.A)(l.a,{open:y,id:a,onClose:_e,type:B===p.M8.FULLSCREEN?"full":"mobile"===ce?"card":"large",title:ne?(0,t.A)(i.s6,{},void 0,ne):f||" ",className:me,closable:ee&&!1!==K},void 0,(0,t.A)(_.A,{title:"iframe","data-testid":"iframe-element",src:o,showSpinner:!0,scrolling:U?"no":"auto",forceSpinner:!ee,spinnerClassname:"center-spinner",onLoad:()=>{clearTimeout(J.current),V&&(J.current=setTimeout((()=>{Q&&(0,u.sx)((0,p.LU)(Q)),le&&(0,A.A)({target:le,currentLocation:window.location})?((0,S.b)({key:g.O.REDIRECT_TO_FALLBACK,additionalTags:{reason:C.n7.TIMEOUT_WEBVIEW_MESSAGE,flow_redirect:Boolean(X.current)},statsdConfig:F}),window.location.href=le):(ue({message:null==ie?void 0:ie.message,additionalTags:{reason:C.n7.TIMEOUT_WEBVIEW_MESSAGE,flow_redirect:Boolean(X.current)}}),_e())}),de||5e3))},onMessage:B===p.M8.FULLSCREEN?()=>{}:(0,c.A)("vpp:on-demand-iframe:resize","height",".ui-pdp-iframe-modal",".andes-modal__header")}))};y.defaultProps={id:"",title:"",renderMode:p.M8.CONTAINER,show:!1,fallbackConfig:null,statsdConfig:null,isDismissible:!0,updateComponentsBottomSheet:null,onCloseVariations:null,onCreateQuestionFromAi:null,showSnackbar:null,showVariationsError:null,noScrolling:!1,noCloseButton:!1};const B=y},65346:(e,a,o)=>{o.d(a,{m:()=>t});const t={DEPRECATED_MSG_LOADED:"vpp:iframe-modal:loaded",DEPRECATED_MSG_CLOSE:"vpp:iframe-modal:close",DEPRECATED_MSG_SNACKBAR:"vpp:iframe-modal:snackbar",DEPRECATED_MSG_NAVIGATE:"vpp:iframe-modal:navigate",DEPRECATED_MSG_REDIRECT:"vpp:iframe-modal:redirect",MSG_LOADED:"vpp:on-demand-iframe:loaded",MSG_CLOSE:"vpp:on-demand-iframe:close",MSG_CLOSABLE:"vpp:on-demand-iframe:closable",MSG_SNACKBAR:"vpp:on-demand-iframe:snackbar",MSG_NAVIGATE:"vpp:on-demand-iframe:navigate",MSG_REDIRECT:"vpp:on-demand-iframe:redirect",MSG_ASK_SELLER:"vpp:on-demand-iframe:ask-seller",MSG_SCROLL_TO_ELEMENT:"vpp:on-demand-iframe:scroll-to-element"}},35122:(e,a,o)=>{o.d(a,{A:()=>t});const t="object"==typeof window?window:o.g},81762:(e,a,o)=>{o.d(a,{A:()=>t});const t=o(20551).VW},81821:(e,a,o)=>{o.d(a,{A:()=>t});const t=o(20551).Dp}}]);
//# sourceMappingURL=components-on-demand-iframe.d932d6af.js.map