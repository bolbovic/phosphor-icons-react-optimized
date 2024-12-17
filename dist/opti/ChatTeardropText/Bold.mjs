var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M176,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h68A12,12,0,0,1,176,108Zm-12,28H96a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm72-12A104.11,104.11,0,0,1,132,228H48a20,20,0,0,1-20-20V124a104,104,0,0,1,208,0Zm-24,0a80,80,0,0,0-160,0v80h80A80.09,80.09,0,0,0,212,124Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
