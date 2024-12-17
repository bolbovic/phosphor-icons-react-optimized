var d = Object.defineProperty;
var v = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, h, e) => h in a ? d(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, c = (a, h) => {
  for (var e in h || (h = {}))
    r.call(h, e) && o(a, e, h[e]);
  if (v)
    for (var e of v(h))
      l.call(h, e) && o(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    r.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && v)
    for (var t of v(a))
      h.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var m = t, { children: a } = m, h = p(m, ["children"]);
  return /* @__PURE__ */ V.createElement(A, c({ ref: e }, h), a, /* @__PURE__ */ V.createElement("path", { d: "M216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V224a12,12,0,0,0,24,0V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160ZM40,180c0,8.67,5.5,16,12,16a10.27,10.27,0,0,0,7.33-3.43,12,12,0,1,1,17.34,16.6A34,34,0,0,1,52,220c-19.85,0-36-17.94-36-40s16.15-40,36-40a34,34,0,0,1,24.67,10.83,12,12,0,1,1-17.34,16.6A10.27,10.27,0,0,0,52,164C45.5,164,40,171.33,40,180Zm132-8a12,12,0,0,0,0-24h-4v-4a12,12,0,0,0-24,0v4H132v-4a12,12,0,0,0-24,0v4h-4a12,12,0,0,0,0,24h4v12h-4a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h12v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24h-4V172Zm-28,12H132V172h12Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
