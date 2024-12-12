var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      L.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var l in a)
    o.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && L.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var c = l, { children: a } = c, t = p(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M227.09,54.22a30.92,30.92,0,0,0-25.31-25.31c-32-5.42-92.28-7.91-136.53,36.34S23.49,169.78,28.91,201.78a30.92,30.92,0,0,0,25.31,25.31,205,205,0,0,0,34,2.91c31.69,0,71.12-7.88,102.49-39.25C235,146.5,232.51,86.22,227.09,54.22ZM167.44,37.9a194,194,0,0,1,32.33,2.83,18.93,18.93,0,0,1,15.5,15.5,187,187,0,0,1,2.6,41.21l-59.31-59.3C161.45,38,164.4,37.9,167.44,37.9ZM56.23,215.27a18.93,18.93,0,0,1-15.5-15.5,187,187,0,0,1-2.6-41.21l59.31,59.31A187,187,0,0,1,56.23,215.27Zm126-33c-11.92,11.91-34.24,28.54-69.46,34L39.72,143.19c5.47-35.22,22.1-57.54,34-69.46S108,45.2,143.2,39.73l73.08,73.08C210.81,148,194.18,170.35,182.27,182.27ZM164.22,91.78a6,6,0,0,1,0,8.48L148.48,116l7.75,7.75a6,6,0,1,1-8.48,8.48L140,124.49,124.49,140l7.75,7.76a6,6,0,1,1-8.48,8.48L116,148.48l-15.75,15.74a6,6,0,1,1-8.48-8.48L107.52,140l-7.75-7.75a6,6,0,1,1,8.48-8.48l7.76,7.75,15.5-15.5-7.75-7.76a6,6,0,1,1,8.48-8.48l7.75,7.75,15.75-15.74A6,6,0,0,1,164.22,91.78Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
