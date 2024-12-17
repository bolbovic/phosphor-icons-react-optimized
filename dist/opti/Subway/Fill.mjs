var Z = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (l)
    for (var e of l(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ V.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M156,176V152h20v16a8,8,0,0,1-8,8Zm-16,0V152H116v24Zm36-88a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v48h96ZM152,24H104A72,72,0,0,0,32,96V208a8,8,0,0,0,8,8H76.58a4,4,0,0,0,3.58-2.21L91.06,192H88a24,24,0,0,1-24-24V88A24,24,0,0,1,88,64h80a24,24,0,0,1,24,24v80a24,24,0,0,1-24,24h-3.06l10.9,21.79a4,4,0,0,0,3.58,2.21H216a8,8,0,0,0,8-8V96A72,72,0,0,0,152,24Zm-4.94,168H108.94l-9.1,18.21a4,4,0,0,0,3.58,5.79h49.16a4,4,0,0,0,3.58-5.79ZM80,168a8,8,0,0,0,8,8h12V152H80Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
