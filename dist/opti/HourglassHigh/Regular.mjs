var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    V.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import H, { forwardRef as d } from "react";
import i from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var l = r, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ H.createElement(i, f({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M184,24H72A16,16,0,0,0,56,40V76a16.07,16.07,0,0,0,6.4,12.8L114.67,128,62.4,167.2A16.07,16.07,0,0,0,56,180v36a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V180.36a16.09,16.09,0,0,0-6.35-12.77L141.27,128l52.38-39.6A16.05,16.05,0,0,0,200,75.64V40A16,16,0,0,0,184,24Zm0,16V56H72V40Zm0,176H72V180l56-42,56,42.35Zm-56-98L72,76V72H184v3.64Z" }));
});
A.displayName = "Regular";
export {
  A as Regular,
  A as default
};
