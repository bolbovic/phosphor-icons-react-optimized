var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      c.call(t, e) && h(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var o in a)
    V.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && c.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const l = d((o, e) => {
  var p = o, { children: a } = p, t = H(p, ["children"]);
  return /* @__PURE__ */ m.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M240,56V184a16,16,0,0,1-16,16H72V152h56V104h56V56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M248,56a8,8,0,0,1-8,8H192v40a8,8,0,0,1-8,8H136v40a8,8,0,0,1-8,8H80v40a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H64V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,248,56Z" }));
});
l.displayName = "Duotone";
export {
  l as Duotone
};
