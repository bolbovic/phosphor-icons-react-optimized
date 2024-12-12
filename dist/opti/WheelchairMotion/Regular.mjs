var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = i((r, e) => {
  var l = r, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ c.createElement(R, s({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M176,80a32,32,0,1,0-32-32A32,32,0,0,0,176,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,32Zm-8,136a64,64,0,1,1-64-64,8,8,0,0,1,0,16,48,48,0,1,0,48,48,8,8,0,0,1,16,0Zm38.19-37.07a8,8,0,0,1,1.65,6.64l-16,80A8,8,0,0,1,184,224a7.77,7.77,0,0,1-1.58-.16,8,8,0,0,1-6.27-9.41L190.24,144H128a8,8,0,0,1-6.94-12l20.06-34.9a80.09,80.09,0,0,0-88,9.17A8,8,0,1,1,42.91,94a96,96,0,0,1,113.46-6.42,8,8,0,0,1,2.57,10.69L141.82,128H200A8,8,0,0,1,206.19,130.93Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular,
  Z as default
};
