var f = Object.defineProperty;
var L = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (L)
    for (var e of L(t))
      i.call(t, e) && r(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && L)
    for (var l of L(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as h } from "react";
import s from "../../lib/OptiBase.mjs";
const A = h((l, e) => {
  var m = l, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L93.05,98.47,38.1,153.42a13.9,13.9,0,0,0-4.1,9.89V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L154.46,166l49.11,54a6,6,0,0,0,8.88-8.08Zm67.28,91.84L68,179.52,48.48,160l52.65-52.64ZM46,208V174.48L81.52,210H48A2,2,0,0,1,46,208Zm50-.49L76.49,188l51.31-51.31,18.58,20.45ZM225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L119.75,71.77a6,6,0,0,0,8.48,8.49L136,72.48,155.52,92l-9.11,9.1a6,6,0,1,0,8.49,8.49l9.1-9.11L183.52,120l-10.44,10.44a6,6,0,1,0,8.49,8.48l44.34-44.33A14,14,0,0,0,225.91,74.79ZM217.42,86.1,192,111.52,168.25,87.76h0L144.49,64l25.42-25.41a2,2,0,0,1,2.82,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z" }));
});
A.displayName = "Light";
export {
  A as Light
};