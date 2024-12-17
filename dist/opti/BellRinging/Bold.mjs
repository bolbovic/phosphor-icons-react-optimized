var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M225.81,74.65A11.86,11.86,0,0,1,220.3,76a12,12,0,0,1-10.67-6.47,90.1,90.1,0,0,0-32-35.38,12,12,0,1,1,12.8-20.29,115.25,115.25,0,0,1,40.54,44.62A12,12,0,0,1,225.81,74.65ZM46.37,69.53a90.1,90.1,0,0,1,32-35.38A12,12,0,1,0,65.6,13.86,115.25,115.25,0,0,0,25.06,58.48a12,12,0,0,0,5.13,16.17A11.86,11.86,0,0,0,35.7,76,12,12,0,0,0,46.37,69.53Zm173.51,98.35A20,20,0,0,1,204,200H171.81a44,44,0,0,1-87.62,0H52a20,20,0,0,1-15.91-32.12c7.17-9.33,15.73-26.62,15.88-55.94A76,76,0,0,1,204,112C204.15,141.26,212.71,158.55,219.88,167.88ZM147.6,200H108.4a20,20,0,0,0,39.2,0Zm48.74-24c-8.16-13-16.19-33.57-16.34-63.94A52,52,0,1,0,76,112c-.15,30.42-8.18,51-16.34,64Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
