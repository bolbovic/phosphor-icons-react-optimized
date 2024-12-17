var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as A } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = A((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm38-106a38,38,0,1,0-61.5,29.86l-14,31.72A6,6,0,0,0,96,182h64a6,6,0,0,0,5.49-8.42l-14-31.72A38.16,38.16,0,0,0,166,112Zm-25,22.53a6,6,0,0,0-2.49,7.61L150.8,170H105.2l12.29-27.86a6,6,0,0,0-2.49-7.61,26,26,0,1,1,26,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
