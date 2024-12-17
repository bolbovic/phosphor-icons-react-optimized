var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const f = A((o, e) => {
  var c = o, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ r.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M224,128a95.91,95.91,0,0,1-4.21,28.21l-63.57,63.58A96,96,0,1,1,224,128Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M174.92,156c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM232,128a104.35,104.35,0,0,1-4.56,30.56,8,8,0,0,1-2,3.31l-63.57,63.57a7.9,7.9,0,0,1-3.3,2A104,104,0,1,1,232,128Zm-16,0a87.89,87.89,0,1,0-64,84.69L212.69,152A88.05,88.05,0,0,0,216,128ZM92,120a12,12,0,1,0-12-12A12,12,0,0,0,92,120Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,96Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
