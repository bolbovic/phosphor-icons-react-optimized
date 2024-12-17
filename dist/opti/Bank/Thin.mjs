var n = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && o(a, e, t[e]);
  if (H)
    for (var e of H(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && H)
    for (var m of H(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M24,100H52v72H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8H204V100h28a4,4,0,0,0,2.1-7.41l-104-64a4,4,0,0,0-4.2,0l-104,64A4,4,0,0,0,24,100Zm36,0h40v72H60Zm88,0v72H108V100Zm48,72H156V100h40ZM128,36.7,217.87,92H38.13ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H240A4,4,0,0,1,244,208Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
