var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((m, e) => {
  var r = m, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ H.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M232,40a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H224A8,8,0,0,1,232,40ZM184,72a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H176A8,8,0,0,0,184,72Zm-16,32a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H160A8,8,0,0,0,168,104Zm16,32a8,8,0,0,0-8-8H88a8,8,0,0,0,0,16h88A8,8,0,0,0,184,136Zm0,24H120a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-24,32H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-32,32H112a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
