var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((H, e) => {
  var m = H, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M154.7,142.75a36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,84.8,165.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.65,63.65,0,0,0,154.7,142.75ZM108,112a28,28,0,1,1,28,28A28,28,0,0,1,108,112ZM208,28H64A12,12,0,0,0,52,40V68H32a4,4,0,0,0,0,8H52v48H32a4,4,0,0,0,0,8H52v48H32a4,4,0,0,0,0,8H52v28a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V40A12,12,0,0,0,208,28Zm4,188a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
