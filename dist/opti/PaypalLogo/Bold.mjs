var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      A.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var H in a)
    r.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && l)
    for (var H of l(a))
      t.indexOf(H) < 0 && A.call(a, H) && (e[H] = a[H]);
  return e;
};
import d, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = i((H, e) => {
  var m = H, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ d.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M223.27,91.08a59.82,59.82,0,0,0-19.5-16.27A60,60,0,0,0,144,20H84A20,20,0,0,0,64.6,35.15l-36,144A20,20,0,0,0,48,204H70.39l-1.79,7.15A20,20,0,0,0,88,236h31.5a20,20,0,0,0,19.4-15.15L147.13,188H176a60,60,0,0,0,47.29-96.92ZM87.13,44H144a35.77,35.77,0,0,1,28.37,13.85A36.18,36.18,0,0,1,178,68.06c-.66,0-1.31-.06-2-.06H120A20,20,0,0,0,100.6,83.15L76.39,180H53.13Zm90.76,48.05A35.93,35.93,0,0,1,144,116H117.13l6-24H176C176.62,92,177.26,92,177.89,92.05Zm33,44.68A35.94,35.94,0,0,1,176,164H144a20,20,0,0,0-19.4,15.15L116.39,212H93.13l18-72H144a59.89,59.89,0,0,0,56.1-38.75,36.12,36.12,0,0,1,10.82,35.48Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
