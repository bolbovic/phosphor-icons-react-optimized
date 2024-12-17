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
import i, { forwardRef as A } from "react";
import n from "../../lib/OptiBase.mjs";
const B = A((o, e) => {
  var l = o, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M212,132l-.68,0L179.38,36.21A12,12,0,0,0,168,28H136a12,12,0,0,0,0,24h23.35l14.83,44.49L114.59,164H83.2a40,40,0,1,0-2.55,24H120a12,12,0,0,0,9-4.06l54-61.13,5.6,16.81A40,40,0,1,0,212,132ZM44,188a16,16,0,1,1,16-16A16,16,0,0,1,44,188Zm168,0a16,16,0,1,1,16-16A16,16,0,0,1,212,188Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
