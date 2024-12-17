var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (V)
    for (var e of V(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var m = r, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(s, c({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M232,68H204V48a4,4,0,0,0-4-4H56a4,4,0,0,0-4,4V68H24A12,12,0,0,0,12,80V96a36,36,0,0,0,36,36h6.66A76,76,0,0,0,124,187.89V220H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8H132V187.88c32.93-1.74,60.41-24.91,69.11-55.88H208a36,36,0,0,0,36-36V80A12,12,0,0,0,232,68ZM48,124A28,28,0,0,1,20,96V80a4,4,0,0,1,4-4H52v36a77,77,0,0,0,1,12Zm148-12.9c0,37.71-30.79,68.62-68,68.9a68,68,0,0,1-68-68V52H196ZM236,96a28,28,0,0,1-28,28h-5.1a77.35,77.35,0,0,0,1.1-12.9V76h28a4,4,0,0,1,4,4Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
