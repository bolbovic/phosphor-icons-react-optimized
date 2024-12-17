var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && H(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as n } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = n((r, e) => {
  var m = r, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ c.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M92,164a8,8,0,1,1-8-8A8,8,0,0,1,92,164Zm136,12v32a12,12,0,0,1-12,12H180a12.08,12.08,0,0,1-11.51-8.6L156.83,172H126.55l5.09,17.13a2.13,2.13,0,0,1,.07.27A12,12,0,0,1,120,204H72.14a4,4,0,0,1-2.26-.7A96,96,0,0,1,28,124c0-52.19,42.47-95.23,94.63-96A96,96,0,0,1,220,124v4a4,4,0,0,1-4,4H153.35l9.46,32H216A12,12,0,0,1,228,176ZM123.93,191.25l-15.57-52.37a2.86,2.86,0,0,1-.07-.28A12,12,0,0,1,120,124h92a88,88,0,0,0-89.25-88C74.93,36.67,36,76.13,36,124a88,88,0,0,0,37.39,72H120a4,4,0,0,0,3.93-4.75ZM154.46,164,145,132H120a4,4,0,0,0-3.93,4.75l8.1,27.25ZM220,176a4,4,0,0,0-4-4H165.17l11,37.13A4,4,0,0,0,180,212h36a4,4,0,0,0,4-4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
