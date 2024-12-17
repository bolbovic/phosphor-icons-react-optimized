var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    d.call(t, a) && p(e, a, t[a]);
  if (r)
    for (var a of r(t))
      l.call(t, a) && p(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    d.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && l.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const A = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M188,72a60,60,0,1,0-72,58.79V232a12,12,0,0,0,24,0V130.79A60.09,60.09,0,0,0,188,72Zm-60,36a36,36,0,1,1,36-36A36,36,0,0,1,128,108Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
