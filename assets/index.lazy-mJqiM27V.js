import{r as n,j as s,c as d,P as V,b as L,v as y,L as P,d as C,B as T,t as A}from"./index-D1kMV_c5.js";import{P as H}from"./headings-CMtWrYPl.js";const g=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("rounded-xl border bg-card text-card-foreground shadow",e),...r}));g.displayName="Card";const B=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("flex flex-col space-y-1.5 p-6",e),...r}));B.displayName="CardHeader";const F=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("font-semibold leading-none tracking-tight",e),...r}));F.displayName="CardTitle";const O=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("text-sm text-muted-foreground",e),...r}));O.displayName="CardDescription";const z=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("p-6 pt-0",e),...r}));z.displayName="CardContent";const G=n.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:d("flex items-center p-6 pt-0",e),...r}));G.displayName="CardFooter";function X(e,r=[]){let t=[];function i(u,c){const o=n.createContext(c),l=t.length;t=[...t,c];function f(x){const{scope:m,children:h,...p}=x,k=(m==null?void 0:m[e][l])||o,D=n.useMemo(()=>p,Object.values(p));return s.jsx(k.Provider,{value:D,children:h})}function b(x,m){const h=(m==null?void 0:m[e][l])||o,p=n.useContext(h);if(p)return p;if(c!==void 0)return c;throw new Error(`\`${x}\` must be used within \`${u}\``)}return f.displayName=u+"Provider",[f,b]}const a=()=>{const u=t.map(c=>n.createContext(c));return function(o){const l=(o==null?void 0:o[e])||u;return n.useMemo(()=>({[`__scope${e}`]:{...o,[e]:l}}),[o,l])}};return a.scopeName=e,[i,U(a,...r)]}function U(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const i=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(u){const c=i.reduce((o,{useScope:l,scopeName:f})=>{const x=l(u)[`__scope${f}`];return{...o,...x}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:c}),[c])}};return t.scopeName=r.scopeName,t}var N="Progress",j=100,[q,te]=X(N),[J,K]=q(N),R=n.forwardRef((e,r)=>{const{__scopeProgress:t,value:i=null,max:a,getValueLabel:u=Q,...c}=e;(a||a===0)&&!w(a)&&console.error(W(`${a}`,"Progress"));const o=w(a)?a:j;i!==null&&!S(i,o)&&console.error(Y(`${i}`,"Progress"));const l=S(i,o)?i:null,f=v(l)?u(l,o):void 0;return s.jsx(J,{scope:t,value:l,max:o,children:s.jsx(V.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":v(l)?l:void 0,"aria-valuetext":f,role:"progressbar","data-state":E(l,o),"data-value":l??void 0,"data-max":o,...c,ref:r})})});R.displayName=N;var $="ProgressIndicator",_=n.forwardRef((e,r)=>{const{__scopeProgress:t,...i}=e,a=K($,t);return s.jsx(V.div,{"data-state":E(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...i,ref:r})});_.displayName=$;function Q(e,r){return`${Math.round(e/r*100)}%`}function E(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function v(e){return typeof e=="number"}function w(e){return v(e)&&!isNaN(e)&&e>0}function S(e,r){return v(e)&&!isNaN(e)&&e<=r&&e>=0}function W(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${j}\`.`}function Y(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${j} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var I=R,Z=_;const M=n.forwardRef(({className:e,value:r,...t},i)=>s.jsx(I,{ref:i,className:d("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...t,children:s.jsx(Z,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));M.displayName=I.displayName;const ae=L("/votes/")({component:ee});function ee(){const[e,r]=n.useState(y[0]),[t,i]=n.useState(!1);return s.jsxs("main",{children:[s.jsx("div",{className:"mb-8",children:s.jsx(H,{title:"Vote",description:"Vote on the most important decisions"})}),s.jsxs("div",{className:"grid gap-8 lg:grid-cols-2",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:y.slice(0,6).map(a=>s.jsx(g,{className:d("p-6",e.id===a.id?"bg-primary text-primary-foreground":"cursor-pointer transition-colors hover:bg-primary/40"),onClick:e.id===a.id?void 0:()=>{r(a),i(!1)},children:s.jsx("h3",{className:"font-medium",children:a.title})},a.id))}),s.jsx(P,{className:d(C({variant:"outline"}),"w-full"),href:"/votes/all",children:"Browse more votes"})]}),s.jsx("div",{className:"h-[3px] w-full bg-muted lg:hidden"}),s.jsx("div",{className:"h-full space-y-6",children:s.jsxs(g,{className:"h-full p-6",children:[s.jsx("h2",{className:"mb-4 text-xl font-medium",children:e.title}),s.jsx("p",{className:"relative isolate mb-6 overflow-hidden select-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-[var(--line-height)] after:bg-gradient-to-l after:from-card",style:{"--line-height":"1.5rem",fontSize:"1rem",lineHeight:"var(--line-height)",height:"calc(var(--line-height) * 7)"},children:e.description}),s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"space-y-2",children:[s.jsxs("div",{className:"flex justify-between text-sm",children:[s.jsx("span",{className:"text-black/80",children:"Progress"}),s.jsxs("span",{className:"font-medium",children:[e.numVotes," votes out of"," ",e.necessaryVotes]})]}),s.jsx(M,{value:e.numVotes/e.necessaryVotes*100})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(T,{className:d("flex-1",t&&"cursor-auto bg-secondary hover:bg-secondary"),onClick:t?void 0:()=>{i(!0),A.success("Thank you for voting!")},children:t?"Signed":"Sign here"}),s.jsx(P,{className:C({variant:"outline"}),href:`/votes/${e.id}`,children:"View Details"})]})]})]})})]})]})}export{ae as Route};