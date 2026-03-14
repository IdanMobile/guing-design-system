import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-JhL3uwfD.js";const i=L.forwardRef(({size:m="md",variant:d="default",state:o="enabled",className:j,...R},V)=>{const B={padding:m==="sm"?"4px 8px":m==="lg"?"12px 16px":"8px 12px",backgroundColor:d==="flat"?"var(--color-dialog-sections)":d==="stroked"?"var(--color-buttons-input)":"var(--color-white-white)",border:d==="stroked"?"1px solid var(--color-divider-stroke)":"none",borderRadius:"4px",color:o==="disabled"?"var(--color-disabled-text)":"var(--color-body-text)",cursor:o==="disabled"?"not-allowed":"text",outline:"none",fontFamily:"var(--font-inter-regular-*)",fontSize:"14px"};return C.jsx("input",{ref:V,className:j,style:B,disabled:o==="disabled",...R})});i.displayName="TextField";i.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the text field.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked' | 'basic'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"},{name:"literal",value:"'basic'"}]},description:`The variant of the text field.
'default', 'flat', 'stroked', 'basic'.`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'enabled' | 'disabled'",elements:[{name:"literal",value:"'enabled'"},{name:"literal",value:"'disabled'"}]},description:`The state of the text field.
'enabled', 'disabled'.`,defaultValue:{value:"'enabled'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const I={title:"Components/TextField",component:i,args:{placeholder:"Enter text"}},e={args:{variant:"default",size:"md",state:"enabled"}},a={args:{variant:"flat",size:"md",state:"enabled"}},s={args:{variant:"stroked",size:"md",state:"enabled"}},r={args:{variant:"basic",size:"md",state:"enabled"}},t={args:{variant:"default",size:"md",state:"disabled"}},l={args:{variant:"default",size:"sm",state:"enabled"}},n={args:{variant:"default",size:"lg",state:"enabled"}};var c,u,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    state: 'enabled'
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,b,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'flat',
    size: 'md',
    state: 'enabled'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,x,z;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'stroked',
    size: 'md',
    state: 'enabled'
  }
}`,...(z=(x=s.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var S,k,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    size: 'md',
    state: 'enabled'
  }
}`,...(y=(k=r.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var T,h,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    state: 'disabled'
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var F,q,D;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'sm',
    state: 'enabled'
  }
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,N,_;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    state: 'enabled'
  }
}`,...(_=(N=n.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const G=["Default","Flat","Stroked","Basic","Disabled","Small","Large"];export{r as Basic,e as Default,t as Disabled,a as Flat,n as Large,l as Small,s as Stroked,G as __namedExportsOrder,I as default};
