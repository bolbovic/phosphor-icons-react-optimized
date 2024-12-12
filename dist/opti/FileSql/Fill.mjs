var Z = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? Z(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, i = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && r(a, e, l[e]);
  if (c)
    for (var e of c(l))
      A.call(l, e) && r(a, e, l[e]);
  return a;
};
var p = (a, l) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      l.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as f } from "react";
import H from "../../lib/OptiBase.mjs";
const M = f((t, e) => {
  var m = t, { children: a } = m, l = p(m, ["children"]);
  return /* @__PURE__ */ s.createElement(H, i({ ref: e }, l), a, /* @__PURE__ */ s.createElement("path", { d: "M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm76,164.53a8.18,8.18,0,0,1-8.25,7.47H192a8,8,0,0,1-8-8V152.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v48h20A8,8,0,0,1,228,208.53ZM91.82,196.31a20.82,20.82,0,0,1-9.19,15.23C77.44,215,71,216,65.14,216A60.72,60.72,0,0,1,50,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.89-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.08,15.48c-4.49-1.17-15.22-2.56-19.82.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.08,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C77.5,174.17,94.06,179,91.82,196.31Zm71,3.23A39.05,39.05,0,0,0,168,180c0-19.85-14.35-36-32-36s-32,16.15-32,36,14.35,36,32,36a29.18,29.18,0,0,0,15.9-4.78l2.44,2.44a8,8,0,0,0,11.71-.43,8.18,8.18,0,0,0-.61-11.09ZM136,200c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20a24.41,24.41,0,0,1-1.18,7.51l-.93-.93a8.22,8.22,0,0,0-11.37-.41,8,8,0,0,0-.18,11.49l1.68,1.67A12.93,12.93,0,0,1,136,200Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
