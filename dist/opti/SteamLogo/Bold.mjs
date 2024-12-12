var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
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
import i, { forwardRef as Z } from "react";
import n from "../../lib/OptiBase.mjs";
const A = Z((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm50.16,122.22a40,40,0,1,0-57.25-55.34L92.57,123.6,55.18,86.21a83.55,83.55,0,1,1-9.39,24.55l32.76,32.76a32,32,0,0,0,49.51,37.41ZM117,131.27A40.26,40.26,0,0,0,132.73,147L113.3,162l-.25.2a7.93,7.93,0,0,1-5,1.79,8,8,0,0,1-8-8,7.93,7.93,0,0,1,1.79-5.05l.2-.25ZM152,128a16,16,0,1,1,16-16A16,16,0,0,1,152,128Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
