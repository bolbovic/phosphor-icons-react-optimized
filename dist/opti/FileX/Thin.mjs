var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import V, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ V.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-45.17-89.17L133.66,152l21.17,21.17a4,4,0,0,1-5.66,5.66L128,157.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L122.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66L128,146.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
