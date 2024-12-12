var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, n = (a, l) => {
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
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var m = t, { children: a } = m, l = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, n({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M225.54,68.31l-96-40a4,4,0,0,0-3.08,0l-96,40A4,4,0,0,0,28,72.53l16,120a4,4,0,0,0,2.17,3.05l80,40a4,4,0,0,0,3.58,0l80-40a4,4,0,0,0,2.17-3.05l16-120A4,4,0,0,0,225.54,68.31ZM204.32,189.37,128,227.53,51.68,189.37,36.37,74.51,128,36.33l91.63,38.18ZM124.5,86.06l-40,72a4,4,0,1,0,7,3.88L103.69,140h48.62l12.19,21.94a4,4,0,1,0,7-3.88l-40-72a4,4,0,0,0-7,0ZM147.87,132H108.13L128,96.24Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
