var p = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var A = (a, m, e) => m in a ? p(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && A(a, e, m[e]);
  if (h)
    for (var e of h(m))
      o.call(m, e) && A(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && h)
    for (var t of h(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const s = n((t, e) => {
  var r = t, { children: a } = r, m = c(r, ["children"]);
  return /* @__PURE__ */ i.createElement(f, Z({ ref: e }, m), a, /* @__PURE__ */ i.createElement("path", { d: "M128,28h0a100,100,0,0,0,0,200,4,4,0,0,0,2.49-7.11h0c-.3-.24-23.57-19.41-33.78-56.88H128a4,4,0,0,0,0-8H94.82a140.42,140.42,0,0,1,0-56h66.36A137.89,137.89,0,0,1,164,128a4,4,0,0,0,8,0,149.23,149.23,0,0,0-2.59-28h46.23A91.6,91.6,0,0,1,220,128a4,4,0,0,0,8,0A100.11,100.11,0,0,0,128,28Zm-10.46,8.6A129.39,129.39,0,0,0,88.35,92h-45A92.25,92.25,0,0,1,117.54,36.6Zm0,182.8A92.25,92.25,0,0,1,43.34,164h45A129.39,129.39,0,0,0,117.54,219.4ZM86.59,156H40.36a92.09,92.09,0,0,1,0-56H86.59a152.65,152.65,0,0,0,0,56ZM96.73,92C105,61.8,121.67,43.48,128,37.39c6.33,6.09,23,24.41,31.27,54.61Zm70.92,0a129.39,129.39,0,0,0-29.19-55.4A92.25,92.25,0,0,1,212.66,92Zm51.18,78.83L197.66,192l21.17,21.17a4,4,0,0,1-5.66,5.66L192,197.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L186.34,192l-21.17-21.17a4,4,0,0,1,5.66-5.66L192,186.34l21.17-21.17a4,4,0,0,1,5.66,5.66Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
