var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
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
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((r, e) => {
  var c = r, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ s.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M170.9,54.24a216.79,216.79,0,0,0-40.84-33.67,4,4,0,0,0-4.12,0A216.79,216.79,0,0,0,85.1,54.24C58.21,82.48,44,113.51,44,144a84,84,0,0,0,168,0C212,113.51,197.79,82.48,170.9,54.24ZM92,184c0-32.11,28.07-53.75,36-59.21,7.93,5.47,36,27.1,36,59.21a36,36,0,0,1-72,0Zm69.94,28A43.82,43.82,0,0,0,172,184c0-41.78-40.23-66.4-41.94-67.43a4,4,0,0,0-4.12,0C124.23,117.6,84,142.22,84,184a43.82,43.82,0,0,0,10.06,28A76.07,76.07,0,0,1,52,144c0-62.48,63.64-107.17,76-115.26,12.36,8.09,76,52.78,76,115.26A76.07,76.07,0,0,1,161.94,212Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
