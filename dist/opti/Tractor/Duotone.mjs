var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && Z(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && Z(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as M } from "react";
import i from "../../lib/OptiBase.mjs";
const H = M((o, e) => {
  var A = o, { children: a } = A, t = l(A, ["children"]);
  return /* @__PURE__ */ r.createElement(i, h({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M240,188a28,28,0,1,1-28-28A28,28,0,0,1,240,188ZM68,128a44,44,0,1,0,44,44A44,44,0,0,0,68,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M240,165.41V134a15.89,15.89,0,0,0-11.4-15.32l-.21-.06L192,108.71V72a8,8,0,0,0-16,0v32.38l-24-6.5V56h8a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16h8V88H40a8,8,0,0,0,0,16H68a68.07,68.07,0,0,1,68,68v12a8,8,0,0,0,8,8h32.23A36,36,0,1,0,240,165.41ZM68,88H64V56h72v66.77A83.92,83.92,0,0,0,68,88Zm84,26.45L224,134v20.1A36,36,0,0,0,178.06,176H152ZM212,208a20,20,0,1,1,20-20A20,20,0,0,1,212,208ZM68,120a52,52,0,1,0,52,52A52.06,52.06,0,0,0,68,120Zm0,88a36,36,0,1,1,36-36A36,36,0,0,1,68,208Zm12-36a12,12,0,1,1-12-12A12,12,0,0,1,80,172Z" }));
});
H.displayName = "Duotone";
export {
  H as Duotone
};
