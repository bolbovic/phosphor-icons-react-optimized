var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const L = n((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M225.84,54.13A62.07,62.07,0,0,0,138.32,54L128,63.58,117.68,54a62,62,0,0,0-87.58,87.8l89.35,90.65a12,12,0,0,0,17.1,0l89.29-90.59a62,62,0,0,0,0-87.7Zm-17,70.79L128,206.9,47.13,124.85a38,38,0,0,1,53.74-53.74c.1.1.2.2.31.29l18.64,17.36a12,12,0,0,0,16.36,0L154.82,71.4c.11-.09.21-.19.31-.29a38,38,0,1,1,53.68,53.81Z" }));
});
L.displayName = "Bold";
export {
  L as Bold
};
