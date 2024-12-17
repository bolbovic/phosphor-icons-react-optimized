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
import H from "../../lib/OptiBase.mjs";
const E = s((o, a) => {
  var p = o, { children: e } = p, t = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(H, d({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
