var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, h, e) => h in a ? V(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, Z = (a, h) => {
  for (var e in h || (h = {}))
    r.call(h, e) && o(a, e, h[e]);
  if (m)
    for (var e of m(h))
      A.call(h, e) && o(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      h.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const c = d((t, e) => {
  var v = t, { children: a } = v, h = p(v, ["children"]);
  return /* @__PURE__ */ H.createElement(l, Z({ ref: e }, h), a, /* @__PURE__ */ H.createElement("path", { d: "M68,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20v-8a12,12,0,0,1,24,0v4h4A12,12,0,0,1,68,216Zm44-12H96a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24ZM40,172a12,12,0,0,0,12-12V144a12,12,0,0,0-24,0v16A12,12,0,0,0,40,172Zm128,16a12,12,0,0,0-12,12v4h-4a12,12,0,0,0,0,24h8a20,20,0,0,0,20-20v-8A12,12,0,0,0,168,188Zm0-72a12,12,0,0,0,12-12V96a20,20,0,0,0-20-20h-8a12,12,0,0,0,0,24h4v4A12,12,0,0,0,168,116ZM56,76H48A20,20,0,0,0,28,96v8a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM208,28H100A20,20,0,0,0,80,48V88a5.47,5.47,0,0,0,0,.6A12,12,0,0,0,92,100h20a12,12,0,0,0,0-24h-8V52H204V152H180v-8a12,12,0,0,0-24,0v20a12,12,0,0,0,12,12h40a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Z" }));
});
c.displayName = "Bold";
export {
  c as Bold
};
