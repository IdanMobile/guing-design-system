import{j as P}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-JhL3uwfD.js";const I=A.forwardRef(({size:c="md",variant:i="default",pressed:M=!1,disabled:e=!1,className:N,...E},L)=>{const O={padding:c==="sm"?"8px 16px":c==="lg"?"16px 32px":"12px 24px",backgroundColor:e?"var(--color-disabled)":M?"var(--color-hover)":i==="flat"?"var(--color-selected-secondary-button)":i==="stroked"?"transparent":"var(--color-primary-buttons)",color:e?"var(--color-disabled-text)":"var(--color-text)",border:i==="stroked"?"1px solid var(--color-divider-stroke)":"none",borderRadius:"4px",cursor:e?"not-allowed":"pointer",fontFamily:"var(--font-inter-medium-*)",fontSize:"14px",fontWeight:500,transition:"background-color 0.3s"};return P.jsx("button",{ref:L,className:N,style:O,disabled:e,...E})});I.__docgenInfo={description:"",methods:[],displayName:"MultiFunctionButton",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked' | 'basic'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"},{name:"literal",value:"'basic'"}]},description:`The variant of the button.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},pressed:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be in a pressed state.
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`If true, the button will be disabled.
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling."}},composes:["Omit"]};const H={title:"Components/MultiFunctionButton",component:I,args:{children:"Click me"}},a={args:{variant:"default",size:"md",pressed:!1,disabled:!1}},r={args:{variant:"flat"}},s={args:{variant:"stroked"}},t={args:{variant:"basic"}},o={args:{pressed:!0}},n={args:{disabled:!0}},l={args:{size:"sm"}},d={args:{size:"lg"}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    pressed: false,
    disabled: false
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,g,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,x,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'stroked'
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var k,y,h;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'basic'
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var z,T,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    pressed: true
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,q,B;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(B=(q=n.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,D,V;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var _,j,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const J=["Default","Flat","Stroked","Basic","Pressed","Disabled","Small","Large"];export{t as Basic,a as Default,n as Disabled,r as Flat,d as Large,o as Pressed,l as Small,s as Stroked,J as __namedExportsOrder,H as default};
