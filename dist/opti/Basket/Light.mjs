var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import H, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((l, e) => {
  var r = l, { children: a } = r, t = A(r, ["children"]);
  return /* @__PURE__ */ H.createElement(f, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M134,120v56a6,6,0,0,1-12,0V120a6,6,0,0,1,12,0Zm40.83-.6-5.6,56A6,6,0,0,0,174.6,182l.61,0a6,6,0,0,0,6-5.4l5.6-56a6,6,0,0,0-11.94-1.2Zm-93.66,0a6,6,0,0,0-11.94,1.2l5.6,56a6,6,0,0,0,6,5.4l.61,0a6,6,0,0,0,5.37-6.57ZM238,88.79,222.87,201.85A14,14,0,0,1,209,214H47a14,14,0,0,1-13.87-12.15L18.05,88.79A6,6,0,0,1,24,82H69.28l54.2-61.95a6,6,0,0,1,9,0l54.2,62H232A6,6,0,0,1,238,88.79ZM85.22,82h85.56L128,33.11ZM225.15,94H30.85L45,200.26A2,2,0,0,0,47,202H209a2,2,0,0,0,2-1.74Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
