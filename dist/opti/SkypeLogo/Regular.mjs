var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, A = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (c)
    for (var e of c(r))
      s.call(r, e) && o(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && s.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = l(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M168,152c0,17.64-17.94,32-40,32s-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152Zm64,24a56.06,56.06,0,0,1-56,56,55.38,55.38,0,0,1-31.17-9.47A96.09,96.09,0,0,1,33.47,111.17,55.38,55.38,0,0,1,24,80,56.06,56.06,0,0,1,80,24a55.38,55.38,0,0,1,31.17,9.47A96.09,96.09,0,0,1,222.53,144.83,55.38,55.38,0,0,1,232,176Zm-16,0a39.6,39.6,0,0,0-8.32-24.42,8,8,0,0,1-1.49-6.58A80.07,80.07,0,0,0,111,49.81a8,8,0,0,1-6.58-1.49A39.6,39.6,0,0,0,80,40,40,40,0,0,0,40,80a39.6,39.6,0,0,0,8.32,24.42A8,8,0,0,1,49.81,111,80.07,80.07,0,0,0,145,206.19a8,8,0,0,1,6.58,1.49A39.6,39.6,0,0,0,176,216,40,40,0,0,0,216,176Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
