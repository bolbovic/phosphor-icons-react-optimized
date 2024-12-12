var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var v = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    v.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    v.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import A, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var l = o, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ A.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M87.3,156l-20,56a12,12,0,0,1-22.6,0l-20-56A12,12,0,0,1,47.3,148L56,172.32,64.7,148A12,12,0,0,1,87.3,156ZM212,196H192v-4h12a12,12,0,0,0,0-24H192v-4h20a12,12,0,0,0,0-24H180a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h32a12,12,0,0,0,0-24Zm-68-56a12,12,0,0,0-12,12v38a6,6,0,0,1-12,0V152a12,12,0,0,0-24,0v38a30,30,0,0,0,60,0V152A12,12,0,0,0,144,140ZM36,108V40A20,20,0,0,1,56,20h96a12,12,0,0,1,8.49,3.52l56,56A12,12,0,0,1,220,88v20a12,12,0,0,1-24,0v-4H148a12,12,0,0,1-12-12V44H60v64a12,12,0,0,1-24,0ZM160,80h23L160,57Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
