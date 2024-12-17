var C = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (e, a, t) => a in e ? C(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, p = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && o(e, t, a[t]);
  if (m)
    for (var t of m(a))
      i.call(a, t) && o(e, t, a[t]);
  return e;
};
var s = (e, a) => {
  var t = {};
  for (var r in e)
    c.call(e, r) && a.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      a.indexOf(r) < 0 && i.call(e, r) && (t[r] = e[r]);
  return t;
};
import f, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const n = V((r, t) => {
  var l = r, { children: e } = l, a = s(l, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: t }, a), e, /* @__PURE__ */ f.createElement("path", { d: "M128,16C87.63,16,56,35.33,56,60V196c0,24.67,31.63,44,72,44s72-19.33,72-44V60C200,35.33,168.37,16,128,16Zm0,208c-29.83,0-56-13.08-56-28V77.43C82.92,88.5,103.9,96,128,96s45.08-7.5,56-18.57V196C184,210.92,157.83,224,128,224Z" }));
});
n.displayName = "Fill";
export {
  n as Fill
};
