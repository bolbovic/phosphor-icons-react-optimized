var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as M } from "react";
import d from "../../lib/OptiBase.mjs";
const h = M((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm85,72.45a197.9,197.9,0,0,0-46.09-9.37A197.9,197.9,0,0,0,157.55,43,90.47,90.47,0,0,1,213,98.45ZM143.52,39.34a186.57,186.57,0,0,1,10.11,39A198.45,198.45,0,0,0,95.15,44.21a90.17,90.17,0,0,1,48.37-4.87ZM80.15,51.81A186.09,186.09,0,0,1,147,88.47a198.32,198.32,0,0,0-108.92,35A90.05,90.05,0,0,1,80.15,51.81ZM38.55,138a186.16,186.16,0,0,1,117-37.46,186.16,186.16,0,0,1-37.46,117A90.18,90.18,0,0,1,38.55,138Zm94,79.94a198.33,198.33,0,0,0,35-108.93,186.21,186.21,0,0,1,36.66,66.89A90.05,90.05,0,0,1,132.55,217.89Zm79.24-57a198.45,198.45,0,0,0-34.11-58.48,186.57,186.57,0,0,1,39,10.11,90.17,90.17,0,0,1-4.87,48.37Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
