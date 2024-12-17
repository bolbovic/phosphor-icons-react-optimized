var n = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && H(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var o in a)
    h.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && V)
    for (var o of V(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as A } from "react";
import i from "../../lib/OptiBase.mjs";
const d = A((o, e) => {
  var r = o, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ m.createElement(i, Z({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M136,48V208a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h24A8,8,0,0,1,136,48Zm64-8H176a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h24a8,8,0,0,0,8-8V48A8,8,0,0,0,200,40Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M128,32H104A16,16,0,0,0,88,48V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,128,32Zm0,176H104V48h24ZM200,32H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H176V48h24ZM72,128a8,8,0,0,1-8,8H48v16a8,8,0,0,1-16,0V136H16a8,8,0,0,1,0-16H32V104a8,8,0,0,1,16,0v16H64A8,8,0,0,1,72,128Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
