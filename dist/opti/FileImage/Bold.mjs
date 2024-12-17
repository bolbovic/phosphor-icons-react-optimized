var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import h, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const M = s((l, e) => {
  var r = l, { children: a } = r, t = f(r, ["children"]);
  return /* @__PURE__ */ h.createElement(A, c({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M114,145.34a12,12,0,0,0-20,0L79,167.82,72.3,157.73a12,12,0,0,0-20.07.17L13.91,217.51A12,12,0,0,0,24,236H152a12,12,0,0,0,10-18.66ZM46,212,62.5,186.3l6.55,9.81a12,12,0,0,0,20,0l15-22.48L129.58,212ZM216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v84a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212a12,12,0,0,0,0,24h4a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
