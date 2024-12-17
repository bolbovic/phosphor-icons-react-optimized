var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      V.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M216,160a8,8,0,1,1-8-8A8,8,0,0,1,216,160Zm-4.17,35.79A44.06,44.06,0,0,1,168,236H144a44.05,44.05,0,0,1-44-44V147.85A60,60,0,0,1,44,88V40a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H52V88a52,52,0,0,0,52.69,52C133,139.63,156,115.93,156,87.17V44H136a4,4,0,0,1,0-8h24a4,4,0,0,1,4,4V87.17c0,32-24.84,58.59-56,60.69V192a36,36,0,0,0,36,36h24a36.05,36.05,0,0,0,35.8-32.25,36,36,0,1,1,8,0ZM236,160a28,28,0,1,0-28,28A28,28,0,0,0,236,160Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
