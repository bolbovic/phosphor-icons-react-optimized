var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as C } from "react";
import H from "../../lib/OptiBase.mjs";
const V = C((r, e) => {
  var c = r, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ h.createElement(H, n({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M228,104a52.06,52.06,0,0,0-52-52H132V48a28,28,0,0,1,28-28,4,4,0,0,0,0-8,36,36,0,0,0-36,36v4H80a52.06,52.06,0,0,0-52,52,12,12,0,0,0,8,11.3V128c0,33.61,32.29,59.54,58.24,80.37C109.54,220.66,124,232.27,124,240a4,4,0,0,0,8,0c0-7.73,14.46-19.34,29.76-31.63C187.71,187.54,220,161.61,220,128V115.3A12,12,0,0,0,228,104Zm-71.25,98.13c-12.51,10.05-23.23,18.65-28.75,26.79-5.52-8.14-16.24-16.74-28.75-26.79C74.63,182.37,44,157.78,44,128V116H212v12C212,157.78,181.37,182.37,156.75,202.13ZM216,108H40a4,4,0,0,1-4-4A44.05,44.05,0,0,1,80,60h96a44.05,44.05,0,0,1,44,44A4,4,0,0,1,216,108Z" }));
});
V.displayName = "Thin";
export {
  V as Thin
};
