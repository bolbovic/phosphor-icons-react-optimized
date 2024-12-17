var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const V = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(A, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM36,192V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v60H136a4,4,0,0,0-4,4v68H40A4,4,0,0,1,36,192Zm180,4H140V132h80v60A4,4,0,0,1,216,196Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
