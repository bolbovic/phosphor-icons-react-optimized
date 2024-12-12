var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      v.call(t, e) && h(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && v.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M236,88v4a12,12,0,0,1-24,0H130.67a20.12,20.12,0,0,1-12-4L92,68H44V196h60a12,12,0,0,1,0,24H40a20,20,0,0,1-20-20V64A20,20,0,0,1,40,44H93.33a20.12,20.12,0,0,1,12,4L132,68h84A20,20,0,0,1,236,88Zm0,76v44a12,12,0,0,1-12,12H152a12,12,0,0,1-12-12V164a12,12,0,0,1,12-12h4v-4a32,32,0,0,1,64,0v4h4A12,12,0,0,1,236,164Zm-56-12h16v-4a8,8,0,0,0-16,0Zm32,24H164v20h48Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
