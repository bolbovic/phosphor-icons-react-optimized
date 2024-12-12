var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? s(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((o, a) => {
  var m = o, { children: e } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ i.createElement("path", { d: "M242.11,209.53l-99.86-156,19.86-31A12,12,0,1,0,141.89,9.53L128,31.24,114.11,9.53A12,12,0,0,0,93.89,22.47l19.86,31-99.86,156A12,12,0,0,0,24,228H232a12,12,0,0,0,10.11-18.47ZM96.17,204,128,154.26,159.83,204Zm92.16,0-50.22-78.47a12,12,0,0,0-20.22,0L67.67,204H45.93L128,75.76,210.07,204Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
