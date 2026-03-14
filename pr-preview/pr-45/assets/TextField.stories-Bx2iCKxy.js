import{j as V}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-JhL3uwfD.js";const q=k.forwardRef(({size:d="md",variant:n="outlined",state:l="default",className:D,..._},j)=>{const N={padding:d==="sm"?"4px 8px":d==="md"?"8px 12px":"12px 16px",border:n==="outlined"?"1px solid var(--color-divider-stroke)":"none",backgroundColor:n==="filled"?"var(--color-buttons-input)":"transparent",color:l==="disabled"?"var(--color-disabled-text)":"var(--color-body-text)",cursor:l==="disabled"?"not-allowed":"text",width:"100%",boxSizing:"border-box",fontFamily:"var(--font-body-*)",fontSize:"14px",lineHeight:"20px"};return V.jsx("input",{ref:j,className:D,style:N,disabled:l==="disabled",..._})});q.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the text field.",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'outlined' | 'filled'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"The variant of the text field.",defaultValue:{value:"'outlined'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"}]},description:"The state of the text field.",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for styling overrides."}},composes:["Omit"]};const O={title:"Components/TextField",component:q,args:{placeholder:"Enter text"}},e={args:{size:"md",variant:"outlined",state:"default"}},a={args:{size:"sm"}},r={args:{size:"lg"}},s={args:{variant:"filled"}},t={args:{state:"error"}},o={args:{state:"disabled"}};var i,m,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'outlined',
    state: 'default'
  }
}`,...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,x,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(v=(x=r.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,S,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,T,z;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    state: 'error'
  }
}`,...(z=(T=t.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var w,E,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: 'disabled'
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const R=["Default","Small","Large","Filled","ErrorState","Disabled"];export{e as Default,o as Disabled,t as ErrorState,s as Filled,r as Large,a as Small,R as __namedExportsOrder,O as default};
