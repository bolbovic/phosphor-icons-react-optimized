var A = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? A(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, i = (e, t) => {
  for (var a in t || (t = {}))
    n.call(t, a) && c(e, a, t[a]);
  if (m)
    for (var a of m(t))
      Z.call(t, a) && c(e, a, t[a]);
  return e;
};
var l = (e, t) => {
  var a = {};
  for (var o in e)
    n.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && Z.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, a) => {
  var p = o, { children: e } = p, t = l(p, ["children"]);
  return /* @__PURE__ */ r.createElement(f, i({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM96,168V88l64,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M160,80a8,8,0,0,0-8,8v25.57L100.24,81.22A8,8,0,0,0,88,88v80a8,8,0,0,0,12.24,6.78L152,142.43V168a8,8,0,0,0,16,0V88A8,8,0,0,0,160,80Zm-56,73.57V102.43L144.91,128ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
