import{q as a,a as t}from"./index.73635d93.js";function r(o,s={}){let e=a(s);return t.get(`/admin/goods/${o}${e}`)}function d(o,s){return t.post("/admin/goods/changestatus",{ids:o,status:s})}function u(o){return t.post("/admin/goods",o)}function i(o,s){return t.post(`/admin/goods/${o}`,s)}function c(o){return t.post("/admin/goods/delete_all",{ids:o})}function g(o){return t.post("/admin/goods/restore",{ids:o})}function p(o){return t.post("/admin/goods/destroy",{ids:o})}function m(o){return t.get(`/admin/goods/read/${o}`)}function f(o,s){return t.post(`/admin/goods/banners/${o}`,s)}function _(o,s){return t.post(`/admin/goods/updateskus/${o}`,s)}function l(o){return t.post("/admin/goods_skus_card",o)}function y(o,s){return t.post(`/admin/goods_skus_card/${o}`,s)}function G(o){return t.post(`/admin/goods_skus_card/${o}/delete`)}function k(o){return t.post("/admin/goods_skus_card/sort",o)}function C(o){return t.post("/admin/goods_skus_card_value",o)}function $(o,s){return t.post(`/admin/goods_skus_card_value/${o}`,s)}function S(o){return t.post(`/admin/goods_skus_card_value/${o}/delete`)}function v(o,s){return t.post(`/admin/goods_skus_card/${o}/set`,s)}function h(){return t.get("/admin/category")}function q(o){return t.post("/admin/category",o)}function V(o,s){return t.post("/admin/category/"+o,s)}function b(o,s){return t.post(`/admin/category/${o}/update_status`,{status:s})}function x(o){return t.post(`/admin/category/${o}/delete`)}function L(o){return t.get(`/admin/app_category_item/list?category_id=${o}`)}function j(o){return t.post(`/admin/app_category_item/${o}/delete`)}function w(o){return t.post("/admin/app_category_item",o)}export{y as a,k as b,l as c,G as d,v as e,S as f,C as g,$ as h,_ as i,h as j,r as k,c as l,d as m,u as n,g as o,p,L as q,m as r,f as s,j as t,i as u,w as v,x as w,b as x,V as y,q as z};