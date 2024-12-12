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
import i, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const V = A((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M220,151.67V216A12,12,0,0,1,208,228H48A12,12,0,0,1,36,216V151.67a12,12,0,1,1,24,0V203.9H196V151.67a12,12,0,1,1,24,0ZM88,183.81h80a12.06,12.06,0,0,0,0-24.11H88a12.06,12.06,0,0,0,0,24.11ZM96.2,113l75.17,27.49a12.05,12.05,0,0,0,8.21-22.66L104.41,90.35A12,12,0,0,0,96.2,113ZM128,49.29l61.29,51.64a12,12,0,0,0,16.9-1.48,12.09,12.09,0,0,0-1.48-17L143.44,30.82a12,12,0,0,0-16.91,1.49A12.1,12.1,0,0,0,128,49.29Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
