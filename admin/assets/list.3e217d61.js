import{_ as Z,a as A}from"./SearchItem.584b0c12.js";import{q as H,a as C,t as D}from"./index.73635d93.js";import{u as J}from"./useCommon.39802c06.js";import{r as E,ai as i,as as K,o as d,S as x,T as s,Z as t,u as o,U as M,a as l,X as u,Y as f,W as O,c as y,F as L,aa as F}from"./@vue.81e65c16.js";import"./element-plus.aff2968d.js";import"./lodash-es.759d0354.js";import"./@vueuse.d6949a36.js";import"./universal-cookie.9008d64e.js";import"./cookie.ccf51230.js";import"./@element-plus.0ddfaa13.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./dayjs.8ff0c08c.js";import"./axios.23bc5756.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.4bc9703a.js";import"./vue-router.fe3267df.js";import"./vuex.5f15401c.js";import"./nprogress.18e92d20.js";function Q(m,c={}){let v=H(c);return C.get(`/admin/goods_comment/${m}${v}`)}function w(m,c){return C.post(`/admin/goods_comment/${m}/update_status`,{status:c})}function ee(m,c){return C.post(`/admin/goods_comment/review/${m}`,{data:c})}const te={class:"flex pl-18"},ae={class:"flex-1"},le={class:"flex items-center"},se={class:"text-gray-400 ml-2"},oe={class:"py-2"},ne={key:0},ie={class:"py-2"},re={class:"flex font-bold"},de={class:"flex items-center"},ce={class:"ml-3"},ue={class:"flex items-center justify-center mt-5"},Te={__name:"list",setup(m){const c=E([]),{searchForm:v,resetSearchForm:U,tableData:k,loading:B,currentPage:G,total:V,limit:N,getData:b,handleDelete:me,handleStatusChange:T}=J({searchForm:{title:""},getList:Q,onGetListSuccess:r=>{k.value=r.list.map(n=>(n.statusLoading=!1,n.textareaEdit=!1,n)),V.value=r.totalCount,c.value=r.roles},updateStatus:w}),g=E(""),$=(r,n="")=>{g.value=n,r.textareaEdit=!0},q=r=>{if(g.value=="")return D("\u56DE\u590D\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A","error");ee(r.id,g.value).then(n=>{r.textareaEdit=!1,D("\u56DE\u590D\u6210\u529F"),b()})};return(r,n)=>{const z=i("el-input"),I=i("el-avatar"),h=i("el-button"),S=i("el-image"),p=i("el-table-column"),P=i("el-rate"),R=i("el-switch"),j=i("el-table"),W=i("el-pagination"),X=i("el-card"),Y=K("loading");return d(),x(X,{shadow:"never",class:"border-0"},{default:s(()=>[t(Z,{model:o(v),onSearch:o(b),onReset:o(U)},{default:s(()=>[t(A,{label:"\u5173\u952E\u8BCD"},{default:s(()=>[t(z,{modelValue:o(v).title,"onUpdate:modelValue":n[0]||(n[0]=e=>o(v).title=e),placeholder:"\u5546\u54C1\u6807\u9898",clearable:""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","onSearch","onReset"]),M((d(),x(j,{"default-expand-all":"",data:o(k),stripe:"",style:{width:"100%"}},{default:s(()=>[t(p,{type:"expand"},{default:s(({row:e})=>[l("div",te,[t(I,{size:50,src:e.user.avatar,fit:"fill",class:"mr-3"},null,8,["src"]),l("div",ae,[l("h6",le,[u(f(e.user.nickname||e.user.username)+" ",1),l("small",se,f(e.review_time),1),!e.textareaEdit&&!e.extra?(d(),x(h,{key:0,size:"small",class:"ml-auto",onClick:a=>$(e)},{default:s(()=>[u("\u56DE\u590D")]),_:2},1032,["onClick"])):O("",!0)]),u(" "+f(e.review.data)+" ",1),l("div",oe,[(d(!0),y(L,null,F(e.review.image,(a,_)=>(d(),x(S,{key:_,src:a,fit:"cover",lazy:!0,style:{width:"100px",height:"100px"},class:"rounded"},null,8,["src"]))),128))]),e.textareaEdit?(d(),y("div",ne,[t(z,{modelValue:g.value,"onUpdate:modelValue":n[1]||(n[1]=a=>g.value=a),placeholder:"\u8BF7\u8F93\u5165\u8BC4\u4EF7\u5185\u5BB9",type:"textarea",rows:2},null,8,["modelValue"]),l("div",ie,[t(h,{type:"primary",size:"small",onClick:a=>q(e)},{default:s(()=>[u("\u56DE\u590D")]),_:2},1032,["onClick"]),t(h,{size:"small",class:"ml-2",onClick:a=>e.textareaEdit=!1},{default:s(()=>[u("\u53D6\u6D88")]),_:2},1032,["onClick"])])])):(d(!0),y(L,{key:1},F(e.extra,(a,_)=>(d(),y("div",{class:"mt-3 bg-gray-100 p-3 rounded",key:_},[l("h6",re,[u(" \u5BA2\u670D "),t(h,{type:"info",size:"small",class:"ml-auto",onClick:pe=>$(e,a.data)},{default:s(()=>[u("\u4FEE\u6539")]),_:2},1032,["onClick"])]),l("p",null,f(a.data),1)]))),128))])])]),_:1}),t(p,{label:"ID",width:"70",align:"center",prop:"id"}),t(p,{label:"\u5546\u54C1",width:"200"},{default:s(({row:e})=>{var a,_;return[l("div",de,[t(S,{src:e.goods_item?e.goods_item.cover:"",fit:"fill",lazy:!0,style:{width:"50px",height:"50px"},class:"rounded"},null,8,["src"]),l("div",ce,[l("h6",null,f((_=(a=e.goods_item)==null?void 0:a.title)!=null?_:"\u5546\u54C1\u5DF2\u88AB\u5220\u9664"),1)])])]}),_:1}),t(p,{label:"\u8BC4\u4EF7\u4FE1\u606F",width:"200"},{default:s(({row:e})=>[l("div",null,[l("p",null,"\u7528\u6237\uFF1A"+f(e.user.nickname||e.user.username),1),l("p",null,[t(P,{modelValue:e.rating,"onUpdate:modelValue":a=>e.rating=a,disabled:"","show-score":"","text-color":"#ff9900"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:1}),t(p,{label:"\u8BC4\u4EF7\u65F6\u95F4",width:"180",align:"center",prop:"review_time"}),t(p,{label:"\u72B6\u6001"},{default:s(({row:e})=>[t(R,{modelValue:e.status,"active-value":1,"inactive-value":0,loading:e.statusLoading,disabled:e.super==1,onChange:a=>o(T)(a,e)},null,8,["modelValue","loading","disabled","onChange"])]),_:1})]),_:1},8,["data"])),[[Y,o(B)]]),l("div",ue,[t(W,{background:"",layout:"prev, pager ,next",total:o(V),"current-page":o(G),"page-size":o(N),onCurrentChange:o(b)},null,8,["total","current-page","page-size","onCurrentChange"])])]),_:1})}}};export{Te as default};