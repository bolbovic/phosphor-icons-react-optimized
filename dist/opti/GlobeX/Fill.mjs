var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import h, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, l), a, /* @__PURE__ */ h.createElement("path", { d: "M128,24a104,104,0,0,0,0,208,8,8,0,0,0,5-14.21l0,0c-1.12-.91-20.88-17.32-31.06-49.77h26a8,8,0,0,0,0-16H98.08a140.17,140.17,0,0,1,0-48h59.88A138,138,0,0,1,160,128a8,8,0,0,0,16,0,154.7,154.7,0,0,0-1.84-24h38.51A87.61,87.61,0,0,1,216,128a8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,24ZM102,88a115.11,115.11,0,0,1,26-45,115.27,115.27,0,0,1,26,45Zm68.75,0a135.28,135.28,0,0,0-22.3-45.6,88.29,88.29,0,0,1,58,45.6Zm50.95,85.66L203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
