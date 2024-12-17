var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const H = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M236,48a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H224A12,12,0,0,1,236,48ZM175.51,87.51,84,179V112a12,12,0,0,0-24,0v96a12,12,0,0,0,12,12h96a12,12,0,0,0,0-24H101l91.52-91.51a12,12,0,0,0-17-17Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
