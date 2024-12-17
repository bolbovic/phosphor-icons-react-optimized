var d = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      s.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var c in a)
    n.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && o)
    for (var c of o(a))
      t.indexOf(c) < 0 && s.call(a, c) && (e[c] = a[c]);
  return e;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const C = f((c, e) => {
  var r = c, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(l, i({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M184,80c0,56-56,88-56,88S72,136,72,80a56,56,0,0,1,112,0Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M112,80a16,16,0,1,1,16,16A16,16,0,0,1,112,80ZM64,80a64,64,0,0,1,128,0c0,59.95-57.58,93.54-60,94.95a8,8,0,0,1-7.94,0C121.58,173.54,64,140,64,80Zm16,0c0,42.2,35.84,70.21,48,78.5,12.15-8.28,48-36.3,48-78.5a48,48,0,0,0-96,0Zm122.77,67.63a8,8,0,0,0-5.54,15C213.74,168.74,224,176.92,224,184c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-7.08,10.26-15.26,26.77-21.36a8,8,0,0,0-5.54-15C29.22,156.49,16,169.41,16,184c0,31.18,57.71,48,112,48s112-16.82,112-48C240,169.41,226.78,156.49,202.77,147.63Z" }));
});
C.displayName = "Duotone";
export {
  C as Duotone
};
