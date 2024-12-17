var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M196,75.64V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V76a12,12,0,0,0,4.8,9.6L121.33,128,64.8,170.4A12,12,0,0,0,60,180v36a12,12,0,0,0,12,12H184a12,12,0,0,0,12-12V180.36a12.05,12.05,0,0,0-4.76-9.57L134.63,128l56.61-42.79A12.05,12.05,0,0,0,196,75.64ZM184,220H72a4,4,0,0,1-4-4V188H188v28A4,4,0,0,1,184,220Zm4-40H68a4,4,0,0,1,1.6-3.2L128,133l58.42,44.16A4,4,0,0,1,188,180Zm0-104.36a4,4,0,0,1-1.59,3.19L128,123,69.6,79.2A4,4,0,0,1,68,76V40a4,4,0,0,1,4-4H184a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
