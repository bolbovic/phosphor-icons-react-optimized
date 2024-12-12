var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    l.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const n = i((r, e) => {
  var c = r, { children: a } = c, t = s(c, ["children"]);
  return /* @__PURE__ */ A.createElement(R, f({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M183.05,56H72A72,72,0,0,0,.08,131.4c1.69,36.69,31.76,66.79,68.45,68.52,15.85.74,32-5.9,49.38-20.3a15.88,15.88,0,0,1,20.24,0C148.72,188.39,165,200,184,200a72,72,0,0,0,72-72.95C255.49,87.87,222.76,56,183.05,56Zm40.81,111.34A55.63,55.63,0,0,1,184,184c-13.88,0-27-9.51-35.65-16.67a31.91,31.91,0,0,0-40.65,0C93.52,179,80.94,184.49,69.28,183.94a56.36,56.36,0,0,1-53.22-53.28A56,56,0,0,1,72,72H183.05c31,0,56.55,24.79,56.95,55.25A55.66,55.66,0,0,1,223.86,167.34ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
