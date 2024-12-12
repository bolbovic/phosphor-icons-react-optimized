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
import c, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var m = t, { children: a } = m, H = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(V, h({ ref: e }, H), a, /* @__PURE__ */ c.createElement("path", { d: "M240,108H226.6L197.77,43.13a12,12,0,0,0-11-7.13H69.2a12,12,0,0,0-11,7.13L29.4,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.54,46.38A4,4,0,0,1,69.2,44H186.8a4,4,0,0,1,3.66,2.38L217.84,108H38.16ZM220,200a4,4,0,0,1-4,4H192a4,4,0,0,1-4-4V176a4,4,0,0,0-4-4H72a4,4,0,0,0-4,4v24a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V116H220Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
