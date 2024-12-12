var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const B = A((o, e) => {
  var m = o, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(n, d({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M56.88,31.93A12,12,0,0,0,36,40a20,20,0,0,0-8,16v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1.35-.37,30-8.42,55.86-32.82l12.1,13.31a12,12,0,0,0,17.76-16.14ZM128,219.38a126.38,126.38,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V62.24L170.87,193A126,126,0,0,1,128,219.38ZM228,56v56a144,144,0,0,1-8.23,49.16,12,12,0,0,1-11.28,7.92,11.86,11.86,0,0,1-4.08-.72,12,12,0,0,1-7.2-15.37A120.31,120.31,0,0,0,204,112V60H109.33a12,12,0,1,1,0-24H208A20,20,0,0,1,228,56Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
