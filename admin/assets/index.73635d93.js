import{S as y,o as O,ai as I,at as S}from"./@vue.81e65c16.js";import{E as D,a as v,i as k}from"./element-plus.aff2968d.js";import{c as V,a as N}from"./vue-router.fe3267df.js";import{c as w}from"./vuex.5f15401c.js";import{a as b}from"./axios.23bc5756.js";import{n as A}from"./nprogress.18e92d20.js";import{p as M}from"./@vueuse.d6949a36.js";import{Q as B}from"./@element-plus.0ddfaa13.js";import"./lodash-es.759d0354.js";import"./@popperjs.36402333.js";import"./@ctrl.b082b0c1.js";import"./dayjs.8ff0c08c.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.4bc9703a.js";import"./universal-cookie.9008d64e.js";import"./cookie.ccf51230.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const U={__name:"App",setup(t){return console.log({VITE_APP_BASE_API:"http://ceshi13.dishait.cn",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0}),(e,o)=>{const r=I("router-view");return O(),y(r)}}},x="modulepreload",$=function(t){return"/"+t},g={},s=function(e,o,r){if(!o||o.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=$(n),n in g)return;g[n]=!0;const a=n.endsWith(".css"),P=a?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const _=i[l];if(_.href===n&&(!a||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${P}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":x,a||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),a)return new Promise((l,_)=>{u.addEventListener("load",l),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},C=()=>s(()=>import("./admin.cc0e5c2c.js"),["assets/admin.cc0e5c2c.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/admin.1e71f0ab.css"]),F=()=>s(()=>import("./index.50dc6778.js"),["assets/index.50dc6778.js","assets/gsap.10236bb8.js","assets/@vue.81e65c16.js","assets/echarts.33bafa63.js","assets/tslib.60310f1a.js","assets/zrender.492fd6b5.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),W=()=>s(()=>import("./login.11b15582.js"),["assets/login.11b15582.js","assets/vue-router.fe3267df.js","assets/@vue.81e65c16.js","assets/vuex.5f15401c.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/login.186bfcea.css"]),j=()=>s(()=>import("./404.dc393bb8.js"),["assets/404.dc393bb8.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/@vue.81e65c16.js"]),q=()=>s(()=>import("./list.b50d707a.js"),["assets/list.b50d707a.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/ChooseImage.4aaac2ad.js","assets/ImageMain.fdfef588.js","assets/ImageMain.6b014d36.css","assets/ChooseImage.f524e502.css","assets/SearchItem.584b0c12.js","assets/category.6f92cdbf.js","assets/tinymce.3992270d.js","assets/@tinymce.a74df7f9.js","assets/skus.bc15ff22.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/list.fee2e253.css"]),G=()=>s(()=>import("./list.e1f0c36e.js"),["assets/list.e1f0c36e.js","assets/@vue.81e65c16.js","assets/ListHeader.3c627458.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/category.6f92cdbf.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/list.e1c8190d.css"]),H=()=>s(()=>import("./list.933b327d.js"),["assets/list.933b327d.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/ChooseImage.4aaac2ad.js","assets/ImageMain.fdfef588.js","assets/ImageMain.6b014d36.css","assets/ChooseImage.f524e502.css","assets/SearchItem.584b0c12.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),K=()=>s(()=>import("./list.88664875.js"),["assets/list.88664875.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/SearchItem.584b0c12.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),Q=()=>s(()=>import("./list.3e217d61.js"),["assets/list.3e217d61.js","assets/SearchItem.584b0c12.js","assets/@vue.81e65c16.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),z=()=>s(()=>import("./list.86cf9105.js"),["assets/list.86cf9105.js","assets/ImageMain.fdfef588.js","assets/FormDrawer.bf3acaa6.js","assets/@vue.81e65c16.js","assets/FormDrawer.928c5802.css","assets/ImageMain.6b014d36.css","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/list.42ae5eca.css"]),J=()=>s(()=>import("./list.cf7fe5bc.js"),["assets/list.cf7fe5bc.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),X=()=>s(()=>import("./base.b3fb4182.js"),["assets/base.b3fb4182.js","assets/sysconfig.79a9b122.js","assets/@vue.81e65c16.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),Y=()=>s(()=>import("./list.9e7fba57.js"),["assets/list.9e7fba57.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/useCommon.39802c06.js","assets/_plugin-vue_export-helper.cdc0426e.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/list.3228be94.css"]),Z=()=>s(()=>import("./list.77c2b27f.js"),["assets/list.77c2b27f.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/ChooseImage.4aaac2ad.js","assets/ImageMain.fdfef588.js","assets/ImageMain.6b014d36.css","assets/ChooseImage.f524e502.css","assets/SearchItem.584b0c12.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),tt=()=>s(()=>import("./list.0509ed3b.js"),["assets/list.0509ed3b.js","assets/@vue.81e65c16.js","assets/ListHeader.3c627458.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/@element-plus.0ddfaa13.js","assets/rule.f107400a.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css","assets/list.e1c8190d.css"]),et=()=>s(()=>import("./list.bfdbacbb.js"),["assets/list.bfdbacbb.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/rule.f107400a.js","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),ot=()=>s(()=>import("./list.cd0c526b.js"),["assets/list.cd0c526b.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/skus.bc15ff22.js","assets/nprogress.18e92d20.js","assets/axios.23bc5756.js","assets/nprogress.8b89e2e0.css","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js"]),nt=()=>s(()=>import("./list.9237f4b9.js"),["assets/list.9237f4b9.js","assets/ListHeader.3c627458.js","assets/@vue.81e65c16.js","assets/FormDrawer.bf3acaa6.js","assets/FormDrawer.928c5802.css","assets/useCommon.39802c06.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),it=()=>s(()=>import("./buy.ab4c9aed.js"),["assets/buy.ab4c9aed.js","assets/sysconfig.79a9b122.js","assets/FormDrawer.bf3acaa6.js","assets/@vue.81e65c16.js","assets/FormDrawer.928c5802.css","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),rt=()=>s(()=>import("./ship.4f5158aa.js"),["assets/ship.4f5158aa.js","assets/sysconfig.79a9b122.js","assets/@vue.81e65c16.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),st=()=>s(()=>import("./index.6181acdd.js"),["assets/index.6181acdd.js","assets/distribution.03eee042.js","assets/@vue.81e65c16.js","assets/useCommon.39802c06.js","assets/SearchItem.584b0c12.js","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),at=()=>s(()=>import("./setting.4605927d.js"),["assets/setting.4605927d.js","assets/distribution.03eee042.js","assets/ChooseImage.4aaac2ad.js","assets/ImageMain.fdfef588.js","assets/FormDrawer.bf3acaa6.js","assets/@vue.81e65c16.js","assets/FormDrawer.928c5802.css","assets/ImageMain.6b014d36.css","assets/ChooseImage.f524e502.css","assets/element-plus.aff2968d.js","assets/lodash-es.759d0354.js","assets/@vueuse.d6949a36.js","assets/universal-cookie.9008d64e.js","assets/cookie.ccf51230.js","assets/@element-plus.0ddfaa13.js","assets/@popperjs.36402333.js","assets/@ctrl.b082b0c1.js","assets/dayjs.8ff0c08c.js","assets/axios.23bc5756.js","assets/async-validator.fb49d0f5.js","assets/memoize-one.4ee5c96d.js","assets/escape-html.e5dfadb9.js","assets/normalize-wheel-es.8aeb3683.js","assets/@floating-ui.4bc9703a.js","assets/element-plus.12720fd9.css","assets/vue-router.fe3267df.js","assets/vuex.5f15401c.js","assets/nprogress.18e92d20.js","assets/nprogress.8b89e2e0.css"]),ct=[{path:"/",name:"admin",component:C},{path:"/login",component:W,meta:{title:"\u767B\u5F55\u9875"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:j}],ut=[{path:"/",name:"/",component:F,meta:{title:"\u540E\u53F0\u9996\u9875"}},{path:"/goods/list",name:"/goods/list",component:q,meta:{title:"\u5546\u54C1\u7BA1\u7406"}},{path:"/category/list",name:"/category/list",component:G,meta:{title:"\u5206\u7C7B\u5217\u8868"}},{path:"/user/list",name:"/user/list",component:H,meta:{title:"\u7528\u6237\u5217\u8868"}},{path:"/order/list",name:"/order/list",component:K,meta:{title:"\u8BA2\u5355\u5217\u8868"}},{path:"/comment/list",name:"/comment/list",component:Q,meta:{title:"\u8BC4\u4EF7\u5217\u8868"}},{path:"/image/list",name:"/image/list",component:z,meta:{title:"\u56FE\u5E93\u5217\u8868"}},{path:"/notice/list",name:"/notice/list",component:J,meta:{title:"\u516C\u544A\u5217\u8868"}},{path:"/setting/base",name:"/setting/base",component:X,meta:{title:"\u914D\u7F6E"}},{path:"/coupon/list",name:"/coupon/list",component:Y,meta:{title:"\u4F18\u60E0\u5238\u5217\u8868"}},{path:"/manager/list",name:"/manager/list",component:Z,meta:{title:"\u7BA1\u7406\u5458\u7BA1\u7406"}},{path:"/access/list",name:"/access/list",component:tt,meta:{title:"\u83DC\u5355\u6743\u9650\u7BA1\u7406"}},{path:"/role/list",name:"/role/list",component:et,meta:{title:"\u89D2\u8272\u7BA1\u7406"}},{path:"/skus/list",name:"/skus/list",component:ot,meta:{title:"\u89C4\u683C\u7BA1\u7406"}},{path:"/level/list",name:"/level/list",component:nt,meta:{title:"\u4F1A\u5458\u7B49\u7EA7"}},{path:"/setting/buy",name:"/setting/buy",component:it,meta:{title:"\u652F\u4ED8\u8BBE\u7F6E"}},{path:"/setting/ship",name:"/setting/ship",component:rt,meta:{title:"\u7269\u6D41\u8BBE\u7F6E"}},{path:"/distribution/index",name:"/distribution/index",component:st,meta:{title:"\u5206\u9500\u5458\u7BA1\u7406"}},{path:"/distribution/setting",name:"/distribution/setting",component:at,meta:{title:"\u5206\u9500\u8BBE\u7F6E"}}],p=V({history:N(),routes:ct});function mt(t){let e=!1;const o=r=>{r.forEach(i=>{let n=ut.find(a=>a.path==i.frontpath);n&&!p.hasRoute(n.path)&&(p.addRoute("admin",n),e=!0),i.child&&i.child.length>0&&o(i.child)})};return o(t),e}function f(t,e="success",o=!0){D({message:t,type:e,dangerouslyUseHTMLString:o,duration:3e3})}function lt(){A.start()}function pt(){A.done()}function Ft(t="\u63D0\u793A\u5185\u5BB9",e="warning",o=""){return v.confirm(t,o,{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:e})}function Wt(t,e=""){return v.prompt(t,"",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",inputValue:e})}function _t(t){let e=[];for(const r in t)t[r]&&e.push(`${r}=${encodeURIComponent(t[r])}`);let o=e.join("&");return o=o?"?"+o:"",o}function jt(t,e){R(t,e,e-1)}function qt(t,e){R(t,e,e+1)}function R(t,e,o){return t[e]=t.splice(o,1,t[e])[0],t}function Gt(){return Array.prototype.reduce.call(arguments,function(t,e){var o=[];return t.forEach(function(r){e.forEach(function(i){o.push(r.concat([i]))})}),o},[[]])}const h="admin-token",E=M();function T(){return E.get(h)}function dt(t){return E.set(h,t)}function ft(){return E.remove(h)}const c=b.create({baseURL:"http://ceshi13.dishait.cn"});c.interceptors.request.use(function(t){const e=T();return e&&(t.headers.token=e),t},function(t){return Promise.reject(t)});c.interceptors.response.use(function(t){return t.request.responseType=="blob"?t.data:t.data.data},function(t){const e=t.response.data.msg||"\u8BF7\u6C42\u5931\u8D25";return e=="\u975E\u6CD5token\uFF0C\u8BF7\u5148\u767B\u5F55\uFF01"&&d.dispatch("logout").finally(()=>location.reload()),f(e,"error"),Promise.reject(t)});function ht(t,e){return c.post("/admin/login",{username:t,password:e})}function Et(){return c.post("/admin/getinfo")}function Ht(){return c.post("/admin/logout")}function Kt(t){return c.post("/admin/updatepassword",t)}function Qt(t,e={}){let o=_t(e);return c.get(`/admin/manager/${t}${o}`)}function zt(t,e){return c.post(`/admin/manager/${t}/update_status`,{status:e})}function Jt(t){return c.post("/admin/manager",t)}function Xt(t,e){return c.post(`/admin/manager/${t}`,e)}function Yt(t){return c.post(`/admin/manager/${t}/delete`)}const gt=w({state(){return{user:{},asideWidth:"250px",menus:[],ruleNames:[]}},mutations:{SET_USERINFO(t,e){t.user=e},handleAsideWidth(t){t.asideWidth=t.asideWidth=="250px"?"64px":"250px"},SET_MENUS(t,e){t.menus=e},SET_RULENAMES(t,e){t.ruleNames=e}},actions:{login({commit:t},{username:e,password:o}){return new Promise((r,i)=>{ht(e,o).then(n=>{dt(n.token),r(n)}).catch(n=>i(n))})},getinfo({commit:t}){return new Promise((e,o)=>{Et().then(r=>{t("SET_USERINFO",r),t("SET_MENUS",r.menus),t("SET_RULENAMES",r.ruleNames),e(r)}).catch(r=>o(r))})},logout({commit:t}){ft(),t("SET_USERINFO",{})}}}),d=gt;let L=!1;p.beforeEach(async(t,e,o)=>{lt();const r=T();if(!r&&t.path!="/login")return f("\u8BF7\u5148\u767B\u5F55","error"),o({path:"/login"});if(r&&t.path=="/login")return f("\u8BF7\u52FF\u91CD\u590D\u767B\u5F55","error"),o({path:e.path?e.path:"/"});let i=!1;if(r&&!L){let{menus:a}=await d.dispatch("getinfo");L=!0,i=mt(a)}let n=(t.meta.title?t.meta.title:"")+"-\u5546\u57CE\u540E\u53F0";document.title=n,i?o(t.fullPath):o()});p.afterEach((t,e)=>pt());function Lt(t,e=!1){if(!Array.isArray(t))throw new Error(`\u9700\u8981\u914D\u7F6E\u6743\u9650\uFF0C\u4F8B\u5982 v-permission="['getStatistics3,GET']"`);const o=t.findIndex(r=>d.state.ruleNames.includes(r))!=-1;return e&&!o&&e.parentNode&&e.parentNode.removeChild(e),o}const vt={install(t){t.directive("permission",{mounted(e,o){Lt(o.value,e)}})}},m=S(U);m.use(d);m.use(p);m.use(k);for(const[t,e]of Object.entries(B))m.component(t,e);m.use(vt);m.mount("#app");export{c as a,jt as b,Gt as c,qt as d,Wt as e,Qt as f,T as g,Yt as h,zt as i,Xt as j,Jt as k,Ht as l,_t as q,p as r,Ft as s,f as t,Kt as u};