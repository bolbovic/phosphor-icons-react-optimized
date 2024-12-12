var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M98.19,36.54a6,6,0,0,1,4.3-7.31,102.12,102.12,0,0,1,51,0,6,6,0,0,1-3,11.62,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-43,20A102.07,102.07,0,0,0,29.7,100.7a6,6,0,0,0,4.19,7.38,5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41ZM41.28,152.09a6,6,0,1,0-11.56,3.2,102,102,0,0,0,25.49,44.18,6,6,0,0,0,8.55-8.41A90.11,90.11,0,0,1,41.28,152.09Zm109.21,63.06a90,90,0,0,1-45,0,6,6,0,1,0-3,11.62,102.16,102.16,0,0,0,51,0,6,6,0,0,0-3-11.62Zm71.62-67.23a6,6,0,0,0-7.38,4.18,90,90,0,0,1-22.51,39,6,6,0,1,0,8.56,8.41A102.12,102.12,0,0,0,226.3,155.3,6,6,0,0,0,222.11,147.92Zm-7.39-44a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.05,90.05,0,0,1,214.72,103.91Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
