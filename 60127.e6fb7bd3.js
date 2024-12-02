"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[60127],{54812:(e,t,o)=>{o.d(t,{h:()=>l});const l=e=>{}},3959:(e,t,o)=>{o.d(t,{Hg:()=>f,Y_:()=>b,ZL:()=>p,_V:()=>m,s6:()=>_});var l=o(73620),n=o(96540),a=o(40961),i=o(58168),s=o(46942),r=o.n(s),c=o(80045),d=o(54812);o(50411);var m=e=>{let{className:t,width:o,height:n,src:a,src2x:i,title:s}=e;return(0,l.A)("img",{className:t,width:o,height:n,src:a,alt:s,srcSet:i&&"".concat(a," 1x, ").concat(i," 2x")})};n.Component;var p=e=>{let{children:t,container:o,onMounted:l,className:i=""}=e;const s=(0,n.useRef)(),r=(0,n.useRef)(),[c,d]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{c&&"function"==typeof l&&l(!0)}),[c]),(0,n.useEffect)((()=>{var e,t;return s.current=document.createElement("div"),null===(e=s.current)||void 0===e||e.setAttribute("class",i),r.current=o||document.body,null===(t=r.current)||void 0===t||t.appendChild(s.current),d(!0),()=>{s.current&&setTimeout((()=>{var e;null===(e=r.current)||void 0===e||e.removeChild(s.current)}),0)}}),[]),c&&s.current?(0,a.createPortal)(t,s.current):""};const u=["children","component"];var _=e=>{let{children:t,component:o="span"}=e,l=(0,c.A)(e,u);return n.createElement(o,(0,i.A)({className:"andes-visually-hidden"},l),t)};const g=["children","component","className"];var b=e=>{let{children:t,component:o="button",className:l}=e,a=(0,c.A)(e,g);return n.createElement(o,(0,i.A)({className:r()("andes-visually-hidden-focusable",l)},a),t)};var f=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};class o extends n.PureComponent{constructor(o){super(o),"undefined"==typeof window&&o.extend&&(0,d.h)({type:"headless",component:t.name||e.displayName})}render(){const{forwardedRef:t}=this.props;return n.createElement(e,(0,i.A)({},this.props,{ref:t}))}}return n.forwardRef(((e,t)=>n.createElement(o,(0,i.A)({},e,{forwardedRef:t}))))}},42762:(e,t,o)=>{var l=o(46518),n=o(43802).trim;l({target:"String",proto:!0,forced:o(60706)("trim")},{trim:function(){return n(this)}})},72230:(e,t,o)=>{o.d(t,{JU:()=>X,nM:()=>U});var l=o(96540),n=o(5556),a=o(73620),i=o(89379),s=o(58156),r=o.n(s),c=o(20551),d=o(37990),m=o(3803),p=o(5243),u=o(76197),_=o(46942),g=o.n(_),b=o(58168),f=o(69181);(0,n.shape)({initial_time:n.number.isRequired,total_milliseconds:n.number.isRequired,hours:n.number.isRequired,minutes:n.number.isRequired,pay_before_hour:n.number.isRequired,labels:(0,n.arrayOf)((0,n.shape)({id:n.string.isRequired,text:n.string.isRequired,color:n.string.isRequired,values:(0,n.shape)({})})).isRequired});const v="ui-pdp-promotions-pill-label",h=(0,n.shape)({id:n.string,alignment:n.string,accessibility_text:n.string});(0,n.shape)({text:n.string.isRequired,color:n.string.isRequired,bg_color:n.string,font_size:n.string,campaign:n.string,text_icon:h,position:n.string,tooltip_icon:h}),(0,n.shape)({id:n.string,state:n.string,closed:n.bool,storable:n.bool,body:(0,n.shape)({text:n.string})}),(0,n.shape)({id:n.string,state:n.string,closeable:n.bool,closed:n.bool,storable:n.bool,has_shadow:n.bool,change_color:n.bool,behaviour:n.string,tooltip_type:n.string,side:n.string,components:(0,n.arrayOf)((0,n.shape)({}))}),(0,n.shape)({melidata_event:(0,n.shape)({})});const{RIGHT:A}=c.AA.icon,E="ui-pdp-promotions-pill-label",N=e=>{let{label:t,target:o,padding:n}=e;const{text:i,text_icon:s,tooltip_icon:r}=t,c=o?(0,a.A)("a",{className:"".concat(E,"__target"),href:o},void 0,i):(0,a.A)("span",{className:"".concat(E,"__text"),style:{padding:n}},void 0,i),d=(null==s?void 0:s.alignment)||"left";return(0,a.A)("div",{className:"".concat(E,"__trigger")},void 0,s?((e,t,o)=>{const n=[(0,a.A)(u.$U,{className:"".concat(E,"__icon"),accessibilityText:null==o?void 0:o.accessibility_text,figure:l.createElement(p.I,o)}),t];return e===A?n.reverse():n})(d,c,s):c,r&&l.createElement(p.I,r))},x="ui-pdp-promotions-pill-label",{SIDE:y,TRIGGER:R}=m.Sl,O={X:-2,Y:16},L={X:-10,Y:0},I=e=>{let{label:t,andes_tooltip:o,mobile:n,firstPrint:a,handleOpen:i,handleClose:s,target:r,padding:c}=e;const d=l.createElement(N,{label:t,target:r,padding:c});if("VISIBLE"!==(null==o?void 0:o.state))return d;const p=n?{offsetX:O.X,offsetY:O.Y,trigger:R.CLICK,side:y.BOTTOM_LEFT}:{offsetX:L.X,offsetY:L.Y,trigger:R.HOVER,side:y.LEFT},{text:u,values:_}=(null==o?void 0:o.body)||{},g=_?f.I.jsx(u,_):u;return l.createElement(m.m_,(0,b.A)({id:"TOOLTIP_DESCRIPTION_RECOMENDED",className:"".concat(x,"__icon ").concat(x,"__tooltip"),content:g,closable:a,onOpen:i,onClose:s},p),d)},S=e=>{let{className:t,label:o,font_family:n,tooltip:s,andes_tooltip:p,target:u,mobile:_,padding:b,track:f}=e;const{color:h,bg_color:A,text_icon:E,font_size:N,campaign:x}=o,[y,R]=(0,l.useState)(!p.closed),[O,L]=(0,l.useState)(!1),S="tooltips-configuration",T="official_store_highlight_tooltip"===(null==p?void 0:p.id),C=(0,d.xx)({id:p.id,visible:y,storable:p.storable,cookieName:S});(0,l.useEffect)((()=>{if(T){const e=(0,c.Ri)(S);if(e){const t=r()(e,"".concat(S,".").concat(p.id),{view_cnt:0,close_cnt:0}),{close_cnt:o=0}=t;o>0&&(R(!1),L(!1))}}}),[p.id,T,f]);const X=(0,i.A)((0,i.A)({},(0,m.HS)(null,s)),{},{offsetX:-15});return(0,a.A)(m.T_,{tooltip:s?X:null},void 0,l.createElement("div",(e=>{let{bg_color:t,color:o,campaign:l,className:n,font_family:a,font_size:i,text_icon:s}=e;const r=t.includes("#")||t.includes("rgb"),d=(null==o?void 0:o.includes("#"))||(null==o?void 0:o.includes("rgb")),m={};return r&&(m.backgroundColor=t),d&&(m.color=o),{style:m,className:g()(v,l,n,(0,c.oR)(!r&&t),(0,c.op)(!d&&o),(0,c.mm)(i),(0,c.rK)(a),{["".concat(v,"--with-icon")]:!!s})}})({bg_color:A,color:h,campaign:x,className:t,font_family:n,font_size:N,text_icon:E}),l.createElement(I,{label:o,andes_tooltip:p,mobile:_,firstPrint:O,handleOpen:()=>{f&&_&&(0,c.sx)(f)},handleClose:()=>{R(!1),L(!1),p.storable&&C(),_&&T&&null!=p&&p.track&&(0,c.sx)(null==p?void 0:p.track)},target:u,padding:b})))};S.defaultProps={className:"",label:{bg_color:null,campaign:null,font_size:"XXSMALL",text_icon:null},target:"",font_family:"SEMIBOLD",andes_tooltip:{id:"",state:"",closed:null,storable:null,body:{text:""}},padding:"",mobile:!1,track:null};const{RIGHT:T}=c.AA.icon,C="ui-pdp-promotions-pill-label",X=e=>{let{className:t,text:o,bg_color:n,font_size:i,font_family:s,campaign:r,color:d,text_icon:m}=e;const{alignment:_}=m||{};return(0,a.A)("div",{className:g()(C,r,t,(0,c.oR)(n),(0,c.op)(d),(0,c.mm)(i),(0,c.rK)(s),{["".concat(C,"--with-icon")]:!!m})},void 0,m?l.createElement(l.Fragment,null,_===T&&(0,a.A)("span",{className:"".concat(C,"__text")},void 0,o),(0,a.A)(u.$U,{className:"".concat(C,"__icon"),figure:l.createElement(p.I,m)}),_!==T&&(0,a.A)("span",{className:"".concat(C,"__text")},void 0,o)):o)};X.defaultProps={className:"",campaign:null,bg_color:null,font_size:"XXSMALL",font_family:"SEMIBOLD"};const w=e=>{let{className:t,labels:o}=e;return(0,a.A)("div",{className:g()("ui-pdp-promotions-pill",t)},void 0,o.map((e=>l.createElement(X,(0,b.A)({},e,{key:"label-".concat(e.text)})))))};w.defaultProps={className:"",labels:[]};const{SIDE:D,TRIGGER:Y}=m.Sl,k={X:-5,Y:32},P={X:-10,Y:12},q=e=>{let{namespace:t,tooltip:o,mobile:n}=e;const i=n?{offsetX:k.X,offsetY:k.Y,side:D.BOTTOM_LEFT}:{offsetX:P.X,offsetY:P.Y,side:D.LEFT};return l.createElement(m.m_,(0,b.A)({className:"".concat(t,"__tooltip ").concat(t,"__tooltip--").concat(o.id),id:o.id,content:o.body.text,trigger:Y.CLICK,storable:o.storable,visible:!0,mask:!0,maskClosable:!1},i),(0,a.A)("div",{className:"".concat(t,"__trigger-tooltip")}))},M="ui-pdp-promotions-pill",z=e=>{const t=r()(e,"label.padding.top",0),o=r()(e,"label.padding.bottom",0),l=r()(e,"label.padding.right",0),n=r()(e,"label.padding.left",0);return"".concat(t,"px ").concat(l,"px ").concat(o,"px ").concat(n,"px")},B=e=>r()(e,"margin.top",null),G=e=>{let{className:t,tooltip:o,tag_action:n,description_action:i,mobile:s,viewport_track:r}=e;return(0,l.useEffect)((()=>{r&&(0,c.sx)(r)}),[r]),(0,a.A)("div",{className:g()(M,t),style:{marginTop:B(n)}},void 0,o&&(0,a.A)(q,{namespace:M,tooltip:o,mobile:s},o.id),n&&l.createElement(S,(0,b.A)({},n,{padding:z(n),key:"label-".concat(n.label.text),mobile:s})),(null==i?void 0:i.label)&&l.createElement(S,(0,b.A)({},i,{padding:z(n),key:"label-".concat(i.label.text),mobile:s})))};G.defaultProps={tooltip:null,className:"",tag_action:null,description_action:null,mobile:!1,viewport_track:null};const H="ui-pdp-promotions-progress",K=e=>{let{className:t,progress:o,remaining:n}=e;const{percentage:i,label:s,color:r,bg_color:m,empty_color:p="MEDIUM_GRAY"}=o,{total_milliseconds:u,labels:_}=n,b=null==r?void 0:r.includes("#"),[f]=(0,l.useState)(Date.now()+u+c.OY),[v,h]=(0,l.useState)(u),[A,E,N]=(0,c.l5)(v,_)||[],x=null===E;return(0,d.$$)((()=>{h(f-Date.now())}),c.OY),(0,a.A)("div",{className:g()(H,t)},void 0,(0,a.A)("div",{className:g()("".concat(H,"__bar"),(0,c.oR)(x?p:m))},void 0,!x&&(0,a.A)("div",{className:g()("progress",!b&&(0,c.oR)(r)),style:{width:"".concat(i,"%"),backgroundColor:b&&r}})),(0,a.A)("div",{className:"".concat(H,"__status")},void 0,!x&&(0,a.A)("span",{className:"sold"},void 0,null==s?void 0:s.text),(0,a.A)("span",{className:"remaining"},void 0,A,!x&&(0,a.A)("span",{className:"timer"},void 0,E),N)))};K.defaultProps={className:"",progress:null};const U=e=>{const{remaining:t,type:o}=e;return{promotions:null===t?l.createElement(w,e):null,highlights_information:l.createElement(G,e),pill_information:l.createElement(w,e),progress_bar:l.createElement(K,e)}[o]||null};U.defaultProps={remaining:null,type:null}}}]);
//# sourceMappingURL=60127.e6fb7bd3.js.map