var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const l = A((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M224,116H200a4,4,0,0,0,0,8h19.91A92.13,92.13,0,0,1,132,211.91V91.71a28,28,0,1,0-8,0v120.2A92.13,92.13,0,0,1,36.09,124H56a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4,100,100,0,0,0,200,0A4,4,0,0,0,224,116ZM108,64a20,20,0,1,1,20,20A20,20,0,0,1,108,64Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
