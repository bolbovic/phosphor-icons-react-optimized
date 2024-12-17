var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ A.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M244.51,121.74l-40-80A13.92,13.92,0,0,0,192,34H64a13.92,13.92,0,0,0-12.52,7.74l-40,80A14,14,0,0,0,24,142h98v68H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12H134V142h98a14,14,0,0,0,12.52-20.26Zm-10.82,7.31a1.93,1.93,0,0,1-1.7.95H24a2,2,0,0,1-1.79-2.89l40-80A2,2,0,0,1,64,46H192a2,2,0,0,1,1.79,1.11l40,80A2,2,0,0,1,233.69,129.05ZM190,104a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12H184A6,6,0,0,1,190,104Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
