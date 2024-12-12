var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ l.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M128,110A42,42,0,1,0,86,68,42,42,0,0,0,128,110Zm0-72A30,30,0,1,1,98,68,30,30,0,0,1,128,38Zm78,186a6,6,0,0,1-6,6H56a6,6,0,0,1-4-10.5l100.58-88.75a66,66,0,0,0-89.78,50.72,6,6,0,0,1-5.91,5.05,6.2,6.2,0,0,1-1-.07,6,6,0,0,1-5-6.88A78,78,0,0,1,162.49,122L188,99.5a6,6,0,1,1,7.94,9L71.87,218H200A6,6,0,0,1,206,224Zm-13.92-76.48A77.53,77.53,0,0,1,206,192a6,6,0,0,1-12,0,65.62,65.62,0,0,0-11.77-37.63,6,6,0,0,1,9.85-6.85Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
