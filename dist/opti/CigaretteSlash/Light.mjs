var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && o(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as h } from "react";
import f from "../../lib/OptiBase.mjs";
const s = h((m, e) => {
  var c = m, { children: a } = c, t = l(c, ["children"]);
  return /* @__PURE__ */ p.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44l78.15,86H32a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H176.25l27.31,30a6,6,0,0,0,8.88-8.08ZM30,176V144a2,2,0,0,1,2-2H82v36H32A2,2,0,0,1,30,176Zm64,2V142h38.62l32.73,36Zm144-34v32a14,14,0,0,1-14,14h-1.84a6,6,0,1,1,0-12H224a2,2,0,0,0,2-2V144a2,2,0,0,0-2-2H178.52a6,6,0,1,1,0-12H224A14,14,0,0,1,238,144ZM202.77,61.06c7.81-13.88,7.91-21.91,6.62-26.2a9,9,0,0,0-3.93-5.42A6,6,0,0,1,208,18a5.87,5.87,0,0,1,2.44.52,20.42,20.42,0,0,1,10.23,12.24c3.18,9.58.68,21.75-7.44,36.18-7.81,13.88-7.91,21.91-6.62,26.2a8.94,8.94,0,0,0,3.88,5.4A6,6,0,0,1,208,110a5.87,5.87,0,0,1-2.44-.52,20.42,20.42,0,0,1-10.23-12.24C192.15,87.66,194.65,75.49,202.77,61.06Zm-40,0c7.81-13.88,7.91-21.91,6.62-26.2a9,9,0,0,0-3.93-5.42A6,6,0,0,1,168,18a5.87,5.87,0,0,1,2.44.52,20.42,20.42,0,0,1,10.23,12.24c3.18,9.58.68,21.75-7.44,36.18-7.81,13.88-7.91,21.91-6.62,26.2a8.94,8.94,0,0,0,3.88,5.4A6,6,0,0,1,168,110a5.87,5.87,0,0,1-2.44-.52,20.42,20.42,0,0,1-10.23-12.24C152.15,87.66,154.65,75.49,162.77,61.06Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
