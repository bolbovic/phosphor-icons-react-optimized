var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      n.call(t, e) && m(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && l)
    for (var o of l(a))
      t.indexOf(o) < 0 && n.call(a, o) && (e[o] = a[o]);
  return e;
};
import r, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const L = s((o, e) => {
  var c = o, { children: a } = c, t = d(c, ["children"]);
  return /* @__PURE__ */ r.createElement(A, i({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z" }));
});
L.displayName = "Duotone";
export {
  L as Duotone
};
