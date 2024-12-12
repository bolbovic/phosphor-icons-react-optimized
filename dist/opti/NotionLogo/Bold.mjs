var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const V = i((o, e) => {
  var l = o, { children: a } = l, t = d(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,36H176a12,12,0,0,0,0,24h8V161.28L118.51,42.22A12,12,0,0,0,108,36H40a12,12,0,0,0,0,24h8V196H40a12,12,0,0,0,0,24H80a12,12,0,0,0,0-24H72V94.72l65.49,119.06A12,12,0,0,0,148,220h48a12,12,0,0,0,12-12V60h8a12,12,0,0,0,0-24ZM80.3,60h20.6l74.8,136H155.1Z" }));
});
V.displayName = "Bold";
export {
  V as Bold
};
