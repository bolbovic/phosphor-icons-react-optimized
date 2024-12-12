var f = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && h)
    for (var r of h(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var m = r, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ c.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,42H168a6,6,0,0,0,0,12h18V184.64L109.26,45.11A6,6,0,0,0,104,42H40a6,6,0,0,0,0,12H58V202H40a6,6,0,0,0,0,12H88a6,6,0,0,0,0-12H70V71.36l76.74,139.53A6,6,0,0,0,152,214h40a6,6,0,0,0,6-6V54h18a6,6,0,0,0,0-12ZM74.15,54h26.3l81.4,148h-26.3Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
