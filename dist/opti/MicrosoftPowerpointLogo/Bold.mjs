var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && H(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as V } from "react";
import c from "../../lib/OptiBase.mjs";
const f = V((m, e) => {
  var r = m, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ l.createElement(c, d({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M94,88H76a12,12,0,0,0-12,12v52a12,12,0,0,0,24,0v-4h6a30,30,0,0,0,0-60Zm0,36H88V112h6a6,6,0,0,1,0,12ZM136,20A108.16,108.16,0,0,0,59.27,52H40A20,20,0,0,0,20,72V180a20,20,0,0,0,20,20H55.5A108,108,0,1,0,136,20Zm0,24a84.12,84.12,0,0,1,83.13,72H164V72a20,20,0,0,0-20-20H100.27A83.88,83.88,0,0,1,136,44ZM44,76h96V176H44Zm92,136a83.67,83.67,0,0,1-43.32-12H144a20,20,0,0,0,20-20V140h55.13A84.12,84.12,0,0,1,136,212Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
