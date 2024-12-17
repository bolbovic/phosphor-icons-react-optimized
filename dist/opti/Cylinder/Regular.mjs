var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, l = (e, r) => {
  for (var a in r || (r = {}))
    s.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var f = (e, r) => {
  var a = {};
  for (var t in e)
    s.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((t, a) => {
  var c = t, { children: e } = c, r = f(c, ["children"]);
  return /* @__PURE__ */ i.createElement(d, l({ ref: a }, r), e, /* @__PURE__ */ i.createElement("path", { d: "M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
