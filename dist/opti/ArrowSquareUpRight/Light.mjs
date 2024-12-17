var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
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
import h, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(V, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM166,96v48a6,6,0,0,1-12,0V110.48l-53.76,53.76a6,6,0,0,1-8.48-8.48L145.52,102H112a6,6,0,0,1,0-12h48A6,6,0,0,1,166,96Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
