var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M180,80a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H184A4,4,0,0,1,180,80ZM40,84H148v20a4,4,0,0,0,8,0V56a4,4,0,0,0-8,0V76H40a4,4,0,0,0,0,8Zm176,88H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8ZM88,148a4,4,0,0,0-4,4v20H40a4,4,0,0,0,0,8H84v20a4,4,0,0,0,8,0V152A4,4,0,0,0,88,148Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
