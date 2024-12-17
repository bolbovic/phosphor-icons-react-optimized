var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ V.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M234.83,125.17l-96-96A4,4,0,0,0,132,32V76H72a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4h60v44a4,4,0,0,0,2.47,3.7,4,4,0,0,0,4.36-.87l96-96A4,4,0,0,0,234.83,125.17ZM140,214.34V176a4,4,0,0,0-4-4H76V84h60a4,4,0,0,0,4-4V41.66L226.34,128ZM44,80v96a4,4,0,0,1-8,0V80a4,4,0,0,1,8,0Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
