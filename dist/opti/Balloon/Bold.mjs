var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as C } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = C((m, e) => {
  var r = m, { children: a } = r, t = s(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,12a92.1,92.1,0,0,0-92,92c0,24.53,9.55,50.13,26.19,70.22,10,12,21.56,21.07,34.05,26.76L85,227.27A12,12,0,0,0,96,244h64a12,12,0,0,0,11-16.73L159.76,201c12.49-5.69,24.08-14.73,34.05-26.76C210.45,154.13,220,128.53,220,104A92.1,92.1,0,0,0,128,12Zm13.8,208H114.2l5.35-12.49a73.1,73.1,0,0,0,16.9,0Zm33.53-61.09C161.93,175.09,145.12,184,128,184s-33.93-8.91-47.33-25.09C67.73,143.29,60,122.76,60,104a68,68,0,0,1,136,0C196,122.76,188.27,143.29,175.33,158.91Zm-6.34-47q-.6.06-1.2.06a12,12,0,0,1-11.93-10.81,28,28,0,0,0-19.47-23.91,12,12,0,1,1,7.22-22.89,51.94,51.94,0,0,1,36.13,44.42A12,12,0,0,1,169,111.94Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
