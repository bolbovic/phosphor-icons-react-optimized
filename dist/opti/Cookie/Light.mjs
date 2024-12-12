var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M163.07,164.93a10,10,0,1,1-14.14,0A10,10,0,0,1,163.07,164.93Zm-78.14-8a10,10,0,1,0,14.14,0A10,10,0,0,0,84.93,156.93Zm6.14-41.86a10,10,0,1,0-14.14,0A10,10,0,0,0,91.07,115.07Zm33.86,1.86a10,10,0,1,0,14.14,0A10,10,0,0,0,124.93,116.93ZM230,128A102,102,0,1,1,128,26a6,6,0,0,1,6,6,42,42,0,0,0,42,42,6,6,0,0,1,6,6,42,42,0,0,0,42,42A6,6,0,0,1,230,128Zm-12.18,5.65A54.09,54.09,0,0,1,170.3,85.7a54.09,54.09,0,0,1-48-47.53,90,90,0,1,0,95.47,95.48Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
