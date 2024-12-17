var n = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? n(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (l)
    for (var e of l(m))
      L.call(m, e) && Z(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      m.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((t, e) => {
  var r = t, { children: a } = r, m = p(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ H.createElement("path", { d: "M196.61,128l30.86-54A4,4,0,0,0,224,68H162.33L131.47,14a4,4,0,0,0-6.94,0L93.66,68H32a4,4,0,0,0-3.47,6l30.85,54L28.53,182A4,4,0,0,0,32,188H93.66l30.87,54a4,4,0,0,0,6.94,0l30.86-54H224a4,4,0,0,0,3.47-6Zm20.5-52L192,119.94,166.9,76Zm-29.72,52-29.7,52L98.3,180,68.59,128,98.3,76l59.39,0ZM128,24.06l25.12,44H102.87ZM38.89,76H89.08L64,119.94Zm0,103.92L64,136.06,89.08,180Zm89.11,52-25.13-44h50.25ZM166.9,180,192,136.06,217.11,180Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
