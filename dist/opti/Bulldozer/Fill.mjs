var f = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (H)
    for (var e of H(t))
      h.call(t, e) && m(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && H)
    for (var r of H(a))
      t.indexOf(r) < 0 && h.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const M = s((r, e) => {
  var l = r, { children: a } = l, t = p(l, ["children"]);
  return /* @__PURE__ */ c.createElement(v, i({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M248,200h-8a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8h8a8,8,0,0,0,0-16h-8a24,24,0,0,0-24,24v8H199.2a40.1,40.1,0,0,0-33.71-31.61L129.44,49.85A16,16,0,0,0,114.67,40H24A16,16,0,0,0,8,56v96a40,40,0,0,0,32,64H160a40.07,40.07,0,0,0,39.2-32H216v8a24,24,0,0,0,24,24h8a8,8,0,0,0,0-16ZM64,56h50.67L148,136H64ZM24,56H48v80H40a39.72,39.72,0,0,0-16,3.35ZM160,184H40a8,8,0,0,1,0-16H160a8,8,0,0,1,0,16Z" }));
});
M.displayName = "Fill";
export {
  M as Fill
};
