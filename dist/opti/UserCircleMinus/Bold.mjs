var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M164,56a12,12,0,0,1,12-12h48a12,12,0,0,1,0,24H176A12,12,0,0,1,164,56Zm65.85,36A108,108,0,1,1,128,20a109.19,109.19,0,0,1,18,1.49,12,12,0,0,1-4,23.67A85,85,0,0,0,128,44,83.94,83.94,0,0,0,62.05,179.94a83.48,83.48,0,0,1,29-23.42,52,52,0,1,1,74,0,83.36,83.36,0,0,1,29,23.42A83.94,83.94,0,0,0,207.22,100a12,12,0,0,1,22.63-8ZM128,148a28,28,0,1,0-28-28A28,28,0,0,0,128,148Zm0,64a83.53,83.53,0,0,0,48.43-15.43,60,60,0,0,0-96.86,0A83.53,83.53,0,0,0,128,212Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};