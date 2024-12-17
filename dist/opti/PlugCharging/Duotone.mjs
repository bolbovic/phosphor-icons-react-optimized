var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (r)
    for (var e of r(t))
      V.call(t, e) && l(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var o in a)
    p.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && V.call(a, o) && (e[o] = a[o]);
  return e;
};
import m, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((o, e) => {
  var H = o, { children: a } = H, t = n(H, ["children"]);
  return /* @__PURE__ */ m.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M200,64v96a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM192,160a24,24,0,0,1-24,24H88a24,24,0,0,1-24-24V72H192Zm-86.58-27.44a8,8,0,0,1-.91-7.37l12-32a8,8,0,1,1,15,5.62l-8,21.19H144a8,8,0,0,1,7.49,10.81l-12,32a8,8,0,0,1-15-5.62l8-21.19H112A8,8,0,0,1,105.42,132.56Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
