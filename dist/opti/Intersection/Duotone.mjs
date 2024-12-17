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
import v from "../../lib/OptiBase.mjs";
const E = s((o, a) => {
  var p = o, { children: e } = p, t = f(p, ["children"]);
  return /* @__PURE__ */ m.createElement(v, d({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M200,120v80H56V120a72,72,0,0,1,144,0Z", opacity: "0.2" }), /* @__PURE__ */ m.createElement("path", { d: "M208,120v80a8,8,0,0,1-16,0V120a64,64,0,0,0-128,0v80a8,8,0,0,1-16,0V120a80,80,0,0,1,160,0Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
