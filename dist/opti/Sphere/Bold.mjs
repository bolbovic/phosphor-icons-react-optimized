var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (e, t, a) => t in e ? f(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && r(e, a, t[a]);
  if (m)
    for (var a of m(t))
      d.call(t, a) && r(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var c in e)
    p.call(e, c) && t.indexOf(c) < 0 && (a[c] = e[c]);
  if (e != null && m)
    for (var c of m(e))
      t.indexOf(c) < 0 && d.call(e, c) && (a[c] = e[c]);
  return a;
};
import Z, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((c, a) => {
  var o = c, { children: e } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(s, l({ ref: a }, t), e, /* @__PURE__ */ Z.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm84,107.86c-.56,1.41-5.7,7.11-22.88,12.33a157.26,157.26,0,0,1-17.57,4.15c.3-5.44.45-10.91.45-16.34,0-27.85-3.95-56.83-12.25-77.75A84.13,84.13,0,0,1,212,127.86ZM127.86,44c1.41.56,7.11,5.7,12.33,22.88,5,16.6,7.81,38.31,7.81,61.12,0,6.56-.24,13-.68,19.32-6.29.44-12.76.68-19.32.68-22.81,0-44.52-2.78-61.12-7.81C49.7,135,44.56,129.27,44,127.86A84.1,84.1,0,0,1,127.86,44ZM50.25,159.75C71.17,168.05,100.15,172,128,172c5.43,0,10.9-.15,16.34-.46a156.93,156.93,0,0,1-4.15,17.58C135,206.3,129.27,211.44,127.86,212A84.13,84.13,0,0,1,50.25,159.75Zm109.5,46c4.19-10.57,7.28-23.2,9.3-36.7,13.5-2,26.13-5.11,36.7-9.3A84.42,84.42,0,0,1,159.75,205.75Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};