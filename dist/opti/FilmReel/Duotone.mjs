var M = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, m, e) => m in a ? M(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, n = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && r(a, e, m[e]);
  if (A)
    for (var e of A(m))
      c.call(m, e) && r(a, e, m[e]);
  return a;
};
var i = (a, m) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      m.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((t, e) => {
  var o = t, { children: a } = o, m = i(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, n({ ref: e }, m), a, /* @__PURE__ */ Z.createElement(
    "path",
    {
      d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,144a16,16,0,1,1,16-16A16,16,0,0,1,80,144Zm48,48a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm0-96a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm48,48a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ Z.createElement("path", { d: "M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
