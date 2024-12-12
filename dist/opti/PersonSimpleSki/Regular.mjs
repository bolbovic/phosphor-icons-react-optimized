var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && f.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((l, e) => {
  var m = l, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M172,88a28,28,0,1,0-28-28A28,28,0,0,0,172,88Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,172,48ZM32.32,77.76a8,8,0,0,1,9.92-5.44L112,92.67l10.32-10.33a8,8,0,0,1,11.32,0L163.31,112H200a8,8,0,0,1,0,16H160a8,8,0,0,1-5.66-2.34L148.73,120l-111-32.36A8,8,0,0,1,32.32,77.76ZM236.44,204.24a69.78,69.78,0,0,1-58.37,8.95L21.77,167.67a8,8,0,1,1,4.47-15.36l76,22.13L128.73,148,85.8,135.69a8,8,0,0,1,4.4-15.39l56,16a8,8,0,0,1,3.46,13.35l-29.9,29.9,62.79,18.28a53.78,53.78,0,0,0,45-6.9,8,8,0,1,1,8.88,13.31Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
