import{g as k,s as v}from"./sysconfig.79a9b122.js";import{t as x}from"./index.73635d93.js";import{r as g,a2 as U,ai as u,as as K,U as Y,o as B,c as A,Z as e,T as l,X as r,a as b}from"./@vue.81e65c16.js";import"./element-plus.aff2968d.js";import"./lodash-es.759d0354.js";import"./@vueuse.d6949a36.js";import"./universal-cookie.9008d64e.js";import"./cookie.ccf51230.js";import"./@element-plus.0ddfaa13.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./dayjs.8ff0c08c.js";import"./axios.23bc5756.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.4bc9703a.js";import"./vue-router.fe3267df.js";import"./vuex.5f15401c.js";import"./nprogress.18e92d20.js";const T={class:"bg-white p-4 rounded"},R=b("small",{class:"text-gray-500 flex mt-1"},"\u8BF7\u8865\u5168 http:// \u6216 https://",-1),N=b("small",{class:"text-gray-500 flex mt-1"},"api\u5B89\u5168\u529F\u80FD\u5F00\u542F\u4E4B\u540E\u8C03\u7528\u524D\u7AEFapi\u9700\u8981\u4F20\u8F93\u7B7E\u540D\u4E32",-1),D=b("small",{class:"text-gray-500 flex mt-1"},"\u79D8\u94A5\u8BBE\u7F6E\u5173\u7CFB\u7CFB\u7EDF\u4E2Dapi\u8C03\u7528\u4F20\u8F93\u7B7E\u540D\u4E32\u7684\u7F16\u7801\u89C4\u5219\uFF0C\u4EE5\u53CA\u4F1A\u5458token\u89E3\u6790\uFF0C\u8BF7\u614E\u91CD\u8BBE\u7F6E\uFF0C\u6CE8\u610F\u8BBE\u7F6E\u4E4B\u540E\u5BF9\u5E94\u4F1A\u5458\u8981\u6C42\u91CD\u65B0\u767B\u5F55\u83B7\u53D6token",-1),de={__name:"base",setup(j){const c=g("first"),o=U({open_reg:1,reg_method:"username",password_min:7,password_encrypt:[],upload_method:"oss",upload_config:{Bucket:"",ACCESS_KEY:"",SECRET_KEY:"",http:""},api_safe:1,api_secret:""}),s=g(!1);function V(){s.value=!0,k().then(i=>{for(const t in o)o[t]=i[t];o.password_encrypt=o.password_encrypt.split(",")}).finally(()=>{s.value=!1})}V();const E=()=>{s.value=!0,v({...o,password_encrypt:o.password_encrypt.join(",")}).then(i=>{x("\u4FEE\u6539\u6210\u529F"),V()}).finally(()=>{s.value=!1})};return(i,t)=>{const n=u("el-radio"),m=u("el-radio-group"),d=u("el-form-item"),p=u("el-input"),_=u("el-checkbox"),y=u("el-checkbox-group"),f=u("el-tab-pane"),w=u("el-tabs"),C=u("el-button"),S=u("el-form"),h=K("loading");return Y((B(),A("div",T,[e(S,{model:o,"label-width":"160px"},{default:l(()=>[e(w,{modelValue:c.value,"onUpdate:modelValue":t[11]||(t[11]=a=>c.value=a)},{default:l(()=>[e(f,{label:"\u6CE8\u518C\u4E0E\u8BBF\u95EE",name:"first"},{default:l(()=>[e(d,{label:"\u662F\u5426\u5141\u8BB8\u6CE8\u518C\u4F1A\u5458"},{default:l(()=>[e(m,{modelValue:o.open_reg,"onUpdate:modelValue":t[0]||(t[0]=a=>o.open_reg=a)},{default:l(()=>[e(n,{label:0,border:""},{default:l(()=>[r(" \u5173\u95ED ")]),_:1}),e(n,{label:1,border:""},{default:l(()=>[r(" \u5F00\u542F ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u6CE8\u518C\u7C7B\u578B"},{default:l(()=>[e(m,{modelValue:o.reg_method,"onUpdate:modelValue":t[1]||(t[1]=a=>o.reg_method=a)},{default:l(()=>[e(n,{label:"username",border:""},{default:l(()=>[r(" \u666E\u901A\u6CE8\u518C ")]),_:1}),e(n,{label:"phone",border:""},{default:l(()=>[r(" \u624B\u673A\u6CE8\u518C ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"\u5BC6\u7801\u6700\u5C0F\u957F\u5EA6"},{default:l(()=>[e(p,{modelValue:o.password_min,"onUpdate:modelValue":t[2]||(t[2]=a=>o.password_min=a),placeholder:"\u5BC6\u7801\u6700\u5C0F\u957F\u5EA6",style:{width:"30%"},type:"number"},null,8,["modelValue"])]),_:1}),e(d,{label:"\u5F3A\u5236\u5BC6\u7801\u590D\u6742\u5EA6"},{default:l(()=>[e(y,{modelValue:o.password_encrypt,"onUpdate:modelValue":t[3]||(t[3]=a=>o.password_encrypt=a)},{default:l(()=>[e(_,{label:"0",border:""},{default:l(()=>[r("\u6570\u5B57")]),_:1}),e(_,{label:"1",border:""},{default:l(()=>[r("\u5C0F\u5199\u5B57\u6BCD")]),_:1}),e(_,{label:"2",border:""},{default:l(()=>[r("\u5927\u5199\u5B57\u6BCD")]),_:1}),e(_,{label:"3",border:""},{default:l(()=>[r("\u7B26\u53F7")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(f,{label:"\u4E0A\u4F20\u8BBE\u7F6E",name:"second"},{default:l(()=>[e(d,{label:"\u9ED8\u8BA4\u4E0A\u4F20\u65B9\u5F0F"},{default:l(()=>[e(m,{modelValue:o.upload_method,"onUpdate:modelValue":t[4]||(t[4]=a=>o.upload_method=a)},{default:l(()=>[e(n,{label:"oss",border:""},{default:l(()=>[r(" \u5BF9\u8C61\u5B58\u50A8 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Bucket"},{default:l(()=>[e(p,{modelValue:o.upload_config.Bucket,"onUpdate:modelValue":t[5]||(t[5]=a=>o.upload_config.Bucket=a),placeholder:"Bucket",style:{width:"30%"}},null,8,["modelValue"])]),_:1}),e(d,{label:"ACCESS_KEY"},{default:l(()=>[e(p,{modelValue:o.upload_config.ACCESS_KEY,"onUpdate:modelValue":t[6]||(t[6]=a=>o.upload_config.ACCESS_KEY=a),placeholder:"ACCESS_KEY",style:{width:"30%"}},null,8,["modelValue"])]),_:1}),e(d,{label:"SECRET_KEY"},{default:l(()=>[e(p,{modelValue:o.upload_config.SECRET_KEY,"onUpdate:modelValue":t[7]||(t[7]=a=>o.upload_config.SECRET_KEY=a),placeholder:"SECRET_KEY",style:{width:"30%"}},null,8,["modelValue"])]),_:1}),e(d,{label:"\u7A7A\u95F4\u57DF\u540D"},{default:l(()=>[e(p,{modelValue:o.upload_config.http,"onUpdate:modelValue":t[8]||(t[8]=a=>o.upload_config.http=a),placeholder:"\u7A7A\u95F4\u57DF\u540D",style:{width:"30%"}},null,8,["modelValue"]),R]),_:1})]),_:1}),e(f,{label:"Api\u5B89\u5168",name:"third"},{default:l(()=>[e(d,{label:"\u662F\u5426\u5F00\u542FAPI\u5B89\u5168"},{default:l(()=>[e(m,{modelValue:o.api_safe,"onUpdate:modelValue":t[9]||(t[9]=a=>o.api_safe=a)},{default:l(()=>[e(n,{label:0,border:""},{default:l(()=>[r(" \u5173\u95ED ")]),_:1}),e(n,{label:1,border:""},{default:l(()=>[r(" \u5F00\u542F ")]),_:1})]),_:1},8,["modelValue"]),N]),_:1}),e(d,{label:"\u79D8\u94A5"},{default:l(()=>[e(p,{modelValue:o.api_secret,"onUpdate:modelValue":t[10]||(t[10]=a=>o.api_secret=a),placeholder:"\u79D8\u94A5",style:{width:"30%"}},null,8,["modelValue"]),D]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(d,null,{default:l(()=>[e(C,{type:"primary",size:"default",onClick:E},{default:l(()=>[r("\u4FDD\u5B58")]),_:1})]),_:1})]),_:1},8,["model"])])),[[h,s.value]])}}};export{de as default};
