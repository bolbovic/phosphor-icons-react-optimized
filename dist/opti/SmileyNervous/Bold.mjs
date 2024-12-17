var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var s = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && s(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && s(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const n = f((m, e) => {
  var r = m, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM76,108a16,16,0,1,1,16,16A16,16,0,0,1,76,108Zm72,0a16,16,0,1,1,16,16A16,16,0,0,1,148,108Zm30.92,64.94a12,12,0,0,1-16.78,2.52,38.18,38.18,0,0,1-7.74-8.26,35.12,35.12,0,0,0-2.4-3,35.12,35.12,0,0,0-2.4,3C146,172,140,180,128,180s-18-8-21.6-12.8a35.12,35.12,0,0,0-2.4-3,35.12,35.12,0,0,0-2.4,3,38.18,38.18,0,0,1-7.74,8.26,12,12,0,0,1-14.27-19.3,22.82,22.82,0,0,0,2.81-3.36C86,148,92,140,104,140s18,8,21.6,12.8a35.12,35.12,0,0,0,2.4,3,35.12,35.12,0,0,0,2.4-3C134,148,140,140,152,140s18,8,21.6,12.8a22.82,22.82,0,0,0,2.81,3.36A12,12,0,0,1,178.92,172.94Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
