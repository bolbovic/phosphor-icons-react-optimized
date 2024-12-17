var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const Z = d((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M162.84,93.16a4,4,0,0,1,0,5.66l-64,64a4,4,0,0,1-5.66-5.66l64-64A4,4,0,0,1,162.84,93.16Zm49.95-49.95a52.07,52.07,0,0,0-73.56,0L109.17,73.27a4,4,0,0,0,5.65,5.66l30.07-30.06a44,44,0,0,1,62.24,62.24l-30.07,30.06a4,4,0,0,0,5.66,5.66l30.07-30.06A52.07,52.07,0,0,0,212.79,43.21ZM141.17,177.06l-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
