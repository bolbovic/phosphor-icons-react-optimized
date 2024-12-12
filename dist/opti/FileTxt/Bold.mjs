var H = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      h.call(t, e) && A(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && h.call(a, m) && (e[m] = a[m]);
  return e;
};
import d, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((m, e) => {
  var r = m, { children: a } = r, t = V(r, ["children"]);
  return /* @__PURE__ */ d.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M48,120a12,12,0,0,0,12-12V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88a12,12,0,0,0-3.51-8.49l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68A12,12,0,0,0,48,120ZM183,80H160V57Zm-25.27,79-15,21,15,21A12,12,0,1,1,138.24,215L128,200.65,117.76,215A12,12,0,1,1,98.24,201l15-21-15-21A12,12,0,1,1,117.76,145L128,159.35,138.24,145A12,12,0,1,1,157.76,159ZM92,152a12,12,0,0,1-12,12H72v44a12,12,0,0,1-24,0V164H40a12,12,0,0,1,0-24H80A12,12,0,0,1,92,152Zm136,0a12,12,0,0,1-12,12h-8v44a12,12,0,0,1-24,0V164h-8a12,12,0,0,1,0-24h40A12,12,0,0,1,228,152Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
