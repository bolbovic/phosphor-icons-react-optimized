var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((m, e) => {
  var o = m, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M236,108a24,24,0,1,1-24-24A24,24,0,0,1,236,108ZM68,108a24,24,0,1,0-24,24A24,24,0,0,0,68,108ZM92,84A24,24,0,1,0,68,60,24,24,0,0,0,92,84Zm72,0a24,24,0,1,0-24-24A24,24,0,0,0,164,84Zm48,100a44,44,0,0,1-61.1,40.55,60.15,60.15,0,0,0-45.8,0A44,44,0,0,1,67,145.34,31.33,31.33,0,0,0,81.91,126.6a48,48,0,0,1,92.18,0A31.34,31.34,0,0,0,189,145.34,44,44,0,0,1,212,184Zm-24,0a20,20,0,0,0-10.49-17.6l-.1-.06a55.22,55.22,0,0,1-26.37-33,24,24,0,0,0-46.08,0,55.21,55.21,0,0,1-26.37,33.05l-.1.06A20,20,0,0,0,88,204a19.77,19.77,0,0,0,7.8-1.58l.13,0a84,84,0,0,1,64.14,0l.13,0A19.77,19.77,0,0,0,168,204,20,20,0,0,0,188,184Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
