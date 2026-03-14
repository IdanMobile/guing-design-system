import{j as I}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-JhL3uwfD.js";const j=L.forwardRef(({variant:e="default",size:d="md",disabled:r=!1,className:B,children:E,...M},R)=>{const V={padding:d==="sm"?"8px 16px":d==="lg"?"16px 32px":"12px 24px",backgroundColor:r?"var(--color-disabled)":e==="primary"?"var(--color-primary-buttons)":e==="secondary"?"var(--color-buttons-secondary-button)":e==="danger"?"var(--color-error)":"var(--color-buttons-input)",color:r?"var(--color-disabled-text)":"var(--color-white-white)",border:e==="default"?"1px solid var(--color-divider-stroke)":"none",borderRadius:"4px",cursor:r?"not-allowed":"pointer",fontFamily:"var(--font-inter-medium-*)",fontSize:"14px",fontWeight:500,transition:"background-color 0.3s"};return I.jsx("button",{ref:R,style:V,className:B,disabled:r,...M,children:E})});j.__docgenInfo={description:"",methods:[],displayName:"MultiFunctionButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'danger'"}]},description:`The variant of the button.
Can be 'default', 'primary', 'secondary', or 'danger'.`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the button.
Can be 'sm', 'md', or 'lg'.`,defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names to apply to the button."}}};const A={title:"Components/MultiFunctionButton",component:j,args:{children:"Click me"}},a={args:{variant:"default"}},s={args:{variant:"primary"}},o={args:{variant:"secondary"}},t={args:{variant:"danger"}},n={args:{disabled:!0}},l={args:{size:"sm"}},i={args:{size:"lg"}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,S,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,z,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var T,C,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,F,_;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(_=(F=i.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const O=["Default","Primary","Secondary","Danger","Disabled","Small","Large"];export{t as Danger,a as Default,n as Disabled,i as Large,s as Primary,o as Secondary,l as Small,O as __namedExportsOrder,A as default};
