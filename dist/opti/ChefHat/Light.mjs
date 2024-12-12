var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const V = A((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M238,112a54.06,54.06,0,0,0-54-54,54.6,54.6,0,0,0-6.52.4,54,54,0,0,0-99,0A54.6,54.6,0,0,0,72,58,54,54,0,0,0,50,161.3V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V161.3A54.07,54.07,0,0,0,238,112Zm-44,96a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V165.06A54,54,0,0,0,72,166H184a54,54,0,0,0,10-.94Zm-10-54H167.69l6.13-24.54a6,6,0,1,0-11.64-2.92L155.31,154H134V128a6,6,0,0,0-12,0v26H100.69l-6.87-27.46a6,6,0,0,0-11.64,2.92L88.31,154H72a42,42,0,0,1,0-84c1,0,2,0,2.92.11A54.63,54.63,0,0,0,74,80a6,6,0,0,0,12,0,42,42,0,0,1,84,0,6,6,0,0,0,12,0,54.63,54.63,0,0,0-.92-9.89c1-.06,1.94-.11,2.92-.11a42,42,0,0,1,0,84Z" }));
});
V.displayName = "Light";
export {
  V as Light
};
