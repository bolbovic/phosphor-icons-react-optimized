var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (c)
    for (var e of c(t))
      A.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && A.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const f = Z((o, e) => {
  var r = o, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement("path", { d: "M152,56a24,24,0,1,1-24-24A24,24,0,0,1,152,56Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M128,88A32,32,0,1,0,96,56,32,32,0,0,0,128,88Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,40ZM48,96a16,16,0,1,1,16,16A16,16,0,0,1,48,96Zm174.24,14.61A8,8,0,0,1,211,111.87c-1.15-.89-23.71-17.7-59.32.61a214.93,214.93,0,0,1-3,30.35l32.43,27a8,8,0,0,1,2.47,8.68l-16,48a8,8,0,0,1-15.18-5.06l14.27-42.82-22.08-18.4a141.86,141.86,0,0,1-5.1,14.33c-13.75,32.74-38.38,54.63-73.2,65.08a8,8,0,0,1-4.6-15.32c60.68-18.21,71.14-72.22,73.42-101.65C108,139.88,86.57,144,72.36,144a59.59,59.59,0,0,1-19.67-3.27A8,8,0,0,1,56,125.4a7.82,7.82,0,0,1,3.31.73s26.76,10.68,72.19-20.2c52.29-35.54,88-7.77,89.51-6.57A8,8,0,0,1,222.24,110.61Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
