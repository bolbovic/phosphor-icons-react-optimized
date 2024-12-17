var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,146H134V93.52a38,38,0,1,0-12,0V146H48a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V160A14,14,0,0,0,208,146ZM102,56a26,26,0,1,1,26,26A26,26,0,0,1,102,56ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V160a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-42-94h32a6,6,0,0,1,0,12H168a6,6,0,0,1,0-12Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
