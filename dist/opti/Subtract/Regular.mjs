var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    c.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && o(a, e, r[e]);
  return a;
};
var A = (a, r) => {
  var e = {};
  for (var t in a)
    c.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var l = t, { children: a } = l, r = A(l, ["children"]);
  return /* @__PURE__ */ f.createElement(M, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M174.63,81.35a80,80,0,1,0-93.28,93.28,80,80,0,1,0,93.28-93.28ZM224,160c0,1.52-.07,3-.18,4.51l-50-50A80.14,80.14,0,0,0,176,98,63.81,63.81,0,0,1,224,160Zm-77.4-2.09,52.61,52.62A64,64,0,0,1,183,219.7l-51.86-51.86A80.5,80.5,0,0,0,146.6,157.91Zm11.31-11.31a80.5,80.5,0,0,0,9.93-15.44L219.7,183a64,64,0,0,1-9.17,16.19ZM32,96a64,64,0,1,1,64,64A64.07,64.07,0,0,1,32,96ZM98,176a80.14,80.14,0,0,0,16.5-2.13l50,50c-1.49.11-3,.18-4.51.18A63.81,63.81,0,0,1,98,176Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
