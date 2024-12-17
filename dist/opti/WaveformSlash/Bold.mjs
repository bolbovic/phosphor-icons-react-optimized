var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && V(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((o, e) => {
  var m = o, { children: a } = m, t = Z(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M60,96v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0ZM56.88,31.93A12,12,0,1,0,39.12,48.07L76,88.64V224a12,12,0,0,0,24,0V115l16,17.6V192a12,12,0,0,0,24,0V159l59.12,65a12,12,0,0,0,17.76-16.14ZM128,80.54a12,12,0,0,0,12-12V64a12,12,0,0,0-24,0v4.54A12,12,0,0,0,128,80.54Zm40,44a12,12,0,0,0,12-12V96a12,12,0,0,0-24,0v16.54A12,12,0,0,0,168,124.54ZM208,68a12,12,0,0,0-12,12v76.54a12,12,0,0,0,24,0V80A12,12,0,0,0,208,68Z" }));
});
v.displayName = "Bold";
export {
  v as Bold
};
