var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var V = (a, h, e) => h in a ? s(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, o = (a, h) => {
  for (var e in h || (h = {}))
    l.call(h, e) && V(a, e, h[e]);
  if (r)
    for (var e of r(h))
      m.call(h, e) && V(a, e, h[e]);
  return a;
};
var p = (a, h) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && h.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      h.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const d = v((t, e) => {
  var H = t, { children: a } = H, h = p(H, ["children"]);
  return /* @__PURE__ */ f.createElement(c, o({ ref: e }, h), a, /* @__PURE__ */ f.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H112V200h8a8,8,0,0,0,0-16h-8V168h8a8,8,0,0,0,0-16h-8V136h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16H56V40h88V88a8,8,0,0,0,8,8h48V216Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
