"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{95243:function(e,t,r){r.r(t),r.d(t,{IMG_MAX_LIMIT:function(){return y},ProductForm:function(){return ProductForm}});var n=r(57437),a=r(74578),s=r(2265),i=r(38110),o=r(61865),d=r(4737),l=r(24033),c=r(35831),u=r(23611),m=r(89179),f=r(35217),p=r(56606),x=r(7532),h=r(71271),g=r(95677),j=r(16691),v=r.n(j);function FileUpload(e){let{onChange:t,onRemove:r,value:a}=e,{toast:s}=(0,h.pm)(),onDeleteFile=e=>{r(a.filter(t=>t.key!==e))},onUpdateFile=e=>{t([...a,...e])};return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-4 flex items-center gap-4",children:!!a.length&&(null==a?void 0:a.map(e=>(0,n.jsxs)("div",{className:"relative w-[200px] h-[200px] rounded-md overflow-hidden",children:[(0,n.jsx)("div",{className:"z-10 absolute top-2 right-2",children:(0,n.jsx)(u.z,{type:"button",onClick:()=>onDeleteFile(e.key),variant:"destructive",size:"sm",children:(0,n.jsx)(d.Z,{className:"h-4 w-4"})})}),(0,n.jsx)("div",{children:(0,n.jsx)(v(),{fill:!0,className:"object-cover",alt:"Image",src:e.fileUrl||""})})]},e.key)))}),(0,n.jsx)("div",{children:a.length<y&&(0,n.jsx)(g.OH,{className:"dark:bg-zinc-800 py-2 ut-label:text-sm ut-allowed-content:ut-uploading:text-red-300",endpoint:"imageUploader",config:{mode:"auto"},content:{allowedContent(e){let{isUploading:t}=e;if(t)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("p",{className:"mt-2 text-sm text-slate-400 animate-pulse",children:"Img Uploading..."})})}},onClientUploadComplete:e=>{e&&onUpdateFile(e)},onUploadError:e=>{s({title:"Error",variant:"destructive",description:e.message})},onUploadBegin:()=>{}})})]})}let b=a.Ry({fileName:a.Z_(),name:a.Z_(),fileSize:a.Rx(),size:a.Rx(),fileKey:a.Z_(),key:a.Z_(),fileUrl:a.Z_(),url:a.Z_()}),y=3,w=a.Ry({name:a.Z_().min(3,{message:"Product Name must be at least 3 characters"}),imgUrl:a.IX(b).max(y,{message:"You can only add up to 3 images"}).min(1,{message:"At least one image must be added."}),description:a.Z_().min(3,{message:"Product description must be at least 3 characters"}),price:a.oQ.number(),category:a.Z_().min(1,{message:"Please select a category"})}),ProductForm=e=>{let{initialData:t,categories:r}=e;(0,l.useParams)();let a=(0,l.useRouter)(),{toast:g}=(0,h.pm)(),[j,v]=(0,s.useState)(!1),[b,y]=(0,s.useState)(!1),[N,I]=(0,s.useState)(!1),F=(0,o.cI)({resolver:(0,i.F)(w),defaultValues:t||{name:"",description:"",price:0,imgUrl:[],category:""}}),onSubmit=async e=>{try{y(!0),a.refresh(),a.push("/dashboard/products"),g({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})}catch(e){g({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})}finally{y(!1)}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(p.X,{title:t?"Edit product":"Create product",description:t?"Edit a product.":"Add a new product"}),t&&(0,n.jsx)(u.z,{disabled:b,variant:"destructive",size:"sm",onClick:()=>v(!0),children:(0,n.jsx)(d.Z,{className:"h-4 w-4"})})]}),(0,n.jsx)(f.Separator,{}),(0,n.jsx)(m.l0,{...F,children:(0,n.jsxs)("form",{onSubmit:F.handleSubmit(onSubmit),className:"space-y-8 w-full",children:[(0,n.jsx)(m.Wi,{control:F.control,name:"imgUrl",render:e=>{let{field:t}=e;return(0,n.jsxs)(m.xJ,{children:[(0,n.jsx)(m.lX,{children:"Images"}),(0,n.jsx)(m.NI,{children:(0,n.jsx)(FileUpload,{onChange:t.onChange,value:t.value,onRemove:t.onChange})}),(0,n.jsx)(m.zG,{})]})}}),(0,n.jsxs)("div",{className:"md:grid md:grid-cols-3 gap-8",children:[(0,n.jsx)(m.Wi,{control:F.control,name:"name",render:e=>{let{field:t}=e;return(0,n.jsxs)(m.xJ,{children:[(0,n.jsx)(m.lX,{children:"Name"}),(0,n.jsx)(m.NI,{children:(0,n.jsx)(c.I,{disabled:b,placeholder:"Product name",...t})}),(0,n.jsx)(m.zG,{})]})}}),(0,n.jsx)(m.Wi,{control:F.control,name:"description",render:e=>{let{field:t}=e;return(0,n.jsxs)(m.xJ,{children:[(0,n.jsx)(m.lX,{children:"Description"}),(0,n.jsx)(m.NI,{children:(0,n.jsx)(c.I,{disabled:b,placeholder:"Product description",...t})}),(0,n.jsx)(m.zG,{})]})}}),(0,n.jsx)(m.Wi,{control:F.control,name:"price",render:e=>{let{field:t}=e;return(0,n.jsxs)(m.xJ,{children:[(0,n.jsx)(m.lX,{children:"Price"}),(0,n.jsx)(m.NI,{children:(0,n.jsx)(c.I,{type:"number",disabled:b,...t})}),(0,n.jsx)(m.zG,{})]})}}),(0,n.jsx)(m.Wi,{control:F.control,name:"category",render:e=>{let{field:t}=e;return(0,n.jsxs)(m.xJ,{children:[(0,n.jsx)(m.lX,{children:"Category"}),(0,n.jsxs)(x.Ph,{disabled:b,onValueChange:t.onChange,value:t.value,defaultValue:t.value,children:[(0,n.jsx)(m.NI,{children:(0,n.jsx)(x.i4,{children:(0,n.jsx)(x.ki,{defaultValue:t.value,placeholder:"Select a category"})})}),(0,n.jsx)(x.Bw,{children:r.map(e=>(0,n.jsx)(x.Ql,{value:e._id,children:e.name},e._id))})]}),(0,n.jsx)(m.zG,{})]})}})]}),(0,n.jsx)(u.z,{disabled:b,className:"ml-auto",type:"submit",children:t?"Save changes":"Create"})]})})]})}},23611:function(e,t,r){r.d(t,{d:function(){return d},z:function(){return l}});var n=r(57437),a=r(2265),s=r(67256),i=r(96061),o=r(81628);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(d({variant:a,size:i,className:r})),ref:t,...c})});l.displayName="Button"},89179:function(e,t,r){r.d(t,{l0:function(){return m},NI:function(){return g},Wi:function(){return FormField},xJ:function(){return x},lX:function(){return h},zG:function(){return v}});var n=r(57437),a=r(2265),s=r(67256),i=r(61865),o=r(81628),d=r(36743),l=r(96061);let c=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(d.f,{ref:t,className:(0,o.cn)(c(),r),...a})});u.displayName=d.f.displayName;let m=i.RV,f=a.createContext({}),FormField=e=>{let{...t}=e;return(0,n.jsx)(f.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},useFormField=()=>{let e=a.useContext(f),t=a.useContext(p),{getFieldState:r,formState:n}=(0,i.Gc)(),s=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},p=a.createContext({}),x=a.forwardRef((e,t)=>{let{className:r,...s}=e,i=a.useId();return(0,n.jsx)(p.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2 mb-2 lg:mb-0",r),...s})})});x.displayName="FormItem";let h=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:s,formItemId:i}=useFormField();return(0,n.jsx)(u,{ref:t,className:(0,o.cn)(s&&"text-destructive",r),htmlFor:i,...a})});h.displayName="FormLabel";let g=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:i,formDescriptionId:o,formMessageId:d}=useFormField();return(0,n.jsx)(s.g7,{ref:t,id:i,"aria-describedby":a?"".concat(o," ").concat(d):"".concat(o),"aria-invalid":!!a,...r})});g.displayName="FormControl";let j=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=useFormField();return(0,n.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",r),...a})});j.displayName="FormDescription";let v=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:i,formMessageId:d}=useFormField(),l=i?String(null==i?void 0:i.message):a;return l?(0,n.jsx)("p",{ref:t,id:d,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",r),...s,children:l}):null});v.displayName="FormMessage"},56606:function(e,t,r){r.d(t,{X:function(){return Heading}});var n=r(57437);let Heading=e=>{let{title:t,description:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-3xl font-bold tracking-tight",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:r})]})}},35831:function(e,t,r){r.d(t,{I:function(){return i}});var n=r(57437),a=r(2265),s=r(81628);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},7532:function(e,t,r){r.d(t,{Bw:function(){return u},Ph:function(){return d},Ql:function(){return f},i4:function(){return c},ki:function(){return l}});var n=r(57437),a=r(2265),s=r(69394),i=r(28010),o=r(81628);let d=i.fC;i.ZA;let l=i.B4,c=a.forwardRef((e,t)=>{let{className:r,children:a,...d}=e;return(0,n.jsxs)(i.xz,{ref:t,className:(0,o.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),...d,children:[a,(0,n.jsx)(i.JO,{asChild:!0,children:(0,n.jsx)(s.jnn,{className:"h-4 w-4 opacity-50"})})]})});c.displayName=i.xz.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,position:s="popper",...d}=e;return(0,n.jsx)(i.h_,{children:(0,n.jsx)(i.VY,{ref:t,className:(0,o.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===s&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:s,...d,children:(0,n.jsx)(i.l_,{className:(0,o.cn)("p-1","popper"===s&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a})})})});u.displayName=i.VY.displayName;let m=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",r),...a})});m.displayName=i.__.displayName;let f=a.forwardRef((e,t)=>{let{className:r,children:a,...d}=e;return(0,n.jsxs)(i.ck,{ref:t,className:(0,o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...d,children:[(0,n.jsx)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,n.jsx)(i.wU,{children:(0,n.jsx)(s.nQG,{className:"h-4 w-4"})})}),(0,n.jsx)(i.eT,{children:a})]})});f.displayName=i.ck.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",r),...a})});p.displayName=i.Z0.displayName},35217:function(e,t,r){r.r(t),r.d(t,{Separator:function(){return o}});var n=r(57437),a=r(2265),s=r(26823),i=r(81628);let o=a.forwardRef((e,t)=>{let{className:r,orientation:a="horizontal",decorative:o=!0,...d}=e;return(0,n.jsx)(s.f,{ref:t,decorative:o,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...d})});o.displayName=s.f.displayName},71271:function(e,t,r){r.d(t,{pm:function(){return useToast}});var n=r(2265);let a=0;function genId(){return(a=(a+1)%Number.MAX_VALUE).toString()}let s=new Map,addToRemoveQueue=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),dispatch({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},reducer=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?addToRemoveQueue(r):e.toasts.forEach(e=>{addToRemoveQueue(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],o={toasts:[]};function dispatch(e){o=reducer(o,e),i.forEach(e=>{e(o)})}function toast(e){let{...t}=e,r=genId(),dismiss=()=>dispatch({type:"DISMISS_TOAST",toastId:r});return dispatch({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||dismiss()}}}),{id:r,dismiss,update:e=>dispatch({type:"UPDATE_TOAST",toast:{...e,id:r}})}}function useToast(){let[e,t]=n.useState(o);return n.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast,dismiss:e=>dispatch({type:"DISMISS_TOAST",toastId:e})}}},81628:function(e,t,r){r.d(t,{cn:function(){return cn},u:function(){return hasDraggableData}});var n=r(57042),a=r(23986);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,n.W)(t))}function hasDraggableData(e){if(!e)return!1;let t=e.data.current;return(null==t?void 0:t.type)==="Column"||(null==t?void 0:t.type)==="Task"}}}]);