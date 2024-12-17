var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import i, { forwardRef as n } from "react";
import B from "../../lib/OptiBase.mjs";
const E = n((o, e) => {
  var c = o, { children: a } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(B, l({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M225.24,150.73a12,12,0,0,1-1.58,16.9C205.49,182.7,189.06,188,174.15,188c-19.76,0-36.86-9.29-51.88-17.44-25.06-13.62-44.86-24.37-74.61.3a12,12,0,1,1-15.32-18.48c42.25-35,75-17.23,101.39-2.92,25.06,13.61,44.86,24.37,74.61-.31A12,12,0,0,1,225.24,150.73ZM47.66,106.85c29.75-24.68,49.55-13.92,74.61-.31,15,8.16,32.12,17.45,51.88,17.45,14.91,0,31.34-5.3,49.51-20.37a12,12,0,0,0-15.32-18.48c-29.75,24.67-49.55,13.92-74.61.3-26.35-14.3-59.14-32.11-101.39,2.93a12,12,0,0,0,15.32,18.48Z" }));
});
E.displayName = "Bold";
export {
  E as Bold
};
