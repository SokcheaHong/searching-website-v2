import{_ as H}from"./BCpTLciW.js";import{f as _,o as s,c as i,h as d,w as $,i as p,a as t,t as g,g as r,n as z,F as y,s as b}from"./CX3Fp1RJ.js";import{_ as V}from"./DlAUqK2U.js";import{f as M,d as A}from"./xqHNy86_.js";import{h as k}from"./C5S46NFB.js";import{u as D}from"./DZwoDgsd.js";const L={class:"flex justify-between items-center py-3"},B=t("div",{class:"text-slate-800 font-bold text-2xl border-l-4 border-blue-500 px-2"}," សេចក្តីជូនដំណឹង ",-1),C=t("svg",{class:"inline-block text-inherit h-[1em] w-[1em]","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"list",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{class:"",fill:"currentColor",d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"})],-1),F=t("span",null,"មើលបន្ថែម",-1),ae=_({__name:"Header",props:{type:{type:String,validator:a=>["all","featured"].includes(a),required:!1,default:"all"}},setup(a){const e=a;return(o,u)=>{const l=H;return s(),i("div",L,[B,e.type==="featured"?(s(),d(l,{key:0,to:{path:"/news",state:{isFeature:1}},class:"text-blue-600 font-bold text-lg link hover:text-blue-800 link_transition px-2 flex items-center gap-1"},{default:$(()=>[C,F]),_:1})):p("",!0)])}}}),N={},S={class:"w-full flex flex-col sm:flex-row md:flex-row items-start md:items-center gap-3 py-3 md:px-5 border-b"},T=t("div",{class:"w-[300px] flex items-center justify-start gap-3"},[t("div",{class:"w-[180px] h-[20px] skeleton"}),t("div",{class:"w-full min-w-[160px] h-[32px] skeleton"})],-1),Y=t("div",{class:"w-full lg:w-[400px] h-[24px] skeleton"},null,-1),j=[T,Y];function K(a,e){return s(),i("div",S,j)}const P=V(N,[["render",K]]),I={class:"w-full flex flex-col sm:flex-row md:flex-row items-start md:items-center text-slate-500 gap-2 py-3 md:px-5 border-b"},q={class:"w-[300px] flex items-center justify-start"},E={class:"w-[180px] text-sm"},G={class:"w-full mx-2 min-w-[160px]"},J=["innerHTML"],O=t("svg",{class:"inline-block text-inherit h-[1em] w-[1em]","aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"copy",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[t("path",{fill:"currentColor",d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"})],-1),Q=t("span",null,"មើលលម្អិត",-1),R=_({__name:"Item",props:{item:{}},setup(a){const e=a;return(o,u)=>{var m,c,n,x,h,f,w,v;const l=H;return s(),i("div",I,[t("div",q,[t("div",E,g(("formatDateToKhmer"in o?o.formatDateToKhmer:r(M))(r(k)(((m=e.item)==null?void 0:m.publishedAt)||((c=e.item)==null?void 0:c.createdAt)).unix())),1),t("div",G,[t("span",{class:"type-text-badge-text !text-xs w-full inline-block text-white p-2 uppercase text-bold text-center tracking-wide rounded-sm",style:z({backgroundColor:(n=e.item.category)==null?void 0:n.color})},g((x=e.item.category)==null?void 0:x.name),5)])]),t("div",{class:"w-5/5 md:max-w-[64%] xl:max-w-[67%] text-slate-700",innerHTML:(h=e.item)==null?void 0:h.body},null,8,J),((f=e.item.category)==null?void 0:f.type)=="update"?(s(),d(l,{key:0,to:"/update-laws?date="+r(k)(((w=e.item)==null?void 0:w.publishedAt)||((v=e.item)==null?void 0:v.createdAt)).format("YYYY-MM-DD"),class:"link text-blue-600 text-nowrap hover:text-blue-800 link_transition px-2 flex items-center gap-1"},{default:$(()=>[O,Q]),_:1},8,["to"])):p("",!0)])}}}),U={class:"grid gap-3"},oe=_({__name:"List",setup(a){const e=A();return D("news",()=>{var o;return e.getMany({isFeatured:Number(!((o=history==null?void 0:history.state)!=null&&o.isFeature)||1)})}),(o,u)=>{var c;const l=P,m=R;return s(),i("div",U,[r(e).loading?(s(!0),i(y,{key:0},b(r(e).items,n=>(s(),d(l,{key:n.id}))),128)):(c=r(e).items)!=null&&c.length?(s(!0),i(y,{key:1},b(r(e).items,n=>(s(),d(m,{key:n.id,item:n},null,8,["item"]))),128)):p("",!0)])}}});export{ae as _,oe as a};
