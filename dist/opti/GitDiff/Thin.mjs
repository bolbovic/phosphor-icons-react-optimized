var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M112,156a4,4,0,0,0-4,4v38.34L63.51,153.86A12,12,0,0,1,60,145.37V91.71a28,28,0,1,0-8,0v53.66a19.85,19.85,0,0,0,5.86,14.14L102.34,204H64a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,112,156ZM36,64A20,20,0,1,1,56,84,20,20,0,0,1,36,64ZM204,164.29V110.63a19.85,19.85,0,0,0-5.86-14.14L153.66,52H192a4,4,0,0,0,0-8H144a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l44.49,44.48a12,12,0,0,1,3.51,8.49v53.66a28,28,0,1,0,8,0ZM200,212a20,20,0,1,1,20-20A20,20,0,0,1,200,212Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
