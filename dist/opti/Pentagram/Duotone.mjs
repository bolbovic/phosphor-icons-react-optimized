var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var L = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && L(e, a, t[a]);
  if (o)
    for (var a of o(t))
      Z.call(t, a) && L(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && Z.call(e, l) && (a[l] = e[l]);
  return a;
};
import m, { forwardRef as H } from "react";
import M from "../../lib/OptiBase.mjs";
const h = H((l, a) => {
  var r = l, { children: e } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(M, c({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M228.69,102.47l-54.21,39,20.77,64a8,8,0,0,1-12.31,8.95L128,174.91,73.06,214.44a8,8,0,0,1-12.31-8.95l20.77-64-54.21-39A8,8,0,0,1,32,88H98.87l21.52-66.32a7.94,7.94,0,0,1,15.22,0L157.13,88H224A8,8,0,0,1,228.69,102.47Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M239.2,91.06A15.76,15.76,0,0,0,224,80h-61l-19.7-60.74a15.94,15.94,0,0,0-30.46-.05L93.06,80H32a16,16,0,0,0-9.38,29l49.47,35.59L53.14,203A15.77,15.77,0,0,0,59,220.91a15.77,15.77,0,0,0,18.78,0L128,184.77l50.24,36.14A16,16,0,0,0,202.86,203l-19-58.46,49.5-35.62A15.76,15.76,0,0,0,239.2,91.06ZM128,24.15,146.12,80H109.88ZM32,96H87.87L77.3,128.58ZM68.36,208h0l17.39-53.59,28.55,20.54Zm22.57-69.57L104.69,96h46.62l13.76,42.39L128,165.06ZM187.64,208l0,0-45.91-33,28.55-20.54Zm-8.94-79.38L168.13,96H224Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
