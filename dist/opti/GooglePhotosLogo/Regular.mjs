var i = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (A)
    for (var e of A(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const M = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(H, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM184,88A55.31,55.31,0,0,1,174,120H136V32.57A56.09,56.09,0,0,1,184,88ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72ZM72,168a55.31,55.31,0,0,1,10-32h38v87.43A56.09,56.09,0,0,1,72,168Zm96,16A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
