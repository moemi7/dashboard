"use strict";exports.id=6122,exports.ids=[6122],exports.modules={41668:(e,n,u)=>{/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=u(9885);function h(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var i="function"==typeof Object.is?Object.is:h,c=o.useState,s=o.useEffect,f=o.useLayoutEffect,l=o.useDebugValue;function q(e,n){var u=n(),o=c({inst:{value:u,getSnapshot:n}}),i=o[0].inst,v=o[1];return f(function(){i.value=u,i.getSnapshot=n,r(i)&&v({inst:i})},[e,u,n]),s(function(){return r(i)&&v({inst:i}),e(function(){r(i)&&v({inst:i})})},[e]),l(u),u}function r(e){var n=e.getSnapshot;e=e.value;try{var u=n();return!i(e,u)}catch(e){return!0}}function t(e,n){return n()}var v="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?t:q;n.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:v},95074:(e,n,u)=>{/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=u(9885),i=u(73606);function p(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n}var c="function"==typeof Object.is?Object.is:p,s=i.useSyncExternalStore,f=o.useRef,l=o.useEffect,v=o.useMemo,d=o.useDebugValue;n.useSyncExternalStoreWithSelector=function(e,n,u,o,i){var S=f(null);if(null===S.current){var x={hasValue:!1,value:null};S.current=x}else x=S.current;var y=s(e,(S=v(function(){function a(n){if(!f){if(f=!0,e=n,n=o(n),void 0!==i&&x.hasValue){var u=x.value;if(i(u,n))return s=u}return s=n}if(u=s,c(e,n))return u;var l=o(n);return void 0!==i&&i(u,l)?u:(e=n,s=l)}var e,s,f=!1,l=void 0===u?null:u;return[function(){return a(n())},null===l?void 0:function(){return a(l())}]},[n,u,o,i]))[0],S[1]);return l(function(){x.hasValue=!0,x.value=y},[y]),d(y),y}},73606:(e,n,u)=>{e.exports=u(41668)},96122:(e,n,u)=>{e.exports=u(95074)}};