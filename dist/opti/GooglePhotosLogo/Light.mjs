var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var A = r, { children: a } = A, t = Z(A, ["children"]);
  return /* @__PURE__ */ c.createElement(H, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M232,122H189.18A70,70,0,0,0,128,18a6,6,0,0,0-6,6V66.82A70,70,0,0,0,18,128a6,6,0,0,0,6,6H66.82A70,70,0,0,0,128,238a6,6,0,0,0,6-6V189.18A70,70,0,0,0,238,128,6,6,0,0,0,232,122ZM186,88a57.3,57.3,0,0,1-11,34H134V30.31A58.08,58.08,0,0,1,186,88ZM88,70a57.3,57.3,0,0,1,34,11v41H30.31A58.08,58.08,0,0,1,88,70ZM70,168a57.3,57.3,0,0,1,11-34h41v91.69A58.08,58.08,0,0,1,70,168Zm98,18a57.3,57.3,0,0,1-34-11V134h91.69A58.08,58.08,0,0,1,168,186Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
