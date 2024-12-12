var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var A = r, { children: a } = A, t = H(A, ["children"]);
  return /* @__PURE__ */ L.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M184,26H72A14,14,0,0,0,58,40V76a14.06,14.06,0,0,0,5.6,11.2L118,128,63.6,168.8A14.06,14.06,0,0,0,58,180v36a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V180.36a14.08,14.08,0,0,0-5.56-11.17L138,128l54.49-41.19A14.08,14.08,0,0,0,198,75.64V40A14,14,0,0,0,184,26ZM72,38H184a2,2,0,0,1,2,2V58H70V40A2,2,0,0,1,72,38ZM186,180.36V216a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V180a2,2,0,0,1,.8-1.6L128,135.51l57.22,43.25A2,2,0,0,1,186,180.36Zm-.79-103.12L128,120.49,70.8,77.6A2,2,0,0,1,70,76V70H186v5.64A2,2,0,0,1,185.21,77.24Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
