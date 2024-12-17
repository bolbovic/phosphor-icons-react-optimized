var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as H } from "react";
import n from "../../lib/OptiBase.mjs";
const A = H((o, a) => {
  var l = o, { children: e } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M242.15,49.59A12,12,0,0,0,232,44H40a12,12,0,0,0-8.48,20.49L71,104,31.52,143.51A12,12,0,0,0,40,164H167.28l-26.11,54.84a12,12,0,1,0,21.66,10.32l80-168A12,12,0,0,0,242.15,49.59ZM178.71,140H69l27.52-27.52a12,12,0,0,0,0-17L69,68H213Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
