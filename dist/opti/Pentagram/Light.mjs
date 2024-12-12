var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var L = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && L(a, e, t[e]);
  if (m)
    for (var e of m(t))
      Z.call(t, e) && L(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && Z.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((l, e) => {
  var r = l, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ h.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M237.29,91.67A13.8,13.8,0,0,0,224,82H161.48L141.33,19.87a13.93,13.93,0,0,0-26.64-.05L94.51,82H32a14,14,0,0,0-8.21,25.35l50.65,36.44L55.05,203.63a13.78,13.78,0,0,0,5.09,15.64,13.77,13.77,0,0,0,16.43,0l51.43-37,51.41,37A14,14,0,0,0,201,203.63l-19.42-59.85,50.67-36.46A13.79,13.79,0,0,0,237.29,91.67ZM126.11,23.49a1.94,1.94,0,0,1,3.79,0l19,58.46H107.13ZM30.85,97.61a1.86,1.86,0,0,1-.73-2.23A1.88,1.88,0,0,1,32,94H90.62l-12.26,37.8Zm38.69,112a2,2,0,0,1-3.08-2.24h0l18.23-56.2,33,23.77Zm19-70.42L103.24,94h49.52l14.65,45.16L128,167.51Zm100.95,68.18a2,2,0,0,1-3.1,2.22L138.27,174.9l33-23.77ZM225.17,97.59l-47.53,34.2L165.38,94H224a1.86,1.86,0,0,1,1.9,1.39A1.83,1.83,0,0,1,225.17,97.59Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
