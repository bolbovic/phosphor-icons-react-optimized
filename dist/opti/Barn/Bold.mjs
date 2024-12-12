var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    h.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M100,84a12,12,0,0,1,12-12h32a12,12,0,0,1,0,24H112A12,12,0,0,1,100,84ZM252,200a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24h4V139.31A12,12,0,0,1,6.24,121l40-56a11.91,11.91,0,0,1,2.94-2.9l67.56-46.65.17-.11a19.94,19.94,0,0,1,22.18,0l.17.11,67.56,46.65a11.91,11.91,0,0,1,2.94,2.9l40,56A12,12,0,0,1,236,139.31V188h4A12,12,0,0,1,252,200ZM44,188H64V124a12,12,0,0,1,12-12H180a12,12,0,0,1,12,12v64h20V109.45L191.45,80.69,128,36.87,64.55,80.69,44,109.45Zm124-52H113.9L168,174.07ZM88,188h58.1L88,147.12Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
