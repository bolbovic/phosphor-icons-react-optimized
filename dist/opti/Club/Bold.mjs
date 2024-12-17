var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M186.79,84.06a60,60,0,1,0-117.58,0,60,60,0,1,0,19,117.73l-4,19.86A12,12,0,0,0,96,236h64a12,12,0,0,0,11.77-14.35l-4-19.86a60,60,0,1,0,19-117.73ZM184,180a35.88,35.88,0,0,1-24.78-9.88,12,12,0,0,0-20,11.06L145.36,212H110.64l6.16-30.82a12,12,0,0,0-20-11.06,36,36,0,1,1-12.65-60,12,12,0,0,0,14-18A35.68,35.68,0,0,1,92,72a36,36,0,1,1,65.88,20.08,12,12,0,0,0,14,18A36,36,0,1,1,184,180Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
