var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? f(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, h = (a, H) => {
  for (var e in H || (H = {}))
    i.call(H, e) && o(a, e, H[e]);
  if (r)
    for (var e of r(H))
      p.call(H, e) && o(a, e, H[e]);
  return a;
};
var n = (a, H) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((t, e) => {
  var m = t, { children: a } = m, H = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, h({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M204,148h20a4,4,0,0,0,0-8H204V116h20a4,4,0,0,0,0-8H203.89a75.8,75.8,0,0,0-23.37-50.86l22.31-22.31a4,4,0,1,0-5.66-5.66L174.44,51.9a75.77,75.77,0,0,0-92.88,0L58.83,29.17a4,4,0,0,0-5.66,5.66L75.48,57.14A75.8,75.8,0,0,0,52.11,108H32a4,4,0,0,0,0,8H52v24H32a4,4,0,0,0,0,8H52v12a75.41,75.41,0,0,0,1,12H32a4,4,0,0,0,0,8H54.69a76,76,0,0,0,146.62,0H224a4,4,0,0,0,0-8H203a75.41,75.41,0,0,0,1-12ZM128,44a68.08,68.08,0,0,1,67.87,64H60.13A68.08,68.08,0,0,1,128,44Zm4,183.87V144a4,4,0,0,0-8,0v83.87A68.08,68.08,0,0,1,60,160V116H196v44A68.08,68.08,0,0,1,132,227.87Z" }));
});
v.displayName = "Thin";
export {
  v as Thin
};
