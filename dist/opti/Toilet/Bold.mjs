var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && H(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, d({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,68a12,12,0,0,1-12,12H100a12,12,0,0,1,0-24h16A12,12,0,0,1,128,68Zm48.15,127.62,3.65,25.55A20,20,0,0,1,160,244H96a20,20,0,0,1-19.8-22.83l3.65-25.55A100.08,100.08,0,0,1,28,108,12,12,0,0,1,40,96H52V40A20,20,0,0,1,72,20H184a20,20,0,0,1,20,20V96h12a12,12,0,0,1,12,12A100.08,100.08,0,0,1,176.15,195.62ZM76,96H180V44H76Zm77.21,108.78a100.3,100.3,0,0,1-50.42,0L100.61,220h54.78ZM203.05,120H53a76,76,0,0,0,150.1,0Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
