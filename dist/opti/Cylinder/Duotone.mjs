var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    s.call(a, t) && p(e, t, a[t]);
  if (c)
    for (var t of c(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    s.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && c)
    for (var o of c(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import m, { forwardRef as l } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = l((o, t) => {
  var r = o, { children: e } = r, a = d(r, ["children"]);
  return /* @__PURE__ */ m.createElement(V, i({ ref: t }, a), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M192,60c0,19.88-28.65,36-64,36S64,79.88,64,60s28.65-36,64-36S192,40.12,192,60Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,16c26.49,0,56,11.5,56,28s-29.51,28-56,28S72,76.5,72,60,101.51,32,128,32Zm0,192c-29.83,0-56-13.08-56-28V88c13.1,9.85,33.14,16,56,16s42.9-6.2,56-16V196C184,210.92,157.83,224,128,224Z" }));
});
Z.displayName = "Duotone";
export {
  Z as Duotone
};
