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
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const h = d((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M213.92,210.61a8,8,0,1,1-11.84,10.76L189.92,208H83l-32.6,28.16-.08.07A15.94,15.94,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48h4.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM216,48H96.75a4,4,0,0,0-3,6.69L225,199.06a4,4,0,0,0,7-2.69V64A16,16,0,0,0,216,48Z" }));
});
h.displayName = "Fill";
export {
  h as Fill
};
