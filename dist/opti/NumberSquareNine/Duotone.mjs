var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? V(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    c.call(t, a) && l(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && l(e, a, t[a]);
  return e;
};
var H = (e, t) => {
  var a = {};
  for (var o in e)
    c.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && n.call(e, o) && (a[o] = e[o]);
  return a;
};
import m, { forwardRef as i } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = i((o, a) => {
  var p = o, { children: e } = p, t = H(p, ["children"]);
  return /* @__PURE__ */ m.createElement(Z, A({ ref: a }, t), e, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208ZM146,76.82A36,36,0,1,0,127.94,144q.94,0,1.89-.06l-16.7,28a8,8,0,0,0,2.77,11,8,8,0,0,0,11-2.77l32.24-54,.07-.1h0A36.05,36.05,0,0,0,146,76.82ZM145.33,118l0,0A20,20,0,1,1,138,90.68,20,20,0,0,1,145.31,118Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
