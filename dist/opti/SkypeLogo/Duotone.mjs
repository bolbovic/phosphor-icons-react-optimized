var d = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (c)
    for (var e of c(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && c)
    for (var o of c(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const Z = f((o, e) => {
  var r = o, { children: a } = r, t = i(r, ["children"]);
  return /* @__PURE__ */ m.createElement(l, s({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M224,176a48,48,0,0,1-77.31,38A88.07,88.07,0,0,1,42,109.31,48,48,0,0,1,109.31,42,88.07,88.07,0,0,1,214,146.69,47.77,47.77,0,0,1,224,176Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M168,152c0,17.64-17.94,32-40,32s-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152Zm64,24a56.06,56.06,0,0,1-56,56,55.38,55.38,0,0,1-31.17-9.47A96.09,96.09,0,0,1,33.47,111.17,55.38,55.38,0,0,1,24,80,56.06,56.06,0,0,1,80,24a55.38,55.38,0,0,1,31.17,9.47A96.09,96.09,0,0,1,222.53,144.83,55.38,55.38,0,0,1,232,176Zm-16,0a39.6,39.6,0,0,0-8.32-24.42,8,8,0,0,1-1.49-6.58A80.07,80.07,0,0,0,111,49.81a8,8,0,0,1-6.58-1.49A39.6,39.6,0,0,0,80,40,40,40,0,0,0,40,80a39.6,39.6,0,0,0,8.32,24.42A8,8,0,0,1,49.81,111,80.07,80.07,0,0,0,145,206.19a8,8,0,0,1,6.58,1.49A39.6,39.6,0,0,0,176,216,40,40,0,0,0,216,176Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
