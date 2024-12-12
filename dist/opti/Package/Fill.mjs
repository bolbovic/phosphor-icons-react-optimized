var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (l, e, a) => e in l ? V(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, c = (l, e) => {
  for (var a in e || (e = {}))
    i.call(e, a) && o(l, a, e[a]);
  if (m)
    for (var a of m(e))
      p.call(e, a) && o(l, a, e[a]);
  return l;
};
var f = (l, e) => {
  var a = {};
  for (var t in l)
    i.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && m)
    for (var t of m(l))
      e.indexOf(t) < 0 && p.call(l, t) && (a[t] = l[t]);
  return a;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const n = Z((t, a) => {
  var r = t, { children: l } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: a }, e), l, /* @__PURE__ */ s.createElement("path", { d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
