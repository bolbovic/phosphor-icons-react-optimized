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
import f, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const h = M((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M98.19,36.54a6,6,0,0,1,4.31-7.31,102,102,0,0,1,51,0,6,6,0,1,1-3,11.61,90,90,0,0,0-45,0A6,6,0,0,1,98.19,36.54Zm-64.3,71.54a5.88,5.88,0,0,0,1.6.22,6,6,0,0,0,5.78-4.4A90,90,0,0,1,63.78,65a6,6,0,1,0-8.56-8.41A102.12,102.12,0,0,0,29.7,100.7,6,6,0,0,0,33.89,108.08ZM150.5,215.15a90,90,0,0,1-45,0,6,6,0,1,0-3,11.61,102,102,0,0,0,51,0,6,6,0,0,0-3-11.62Zm64.22-111.24a6,6,0,0,0,5.78,4.4,5.88,5.88,0,0,0,1.6-.22,6,6,0,0,0,4.18-7.38,102,102,0,0,0-25.49-44.18,6,6,0,0,0-8.55,8.41A90.11,90.11,0,0,1,214.72,103.91ZM226.3,155.3a101.75,101.75,0,0,1-30.08,48.53,6,6,0,0,1-9.37-1.74,66,66,0,0,0-117.7,0,6,6,0,0,1-4.26,3.18,5.74,5.74,0,0,1-1.09.1,6,6,0,0,1-4-1.54A101.74,101.74,0,0,1,29.7,155.3a6,6,0,1,1,11.56-3.21,89.79,89.79,0,0,0,21.2,37.59,77.56,77.56,0,0,1,40-31.43,46,46,0,1,1,51,0,77.56,77.56,0,0,1,40,31.43,89.7,89.7,0,0,0,21.2-37.58,6,6,0,1,1,11.56,3.2ZM128,154a34,34,0,1,0-34-34A34,34,0,0,0,128,154Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
