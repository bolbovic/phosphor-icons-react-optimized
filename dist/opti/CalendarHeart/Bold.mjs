var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import V, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ V.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ V.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H68a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16ZM152,84a35.86,35.86,0,0,0-24,9.19A36,36,0,0,0,68,120c0,17,9.53,33.56,28.32,49.22a151.47,151.47,0,0,0,26.31,17.51,12,12,0,0,0,10.74,0,151.47,151.47,0,0,0,26.31-17.51C178.47,153.56,188,137,188,120A36,36,0,0,0,152,84Zm-24,78.29c-13.15-7.86-36-25.06-36-42.29a12,12,0,0,1,24,0,12,12,0,0,0,24,0,12,12,0,0,1,24,0C164,137.23,141.14,154.44,128,162.29Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
