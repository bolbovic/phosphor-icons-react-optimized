var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && r(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && l)
    for (var H of l(a))
      t.indexOf(H) < 0 && c.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((H, e) => {
  var m = H, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M224,120H208V104h16a8,8,0,0,1,0,16ZM32,104a8,8,0,0,0,0,16H48V104Zm176,56c0,2.7-.14,5.37-.4,8H224a8,8,0,0,1,0,16H204.32a80,80,0,0,1-152.64,0H32a8,8,0,0,1,0-16H48.4c-.26-2.63-.4-5.3-.4-8v-8H32a8,8,0,0,1,0-16H48V120H208v16h16a8,8,0,0,1,0,16H208Zm-72-16a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0ZM69.84,57.15A79.76,79.76,0,0,0,48.4,104H207.6a79.76,79.76,0,0,0-21.44-46.85l19.5-19.49a8,8,0,0,0-11.32-11.32l-20.29,20.3a79.74,79.74,0,0,0-92.1,0L61.66,26.34A8,8,0,0,0,50.34,37.66Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
