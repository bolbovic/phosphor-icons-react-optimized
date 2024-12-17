var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && H(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && h.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as i } from "react";
import l from "../../lib/OptiBase.mjs";
const A = i((o, e) => {
  var p = o, { children: a } = p, t = V(p, ["children"]);
  return /* @__PURE__ */ r.createElement(l, n({ ref: e }, t), a, /* @__PURE__ */ r.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ r.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
