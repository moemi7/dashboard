"use strict";exports.id=7446,exports.ids=[7446],exports.modules={22299:(e,r,t)=>{t.d(r,{f:()=>u});var a=t(35108),i=t(9885),o=t(43979);let n="horizontal",d=["horizontal","vertical"],l=(0,i.forwardRef)((e,r)=>{let{decorative:t,orientation:d=n,...l}=e,u=$89eedd556c436f6a$var$isValidOrientation(d)?d:n;return(0,i.createElement)(o.WV.div,(0,a.Z)({"data-orientation":u},t?{role:"none"}:{"aria-orientation":"vertical"===u?u:void 0,role:"separator"},l,{ref:r}))});function $89eedd556c436f6a$var$getInvalidOrientationError(e,r){return`Invalid prop \`orientation\` of value \`${e}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${n}\`.`}function $89eedd556c436f6a$var$isValidOrientation(e){return d.includes(e)}l.propTypes={orientation(e,r,t){let a=e[r],i=String(a);return a&&!$89eedd556c436f6a$var$isValidOrientation(a)?Error($89eedd556c436f6a$var$getInvalidOrientationError(i,t)):null}};let u=l},36322:(e,r,t)=>{t.d(r,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var a=t(9885);function $010c2913dbd2fe3d$export$5cae361ad82dce8b(e){let r=(0,a.useRef)({value:e,previous:e});return(0,a.useMemo)(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}}};