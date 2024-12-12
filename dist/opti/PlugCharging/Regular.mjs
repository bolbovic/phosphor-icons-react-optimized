var h = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? h(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && H(a, e, r[e]);
  if (l)
    for (var e of l(r))
      V.call(r, e) && H(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M224,56H176V16a8,8,0,0,0-16,0V56H96V16a8,8,0,0,0-16,0V56H32.55C26.28,56,24,60.78,24,64a8,8,0,0,0,8,8H48v88a40,40,0,0,0,40,40h32v40a8,8,0,0,0,16,0V200h32a40,40,0,0,0,40-40V72h16a8,8,0,0,0,0-16ZM168,184H88a24,24,0,0,1-24-24V72H192v88A24,24,0,0,1,168,184Zm-17.42-60.56a8,8,0,0,1,.91,7.37l-12,32a8,8,0,0,1-15-5.62l8-21.19H112a8,8,0,0,1-7.49-10.81l12-32a8,8,0,1,1,15,5.62l-8,21.19H144A8,8,0,0,1,150.58,123.44Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
