var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && n.call(e, r) && (a[r] = e[r]);
  return a;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ h.createElement("path", { d: "M220,128a92,92,0,1,1-21-58.55,4,4,0,0,1-6.17,5.1A84,84,0,1,0,211.91,132H128a4,4,0,0,1,0-8h88A4,4,0,0,1,220,128Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
