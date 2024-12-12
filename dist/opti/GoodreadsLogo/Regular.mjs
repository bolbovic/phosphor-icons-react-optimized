var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const n = R((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ d.createElement(V, f({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M184,24a8,8,0,0,0-8,8V45.74A64,64,0,0,0,64,88v24a64,64,0,0,0,112,42.26V168a48.05,48.05,0,0,1-48,48c-16.45,0-32.72-8.08-41.44-20.58a8,8,0,1,0-13.12,9.16C85.06,221.24,106.48,232,128,232a64.07,64.07,0,0,0,64-64V32A8,8,0,0,0,184,24ZM128,160a48.05,48.05,0,0,1-48-48V88a48,48,0,0,1,96,0v24A48.05,48.05,0,0,1,128,160Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
