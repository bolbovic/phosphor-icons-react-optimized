var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var L = m, { children: a } = L, t = H(L, ["children"]);
  return /* @__PURE__ */ l.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M198,75.64V40a14,14,0,0,0-14-14H72A14,14,0,0,0,58,40V76a14.06,14.06,0,0,0,5.6,11.2L118,128,63.6,168.8A14.06,14.06,0,0,0,58,180v36a14,14,0,0,0,14,14H184a14,14,0,0,0,14-14V180.36a14.08,14.08,0,0,0-5.56-11.17L138,128l54.49-41.19A14.08,14.08,0,0,0,198,75.64ZM70,40a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2V75.64a2,2,0,0,1-.79,1.6L178.9,82H76.67L70.8,77.6A2,2,0,0,1,70,76Zm58,80.49L92.67,94H163Zm58,59.87V216a2,2,0,0,1-2,2H72a2,2,0,0,1-2-2V180a2,2,0,0,1,.8-1.6L122,140v28a6,6,0,0,0,12,0V140.06l51.21,38.7A2,2,0,0,1,186,180.36Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
