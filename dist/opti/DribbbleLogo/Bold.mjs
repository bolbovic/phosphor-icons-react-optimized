var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? f(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    r.call(m, e) && o(a, e, m[e]);
  if (A)
    for (var e of A(m))
      Z.call(m, e) && o(a, e, m[e]);
  return a;
};
var d = (a, m) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var c = t, { children: a } = c, m = d(c, ["children"]);
  return /* @__PURE__ */ l.createElement(s, p({ ref: e }, m), a, /* @__PURE__ */ l.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm83.13,96c-1,0-2.08,0-3.12,0a172.63,172.63,0,0,0-41.39,5.06A171.26,171.26,0,0,0,156,97.39,172.34,172.34,0,0,0,188.9,70.24,83.72,83.72,0,0,1,211.13,116ZM170,55.3a148.53,148.53,0,0,1-27,21.88,173.29,173.29,0,0,0-30.58-31.71A83.52,83.52,0,0,1,170,55.3Zm-84.46.27a149.23,149.23,0,0,1,35.9,32.87A147.73,147.73,0,0,1,64,100c-5,0-10-.26-14.94-.75A84.49,84.49,0,0,1,85.53,55.57ZM44,128c0-1.73.07-3.44.17-5.14A175.15,175.15,0,0,0,64,124a171.8,171.8,0,0,0,70.84-15.22,145.82,145.82,0,0,1,8.92,19.65,170.71,170.71,0,0,0-21.52,10.44,173,173,0,0,0-53.68,48.44A83.77,83.77,0,0,1,44,128Zm43.77,73.72a149,149,0,0,1,46.46-42.06,147.2,147.2,0,0,1,16-7.94,148.52,148.52,0,0,1,2.67,28A148.66,148.66,0,0,1,150,209.06a83.81,83.81,0,0,1-62.22-7.34Zm88.29-4.89c.56-5.68.86-11.4.86-17.14a172.57,172.57,0,0,0-3.72-35.54A148.85,148.85,0,0,1,208,140c1,0,2.07,0,3.11,0A84.07,84.07,0,0,1,176.06,196.83Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
