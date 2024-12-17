var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const M = s((l, e) => {
  var r = l, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(L, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M246.15,78.54,193.46,25.85a20,20,0,0,0-28.28,0L57.86,133.17a20,20,0,0,0,0,28.28l17.86,17.86-44.2,44.2a12,12,0,0,0,17,17l44.2-44.21,17.86,17.86a20,20,0,0,0,28.28,0L246.15,106.82A20,20,0,0,0,246.15,78.54ZM124.69,194.34l-15-15,26.83-26.83a12,12,0,0,0-17-17L92.69,162.34l-15-15L109,116h47v47ZM180,139V104a12,12,0,0,0-12-12H133l46.34-46.34,47,47ZM60,92A32,32,0,1,0,28,60,32,32,0,0,0,60,92Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,60,52Z" }));
});
M.displayName = "Bold";
export {
  M as Bold
};
