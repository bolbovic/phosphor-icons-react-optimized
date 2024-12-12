var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, v = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && V(a, e, r[e]);
  return a;
};
var H = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var l = t, { children: a } = l, r = H(l, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, v({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M87.54,154.69l-20,56a8,8,0,0,1-15.07,0l-20-56a8,8,0,0,1,15.07-5.38L60,184.21l12.47-34.9a8,8,0,0,1,15.07,5.38ZM208,160a8,8,0,0,0,0-16H176a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H184V188h16a8,8,0,0,0,0-16H184V160Zm-64-16a8,8,0,0,0-8,8v38a10,10,0,0,1-20,0V152a8,8,0,0,0-16,0v38a26,26,0,0,0,52,0V152A8,8,0,0,0,144,144Zm72-56v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
