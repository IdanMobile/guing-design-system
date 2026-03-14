import{j as J}from"./jsx-runtime-D_zvdyIk.js";import{R as K}from"./index-JhL3uwfD.js";const V=K.forwardRef(({variant:e="default",size:i="md",className:z,children:A,...O},G)=>{const H={padding:i==="sm"?"8px 16px":i==="lg"?"16px 32px":"12px 24px",backgroundColor:e==="default"?"var(--color-primary-buttons)":e==="flat"?"transparent":e==="stroked"?"var(--color-white-white)":e==="basic"?"var(--color-buttons-input)":e==="toggle"?"var(--color-hover)":e==="multi"?"var(--color-selected-1)":e==="pressed"?"var(--color-selected-secondary-button)":e==="disabled"?"var(--color-disabled)":"var(--color-icons-1)",color:e==="disabled"?"var(--color-disabled-text)":"var(--color-body-text)",border:e==="stroked"?"1px solid var(--color-divider-stroke)":"none",borderRadius:"4px",cursor:e==="disabled"?"not-allowed":"pointer",opacity:e==="disabled"?.6:1,transition:"background-color 0.3s"};return J.jsx("button",{ref:G,className:z,style:H,disabled:e==="disabled",...O,children:A})});V.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat' | 'stroked' | 'basic' | 'toggle' | 'multi' | 'pressed' | 'disabled' | 'icon'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'stroked'"},{name:"literal",value:"'basic'"},{name:"literal",value:"'toggle'"},{name:"literal",value:"'multi'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'icon'"}]},description:"Button variant to apply different styles",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of the button",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional className for custom styling"}}};const U={title:"Components/Button",component:V,args:{children:"Click me"}},a={args:{variant:"default"}},r={args:{variant:"flat"}},s={args:{variant:"stroked"}},o={args:{variant:"basic"}},t={args:{variant:"toggle"}},l={args:{variant:"multi"}},n={args:{variant:"pressed"}},d={args:{variant:"disabled"}},c={args:{variant:"icon"}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,v,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'flat'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,x,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'stroked'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var k,S,h;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'basic'
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,B,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'toggle'
  }
}`,...(R=(B=t.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var T,D,_;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'multi'
  }
}`,...(_=(D=l.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,q,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'pressed'
  }
}`,...(C=(q=n.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var I,N,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'disabled'
  }
}`,...(E=(N=d.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var F,M,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'icon'
  }
}`,...(P=(M=c.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};const W=["Default","Flat","Stroked","Basic","Toggle","Multi","Pressed","Disabled","Icon"];export{o as Basic,a as Default,d as Disabled,r as Flat,c as Icon,l as Multi,n as Pressed,s as Stroked,t as Toggle,W as __namedExportsOrder,U as default};
