"use strict";(globalThis.webpackChunkunsplash_web=globalThis.webpackChunkunsplash_web||[]).push([[7159],{9706:(t,e,n)=>{n.d(e,{L:()=>i});var o=n(57842);const i=n(74235).kr9(o.YP)},67159:(t,e,n)=>{n.d(e,{q:()=>D,Z:()=>G});var o={};n.r(o),n.d(o,{load_more_button_label:()=>B});var i=n(85893),r=n(3735),l=n(30845),s=n(86706),a=n(91384),c=n(66132),d=n(46954),h=n(70549),u=n(18711),p=n(48944),f=n(4094),I=n(43882),g=n(69184),S=n(57842),b=n(87976),m=n(6464),O=n(93416),v=n(15964),x=n(9435),P=n(74235),j=n(17060),R=n(4991),E=n(55360),N=n(6671),y=n(9706);const A="gDCZZ",q="HxaG2",_="ATnvl",k="dycl5",w="PwSsU O84oE",C="rx4AP";var Z=n(73505);n(60860),n(37105),n(27306);const B=()=>"Load more photos",F=t=>o,Q=(0,Z.G)(F);function T(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const D=()=>(0,i.jsx)(P.tJQ,{className:q,children:(0,i.jsx)(P.tJQ,{className:_,children:f.w6H(0,17).map((t=>(0,i.jsx)(P.tJQ,{className:k,children:(0,i.jsx)(P.tJQ,{className:w})},t)))})}),J=(0,O.DO)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:I.HP((()=>(0,i.jsx)(R.Z,{type:"photos"}))),getPlaceholderEl:I.HP((()=>(0,i.jsx)(D,{})))}),U=b.Ue();class H extends P.wA2{constructor(){super(...arguments),T(this,"getInfiniteScrollSetting",(t=>{let{shouldRequireInfiniteScrollOptIn:e}=t;return e?U.mk.OptInRequired({optedIn:!1}):U.mk.Enabled})),T(this,"state",{infiniteScrollSetting:this.getInfiniteScrollSetting(this.props)}),T(this,"toggleInfiniteScrollOptIn",(()=>{const{infiniteScrollSetting:t}=this.state;U.match({OptInRequired:t=>{let{optedIn:e}=t;const n=U.mk.OptInRequired({optedIn:(0,m.U_)(e)});this.setState({infiniteScrollSetting:n})},[b._]:r.Q1})(t)})),T(this,"fetchDataAndBuildActions",(0,l.Z)((t=>(0,r.ls)(t,g.UI((0,r.ls)(p.Yq,h.N.traverseArray(h.dp),(t=>{let[e,n]=t;return[(0,c.VA)(n),c.aU.mk.HandleNextPhotoFeedPageResponse({feedId:this.props.feedId,photoIds:e.map((t=>t.id))})]}))))))),T(this,"createPhotoFeedIdContextValue",(0,l.Z)((t=>S.G(t))))}UNSAFE_componentWillReceiveProps(t){if(t.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){const e=this.getInfiniteScrollSetting(t);this.setState({infiniteScrollSetting:e})}}render(){const{photoFeedOption:t,photosOption:e,children:n,getNoContentEl:o,getPlaceholderEl:r,renderBeneathLoadMoreButton:l,feedId:s,fetchPhotos:a,notifier$:c,intersectionObserverRoot:h,intersectionObserverRootMarginBottom:u,t:p}=this.props,{infiniteScrollSetting:f}=this.state,I=!1===U.match({OptInRequired:t=>{let{optedIn:e}=t;return e},Enabled:()=>!0})(f);return(0,i.jsx)(y.L.Provider,{value:this.createPhotoFeedIdContextValue(s),children:(0,i.jsx)(E.f,{renderItems:n,feedItemsOption:e,feedStateOption:t,getScrollFooterEl:()=>(0,i.jsx)(P.tJQ,{className:C,children:U.match({OptInRequired:t=>{let{optedIn:e}=t;return e?(0,i.jsx)(N.Z,{}):(0,i.jsxs)(P.PRT,{children:[(0,i.jsx)(P.tJQ,{className:A,children:(0,i.jsx)(j.Z,{tag:"button",buttonType:x.L$.Outline,onClick:this.toggleInfiniteScrollOptIn,type:"button",children:p.load_more_button_label()})}),l?.()]})},Enabled:()=>(0,i.jsx)(N.Z,{})})(f)}),getNoContentEl:o,getPlaceholderEl:r,shouldDisableInfiniteScroll:I,fetchDataAndBuildActions:this.fetchDataAndBuildActions(a),notifier$:c,intersectionObserverRoot:h,intersectionObserverRootMarginBottom:u},d.un(s))})}}const L=(0,u.O)()((()=>{const t=(0,v.XT)(),e=(0,v.u0)();return(n,o)=>({photoFeedOption:t(n,o.feedId),photosOption:e(n,o.feedId)})})),G=(0,r.zG)(H,(0,s.$j)(L),Q,(t=>(0,a.b9)(t,J)))}}]);
//# sourceMappingURL=7159.8ea44ecb201c59503957.js.map