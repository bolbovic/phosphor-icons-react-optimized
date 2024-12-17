var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (m)
    for (var t of m(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var H = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, t) => {
  var l = o, { children: e } = l, a = H(l, ["children"]);
  return /* @__PURE__ */ r.createElement(f, i({ ref: t }, a), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M219.11,159.37l-160,64A8,8,0,0,1,48,216V152a8,8,0,0,1,8-8H216C224.71,144,227.14,156,219.11,159.37Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64Zm160,96H56a16,16,0,0,0-16,16v64a16,16,0,0,0,22.15,14.78l159.93-64,.14-.06A16,16,0,0,0,216,136ZM56.15,215.93,56,216V152H216Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
