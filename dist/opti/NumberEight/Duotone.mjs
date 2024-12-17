var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      i.call(t, a) && c(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && i.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((o, a) => {
  var p = o, { children: e } = p, t = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(A, d({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
