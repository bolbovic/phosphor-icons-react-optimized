var h = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var m = r, { children: a } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M183.05,60H72A68,68,0,0,0,4.07,131.21c1.6,34.66,30,63.08,64.65,64.71,14.77.72,30-5.64,46.63-19.38a19.9,19.9,0,0,1,25.35,0C150.79,184.92,166.25,196,184,196a68,68,0,0,0,68-68.9C251.51,90.1,220.58,60,183.05,60ZM226.7,170.15A59.57,59.57,0,0,1,184,188c-15.17,0-29.07-10-38.2-17.58a27.88,27.88,0,0,0-35.55,0c-15,12.41-28.45,18.14-41.15,17.55a60.37,60.37,0,0,1-57-57.09A60,60,0,0,1,72,68H183.05c33.18,0,60.52,26.56,60.94,59.2A59.59,59.59,0,0,1,226.7,170.15ZM180,96a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,96Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
