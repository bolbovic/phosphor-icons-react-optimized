var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const A = d((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm22.36-99.15L112,172h40a4,4,0,0,1,0,8H104a4,4,0,0,1-3.2-6.4L144,116A20,20,0,0,0,140,88,20,20,0,0,0,112,92a20.08,20.08,0,0,0-2.89,5.37,4,4,0,0,1-7.55-2.66,28.19,28.19,0,0,1,4-7.52,28,28,0,1,1,44.72,33.7Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
