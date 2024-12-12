var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (A)
    for (var e of A(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && A)
    for (var r of A(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import Z, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const H = d((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, f({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM184,88A55.31,55.31,0,0,1,174,120H136V32.57A56.09,56.09,0,0,1,184,88ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72ZM72,168a55.31,55.31,0,0,1,10-32h38v87.43A56.09,56.09,0,0,1,72,168Zm96,16A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};
