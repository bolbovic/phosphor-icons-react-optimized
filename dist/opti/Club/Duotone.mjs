var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && c(e, a, t[a]);
  return e;
};
var i = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import l, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((o, a) => {
  var m = o, { children: e } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ l.createElement(h, A({ ref: a }, t), e, /* @__PURE__ */ l.createElement(
    "path",
    {
      d: "M232,144a48,48,0,0,1-88.07,26.44L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0A48,48,0,0,1,232,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ l.createElement("path", { d: "M184,88c-.78,0-1.56,0-2.33,0a56,56,0,1,0-107.34,0c-.78,0-1.55,0-2.33,0A56,56,0,1,0,96.54,194.35l-8.2,27.35A8,8,0,0,0,96,232h64a8,8,0,0,0,7.66-10.3l-8.2-27.35A56,56,0,1,0,184,88Zm0,96a40,40,0,0,1-33.4-18,8,8,0,0,0-14.33,6.71l13,43.26h-42.5l13-43.26A8,8,0,0,0,105.4,166a40,40,0,1,1-19.93-59.71,8,8,0,0,0,9.33-12,40,40,0,1,1,66.4,0,8,8,0,0,0,9.33,12A40,40,0,1,1,184,184Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
