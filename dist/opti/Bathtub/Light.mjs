var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      o.call(t, e) && H(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && o.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var h = m, { children: a } = h, t = p(h, ["children"]);
  return /* @__PURE__ */ v.createElement(s, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M240,98H206V96a6,6,0,0,0-6-6H136a6,6,0,0,0-6,6v2H62V52A14,14,0,0,1,76,38,14.47,14.47,0,0,1,90.12,49.19a6,6,0,1,0,11.76-2.38A26.32,26.32,0,0,0,76,26,26,26,0,0,0,50,52V98H16a6,6,0,0,0-6,6v40a54.06,54.06,0,0,0,54,54h2v18a6,6,0,0,0,12,0V198H178v18a6,6,0,0,0,12,0V198h2a54.06,54.06,0,0,0,54-54V104A6,6,0,0,0,240,98Zm-98,4h52v36H142Zm92,42a42,42,0,0,1-42,42H64a42,42,0,0,1-42-42V110H130v34a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V110h28Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
