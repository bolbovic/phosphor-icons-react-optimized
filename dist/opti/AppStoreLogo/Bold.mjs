var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import L, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ L.createElement(i, A({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M244,160a12,12,0,0,1-12,12H200.67l17.66,29.89a12,12,0,1,1-20.66,12.21L140.9,118a12,12,0,0,1,20.66-12.2L186.48,148H232A12,12,0,0,1,244,160ZM133.15,148H97.39L162.33,38.11A12,12,0,1,0,141.67,25.9L128,49,114.33,25.9A12,12,0,1,0,93.67,38.11l20.39,34.51L69.52,148H24a12,12,0,0,0,0,24H133.15a12,12,0,0,0,0-24ZM58.83,189.67a12,12,0,0,0-16.43,4.22l-4.73,8A12,12,0,1,0,58.33,214.1l4.73-8A12,12,0,0,0,58.83,189.67Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
