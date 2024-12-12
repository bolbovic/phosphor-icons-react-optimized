var s = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, e, c) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: c }) : a[e] = c, Z = (a, e) => {
  for (var c in e || (e = {}))
    l.call(e, c) && V(a, c, e[c]);
  if (t)
    for (var c of t(e))
      o.call(e, c) && V(a, c, e[c]);
  return a;
};
var i = (a, e) => {
  var c = {};
  for (var m in a)
    l.call(a, m) && e.indexOf(m) < 0 && (c[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && o.call(a, m) && (c[m] = a[m]);
  return c;
};
import p, { forwardRef as f } from "react";
import d from "../../lib/OptiBase.mjs";
const n = f((m, c) => {
  var r = m, { children: a } = r, e = i(r, ["children"]);
  return /* @__PURE__ */ p.createElement(d, Z({ ref: c }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM56,146.87C36.41,141.4,24,132.39,24,124V109.93c8.16,5.78,19.09,10.44,32,13.57Zm80-23.37c12.91-3.13,23.84-7.79,32-13.57V124c0,8.39-12.41,17.4-32,22.87Zm-16,71.37C100.41,189.4,88,180.39,88,172v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41Zm0-44.62A163,163,0,0,1,96,152a163,163,0,0,1-24-1.75V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54Zm64,48a165.45,165.45,0,0,1-48,0V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54ZM232,172c0,8.39-12.41,17.4-32,22.87V171.5c12.91-3.13,23.84-7.79,32-13.57Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
