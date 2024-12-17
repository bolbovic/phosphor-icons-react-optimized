var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      i.call(l, e) && o(a, e, l[e]);
  return a;
};
var h = (a, l) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((t, e) => {
  var m = t, { children: a } = m, l = h(m, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, l), a, /* @__PURE__ */ n.createElement("path", { d: "M240,132H211.94l23.77-58.49a4,4,0,1,0-7.42-3l-25,61.51H156.69l-25-61.51a4,4,0,0,0-7.42,0L99.31,132H52.69l-25-61.51a4,4,0,0,0-7.42,3L44.06,132H16a4,4,0,0,0,0,8H47.31l25,61.51a4,4,0,0,0,7.42,0l25-61.51h46.62l25,61.51a4,4,0,0,0,7.42,0l25-61.51H240a4,4,0,0,0,0-8ZM76,189.37,55.94,140H96.06ZM107.94,132,128,82.63,148.06,132ZM180,189.37,159.94,140h40.12Z" }));
});
M.displayName = "Thin";
export {
  M as Thin
};
