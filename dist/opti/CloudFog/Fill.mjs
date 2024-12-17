var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var l = m, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(H, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M168,232a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8,8,0,0,1,168,232Zm-40-32a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8,8,0,0,0,128,200Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm47.87-96.45a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,104l-.6,0A8.14,8.14,0,0,1,64,95.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,124.36C24.2,153.07,48.12,176,76.84,176H156A76.08,76.08,0,0,0,231.87,95.55Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
