var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    l.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var d = (e, t) => {
  var a = {};
  for (var o in e)
    l.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const M = h((o, a) => {
  var p = o, { children: e } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(s, i({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M200,144H56l72-72Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M133.66,66.34a8,8,0,0,0-11.32,0l-72,72A8,8,0,0,0,56,152h64v72a8,8,0,0,0,16,0V152h64a8,8,0,0,0,5.66-13.66ZM75.31,136,128,83.31,180.69,136ZM224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};