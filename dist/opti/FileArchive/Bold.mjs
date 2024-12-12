var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var h in a)
    m.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && o)
    for (var h of o(a))
      t.indexOf(h) < 0 && l.call(a, h) && (e[h] = a[h]);
  return e;
};
import d, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((h, e) => {
  var r = h, { children: a } = r, t = H(r, ["children"]);
  return /* @__PURE__ */ d.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM183,80H160V57ZM116,212V192h8a12,12,0,0,0,0-24h-8V152h8a12,12,0,0,0,0-24h-8V116a12,12,0,0,0-24,0v12H84a12,12,0,0,0,0,24h8v16H84a12,12,0,0,0,0,24h8v20H60V44h76V92a12,12,0,0,0,12,12h48V212Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
