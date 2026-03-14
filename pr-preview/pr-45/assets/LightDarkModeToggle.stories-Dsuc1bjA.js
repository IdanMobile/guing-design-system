import{j as L}from"./jsx-runtime-D_zvdyIk.js";import{R,r as q}from"./index-JhL3uwfD.js";const s=R.forwardRef(({size:l="md",variant:k="default",initialState:D=!1,className:T,...S},b)=>{const[e,y]=q.useState(D),M=()=>{y(!e)},z={padding:l==="sm"?"4px 8px":l==="lg"?"12px 24px":"8px 16px",backgroundColor:e?"var(--color-section)":"var(--color-dialog-sections)",color:e?"var(--color-icons-1)":"var(--color-body-text)",border:k==="flat"?"none":"1px solid var(--color-divider-stroke)",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.3s, color 0.3s"};return L.jsx("button",{ref:b,className:T,style:z,onClick:M,...S,children:e?"Dark Mode":"Light Mode"})});s.displayName="LightDarkModeToggle";s.__docgenInfo={description:"",methods:[],displayName:"LightDarkModeToggle",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the toggle button.
'sm' for small, 'md' for medium, 'lg' for large.`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'flat'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'flat'"}]},description:`The variant of the toggle button.
'default' for standard, 'flat' for flat design.`,defaultValue:{value:"'default'",computed:!1}},initialState:{required:!1,tsType:{name:"boolean"},description:`The initial state of the toggle button.
true for dark mode, false for light mode.`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names for custom styling."}}};const j={title:"Components/LightDarkModeToggle",component:s,args:{initialState:!1}},a={args:{size:"md",variant:"default"}},r={args:{size:"sm",variant:"flat"}},t={args:{size:"lg",variant:"default"}},o={args:{initialState:!0}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'flat'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'default'
  }
}`,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var v,h,x;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initialState: true
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const w=["Default","SmallFlat","LargeDefault","DarkModeInitial"];export{o as DarkModeInitial,a as Default,t as LargeDefault,r as SmallFlat,w as __namedExportsOrder,j as default};
