var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const C = n((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(B, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M134.88,6.17a12,12,0,0,0-13.76,0,259,259,0,0,0-42.18,39C50.85,77.43,36,111.63,36,144a92,92,0,0,0,184,0C220,66.64,138.36,8.6,134.88,6.17ZM128,212a68.07,68.07,0,0,1-68-68c0-33.31,20-63.37,36.7-82.71A249.35,249.35,0,0,1,128,31.11a249.35,249.35,0,0,1,31.3,30.18C176,80.63,196,110.69,196,144A68.07,68.07,0,0,1,128,212Z" }));
});
C.displayName = "Bold";
export {
  C as Bold
};
