var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const M = f((r, e) => {
  var o = r, { children: a } = o, t = L(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M206,98.83V96A78,78,0,0,0,50,96v2.83A22,22,0,0,0,56,142h4.45L115.84,239a14,14,0,0,0,24.32,0L195.55,142H200a22,22,0,0,0,6-43.17ZM129.74,233a2,2,0,0,1-3.48,0l-52-91h24L140,215.06ZM136,142l22.89,40.06-12,20.91-34.84-61Zm29.8,28-16-28h32ZM200,130H56a10,10,0,0,1,0-20,6,6,0,0,0,6-6V96a66,66,0,0,1,132,0v8a6,6,0,0,0,6,6,10,10,0,0,1,0,20Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
