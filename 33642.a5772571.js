"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[33642],{82235:(e,a,t)=>{t.d(a,{Ay:()=>j,RP:()=>Z,lZ:()=>k,ms:()=>j,tJ:()=>$});var l=t(58168),n=t(96540),r=t(73620),o=t(80045),i=t(89379),s=t(46942),c=t.n(s),d=t(33540),u=t(91628),p=t(88460),m=t(39157),f=t(27700),h=t(39830),v=t(59058);const g="error",b="standalone",y="large",A="andes-dropdown",_="".concat(A,"__trigger"),C="andes-form-control",N="".concat("andes-list","__item");var w=e=>{let{centeredMenu:a,mainContainerRef:t}=e;if(!a)return{offset:void 0,calculated:!0};const l=t.current,n=null==l?void 0:l.querySelector("ul"),r=null==l?void 0:l.querySelector(".andes-card"),o=null==l?void 0:l.querySelector(".".concat(_));if(n&&o){const e=(e=>{const a=Array.prototype.slice.call(e.querySelectorAll(".".concat(N)));if(a.length){let e=a.find((e=>0===e.tabIndex));return e||(e=a.find((e=>-1!==e.className.indexOf(".".concat(N,"--selected"))))),e||([e]=a),e}return null})(n);if(e){return{offset:-e.offsetHeight-(e.offsetTop-r.scrollTop)-2,calculated:!0}}}return{offset:void 0,calculated:!1}};const V="DropdownItem",S="DropdownGroup";var E=e=>{var a;let{children:t}=e;const l=Array.isArray(t)?t[0]:t,r=null==l||null===(a=l.type)||void 0===a?void 0:a.displayName,o={},i=e=>{const{value:a,primary:t,title:l}=e.props;(0,p.A)(!o[a],"value {0} already exists.\nPlease, use a different value for each <DropdownItem>".replace("{0}",a)),o[a]=l||t};return r===V&&n.Children.forEach(t,i),r===S&&n.Children.forEach(t,(e=>{n.Children.forEach(e.props.children,i)})),o};var T=e=>{let a,{values:t,multiple:l,itemsPrimaryReference:n}=e;return void 0===t||(a=Array.isArray(t)?t.map((e=>n[e])):n[t],a&&l&&!Array.isArray(a)&&(a=[a])),a};const R=["aria-label","aria-labelledby","children","defaultValue","disabled","helper","label","menuAlignment","modifier","multiple","onChange","onClose","onOpen","open","placeholder","primary","searchConfig","srLabel","value"];var L,M=(e,a)=>{let{"aria-label":t,"aria-labelledby":l,children:r,defaultValue:s,disabled:c,helper:d,label:p,menuAlignment:m,modifier:f,multiple:h,onChange:v,onClose:g,onOpen:b,open:y,placeholder:A,primary:_,searchConfig:C,srLabel:N,value:V}=a,S=(0,o.A)(a,R);const L=(0,n.useMemo)((()=>void 0===V),[]),M=(0,n.useMemo)((()=>void 0===y),[]),O=(0,n.useMemo)((()=>!h&&!C&&"center"===m),[m,h,C]),x=(0,n.useMemo)((()=>r?E({children:r}):{}),[r]),{device:P}=(0,n.useContext)(u.Ri),B=null==P?void 0:P.mobile,[D,z]=(0,n.useState)(V||s),[k,I]=(0,n.useState)(T({values:D,multiple:h,itemsPrimaryReference:x})),[U,K]=(0,n.useState)(!1),q=O?0:6,[H,j]=(0,n.useState)(q),[W,Y]=(0,n.useState)(!1),[$,G]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{L||(z(V),I(T({values:V,multiple:h,itemsPrimaryReference:x})))}),[V]),(0,n.useEffect)((()=>{M||(y?(K(!0),setTimeout((()=>{const{offset:a,calculated:t}=w({centeredMenu:O,mainContainerRef:e});j(a),Y(t)}),0)):(K(!1),O&&(j(0),Y(!1))))}),[y,M,O,e]);const Q=(0,i.A)((0,i.A)({},S),{},{menuOffsetCalculated:W,menuOffsetY:H,onChange:(e,a)=>{L&&(z(a),I(T({values:a,multiple:h,itemsPrimaryReference:x}))),"function"==typeof v&&(e.target.value=a,v(e,a))},onClose:()=>{M&&(K(!1),O&&(j(0),Y(!1))),"function"==typeof g&&g()},onOpen:a=>{M&&(K(!0),setTimeout((()=>{const{offset:a,calculated:t}=w({centeredMenu:O,mainContainerRef:e});j(a),Y(t)}),0)),"function"==typeof b&&b(a)},popperOptions:(()=>{if("center"===m||B&&C){return{modifiers:[{name:"flip",options:{fallbackPlacements:B&&C?["top","bottom"]:[]}}]}}return{}})(),onMount:e=>{var a;return G(null===(a=e.popperInstance)||void 0===a||null===(a=a.state)||void 0===a?void 0:a.placement)},placement:$||"bottom"});return{currentDisplayValues:k,currentValues:Array.isArray(D)?D:"string"==typeof D&&D||"number"==typeof D?[D]:[],isMenuVisible:U,menuProps:Q}};var O=e=>{let{namespace:a}=e;return(0,r.A)("div",{className:"".concat(a,"__standalone-arrow"),"aria-hidden":!0},void 0,L||(L=(0,r.A)(m.A,{})))};var x=e=>{let{search:a,defaultSearchValue:t,searchPlaceholder:l,onSearchChange:n,filterCondition:r}=e;if(!a)return;if("boolean"==typeof a)return{defaultValue:t,placeholder:l,onChange:n,filterCondition:r,search:!0};const{defaultValue:o,placeholder:i,onChange:s,filterCondition:c}=a;return{defaultValue:o||t,placeholder:i||l,onChange:s||n,filterCondition:c||r,search:!0}};var P=e=>{let{defaultValueProp:a,valueProp:t}=e;const l="number"==typeof a?String(a):a;return{value:"number"==typeof t?String(t):t,defaultValue:l}};var B,D=e=>{switch(e){case"compact":return"small";case"default":return y;default:return e}};const z=["menuOffsetCalculated","menuOffsetY"];var k=(0,n.forwardRef)(((e,a)=>{const{"aria-label":t,allowUnselect:s=!1,children:p,className:m,closable:f,defaultOpen:h,defaultSearchValue:v,defaultValue:g,disabled:b=!1,filterCondition:N,id:w,label:V="",menuAlignment:S="center",menuMaxHeight:E,multiple:T=!1,onSearchChange:R,open:L,primary:k,search:I=!1,searchPlaceholder:U,size:K=y,srLabel:q,value:H,renderCustomTrigger:j}=e,W=(0,u.Bi)(w),Y=(0,n.useRef)(null),$=a||Y,G=x({search:I,defaultSearchValue:v,onSearchChange:R,searchPlaceholder:U,filterCondition:N}),{value:Q,defaultValue:Z}=P({valueProp:H,defaultValueProp:g}),F=D(K),J={disabled:b,menuAlignment:S,multiple:T,search:I,size:K},{menuProps:X,isMenuVisible:ee,currentDisplayValues:ae,currentValues:te}=M($,(0,i.A)((0,i.A)((0,i.A)({},e),J),{},{id:W,searchConfig:G,value:Q,defaultValue:Z})),le=e=>{let a="";return"string"==typeof ae?a=ae:Array.isArray(ae)&&1===ae.length&&([a]=ae),"function"==typeof j&&(a=j(ae,te)),"function"==typeof e&&e(a),a},[ne,re]=(0,n.useState)(le());(0,n.useEffect)((()=>{le(re)}),[ae]),(0,n.useEffect)((()=>{k&&re(k)}),[k]);const oe=c()(A,"".concat(A,"--standalone"),m,{["".concat(A,"--open")]:ee,["".concat(A,"--").concat(F)]:F,["".concat(C,"--disabled")]:b}),{menuOffsetCalculated:ie,menuOffsetY:se}=X,ce=(0,o.A)(X,z),de=(0,r.A)("button",{"aria-label":t||q,"aria-labelledby":t||q?void 0:"".concat(W,"-label ").concat(W,"-display-values"),className:_,disabled:b,type:"button",id:"".concat(W,"-trigger")},void 0,V&&(0,r.A)("span",{className:"".concat(ne?"andes-visually-hidden":"".concat(A,"__display-values")),id:"".concat(W,"-label")},void 0,V),ne&&(0,r.A)("span",{className:"".concat(A,"__display-values"),id:"".concat(W,"-display-values")},void 0,ne),B||(B=(0,r.A)(O,{namespace:A})));return n.createElement("div",{id:X.id,className:oe,ref:$},n.createElement(d.yQ,(0,l.A)({},ce,(()=>{const e=$.current,a=null==e?void 0:e.getElementsByClassName(_)[0];if(a)return{width:"auto",minWidth:a.clientWidth+9}})(),{search:G,srLabel:q||V||t,allowUnselect:s,className:ie?"andes-floating-menu--show":"",closable:f,defaultOpen:h,defaultValue:Z,id:"".concat(X.id,"-menu"),menuMaxHeight:E,multiple:T,offset:[-9,se],open:L,placement:"bottom-start",trigger:de,type:"select",value:Q}),p))}));var I=e=>{let{currentDisplayValues:a=[],currentValues:t=[],disabled:l=!1,namespace:o="",containerRef:i,id:s,onSelectionChange:c}=e;const d=Array.isArray(a)&&a.length>0,u=(0,n.useRef)(!1),[p,m]=(0,n.useState)(1e3);return(0,n.useEffect)((()=>{d&&(()=>{var e;const t=null==i||null===(e=i.current)||void 0===e?void 0:e.offsetWidth;let l=0;a.forEach(((e,a)=>{const n=8*(null==e?void 0:e.toString().length)+30;l+n+100>t?u.current||(m(a),u.current=!0):(m(1e3),u.current=!1),l+=n}))})()}),[a]),d?(0,r.A)("div",{className:"".concat(o,"__display-container"),id:"".concat(s,"-display-values")},void 0,(0,r.A)(v.uC,{limit:p,disabled:l,id:"".concat(s,"-dropdown-tag-content")},void 0,a.map(((e,a)=>(0,r.A)(v.vw,{id:"".concat(s,"-tag-").concat(a),className:"".concat(o,"__display-values"),component:"div",size:"small",disabled:l,label:e,onClose:l?void 0:e=>c(e,t.filter(((e,t)=>t!==a))),onClick:e=>e.stopPropagation()},"".concat(e,"_").concat(a)))))):null};const U=["menuOffsetCalculated","menuOffsetY"];var K,q;var H=(0,n.forwardRef)(((e,a)=>{const{"aria-label":t,allowUnselect:s=!1,children:p,className:m,defaultOpen:v=!1,defaultSearchValue:b,defaultValue:y,disabled:N=!1,filterCondition:w,id:V,label:S="",menuAlignment:E="center",menuMaxHeight:T,modifier:R,multiple:L=!1,onSearchChange:O,open:B,placeholder:D="",primary:z,renderCustomTrigger:k,search:H=!1,searchPlaceholder:j,srLabel:W,value:Y}=e,$=(0,u.Bi)(V),G=(0,n.useRef)(null),Q=a||G,Z=x({search:H,defaultSearchValue:b,onSearchChange:O,searchPlaceholder:j,filterCondition:w}),{value:F,defaultValue:J}=P({valueProp:Y,defaultValueProp:y}),X={disabled:N,multiple:L,menuAlignment:E,search:H},{menuProps:ee,isMenuVisible:ae,currentDisplayValues:te,currentValues:le}=M(Q,(0,i.A)((0,i.A)((0,i.A)({},e),X),{},{id:$,searchConfig:Z,value:F,defaultValue:J})),ne=Array.isArray(te)&&te.length>0,re=e=>{let a=null;return!Array.isArray(te)&&te?a=(0,r.A)("span",{className:"".concat(A,"__display-values"),id:"".concat($,"-display-values")},void 0,te):ne?a=(0,r.A)("span",{className:"".concat(A,"__display-values"),id:"".concat($,"-display-values")},void 0,[te.join()]):(D||z)&&(a=(0,r.A)("span",{className:"".concat(C,"__placeholder"),id:"".concat($,"-display-values")},void 0,D||z)),"function"==typeof k&&(a=k(te,le)),"function"==typeof e&&e(a),a},oe=e=>{const a=(0,r.A)(I,{currentDisplayValues:te,currentValues:le,disabled:N,namespace:A,containerRef:Q,onSelectionChange:ee.onChange,id:$});return"function"==typeof e&&e(a),a},[ie,se]=(0,n.useState)(re()),[ce,de]=(0,n.useState)(oe());(0,n.useEffect)((()=>{L&&ne||re(se),L&&oe(de)}),[te,N]),(0,n.useEffect)((()=>{z&&se((0,r.A)("span",{className:"".concat(A,"__display-values"),id:"".concat($,"-display-values")},void 0,z))}),[$,z]);const ue=()=>{const{helper:a}=e;return a&&!N?(0,r.A)("span",{className:"".concat(C,"__message"),id:"".concat($,"-helper")},void 0,R===g&&(0,r.A)("span",{className:"".concat(A,"__error-icon"),"aria-hidden":!0,"data-testid":"error-feedback"},void 0,K||(K=(0,r.A)(h.A,{color:"white"}))),a):null},pe=c()(A,"".concat(A,"--form"),C,m,{["".concat(A,"--open")]:ae,["".concat(A,"--multiple")]:L,["".concat(A,"--bottom")]:"bottom"===E||H,["".concat(C,"--error")]:R===g,["".concat(C,"--disabled")]:N}),me=(0,r.A)("button",{"aria-label":t||W,"aria-labelledby":t||W?void 0:"".concat($,"-label ").concat($,"-display-values"),"aria-describedby":ue()?"".concat($,"-helper"):void 0,"aria-invalid":R===g,className:_,disabled:N,type:"button",id:"".concat($,"-trigger")},void 0,(!L||!ne)&&ie,(0,r.A)("div",{className:"".concat(A,"__chevron"),"aria-hidden":!0},void 0,q||(q=(0,r.A)(f.A,{})))),{menuOffsetCalculated:fe,menuOffsetY:he}=ee,ve=(0,o.A)(ee,U);return n.createElement("div",{className:pe,ref:Q,id:ee.id},S&&(0,r.A)("span",{id:"".concat($,"-label"),className:"".concat(C,"__label"),"aria-hidden":!0},void 0,S),n.createElement(d.yQ,(0,l.A)({},ve,(()=>{const e=Q.current,a=null==e?void 0:e.getElementsByClassName(_)[0];if(a)return{width:a.clientWidth+8}})(),{search:Z,srLabel:W||S||t,allowUnselect:s,className:fe?"".concat("andes-floating-menu","--show"):"",defaultOpen:v,defaultValue:J,id:"".concat(ee.id,"-menu"),menuMaxHeight:T,multiple:L,offset:[0,he],open:B,trigger:me,type:"select",value:L?le:F}),p),L&&ce,ue())}));var j=function(){const e=n.forwardRef(((e,a)=>{const{multiple:t,type:r=b}=e;return r!==b||t?n.createElement(H,(0,l.A)({},e,{ref:a})):n.createElement(k,(0,l.A)({},e,{ref:a}))}));return e.displayName="Dropdown",e}();const W=e=>{let{selected:a=!1,disabled:t=!1,primary:l,value:n,title:o}=e;return(0,r.A)("option",{selected:a||void 0,disabled:t,value:n},void 0,o||l)};W.displayName="DropdownNativeItem";var Y=W;var $=function(){const e=e=>{const{type:a,title:t,description:r,rightContent:o,primary:i,secondary:s,tertiary:c}=e;return"native"===a?n.createElement(Y,e):n.createElement(d.Bv,(0,l.A)({},e,{title:t||i,description:r||s,rightContent:o||c}))};return e.displayName=V,e}();const G=/^((3297|4829|5407)3|18904|3770|4718)$/.test(t.j)?null:["children"],Q=/^((3297|4829|5407)3|18904|3770|4718)$/.test(t.j)?null:function(){const e=e=>{let{children:a}=e,t=(0,o.A)(e,G);return n.createElement(d.x5,t,a)};return e.displayName=S,e}();var Z=/^((3297|4829|5407)3|18904|3770|4718)$/.test(t.j)?null:Q},27700:(e,a,t)=>{t.d(a,{A:()=>n});var l=t(67627);t(96540);const n=e=>{let{color:a,i18n:t,srLabel:n}=e;return(0,l._)("svg",{"aria-hidden":n?void 0:!n,"aria-label":n||void 0,role:n?"img":void 0,width:"20",height:"20",viewBox:"0 0 20 20",fill:a},void 0,n&&(0,l._)("title",{},void 0,n),(0,l._)("path",{d:"M5.2018 6.75609L9.99743 11.5517L14.7981 6.7511L15.6466 7.59963L9.99743 13.2488L4.35327 7.60462L5.2018 6.75609Z",fill:a}))};n.defaultProps={color:"rgba(0, 0, 0, 0.9)",srLabel:void 0}},40896:(e,a,t)=>{t.d(a,{A:()=>o});var l=t(96540);if(!/^((3297|4829|5407)3|18904|3770|4718)$/.test(t.j))var n=t(88460);const r=e=>{let{label:a,children:t}=e;return a&&l.Children.count(t)>0},o=function*(e){const{children:a,label:t,"aria-label":o}=e,i=t||a,s=("string"==typeof i?i:"")||o||"";(0,n.A)(s,"<ListGroup> needs some plain text contents for accessibility reasons. Please add a `label` or `aria-label` prop."),yield{type:"section",props:e,rendered:i,textValue:s,"aria-label":o||t,hasChildNodes:r,*childNodes(){if(t){const e=[];l.Children.forEach(a,(a=>{e.push({type:"item",element:a})})),yield*e}}}}},59058:(e,a,t)=>{t.d(a,{Ay:()=>S,uC:()=>L,vw:()=>S});var l=t(58168),n=t(73620),r=t(96540),o=t(46942),i=t.n(o),s=t(91628),c=t(3959),d=t(80045),u=t(64467),p=t(81023),m=t(33734);const f="1",h="12",v="16";var g=e=>{let{namespace:a,size:t,opacity:l=f}=e;return(0,n.A)("svg",{className:"".concat(a,"__close-icon ").concat(a,"__svg-fill"),width:t,height:t,viewBox:"0 0 16 16"},void 0,(0,n.A)("path",{transform:"translate(3 3)",fillOpacity:l,d:"M8.594.552l.855.842L5.87 5.022 9.45 8.6l-.849.848-3.572-3.572-3.521 3.572-.855-.842L4.18 5.028.552 1.4l.849-.848 3.621 3.62L8.594.553z"}))};var b=e=>{let{namespace:a,size:t,opacity:l=f}=e;return(0,n.A)("svg",{width:t,height:t,viewBox:"0 0 16 16"},void 0,(0,n.A)("path",{className:"".concat(a,"__svg-fill"),fillRule:"nonzero",fillOpacity:l,d:"M6.788 9.396l4.577-4.577 1.028 1.029-5.605 5.605-3.181-3.181 1.028-1.029z"}))},y={module:"@andes/tag",locale:"en-US",translations:{"andes-tagquitar {0}":[null,"remove {0}"],"andes-tagerror":[null,"error"],"andes-tagdeshabilitado":[null,"disabled"],"andes-tagmostrar {0} mas":[null,"show {0} more"]}},A={module:"@andes/tag",locale:"es-AR",translations:{"andes-tagquitar {0}":[null,"quitar {0}"],"andes-tagerror":[null,"error"],"andes-tagdeshabilitado":[null,"deshabilitado"],"andes-tagmostrar {0} mas":[null,"mostrar {0} más"]}},_={module:"@andes/tag",locale:"pt-BR",translations:{"andes-tagquitar {0}":[null,"tirar {0}"],"andes-tagerror":[null,"erro"],"andes-tagdeshabilitado":[null,"desativado"],"andes-tagmostrar {0} mas":[null,"mostrar mais {0}"]}};const C="andes-tag",N="".concat(C,"-collapsed");var w=e=>{switch(e){case"default":return;case"error":return"red";case"warning":return"orange";case"success":return"green";default:return e}};var V=e=>{let{asset:a,label:t}=e;const[l,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),[d,u]=(0,r.useState)(!1);if(!a)return null;const p=a.imageUrl&&!l,m=p?i()("".concat(C,"__avatar-image"),{["".concat(C,"__avatar-image--landscape")]:s,["".concat(C,"__avatar-image--loaded")]:d}):void 0;return(0,n.A)("div",{className:"".concat(C,"__avatar")},void 0,p&&(0,n.A)("img",{onError:()=>{o(!0)},className:m,onLoad:e=>{const{naturalWidth:a,naturalHeight:t}=e.target;c(a>t),u(!0)},src:a.imageUrl,alt:t}),!p&&a.icon&&(0,n.A)("div",{"aria-hidden":!0,className:"".concat(C,"__avatar-icon-container")},void 0,a.icon),!p&&!a.icon&&a.text&&(0,n.A)("div",{className:"".concat(C,"__avatar-text-container")},void 0,a.text))};var S=function(){const e=(0,r.forwardRef)(((e,a)=>{var t;let{asset:o,avatar:d,children:u,className:p,clickable:m=!1,closeButtonLabel:N,closeButtonSrLabel:S,color:E,component:T,disabled:R=!1,error:L,id:M,label:O,onClick:x,onClose:P,selected:B,size:D="large",srLabel:z}=e;const k=(0,s.Bi)(M),I=(0,s.UO)(s.Ri,y,A,_),U=o||d,K=w(E),q=e=>{e.stopPropagation(),R||"function"!=typeof P||P(e)},H=()=>R?"0.25":K?f:"0.45",j=i()(C,p,{["".concat(C,"--").concat(D)]:D,["".concat(C,"__color--").concat(K)]:K,["".concat(C,"--disabled")]:R,["".concat(C,"--clickable")]:("function"==typeof x||m)&&!R,["".concat(C,"--selected")]:B}),W=()=>L&&(0,n.A)(c.s6,{},void 0,I.pgettext(C,"error"),":"),Y=()=>R&&(0,n.A)(c.s6,{},void 0,I.pgettext(C,"deshabilitado"),":"),$=()=>z&&(t||(t=(0,n.A)(c.s6,{},void 0,z))),G=u?(0,n.A)("div",{className:"".concat(C,"__child")},void 0,W(),Y(),$(),u):(0,n.A)("div",{className:"".concat(C,"__label")},void 0,W(),Y(),$(),O);let Q,Z;return"function"!=typeof x||R?(Q={className:j},Z=T||"div"):(Q={className:j,onClick:x,type:"button","aria-pressed":!!B},Z=T||"button"),r.createElement(Z,(0,l.A)({},Q,{ref:a,id:k}),r.createElement(r.Fragment,null,U&&"large"===D&&(0,n.A)(V,{asset:U,label:O}),G,B&&(0,n.A)("span",{"aria-hidden":!0,className:"".concat(C,"__icon-container")},void 0,(0,n.A)(b,{namespace:C,size:"large"===D?v:h,opacity:H()})),"function"==typeof P&&(0,n.A)("button",{type:"button",className:"".concat(C,"__close"),onClick:q,disabled:R,"aria-label":S||N||I.pgettext(C,"quitar {0}",O)},void 0,(0,n.A)("span",{"aria-hidden":!0,className:"".concat(C,"__icon-container")},void 0,(0,n.A)(g,{namespace:C,size:"large"===D?v:h,opacity:H()})))))}));return e.displayName="Tag",e}();class E extends r.Component{constructor(e){super(e),(0,u.A)(this,"getKeyByIndex",(e=>{const{id:a}=this.props;return"".concat(a,"-item-").concat(e)})),this.state={moreTagsVisible:!1},this.buttonRef=r.createRef(),this.showMoreTags=this.showMoreTags.bind(this),this.hideMoreTags=this.hideMoreTags.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}getVisibleTags(e){const{limit:a=2}=this.props;return e.slice(0,a)}getEllipseTag(e){var a;const{limit:t=2,disabled:l=!1,i18n:o}=this.props,{moreTagsVisible:s}=this.state,c=(null===(a=e[0])||void 0===a||null===(a=a.props)||void 0===a?void 0:a.size)||"large",d="+".concat(e.length-t),u=i()(C,"".concat(C,"--").concat(c),{["".concat(C,"--selectable")]:!l,["".concat(C,"--clickable")]:!l,["".concat(C,"--disabled")]:l}),p=i()("".concat(N,"__wrap"),"".concat(N,"__list-item"));return(0,n.A)("li",{className:p,onKeyDown:this.onKeyDown},void 0,(0,n.A)(m.N,{interactive:!0,placement:"bottom-start",trigger:"click",visible:s,popperOptions:{modifiers:[{name:"offset",options:{offset:[0,6]}}]},onClickOutside:this.hideMoreTags,zIndex:1e4,content:(0,n.A)("div",{className:"".concat(N,"__more"),role:"dialog",onBlur:this.onBlur},void 0,(0,n.A)("ul",{className:"".concat(N,"__list")},void 0,e.slice(t).map(((e,a)=>(0,n.A)("li",{className:"".concat(N,"__list-item")},this.getKeyByIndex(a),e))))),focusScope:!0},void 0,r.createElement("button",{onClick:s?this.hideMoreTags:this.showMoreTags,"aria-haspopup":"dialog","aria-expanded":s,"aria-label":o.pgettext(C,"mostrar {0} mas",e.length-t),className:u,ref:this.buttonRef,disabled:l,type:"button"},(0,n.A)("span",{className:"".concat(C,"__label")},void 0,d))))}showMoreTags(){const{disabled:e=!1}=this.props;e||this.setState({moreTagsVisible:!0})}hideMoreTags(){this.setState({moreTagsVisible:!1})}focusInCurrentTarget(e){const{relatedTarget:a,currentTarget:t}=e;if(null===a)return!1;let l=a.parentNode;for(;null!==l;){if(l===t)return!0;l=l.parentNode}return!1}onBlur(e){this.focusInCurrentTarget(e)||this.hideMoreTags()}onKeyDown(e){var a;const{code:t}=e,l=null===(a=this.buttonRef)||void 0===a?void 0:a.current;t===p._f&&l&&(this.hideMoreTags(),l.focus())}render(){const{children:e,limit:a=2,"aria-label":t,srLabel:l,innerRef:o}=this.props,s=i()("".concat(N),"".concat(N,"__list"),"".concat(N,"__list-main")),c=r.Children.toArray(e),d=c.length>a;return r.createElement("ul",{className:s,"aria-label":l||t,ref:o},this.getVisibleTags(c).map(((e,a)=>(0,n.A)("li",{className:"".concat(N,"__list-item")},this.getKeyByIndex(a),e))),d&&this.getEllipseTag(c))}}E.displayName="TagCollapsed";var T=E;const R=["ref"];var L=function(){const e=(0,r.forwardRef)(((e,a)=>{let t=(0,d.A)(e,R);const n=(0,s.Bi)(t.id),o=(0,s.UO)(s.Ri,y,A,_);return r.createElement(T,(0,l.A)({},t,{id:n,i18n:o,innerRef:a}))}));return e.displayName="TagCollapsedContainer",e}()}}]);
//# sourceMappingURL=33642.a5772571.js.map