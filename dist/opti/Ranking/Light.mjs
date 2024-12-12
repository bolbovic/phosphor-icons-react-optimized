var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var h = m, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ l.createElement(c, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M114.31,101.9a6,6,0,0,1,3.79-7.59l12-4A6,6,0,0,1,138,96v40a6,6,0,0,1-12,0V104.32l-4.1,1.37A6,6,0,0,1,114.31,101.9ZM246,208a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H26V104A14,14,0,0,1,40,90H82V56A14,14,0,0,1,96,42h64a14,14,0,0,1,14,14v74h42a14,14,0,0,1,14,14v58h10A6,6,0,0,1,246,208Zm-72-66v60h44V144a2,2,0,0,0-2-2ZM94,202h68V56a2,2,0,0,0-2-2H96a2,2,0,0,0-2,2Zm-56,0H82V102H40a2,2,0,0,0-2,2Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
