var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && A.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L60.62,59.83A95.41,95.41,0,0,0,36,124v84a12,12,0,0,0,12,12h84a96.34,96.34,0,0,0,57.11-18.83L205,218.69a4,4,0,1,0,5.92-5.38ZM132,212H48a4,4,0,0,1-4-4V124A87.49,87.49,0,0,1,66,65.77L183.7,195.21A86.92,86.92,0,0,1,132,212Zm96-88a95.79,95.79,0,0,1-13.78,49.58,4,4,0,1,1-6.84-4.14A88,88,0,0,0,93.92,44.64a4,4,0,1,1-3.46-7.21A95,95,0,0,1,132,28,96.11,96.11,0,0,1,228,124Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
