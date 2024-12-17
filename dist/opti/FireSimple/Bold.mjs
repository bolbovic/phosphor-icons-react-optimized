var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const C = n((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(B, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M145.93,14.77A12,12,0,0,0,127,19.89L107.07,74.5,87.38,55.39a12,12,0,0,0-17.9,1.33C47.27,85.82,36,115.19,36,144a92,92,0,0,0,184,0C220,82.85,168.2,33.25,145.93,14.77ZM128,212a68.07,68.07,0,0,1-68-68c0-19.94,7-40.62,20.71-61.64l22.93,22.25a12,12,0,0,0,19.63-4.5l20.21-55.4C165.39,65.61,196,102.29,196,144A68.07,68.07,0,0,1,128,212Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};
