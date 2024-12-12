var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (l, e, a) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, Z = (l, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && r(l, a, e[a]);
  if (m)
    for (var a of m(e))
      d.call(e, a) && r(l, a, e[a]);
  return l;
};
var c = (l, e) => {
  var a = {};
  for (var t in l)
    p.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && m)
    for (var t of m(l))
      e.indexOf(t) < 0 && d.call(l, t) && (a[t] = l[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const n = s((t, a) => {
  var o = t, { children: l } = o, e = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, Z({ ref: a }, e), l, /* @__PURE__ */ f.createElement("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
