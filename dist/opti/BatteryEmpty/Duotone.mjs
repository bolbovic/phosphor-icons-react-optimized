var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    n.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && c(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    n.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && m)
    for (var o of m(a))
      t.indexOf(o) < 0 && H.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((o, e) => {
  var p = o, { children: a } = p, t = d(p, ["children"]);
  return /* @__PURE__ */ r.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M216,80v96a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V80A16,16,0,0,1,32,64H200A16,16,0,0,1,216,80Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm8,120a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8Zm48-80v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" }));
});
A.displayName = "Duotone";
export {
  A as Duotone
};
