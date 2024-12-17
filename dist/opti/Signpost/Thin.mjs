var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M243,109.32,209.36,72a12.06,12.06,0,0,0-8.92-4H132V32a4,4,0,0,0-8,0V68H40A12,12,0,0,0,28,80v64a12,12,0,0,0,12,12h84v68a4,4,0,0,0,8,0V156h68.44a12.06,12.06,0,0,0,8.92-4L243,114.68A4,4,0,0,0,243,109.32Zm-39.56,37.36a4,4,0,0,1-3,1.32H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H200.44a4,4,0,0,1,3,1.32L234.62,112Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
