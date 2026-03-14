import{j as L}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./index-JhL3uwfD.js";const d=R.forwardRef(({size:i="md",variant:m="default",state:e="enabled",className:j,...N},k)=>{const C={padding:i==="sm"?"8px":i==="lg"?"16px":"12px",border:m==="outlined"?"1px solid var(--color-divider-stroke)":"none",backgroundColor:m==="filled"?"var(--color-buttons-input)":"var(--color-white-white)",color:e==="error"?"var(--color-red-error-text-field)":"var(--color-body-text)",opacity:e==="disabled"?.5:1,cursor:e==="disabled"?"not-allowed":"text",fontFamily:"var(--font-inter-regular-*)",fontSize:"14px",lineHeight:"20px",width:"100%",boxSizing:"border-box"};return L.jsx("input",{ref:k,className:j,style:C,disabled:e==="disabled",...N})});d.displayName="TextField";d.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the text field
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:`Variant of the text field
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'enabled' | 'disabled' | 'error'",elements:[{name:"literal",value:"'enabled'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'error'"}]},description:`State of the text field
@default 'enabled'`,defaultValue:{value:"'enabled'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class name for styling"}},composes:["Omit"]};const I={title:"Components/TextField",component:d,args:{placeholder:"Enter text"}},a={args:{variant:"default",size:"md",state:"enabled"}},r={args:{variant:"outlined"}},s={args:{variant:"filled"}},t={args:{size:"sm"}},l={args:{size:"lg"}},o={args:{state:"disabled"}},n={args:{state:"error"}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    state: 'enabled'
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'outlined'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,b,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var y,h,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(z=(h=t.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var w,T,F;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(F=(T=l.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var E,q,D;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(D=(q=o.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var O,V,_;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...(_=(V=n.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const B=["Default","Outlined","Filled","Small","Large","Disabled","Error"];export{a as Default,o as Disabled,n as Error,s as Filled,l as Large,r as Outlined,t as Small,B as __namedExportsOrder,I as default};
