var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const C = f((o, e) => {
  var m = o, { children: a } = m, t = i(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ c.createElement(
    "path",
    {
      d: "M232,127.82c.09,33.94-28.41,63.3-62.34,64.16a63.72,63.72,0,0,1-41.66-14,63.71,63.71,0,0,1-41.65,14c-33.93-.86-62.44-30.22-62.35-64.16a64,64,0,0,1,40.13-59.2,68,68,0,0,1,127.74,0A64,64,0,0,1,232,127.82Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ c.createElement("path", { d: "M198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.22,72.22,0,0,0,120,192.47V232a8,8,0,0,0,16,0V192.47A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59ZM169.45,184a56.08,56.08,0,0,1-33.45-10v-41l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94v17a56,56,0,0,1-33.45,10C56.9,183.23,31.92,157.52,32,127.84A55.79,55.79,0,0,1,67.11,76a8,8,0,0,0,4.53-4.67,60,60,0,0,1,112.72,0A8,8,0,0,0,188.89,76,55.79,55.79,0,0,1,224,127.84C224.08,157.52,199.1,183.23,169.45,184Z" }));
});
C.displayName = "Duotone";
export {
  C as Duotone
};
