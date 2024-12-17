var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && H(a, e, t[e]);
  return a;
};
var v = (a, t) => {
  var e = {};
  for (var o in a)
    A.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as V } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = V((o, e) => {
  var p = o, { children: a } = p, t = v(p, ["children"]);
  return /* @__PURE__ */ r.createElement(Z, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M152,128a8,8,0,0,1-8,8H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20A8,8,0,0,1,152,128Zm72-48v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-16,0a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Zm40,8a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,248,88Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
