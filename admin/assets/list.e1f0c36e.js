import{r as v,ai as l,as as q,o as G,S as $,T as t,a as i,Z as e,X as D,U as M,u as o,Y as w,c as Y,F as Z,a6 as A}from"./@vue.81e65c16.js";import{_ as H}from"./ListHeader.3c627458.js";import{_ as P}from"./FormDrawer.bf3acaa6.js";import{k as J,q as K,t as O,v as Q,j as W,w as ee,x as te,y as oe,z as le}from"./category.6f92cdbf.js";import{u as X,a as ne}from"./useCommon.39802c06.js";import{t as E}from"./index.73635d93.js";import"./element-plus.aff2968d.js";import"./lodash-es.759d0354.js";import"./@vueuse.d6949a36.js";import"./universal-cookie.9008d64e.js";import"./cookie.ccf51230.js";import"./@element-plus.0ddfaa13.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./dayjs.8ff0c08c.js";import"./axios.23bc5756.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.4bc9703a.js";import"./vue-router.fe3267df.js";import"./vuex.5f15401c.js";import"./nprogress.18e92d20.js";const ae={class:"flex"},se={class:"flex-1"},re={class:"text-gray-400 text-xs mb-1"},ie={class:"text-gray-400 text-xs"},ce={class:"text-rose-500"},_e={class:"text-gray-500 text-xs"},de={class:"flex items-center justify-center mt-5"},ue={__name:"ChooseGoods",setup(j,{expose:k}){const r=v(!1),{handleSelectionChange:_,multipleTableRef:y,searchForm:L,tableData:d,loading:S,currentPage:u,total:b,limit:a,getData:c,multiSelectionIds:m}=X({searchForm:{title:"",tab:"all",category_id:null},getList:J,onGetListSuccess:n=>{d.value=n.list,b.value=n.totalCount}});function C(){r.value=!1}const p=v(null),R=(n=null)=>{p.value=n,r.value=!0},f=()=>{typeof p.value=="function"&&p.value(m.value),C()};return k({open:R}),(n,g)=>{const x=l("el-table-column"),z=l("el-image"),B=l("el-divider"),F=l("el-table"),I=l("el-pagination"),T=l("el-button"),N=l("el-dialog"),U=q("loading");return G(),$(N,{title:"\u5546\u54C1\u9009\u62E9",modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=s=>r.value=s),width:"80%","destroy-on-close":""},{footer:t(()=>[i("span",null,[e(T,{onClick:C},{default:t(()=>[D("\u53D6\u6D88")]),_:1}),e(T,{type:"primary",onClick:f},{default:t(()=>[D("\u786E\u5B9A")]),_:1})])]),default:t(()=>[M((G(),$(F,{ref_key:"multipleTableRef",ref:y,onSelectionChange:o(_),data:o(d),stripe:"",style:{width:"100%"},height:"300px"},{default:t(()=>[e(x,{type:"selection",width:"55"}),e(x,{label:"\u5546\u54C1"},{default:t(({row:s})=>[i("div",ae,[e(z,{class:"mr-3 rounded",src:s.cover,fit:"cover",lazy:!0,style:{width:"50px",height:"50px"}},null,8,["src"]),i("div",se,[i("p",null,w(s.title),1),i("p",re,"\u5206\u7C7B:"+w(s.category?s.category.name:"\u672A\u5206\u7C7B"),1),i("p",ie,"\u521B\u5EFA\u65F6\u95F4\uFF1A"+w(s.create_time),1)])])]),_:1}),e(x,{label:"\u603B\u5E93\u5B58",width:"90",prop:"stock",align:"center"}),e(x,{label:"\u4EF7\u683C\uFF08\u5143\uFF09",width:"150",align:"center"},{default:t(({row:s})=>[i("span",ce,"\uFFE5"+w(s.min_price),1),e(B,{direction:"vertical"}),i("span",_e,"\uFFE5"+w(s.min_oprice),1)]),_:1})]),_:1},8,["onSelectionChange","data"])),[[U,o(S)]]),i("div",de,[e(I,{background:"",layout:"prev, pager ,next",total:o(b),"current-page":o(u),"page-size":o(a),onCurrentChange:o(c)},null,8,["total","current-page","page-size","onCurrentChange"])])]),_:1},8,["modelValue"])}}},me={__name:"GoodsDrawer",setup(j,{expose:k}){const r=v(null),_=v(0),y=v([]),L=a=>{_.value=a.id,a.goodsDrawerLoading=!0,d().then(c=>r.value.open()).finally(()=>{a.goodsDrawerLoading=!1})};function d(){return K(_.value).then(a=>{y.value=a.map(c=>(c.loading=!1,c))})}const S=a=>{a.loading=!0,O(a.id).then(c=>{E("\u5220\u9664\u6210\u529F"),d()})},u=v(null),b=()=>{u.value.open(a=>{r.value.showLoading(),Q({category_id:_.value,goods_ids:a}).then(c=>{d(),E("\u5173\u8054\u6210\u529F")}).finally(()=>{r.value.hideLoading()})})};return k({open:L}),(a,c)=>{const m=l("el-table-column"),C=l("el-image"),p=l("el-button"),R=l("el-popconfirm"),f=l("el-table");return G(),Y(Z,null,[e(P,{ref_key:"formDrawerRef",ref:r,title:"\u63A8\u8350\u5546\u54C1",onSubmit:b,confirmText:"\u5173\u8054"},{default:t(()=>[e(f,{data:y.value,border:"",stripe:"",style:{width:"100%"}},{default:t(()=>[e(m,{prop:"goods_id",label:"ID",width:"60"}),e(m,{label:"\u5546\u54C1\u5C01\u9762",width:"180"},{default:t(({row:n})=>[e(C,{src:n.cover,fit:"fill",lazy:!0,style:{width:"64px",height:"64px"}},null,8,["src"])]),_:1}),e(m,{prop:"name",label:"\u5546\u54C1\u540D\u79F0",width:"180"}),e(m,{label:"\u64CD\u4F5C"},{default:t(({row:n})=>[e(R,{title:"\u662F\u5426\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F",confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",onConfirm:g=>S(n)},{reference:t(()=>[e(p,{text:"",type:"primary",size:"small",loading:n.loading},{default:t(()=>[D("\u5220\u9664")]),_:2},1032,["loading"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1},512),e(ue,{ref_key:"ChooseGoodsRef",ref:u},null,512)],64)}}};const pe={class:"custom-tree-node"},fe={class:"ml-auto"},Ee={__name:"list",setup(j){const{loading:k,tableData:r,getData:_,handleDelete:y,handleStatusChange:L}=X({getList:W,onGetListSuccess:f=>{r.value=f.map(n=>(n.goodsDrawerLoading=!1,n))},delete:ee,updateStatus:te}),{formDrawerRef:d,formRef:S,form:u,rules:b,drawerTitle:a,handleSubmit:c,handleCreate:m,handleEdit:C}=ne({form:{name:""},rules:{},getData:_,update:oe,create:le}),p=v(null),R=f=>p.value.open(f);return(f,n)=>{const g=l("el-button"),x=l("el-switch"),z=l("el-popconfirm"),B=l("el-tree"),F=l("el-input"),I=l("el-form-item"),T=l("el-form"),N=l("el-card"),U=q("loading");return G(),$(N,{shadow:"never",class:"border-0"},{default:t(()=>[e(H,{onCreate:o(m),onRefresh:o(_)},null,8,["onCreate","onRefresh"]),M((G(),$(B,{data:o(r),props:{label:"name",children:"child"},"node-key":"id"},{default:t(({node:s,data:h})=>[i("div",pe,[i("span",null,w(h.name),1),i("div",fe,[e(g,{text:"",type:"primary",size:"small",onClick:V=>R(h),loading:h.goodsDrawerLoading},{default:t(()=>[D("\u63A8\u8350\u5546\u54C1")]),_:2},1032,["onClick","loading"]),e(x,{modelValue:h.status,"active-value":1,"inactive-value":0,onChange:V=>o(L)(V,h)},null,8,["modelValue","onChange"]),e(g,{text:"",type:"primary",size:"small",onClick:A(V=>o(C)(h),["stop"])},{default:t(()=>[D("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(z,{title:"\u662F\u5426\u8981\u5220\u9664\u8BE5\u8BB0\u5F55\uFF1F",confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",onConfirm:V=>o(y)(h.id)},{reference:t(()=>[e(g,{text:"",type:"primary",size:"small"},{default:t(()=>[D("\u5220\u9664")]),_:1})]),_:2},1032,["onConfirm"])])])]),_:1},8,["data"])),[[U,o(k)]]),e(P,{ref_key:"formDrawerRef",ref:d,title:o(a),onSubmit:o(c)},{default:t(()=>[e(T,{model:o(u),ref_key:"formRef",ref:S,rules:o(b),"label-width":"80px",inline:!1},{default:t(()=>[e(I,{label:"\u5206\u7C7B\u540D\u79F0",prop:"name"},{default:t(()=>[e(F,{modelValue:o(u).name,"onUpdate:modelValue":n[0]||(n[0]=s=>o(u).name=s),placeholder:"\u5206\u7C7B\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","onSubmit"]),e(me,{ref_key:"GoodsDrawerRef",ref:p},null,512)]),_:1})}}};export{Ee as default};