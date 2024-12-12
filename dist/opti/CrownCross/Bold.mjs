var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var c = o, { children: a } = c, t = l(c, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180,56c-15.4,0-29.19,4.61-40,12.5V44h12a12,12,0,0,0,0-24H140V12a12,12,0,0,0-24,0v8H104a12,12,0,0,0,0,24h12V68.5C105.19,60.61,91.4,56,76,56a64.07,64.07,0,0,0-64,64c0,31.66,15.53,50.6,28.55,60.91A85.75,85.75,0,0,0,60,192.45V208a20,20,0,0,0,20,20h96a20,20,0,0,0,20-20V192.45a85.75,85.75,0,0,0,19.45-11.54C228.47,170.6,244,151.66,244,120A64.07,64.07,0,0,0,180,56Zm1.09,116.36A12,12,0,0,0,172,184v20H84V184a12,12,0,0,0-9.09-11.64,59.4,59.4,0,0,1-19.46-10.27C42.54,151.87,36,137.71,36,120A40,40,0,0,1,76,80c23.18,0,40,15.14,40,36v60a12,12,0,0,0,24,0V116c0-20.86,16.82-36,40-36a40,40,0,0,1,40,40C220,161.68,182.62,172,181.09,172.36Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
