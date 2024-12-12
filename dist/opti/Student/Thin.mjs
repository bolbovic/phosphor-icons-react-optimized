var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    c.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var m = r, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ s.createElement(h, p({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M225.27,60.21l-96-32a4,4,0,0,0-2.54,0l-96,32A4,4,0,0,0,28,64v80a4,4,0,0,0,8,0V69.55L79.88,84.18a60,60,0,0,0,24.54,91c-20.86,5.74-39,19.13-51.77,38.65a4,4,0,0,0,6.7,4.36C75.17,193.92,100.2,180,128,180s52.83,13.92,68.65,38.18a4,4,0,0,0,6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60,60,0,0,0,24.54-91l49.15-16.39a4,4,0,0,0,0-7.58ZM180,120A52,52,0,1,1,87.93,86.86l38.8,12.93a3.95,3.95,0,0,0,2.54,0l38.8-12.93A51.85,51.85,0,0,1,180,120ZM128,91.78,44.65,64,128,36.22,211.35,64Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
