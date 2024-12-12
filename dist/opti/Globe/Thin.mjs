var M = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, h, e) => h in a ? M(a, h, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[h] = e, c = (a, h) => {
  for (var e in h || (h = {}))
    o.call(h, e) && r(a, e, h[e]);
  if (t)
    for (var e of t(h))
      A.call(h, e) && r(a, e, h[e]);
  return a;
};
var i = (a, h) => {
  var e = {};
  for (var m in a)
    o.call(a, m) && h.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && t)
    for (var m of t(a))
      h.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const s = n((m, e) => {
  var Z = m, { children: a } = Z, h = i(Z, ["children"]);
  return /* @__PURE__ */ p.createElement(f, c({ ref: e }, h), a, /* @__PURE__ */ p.createElement("path", { d: "M128,28h0A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,190.61c-6.33-6.09-23-24.41-31.27-54.61h62.54C151,194.2,134.33,212.52,128,218.61ZM94.82,156a140.42,140.42,0,0,1,0-56h66.36a140.42,140.42,0,0,1,0,56ZM128,37.39c6.33,6.09,23,24.41,31.27,54.61H96.73C105,61.8,121.67,43.48,128,37.39ZM169.41,100h46.23a92.09,92.09,0,0,1,0,56H169.41a152.65,152.65,0,0,0,0-56Zm43.25-8h-45a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92ZM117.54,36.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6ZM40.36,100H86.59a152.65,152.65,0,0,0,0,56H40.36a92.09,92.09,0,0,1,0-56Zm3,64h45a129.39,129.39,0,0,0,29.19,55.4A92.25,92.25,0,0,1,43.34,164Zm95.12,55.4A129.39,129.39,0,0,0,167.65,164h45A92.25,92.25,0,0,1,138.46,219.4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
