var M = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var A = (e, t, a) => t in e ? M(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, h = (e, t) => {
  for (var a in t || (t = {}))
    Z.call(t, a) && A(e, a, t[a]);
  if (m)
    for (var a of m(t))
      c.call(t, a) && A(e, a, t[a]);
  return e;
};
var n = (e, t) => {
  var a = {};
  for (var o in e)
    Z.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && m)
    for (var o of m(e))
      t.indexOf(o) < 0 && c.call(e, o) && (a[o] = e[o]);
  return a;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, a) => {
  var p = o, { children: e } = p, t = n(p, ["children"]);
  return /* @__PURE__ */ r.createElement(d, h({ ref: a }, t), e, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M60.12,60.09A95.74,95.74,0,0,1,127.83,32h0A95.94,95.94,0,0,1,32,127.75,95.64,95.64,0,0,1,60.12,60.09ZM32,127.92v-.17h0Zm124.28,28.26a95.54,95.54,0,0,0-28.11,67.65A96,96,0,0,0,224,128.08h0A95.79,95.79,0,0,0,156.28,156.18ZM128.17,224v-.17h0Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M201.57,54.46a104,104,0,1,0,0,147.08A103.4,103.4,0,0,0,201.57,54.46ZM65.75,65.77a87.63,87.63,0,0,1,53.66-25.31A87.31,87.31,0,0,1,94,94.06a87.42,87.42,0,0,1-53.62,25.35A87.58,87.58,0,0,1,65.75,65.77ZM40.33,135.48a103.29,103.29,0,0,0,65-30.11,103.24,103.24,0,0,0,30.13-65,87.78,87.78,0,0,1,80.18,80.14,104,104,0,0,0-95.16,95.1,87.78,87.78,0,0,1-80.18-80.14Zm149.92,54.75a87.69,87.69,0,0,1-53.66,25.31,88,88,0,0,1,79-78.95A87.58,87.58,0,0,1,190.25,190.23Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
