var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, A = (e, a) => {
  for (var t in a || (a = {}))
    n.call(a, t) && c(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && c(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var o in e)
    n.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && i.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((o, t) => {
  var p = o, { children: e } = p, a = H(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, A({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M240,88v96H48V72H224A16,16,0,0,1,240,88Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
