var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, L = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? d(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, f = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && o(a, e, l[e]);
  if (r)
    for (var e of r(l))
      L.call(l, e) && o(a, e, l[e]);
  return a;
};
var s = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      l.indexOf(t) < 0 && L.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const n = i((t, e) => {
  var m = t, { children: a } = m, l = s(m, ["children"]);
  return /* @__PURE__ */ c.createElement(R, f({ ref: e }, l), a, /* @__PURE__ */ c.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L81.33,88.56l-39.18,42a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l61.86-66.28,38.37,42.2a8,8,0,1,0,11.84-10.76ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l30.12-32.27,60.78,66.86ZM108.66,71a8,8,0,0,1-.39-11.31l45.88-49.16a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95l-22.3,23.89a8,8,0,0,1-11.7-10.91L194,123.29l-52.8-19.8a8,8,0,0,1-5-9.06l10.47-52.38L120,70.62A8,8,0,0,1,108.66,71Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
