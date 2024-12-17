var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    l.call(a, t) && c(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && c(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    l.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((o, t) => {
  var p = o, { children: e } = p, a = d(p, ["children"]);
  return /* @__PURE__ */ m.createElement(H, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement("path", { d: "M208,192H48l80-80Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M133.66,106.34a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,200H208a8,8,0,0,0,5.66-13.66ZM67.31,184,128,123.31,188.69,184ZM40,72a8,8,0,0,1,8-8H208a8,8,0,0,1,0,16H48A8,8,0,0,1,40,72Z" }));
});
M.displayName = "Duotone";
export {
  M as Duotone
};
