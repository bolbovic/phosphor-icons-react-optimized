var l = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    p.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && v.call(a, H) && (e[H] = a[H]);
  return e;
};
import o, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const V = n((H, e) => {
  var r = H, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ o.createElement(A, Z({ ref: e }, t), a, /* @__PURE__ */ o.createElement(
    "path",
    {
      d: "M248,120v64a8,8,0,0,1-8,8H216a24,24,0,0,0-32-22.63h0A24,24,0,0,0,168,192H104a24,24,0,0,0-48,0H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184v56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ o.createElement("path", { d: "M80,120a8,8,0,0,1,8-8h16V96a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16H120v16a8,8,0,0,1-16,0V128H88A8,8,0,0,1,80,120Zm176,0v64a16,16,0,0,1-16,16H223a32,32,0,0,1-62,0H111a32,32,0,0,1-62,0H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H184a8,8,0,0,1,8,8v8h34.58a15.93,15.93,0,0,1,14.86,10.06l14,35A7.92,7.92,0,0,1,256,120ZM192,88v24h44.18l-9.6-24ZM32,184H49a32,32,0,0,1,62,0h50a32.11,32.11,0,0,1,15-19.69V72H32Zm64,8a16,16,0,1,0-16,16A16,16,0,0,0,96,192Zm112,0a16,16,0,1,0-16,16A16,16,0,0,0,208,192Zm32-8V128H192v32a32.06,32.06,0,0,1,31,24Z" }));
});
V.displayName = "Duotone";
export {
  V as Duotone
};
