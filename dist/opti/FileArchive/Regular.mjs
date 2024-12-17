var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, h, e) => h in a ? c(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, l = (a, h) => {
  for (var e in h || (h = {}))
    m.call(h, e) && V(a, e, h[e]);
  if (t)
    for (var e of t(h))
      o.call(h, e) && V(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && h.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      h.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var H = r, { children: a } = H, h = p(H, ["children"]);
  return /* @__PURE__ */ v.createElement(i, l({ ref: e }, h), a, /* @__PURE__ */ v.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H112V200h8a8,8,0,0,0,0-16h-8V168h8a8,8,0,0,0,0-16h-8V136h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H56V40h88V88a8,8,0,0,0,8,8h48V216Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
