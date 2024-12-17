var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && h(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && L.call(a, H) && (e[H] = a[H]);
  return e;
};
import V, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var m = H, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ V.createElement(l, i({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M240,106H226.49L190.58,70.1a13.9,13.9,0,0,0-9.89-4.1H138V38h26a6,6,0,0,0,0-12H100a6,6,0,0,0,0,12h26V66H64A14,14,0,0,0,50,80v54H22V108a6,6,0,0,0-12,0v64a6,6,0,0,0,12,0V146H50v22.69a13.9,13.9,0,0,0,4.1,9.89L93.42,217.9a13.9,13.9,0,0,0,9.89,4.1h77.38a13.9,13.9,0,0,0,9.89-4.1L226.49,182H240a14,14,0,0,0,14-14V120A14,14,0,0,0,240,106Zm2,62a2,2,0,0,1-2,2H224a6,6,0,0,0-4.24,1.76L182.1,209.42a2,2,0,0,1-1.41.58H103.31a2,2,0,0,1-1.41-.58L62.58,170.1a2,2,0,0,1-.58-1.41V80a2,2,0,0,1,2-2H180.69a2,2,0,0,1,1.41.58l37.66,37.66A6,6,0,0,0,224,118h16a2,2,0,0,1,2,2Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
