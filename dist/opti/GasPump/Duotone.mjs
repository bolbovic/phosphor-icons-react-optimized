var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    H.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import V, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var m = o, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ V.createElement(d, h({ ref: e }, t), a, /* @__PURE__ */ V.createElement(
    "path",
    {
      d: "M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ V.createElement("path", { d: "M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
