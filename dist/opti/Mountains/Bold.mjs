var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && l(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((m, e) => {
  var r = m, { children: a } = r, t = L(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M160,80a32,32,0,1,0-32-32A32,32,0,0,0,160,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,160,40Zm94.32,153.88L199.76,101.8A19.85,19.85,0,0,0,182.55,92h0a19.83,19.83,0,0,0-17.2,9.8l-18.7,31.55-37.42-63.5a20,20,0,0,0-34.46,0L1.66,193.91A12,12,0,0,0,12,212H244a12,12,0,0,0,10.32-18.12ZM92,87.87,108.57,116H75.43ZM33,188l28.28-48h61.44L151,188Zm145.86,0L160.56,157l22-37.1L222.94,188Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};