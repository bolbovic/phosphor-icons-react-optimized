var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (A)
    for (var e of A(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    Z.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && A)
    for (var o of A(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import V from "../../lib/OptiBase.mjs";
const d = i((o, e) => {
  var m = o, { children: a } = m, t = H(m, ["children"]);
  return /* @__PURE__ */ r.createElement(V, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M192,88a63.69,63.69,0,0,1-14,40H128V24A64,64,0,0,1,192,88ZM64,168a64,64,0,0,0,64,64V128H78A63.69,63.69,0,0,0,64,168Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM120,223.43A56.09,56.09,0,0,1,72,168a55.31,55.31,0,0,1,10-32h38ZM120,120H32.57A56.09,56.09,0,0,1,88,72a55.31,55.31,0,0,1,32,10Zm16-87.43A56.09,56.09,0,0,1,184,88,55.31,55.31,0,0,1,174,120H136ZM168,184A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
