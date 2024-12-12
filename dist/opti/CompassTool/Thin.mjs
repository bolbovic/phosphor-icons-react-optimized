var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((l, e) => {
  var m = l, { children: a } = m, t = n(m, ["children"]);
  return /* @__PURE__ */ c.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M211.56,121.82a4,4,0,1,0-7.12-3.64,84.05,84.05,0,0,1-38.58,37.16l-19.68-44.29A36,36,0,0,0,132,44.23V24a4,4,0,0,0-8,0V44.23a36,36,0,0,0-14.18,66.82L60.35,222.37a4,4,0,0,0,2,5.28A3.88,3.88,0,0,0,64,228a4,4,0,0,0,3.66-2.38l26.66-60A91.4,91.4,0,0,0,128,172a95.21,95.21,0,0,0,33.75-6.22l26.59,59.84A4,4,0,0,0,192,228a3.88,3.88,0,0,0,1.62-.35,4,4,0,0,0,2-5.28l-26.54-59.73A92,92,0,0,0,211.56,121.82ZM100,80a28,28,0,1,1,28,28A28,28,0,0,1,100,80Zm28,84a83.43,83.43,0,0,1-30.43-5.68l19.56-44a36,36,0,0,0,21.74,0l19.63,44.15A87.44,87.44,0,0,1,128,164Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
