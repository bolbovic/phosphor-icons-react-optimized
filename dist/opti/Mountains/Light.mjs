var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = h(l, ["children"]);
  return /* @__PURE__ */ L.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm89.16,158.94L198.6,104.86a13.9,13.9,0,0,0-12-6.86h0a13.88,13.88,0,0,0-12,6.86l-27.88,47.05-46.56-79a14,14,0,0,0-24.13,0L2.83,197A6,6,0,0,0,8,206H248a6,6,0,0,0,5.16-9.06ZM86.27,79a2,2,0,0,1,3.46,0l25.34,43H60.93ZM18.5,194l35.36-60h68.29l19.3,32.77,0,0,16,27.2Zm152.93,0-17.85-30.29L184.83,111a2,2,0,0,1,1.72-1,1.93,1.93,0,0,1,1.72,1l49.2,83Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
