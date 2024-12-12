var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, a, t) => a in e ? s(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, c = (e, a) => {
  for (var t in a || (a = {}))
    p.call(a, t) && m(e, t, a[t]);
  if (r)
    for (var t of r(a))
      d.call(a, t) && m(e, t, a[t]);
  return e;
};
var f = (e, a) => {
  var t = {};
  for (var o in e)
    p.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && d.call(e, o) && (t[o] = e[o]);
  return t;
};
import i, { forwardRef as A } from "react";
import H from "../../lib/OptiBase.mjs";
const n = A((o, t) => {
  var l = o, { children: e } = l, a = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(H, c({ ref: t }, a), e, /* @__PURE__ */ i.createElement("path", { d: "M248.78,45.14A19.92,19.92,0,0,0,232,36H88.81A20,20,0,0,0,70.57,47.79l-64.8,144A20,20,0,0,0,24,220H167.19a20,20,0,0,0,18.24-11.79l64.8-144A19.9,19.9,0,0,0,248.78,45.14ZM164.6,196H30.2L91.4,60H225.8Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
