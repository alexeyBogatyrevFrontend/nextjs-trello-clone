(()=>{var e={};e.id=931,e.ids=[931],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},86787:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>u,pages:()=>p,routeModule:()=>m,tree:()=>c});var s=r(73137),n=r(54647),a=r(4183),o=r.n(a),l=r(71775),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=s.AppPageRouteModule,c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,74305)),"/Users/bogatyrev/pc/work/study/SonnySangha/nextjs-trello-clone/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,14984)),"/Users/bogatyrev/pc/work/study/SonnySangha/nextjs-trello-clone/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/bogatyrev/pc/work/study/SonnySangha/nextjs-trello-clone/app/page.tsx"],u="/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},62101:(e,t,r)=>{Promise.resolve().then(r.bind(r,58967)),Promise.resolve().then(r.bind(r,37023))},58967:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>components_Board});var s=r(60080),n=r(60335),a=r(9885),o=r(4458),l=r(48913),i=r(45618);let getUrl=async e=>{let t=i.tO.getFilePreview(e.bucketId,e.fileId);return t};var d=r(53367),c=r(52451),p=r.n(c);let components_TodoCard=({todo:e,index:t,id:r,innerRef:o,draggableProps:l,dragHandleProps:i})=>{let c=(0,n.Y)(e=>e.deleteTask),[u,x]=(0,a.useState)(null);return(0,a.useEffect)(()=>{if(e.image){let fetchImage=async()=>{let t=await getUrl(e.image);t&&x(t.toString())};fetchImage()}},[e]),(0,s.jsxs)("div",{className:"bg-white rounded-md space-y-2 drop-shadow-md",...l,...i,ref:o,children:[(0,s.jsxs)("div",{className:"flex justify-between items-center p-5",children:[s.jsx("p",{children:e.title}),s.jsx("button",{className:" text-red-500 hover:text-red-600",onClick:()=>c(t,e,r),children:s.jsx(d.Z,{className:"ml-5 h-8 w-8"})})]}),u&&s.jsx("div",{className:"relative h-full w-full rounded-b-md",children:s.jsx(p(),{src:u,alt:"Task image",width:400,height:200,className:"w-full object-contain rounded-b-md"})})]})};var u=r(78427);let x={todo:"To Do",inprogress:"In Progress",done:"done"},components_Column=({id:e,todos:t,index:r})=>{let[a,i]=(0,n.Y)(e=>[e.searchString,e.setNewTaskType]),[d]=(0,u.a)(e=>[e.openModal]),handleAddTodo=()=>{i(e),d()};return s.jsx(o._l,{draggableId:e,index:r,children:n=>s.jsx("div",{...n.draggableProps,...n.dragHandleProps,ref:n.innerRef,children:s.jsx(o.bK,{droppableId:r.toString(),type:"card",children:(r,n)=>(0,s.jsxs)("div",{...r.droppableProps,ref:r.innerRef,className:`p-2 rounded-2xl shadow-sm ${n.isDraggingOver?"bg-green-200":"bg-white/50"}`,children:[(0,s.jsxs)("h2",{className:"flex justify-between font-bold text-xl p-2",children:[x[e],s.jsx("span",{className:"text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-sm font-normal",children:a?t.filter(e=>e.title.toLowerCase().includes(a.toLowerCase())).length:t.length})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[t.map((t,r)=>a&&!t.title.toLowerCase().includes(a.toLowerCase())?null:s.jsx(o._l,{draggableId:t.$id,index:r,children:n=>s.jsx(components_TodoCard,{todo:t,index:r,id:e,innerRef:n.innerRef,draggableProps:n.draggableProps,dragHandleProps:n.dragHandleProps})},t.$id)),r.placeholder,s.jsx("div",{className:"flex items-end justify-end p-2",children:s.jsx("button",{className:"text-green-500 hover:text-green-600",onClick:handleAddTodo,children:s.jsx(l.Z,{className:"h-10 w-10"})})})]})]})})})})},components_Board=()=>{let[e,t,r,l]=(0,n.Y)(e=>[e.board,e.getBoard,e.setBoardState,e.updateTodoInDb]);return(0,a.useEffect)(()=>{t()},[t]),s.jsx(o.Z5,{onDragEnd:t=>{let{destination:s,source:n,type:a}=t;if(!s)return;if("column"===a){let t=Array.from(e.columns.entries()),[a]=t.splice(n.index,1);t.splice(s.index,0,a);let o=new Map(t);r({...e,columns:o})}let o=Array.from(e.columns),i=o[Number(n.droppableId)],d=o[Number(s.droppableId)],c={id:i[0],todos:i[1].todos},p={id:d[0],todos:d[1].todos};if(!c||!p||n.index===s.index&&c===p)return;let u=c.todos,[x]=u.splice(n.index,1);if(c.id===p.id){u.splice(s.index,0,x);let t={id:c.id,todos:u},n=new Map(e.columns);n.set(c.id,t),r({...e,columns:n})}else{let t=Array.from(p.todos);t.splice(s.index,0,x);let n=new Map(e.columns),a={id:c.id,todos:u};n.set(c.id,a),n.set(p.id,{id:p.id,todos:t}),l(x,p.id),r({...e,columns:n})}},children:s.jsx(o.bK,{droppableId:"board",direction:"horizontal",type:"column",children:t=>s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto p-4",...t.droppableProps,ref:t.innerRef,children:Array.from(e.columns.entries()).map(([e,t],r)=>s.jsx(components_Column,{id:e,todos:t.todos,index:r},e))})})})}},37023:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(60080),n=r(60335),a=r(67966),o=r(63087),l=r(52451),i=r.n(l);r(9885);var d=r(67084),c=r.n(d);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,n.Y)(e=>[e.searchString,e.setSearchString]);return(0,s.jsxs)("header",{children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl",children:[s.jsx("div",{className:"absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50"}),s.jsx(i(),{src:"https://links.papareact.com/c2cdd5",alt:"Trello log",width:300,height:100,className:"w-44 md:w-56 pb-10 md:pb-0 object-contain"}),(0,s.jsxs)("div",{className:"flex items-center space-x-5 flex-1 justify-end w-full",children:[(0,s.jsxs)("form",{className:"flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial",children:[s.jsx(a.Z,{className:"h-6 w-6 to-gray-400"}),s.jsx("input",{type:"text",placeholder:"Search",value:e,className:"flex-1 outline-none p-2",onChange:e=>t(e.target.value)}),s.jsx("button",{type:"submit",hidden:!0,children:"Search"})]}),s.jsx(c(),{name:"Alexey Bogatyrev",round:!0,size:"50",color:"#0055d1"})]})]}),s.jsx("div",{className:"flex items-center justify-center px-5 py-2 md:py-5",children:(0,s.jsxs)("p",{className:"flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]",children:[s.jsx(o.Z,{className:"inline-block h-10 w-10 text-[#0055d1] mr-1"}),"GPT is summarising your tasks for the day..."]})})]})}},74305:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>app_page});var s=r(48144),n=r(17536);let a=(0,n.createProxy)(String.raw`/Users/bogatyrev/pc/work/study/SonnySangha/nextjs-trello-clone/components/Board.tsx`),{__esModule:o,$$typeof:l}=a,i=a.default,d=(0,n.createProxy)(String.raw`/Users/bogatyrev/pc/work/study/SonnySangha/nextjs-trello-clone/components/Header.tsx`),{__esModule:c,$$typeof:p}=d,u=d.default;r(53830);let app_page=()=>(0,s.jsxs)("main",{children:[s.jsx(u,{}),s.jsx(i,{}),s.jsx("h1",{children:"Trello 2.0 AI Clone"})]})},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(96885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[392,40,628],()=>__webpack_exec__(86787));module.exports=r})();