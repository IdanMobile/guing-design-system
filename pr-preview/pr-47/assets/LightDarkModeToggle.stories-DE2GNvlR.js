import{j}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./index-JhL3uwfD.js";const L=F.forwardRef(({size:d="md",variant:l="default",disabled:n=!1,className:q,...M},R)=>{const _={padding:d==="sm"?"4px 8px":d==="lg"?"12px 24px":"8px 16px",backgroundColor:l==="flat"||l==="stroked"?"transparent":"var(--color-dialog-sections)",border:l==="stroked"?"1px solid var(--color-divider-stroke)":"none",color:"var(--color-text)",fontFamily:"var(--font-inter-medium-*)",fontSize:"14px",fontWeight:500,cursor:n?"not-allowed":"pointer",opacity:n?.5:1,transition:"background-color 0.3s"};return j.jsx("button",{ref:R,className:q,style:_,disabled:n,...M,children:"Toggle Mode"})});L.__docgenInfo={description:"",methods:[],displayName:"LightDarkModeToggle",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"}]},description:`The variant of the button
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be disabled
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling"}}};const C={title:"Components/LightDarkModeToggle",component:L,args:{size:"md",variant:"default",disabled:!1}},e={},a={args:{size:"sm"}},r={args:{size:"lg"}},s={args:{variant:"flat"}},t={args:{variant:"stroked"}},o={args:{disabled:!0}};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,v,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,x,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,y,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'stroked'
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var z,D,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const E=["Default","Small","Large","Flat","Stroked","Disabled"];export{e as Default,o as Disabled,s as Flat,r as Large,a as Small,t as Stroked,E as __namedExportsOrder,C as default};
