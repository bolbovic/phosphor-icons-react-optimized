var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      h.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var c in a)
    o.call(a, c) && t.indexOf(c) < 0 && (e[c] = a[c]);
  if (a != null && r)
    for (var c of r(a))
      t.indexOf(c) < 0 && h.call(a, c) && (e[c] = a[c]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const l = A((c, e) => {
  var m = c, { children: a } = m, t = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, i({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180,58c-19.15,0-35.57,7.79-46,20.32V38h18a6,6,0,0,0,0-12H134V8a6,6,0,0,0-12,0V26H104a6,6,0,0,0,0,12h18V78.32C111.57,65.79,95.15,58,76,58a58.07,58.07,0,0,0-58,58c0,29.11,14.17,47.62,26.05,58a87.74,87.74,0,0,0,22,14V208a14,14,0,0,0,14,14h96a14,14,0,0,0,14-14V188.05A87.74,87.74,0,0,0,212,174c11.88-10.39,26.05-28.9,26.05-58A58.07,58.07,0,0,0,180,58Zm2.1,120.31A6,6,0,0,0,178,184v24a2,2,0,0,1-2,2H80a2,2,0,0,1-2-2V184a6,6,0,0,0-4.1-5.69C73.46,178.16,30,163.13,30,116A46.06,46.06,0,0,1,76,70c26.65,0,46,17.66,46,42v64a6,6,0,0,0,12,0V112c0-24.34,19.35-42,46-42a46.06,46.06,0,0,1,46,46C226,162.9,183.88,177.71,182.1,178.31Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
