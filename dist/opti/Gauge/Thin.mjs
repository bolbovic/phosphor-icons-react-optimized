var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const s = h((r, e) => {
  var o = r, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M204.23,75.5A107.37,107.37,0,0,0,127.62,44C68.28,44.21,20,93.16,20,153.13V176a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V152A107.25,107.25,0,0,0,204.23,75.5ZM228,176a4,4,0,0,1-4,4H111.85l59.38-81.65a4,4,0,1,0-6.46-4.7L102,180H32a4,4,0,0,1-4-4V153.13A103.42,103.42,0,0,1,28.84,140H56a4,4,0,0,0,0-8H30.21C39.59,87.66,77.84,53.93,124,52.09V80a4,4,0,0,0,8,0V52.08A100.08,100.08,0,0,1,226,132H200a4,4,0,0,0,0,8h27.29a101.6,101.6,0,0,1,.71,12Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
