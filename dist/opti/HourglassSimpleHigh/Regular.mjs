var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? c(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, s = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      f.call(t, a) && o(e, a, t[a]);
  return e;
};
var M = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && r)
    for (var l of r(e))
      t.indexOf(l) < 0 && f.call(e, l) && (a[l] = e[l]);
  return a;
};
import Z, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const A = d((l, a) => {
  var m = l, { children: e } = m, t = M(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, s({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.7,59.31l.12.13L116.43,128,44.82,196.56l-.12.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM89.43,80h77.14L128,116.92ZM200,48l-16.7,16H72.72L56,48ZM56,208l72-68.92L200,208Z" }));
});
A.displayName = "Regular";
export {
  A as Regular,
  A as default
};
