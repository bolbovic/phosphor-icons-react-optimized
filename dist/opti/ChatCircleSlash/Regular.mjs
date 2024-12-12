var d = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import L from "../../lib/OptiBase.mjs";
const R = i((r, e) => {
  var m = r, { children: a } = m, t = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(L, f({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L52.33,56.66A104.06,104.06,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35a104,104,0,0,0,112.7-9.73l10.26,11.29a8,8,0,1,0,11.84-10.76ZM128,216a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.66L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,0,1,63.14,68.54L181,198.23A87.77,87.77,0,0,1,128,216Zm104-88a104.15,104.15,0,0,1-12.38,49.25,8,8,0,0,1-14.09-7.58A88,88,0,0,0,93.88,46.86a8,8,0,0,1-6.21-14.75A104.06,104.06,0,0,1,232,128Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
