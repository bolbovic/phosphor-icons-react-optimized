var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var s = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, p = (e, t) => {
  for (var a in t || (t = {}))
    o.call(t, a) && s(e, a, t[a]);
  if (m)
    for (var a of m(t))
      l.call(t, a) && s(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    o.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && l.call(e, r) && (a[r] = e[r]);
  return a;
};
import d, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const n = R((r, a) => {
  var c = r, { children: e } = c, t = f(c, ["children"]);
  return /* @__PURE__ */ d.createElement(V, p({ ref: a }, t), e, /* @__PURE__ */ d.createElement("path", { d: "M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
