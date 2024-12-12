var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && p(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const v = i((t, e) => {
  var o = t, { children: a } = o, r = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, h({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Zm96,144H56V136a24,24,0,0,1,24-24h96a24,24,0,0,1,24,24v80Z" }));
});
v.displayName = "Regular";
export {
  v as Regular
};
