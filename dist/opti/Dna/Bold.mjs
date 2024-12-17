var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import h, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((o, e) => {
  var m = o, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ h.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M204,204.5V232a12,12,0,0,1-24,0V204.5a59.68,59.68,0,0,0-33.17-53.67l-48.4-24.2A83.54,83.54,0,0,1,52,51.5V24a12,12,0,0,1,24,0V51.5a59.68,59.68,0,0,0,33.17,53.67l48.4,24.2A83.54,83.54,0,0,1,204,204.5Zm-52-.5H76a59.75,59.75,0,0,1,2.34-16h56.2a12,12,0,0,0,0-24H91.76c1-1.1,2-2.18,3.13-3.21a12,12,0,0,0-16.45-17.48A84.38,84.38,0,0,0,52,204.5V232a12,12,0,0,0,24,0v-4h76a12,12,0,0,0,0-24ZM192,12a12,12,0,0,0-12,12v4H104a12,12,0,0,0,0,24h76a59.75,59.75,0,0,1-2.34,16H121.44a12,12,0,0,0,0,24h42.8c-1,1.1-2,2.18-3.13,3.21a12,12,0,0,0,16.45,17.48A84.38,84.38,0,0,0,204,51.5V24A12,12,0,0,0,192,12Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
