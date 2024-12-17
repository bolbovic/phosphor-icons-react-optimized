var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const A = f((o, e) => {
  var l = o, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M195.88,195.88a96,96,0,1,1,0-135.76A96,96,0,0,1,195.88,195.88Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-24.57-27.89a8,8,0,0,1-11.32,11.32L128,147.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Zm0-56a8,8,0,0,1-11.32,11.32L128,91.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
