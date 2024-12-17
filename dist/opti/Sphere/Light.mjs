var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
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
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ f.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm90,102c0,6.59-12.94,13.24-24,16.94a167.93,167.93,0,0,1-28.92,6.53c.62-7.6.94-15.46.94-23.47,0-26.27-3.44-51-9.68-69.78a85.57,85.57,0,0,0-8-17.91A90.16,90.16,0,0,1,218,128ZM128,38c6.59,0,13.24,12.94,16.94,24,5.84,17.53,9.06,41,9.06,66,0,8.83-.4,17.15-1.11,24.89-8,.73-16.35,1.11-24.89,1.11-54.94,0-90-15.4-90-26A90.1,90.1,0,0,1,128,38ZM40.31,148.3a85.57,85.57,0,0,0,17.91,8C77,162.56,101.73,166,128,166c8,0,15.86-.32,23.45-.94C146.64,198.2,136,218,128,218A90.16,90.16,0,0,1,40.31,148.3Zm108,67.39a85.57,85.57,0,0,0,8-17.91,184,184,0,0,0,7.43-34,184,184,0,0,0,34-7.43,85.57,85.57,0,0,0,17.91-8A90.3,90.3,0,0,1,148.3,215.69Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
