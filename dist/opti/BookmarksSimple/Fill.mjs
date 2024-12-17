var n = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, d = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && p(e, a, t[a]);
  if (l)
    for (var a of l(t))
      c.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    i.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && l)
    for (var r of l(e))
      t.indexOf(r) < 0 && c.call(e, r) && (a[r] = e[r]);
  return a;
};
import m, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const V = s((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ m.createElement(A, d({ ref: a }, t), e, /* @__PURE__ */ m.createElement("path", { d: "M160,56H64A16,16,0,0,0,48,72V224a8,8,0,0,0,12.65,6.51L112,193.83l51.36,36.68A8,8,0,0,0,176,224V72A16,16,0,0,0,160,56Z" }), /* @__PURE__ */ m.createElement("path", { d: "M192,24H88a8,8,0,0,0,0,16H192V192a8,8,0,0,0,16,0V40A16,16,0,0,0,192,24Z" }));
});
V.displayName = "Fill";
export {
  V as Fill
};
