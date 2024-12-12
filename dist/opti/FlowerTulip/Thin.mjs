var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((r, e) => {
  var c = r, { children: a } = c, t = l(c, ["children"]);
  return /* @__PURE__ */ n.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M208,52a83.5,83.5,0,0,0-37,8.62c-14.2-26.46-40-39.63-41.19-40.2a4,4,0,0,0-3.58,0c-1.14.57-27,13.74-41.19,40.2A83.5,83.5,0,0,0,48,52a4,4,0,0,0-4,4V96a84.1,84.1,0,0,0,80,83.9v45.63L81.79,204.42a4,4,0,1,0-3.58,7.16l48,24a4,4,0,0,0,3.58,0l48-24a4,4,0,0,0-3.58-7.16L132,225.53V179.9A84.1,84.1,0,0,0,212,96V56A4,4,0,0,0,208,52ZM128,28.56c5.91,3.37,25,15.45,36,35.93a84.46,84.46,0,0,0-36,45.92A84.46,84.46,0,0,0,92,64.49C103,44.07,122.1,31.94,128,28.56ZM52,96V60.1A76.11,76.11,0,0,1,124,136v35.9A76.11,76.11,0,0,1,52,96Zm152,0a76.11,76.11,0,0,1-72,75.9V136a76.11,76.11,0,0,1,72-75.9Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
