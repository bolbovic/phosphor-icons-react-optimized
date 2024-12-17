var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var L = (a, t) => {
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
const n = i((o, e) => {
  var m = o, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M228,160a12,12,0,0,1-12,12H104.22L56.88,224.07a12,12,0,0,1-17.76-16.14L71.78,172H40a12,12,0,0,1,0-24H93.6L130,108H40a12,12,0,0,1,0-24H151.78l47.34-52.07a12,12,0,0,1,17.76,16.14L184.22,84H216a12,12,0,0,1,0,24H162.4L126,148h90A12,12,0,0,1,228,160Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
