import{j as H}from"./jsx-runtime-D_zvdyIk.js";import{R as W}from"./index-JhL3uwfD.js";const d=W.forwardRef(({variant:e="default",size:m="md",disabled:c=!1,className:V,children:E,...L},O)=>{const A={padding:m==="sm"?"8px 16px":m==="lg"?"16px 32px":"12px 24px",backgroundColor:e==="default"?"var(--color-primary-buttons)":e==="flat"||e==="stroked"?"transparent":e==="basic"?"var(--color-buttons-secondary-button)":"transparent",color:e==="default"?"var(--color-white-white)":e==="flat"||e==="stroked"?"var(--color-primary-buttons)":e==="basic"?"var(--color-white-white)":"var(--color-primary-buttons)",border:e==="stroked"?"1px solid var(--color-primary-buttons)":"none",borderRadius:"4px",cursor:c?"not-allowed":"pointer",opacity:c?.5:1,display:"inline-flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-inter-medium-*)",fontSize:"14px",fontWeight:500,lineHeight:"20px"};return H.jsx("button",{ref:O,className:V,style:A,disabled:c,...L,children:E})});d.displayName="Button";d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked' | 'basic' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"},{name:"literal",value:"'basic'"},{name:"literal",value:"'icon'"}]},description:"The variant of the button.",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the button.",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const K={title:"Components/Button",component:d,args:{children:"Click me",variant:"default",size:"md",disabled:!1}},a={args:{variant:"default"}},r={args:{variant:"flat"}},s={args:{variant:"stroked"}},t={args:{variant:"basic"}},o={args:{variant:"icon"}},n={args:{size:"sm"}},l={args:{size:"lg"}},i={args:{disabled:!0}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,x,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'stroked'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,k,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'basic'
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,B,T;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'icon'
  }
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var I,R,j;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(j=(R=n.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var q,C,D;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var N,_,F;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(F=(_=i.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};const M=["Default","Flat","Stroked","Basic","Icon","Small","Large","Disabled"];export{t as Basic,a as Default,i as Disabled,r as Flat,o as Icon,l as Large,n as Small,s as Stroked,M as __namedExportsOrder,K as default};
