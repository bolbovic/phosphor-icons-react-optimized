var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    H.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && c.call(a, l) && (e[l] = a[l]);
  return e;
};
import m, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const f = L((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ m.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M235.34,116.72,139.28,20.66a16,16,0,0,0-22.56,0L20.66,116.72a16,16,0,0,0,0,22.56l96.06,96.06a16,16,0,0,0,22.56,0l96.06-96.06A16,16,0,0,0,235.34,116.72ZM128,32,184,88H160a8,8,0,0,0-5.66,2.34L128,116.68,101.66,90.34A8,8,0,0,0,96,88H72ZM56,104H92.68l24,24-24,24H56L32,128Zm72,120L72,168H96a8,8,0,0,0,5.66-2.34L128,139.31l26.34,26.35A8,8,0,0,0,160,168h24Zm72-72H163.32l-24-24,24-24H200l24,24Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
