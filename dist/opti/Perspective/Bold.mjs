var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && d.call(a, o) && (e[o] = a[o]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((o, e) => {
  var l = o, { children: a } = l, t = V(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M240,116H228V48a20,20,0,0,0-23.58-19.67l-160,29.09A20,20,0,0,0,28,77.09V116H16a12,12,0,0,0,0,24H28v38.91a20,20,0,0,0,16.42,19.67l160,29.09A20,20,0,0,0,228,208V140h12a12,12,0,0,0,0-24ZM52,80.43,204,52.8V116H52ZM204,203.2,52,175.57V140H204Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
