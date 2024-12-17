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
import i, { forwardRef as L } from "react";
import n from "../../lib/OptiBase.mjs";
const A = L((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M140,93V69.2l21.83,13.09a12,12,0,1,0,12.34-20.58L151.32,48l22.85-13.71a12,12,0,0,0-12.34-20.58L128,34,94.17,13.71A12,12,0,0,0,81.83,34.29L104.68,48,81.83,61.71A12,12,0,1,0,94.17,82.29L116,69.2V93a76,76,0,1,0,24,0ZM128,220a52,52,0,1,1,52-52A52.06,52.06,0,0,1,128,220Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
