var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const M = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M14,107.47l112,64a4,4,0,0,0,4,0l112-64a4,4,0,0,0,0-6.94l-112-64a4,4,0,0,0-4,0l-112,64a4,4,0,0,0,0,6.94ZM128,44.61,231.94,104,128,163.39,24.06,104ZM243.47,142a4,4,0,0,1-1.49,5.45l-112,64a4,4,0,0,1-4,0l-112-64a4,4,0,0,1,4-6.94l110,62.86,110-62.86A4,4,0,0,1,243.47,142Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
