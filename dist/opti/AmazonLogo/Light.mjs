var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as A } from "react";
import d from "../../lib/OptiBase.mjs";
const n = A((r, e) => {
  var o = r, { children: a } = o, t = s(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M246,168v32a6,6,0,0,1-12,0V182.48l-5.66,5.66C225.6,191.15,188.86,230,128,230c-62,0-98.92-40.27-100.46-42a6,6,0,1,1,8.92-8c.34.37,35.09,38,91.54,38s91.2-37.64,91.55-38l.21-.22,5.76-5.76H208a6,6,0,0,1,0-12h32A6,6,0,0,1,246,168ZM162,99.56V84A38,38,0,0,0,90.14,66.73a6,6,0,1,1-10.68-5.46A50,50,0,0,1,174,84v92a6,6,0,0,1-12,0V164.44a50,50,0,1,1,0-64.88ZM162,132a38,38,0,1,0-38,38A38,38,0,0,0,162,132Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
