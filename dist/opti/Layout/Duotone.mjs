var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (e, a, t) => a in e ? Z(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, n = (e, a) => {
  for (var t in a || (a = {}))
    V.call(a, t) && H(e, t, a[t]);
  if (m)
    for (var t of m(a))
      c.call(a, t) && H(e, t, a[t]);
  return e;
};
var i = (e, a) => {
  var t = {};
  for (var o in e)
    V.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      a.indexOf(o) < 0 && c.call(e, o) && (t[o] = e[o]);
  return t;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, t) => {
  var p = o, { children: e } = p, a = i(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, n({ ref: t }, a), e, /* @__PURE__ */ r.createElement("path", { d: "M104,104V208H40a8,8,0,0,1-8-8V104Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
