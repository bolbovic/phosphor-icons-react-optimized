var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && m(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && m(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && o)
    for (var l of o(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M216,100H132.92l78.14-20.63a12,12,0,0,0,8.52-14.75l-8.16-30a19.94,19.94,0,0,0-24.3-13.95L34.79,60.87a19.74,19.74,0,0,0-12.14,9.27,19.48,19.48,0,0,0-1.95,15L28,112v88a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V112A12,12,0,0,0,216,100ZM124.89,61.91l18.29,10.56-25.95,6.85L98.94,68.76Zm64.45-17,3.91,14.35-17.13,4.52L157.83,53.21ZM66,77.46,84.29,88l-35.4,9.35L45,83ZM204,196H52V124H204Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
