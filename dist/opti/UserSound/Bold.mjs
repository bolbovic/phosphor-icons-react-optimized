var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    d.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && l.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((o, e) => {
  var m = o, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, s({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M152.5,164.53a72,72,0,1,0-89,0,124.08,124.08,0,0,0-48.69,35.75,12,12,0,0,0,18.38,15.44C46.88,199.42,71,180,108,180s61.12,19.42,74.81,35.72a12,12,0,1,0,18.38-15.44A124,124,0,0,0,152.5,164.53ZM60,108a48,48,0,1,1,48,48A48.05,48.05,0,0,1,60,108Zm192,0a143.09,143.09,0,0,1-11.61,56.73,12,12,0,1,1-22-9.46,120.48,120.48,0,0,0,0-94.54,12,12,0,1,1,22-9.46A143.09,143.09,0,0,1,252,108ZM207,64.76a108.26,108.26,0,0,1,0,86.48,12,12,0,0,1-22-9.62,84.35,84.35,0,0,0,0-67.24,12,12,0,1,1,22-9.62Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
