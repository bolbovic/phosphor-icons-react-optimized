var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var L = (a, e, l) => e in a ? c(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    o.call(e, l) && L(a, l, e[l]);
  if (t)
    for (var l of t(e))
      Z.call(e, l) && L(a, l, e[l]);
  return a;
};
var f = (a, e) => {
  var l = {};
  for (var m in a)
    o.call(a, m) && e.indexOf(m) < 0 && (l[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      e.indexOf(m) < 0 && Z.call(a, m) && (l[m] = a[m]);
  return l;
};
import s, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const R = d((m, l) => {
  var r = m, { children: a } = r, e = f(r, ["children"]);
  return /* @__PURE__ */ s.createElement(i, p({ ref: l }, e), a, /* @__PURE__ */ s.createElement("path", { d: "M236.55,149.42,194.05,120l42.5-29.42a8,8,0,0,0,0-13.16l-52-36a8,8,0,0,0-9.1,0L128,74.27,80.55,41.42a8,8,0,0,0-9.1,0l-52,36a8,8,0,0,0,0,13.16L62,120l-42.5,29.42a8,8,0,0,0,0,13.16l52,36a8,8,0,0,0,9.1,0L128,165.73l47.45,32.85a8,8,0,0,0,9.1,0l52-36a8,8,0,0,0,0-13.16ZM128,146.27,90.05,120l38-26.27L166,120Zm52-88.54L218,84,180,110.27,142.05,84Zm-104,0L114,84,76,110.27,38.05,84Zm0,124.54L38.05,156l38-26.27L114,156Zm104,0L142.05,156,180,129.73,218,156Zm-21.53,24.64a8,8,0,0,1-2,11.13l-23.89,16.54a8,8,0,0,1-9.1,0L99.56,218a8,8,0,0,1,9.1-13.16L128,218.27l19.34-13.39A8,8,0,0,1,158.47,206.91Z" }));
});
R.displayName = "Regular";
export {
  R as Regular,
  R as default
};
