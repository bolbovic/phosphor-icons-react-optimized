var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const H = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240,136H215.63a87.21,87.21,0,0,1-10.13,33.61,4,4,0,0,1-6.5.81L92.51,53.28a4,4,0,0,1,1.4-6.38A87,87,0,0,1,120,40.37V16a8,8,0,0,1,8.53-8A8.17,8.17,0,0,1,136,16.27v24.1A88.13,88.13,0,0,1,215.63,120h24.1a8.17,8.17,0,0,1,8.25,7.47A8,8,0,0,1,240,136ZM53.92,34.62A8,8,0,1,0,42.08,45.38l21.09,23.2A87.63,87.63,0,0,0,40.37,120H16a8,8,0,0,0,0,16H40.37A88.13,88.13,0,0,0,120,215.63V240a8,8,0,0,0,16,0V215.63a87.51,87.51,0,0,0,45-17.43l21.08,23.18a8,8,0,1,0,11.84-10.76Z" }));
});
H.displayName = "Fill";
export {
  H as Fill
};
