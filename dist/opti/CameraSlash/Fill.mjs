var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as L } from "react";
import d from "../../lib/OptiBase.mjs";
const h = L((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M232,80V192a24.52,24.52,0,0,1-.45,4.65,4,4,0,0,1-6.9,2L86,46.08a4,4,0,0,1-.37-4.91l3.74-5.61A8,8,0,0,1,96,32h64a8,8,0,0,1,6.66,3.56L180.28,56H208A24,24,0,0,1,232,80ZM213.92,210.62a8,8,0,1,1-11.84,10.76L197.19,216H48a24,24,0,0,1-24-24V80A24,24,0,0,1,48,56h3.73L42.08,45.38A8,8,0,1,1,53.92,34.62ZM148,161.92l-47.88-52.68A36,36,0,0,0,148,161.92Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
