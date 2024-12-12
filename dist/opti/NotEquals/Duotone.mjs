var L = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var o in a)
    c.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import H, { forwardRef as d } from "react";
import f from "../../lib/OptiBase.mjs";
const s = d((o, e) => {
  var m = o, { children: a } = m, t = l(m, ["children"]);
  return /* @__PURE__ */ H.createElement(f, i({ ref: e }, t), a, /* @__PURE__ */ H.createElement(
    "path",
    {
      d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ H.createElement("path", { d: "M224,160a8,8,0,0,1-8,8H102.45L53.92,221.38a8,8,0,0,1-11.84-10.76L80.82,168H40a8,8,0,0,1,0-16H95.37L139,104H40a8,8,0,0,1,0-16H153.55l48.53-53.38a8,8,0,0,1,11.84,10.76L175.18,88H216a8,8,0,0,1,0,16H160.63L117,152h99A8,8,0,0,1,224,160Z" }));
});
s.displayName = "Duotone";
export {
  s as Duotone
};
