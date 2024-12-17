var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const h = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M140,80v41.21l34.17,20.5a12,12,0,1,1-12.34,20.58l-40-24A12,12,0,0,1,116,128V80a12,12,0,0,1,24,0Zm84-28a12,12,0,0,0-12,12v7.37c-4.21-4.67-8.58-9.31-13.29-14.08a100,100,0,1,0-2.07,143.44,12,12,0,0,0-16.48-17.46,76,76,0,1,1,1.53-109.06C187.61,80.2,193,86,198.23,92H184a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V64A12,12,0,0,0,224,52Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
