import{j as O}from"./jsx-runtime-D_zvdyIk.js";import{R as G}from"./index-JhL3uwfD.js";const V=G.forwardRef(({variant:e="default",size:a="md",disabled:d=!1,className:E,children:F,...M},N)=>{const A={padding:a==="sm"?"8px 16px":a==="lg"?"16px 32px":"12px 24px",fontSize:a==="sm"?"12px":a==="lg"?"18px":"14px",backgroundColor:e==="default"?"var(--color-primary-buttons)":"transparent",border:e==="stroked"?"1px solid var(--color-primary-buttons)":"none",color:e==="flat"||e==="icon"?"var(--color-primary-buttons)":"var(--color-white-white)",cursor:d?"not-allowed":"pointer",opacity:d?.5:1,transition:"background-color 0.3s, color 0.3s",borderRadius:"4px",display:"inline-flex",alignItems:"center",justifyContent:"center",textDecoration:"none"};return O.jsx("button",{ref:N,className:E,style:A,disabled:d,...M,children:F})});V.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked' | 'basic' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"},{name:"literal",value:"'basic'"},{name:"literal",value:"'icon'"}]},description:`The variant of the button.
- 'default': Standard button with background color.
- 'flat': Button with no background color.
- 'stroked': Button with a border.
- 'basic': Minimal button with no styling.
- 'icon': Button intended for icon use.`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
- 'sm': Small button.
- 'md': Medium button.
- 'lg': Large button.`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the button."}}};const K={title:"Components/Button",component:V,args:{children:"Click me"}},r={args:{variant:"default"}},t={args:{variant:"flat"}},s={args:{variant:"stroked"}},o={args:{variant:"basic"}},n={args:{variant:"icon"}},l={args:{size:"sm"}},c={args:{size:"lg"}},i={args:{disabled:!0}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'stroked'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,h,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'basic'
  }
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var w,B,T;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'icon'
  }
}`,...(T=(B=n.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var D,I,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var j,q,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var C,_,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(_=i.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const P=["Default","Flat","Stroked","Basic","Icon","Small","Large","Disabled"];export{o as Basic,r as Default,i as Disabled,t as Flat,n as Icon,c as Large,l as Small,s as Stroked,P as __namedExportsOrder,K as default};
