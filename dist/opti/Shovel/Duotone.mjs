var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var l in a)
    c.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && n.call(a, l) && (e[l] = a[l]);
  return e;
};
import r, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var m = l, { children: a } = m, t = d(m, ["children"]);
  return /* @__PURE__ */ r.createElement(L, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M173.66,173.66l-56,56A8,8,0,0,1,112,232H32a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,173.66,173.66Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M245.66,58.34l-48-48a8,8,0,0,0-11.32,11.32L204.69,40l-71,71L99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34l71-71,18.34,18.35a8,8,0,0,0,11.32-11.32ZM168,168l-56,56H32V144L88,88l34.34,34.34-40,40a8,8,0,0,0,11.32,11.32l40-40Z" }));
});
h.displayName = "Duotone";
export {
  h as Duotone
};
