var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    l.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && o)
    for (var H of o(a))
      t.indexOf(H) < 0 && Z.call(a, H) && (e[H] = a[H]);
  return e;
};
import m, { forwardRef as A } from "react";
import M from "../../lib/OptiBase.mjs";
const d = A((H, e) => {
  var r = H, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ m.createElement(M, c({ ref: e }, t), a, /* @__PURE__ */ m.createElement(
    "path",
    {
      d: "M200,160v48H171.7a8,8,0,0,1-6.1-2.82l-38-44.7L90.4,205.12A8,8,0,0,1,84.25,208H56V160H200Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ m.createElement("path", { d: "M224,152H130.9L38.1,42.82A8,8,0,0,0,25.9,53.18L159.51,210.36A16,16,0,0,0,171.7,216H224a16,16,0,0,0,16-16V168A16,16,0,0,0,224,152Zm-79.5,16H192v32H171.7ZM224,200H208V168h16ZM112.18,179.55a8,8,0,0,0-11.27.92L84.3,200H64V168H85.2a8,8,0,0,0,0-16H32a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H84.3a16,16,0,0,0,12.19-5.64l16.61-19.53A8,8,0,0,0,112.18,179.55ZM32,168H48v32H32Zm117.9-45.18,68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};