var M = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && H(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as V } from "react";
import d from "../../lib/OptiBase.mjs";
const f = V((o, e) => {
  var p = o, { children: a } = p, t = i(p, ["children"]);
  return /* @__PURE__ */ m.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M152,168v48a24,24,0,0,1-48,0V168a24,24,0,0,1,48,0ZM128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M208,40H167.2a40,40,0,0,0-78.4,0H48a8,8,0,0,0,0,16H88.8a40,40,0,0,0,12.58,21.82A64.08,64.08,0,0,0,64,136v64a16,16,0,0,0,16,16H96a32,32,0,0,0,64,0h16a16,16,0,0,0,16-16V136a64.08,64.08,0,0,0-37.38-58.18A40,40,0,0,0,167.2,56H208a8,8,0,0,0,0-16ZM144,216a16,16,0,0,1-32,0V168a16,16,0,0,1,32,0Zm32-80v64H160V168a32,32,0,0,0-64,0v32H80V136a48,48,0,0,1,96,0ZM104,48a24,24,0,1,1,24,24A24,24,0,0,1,104,48Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
