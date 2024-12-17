var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    H.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import L, { forwardRef as n } from "react";
import f from "../../lib/OptiBase.mjs";
const l = n((r, e) => {
  var h = r, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ L.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M251.81,166.86h0l-22.29-74.3A11.92,11.92,0,0,0,218.05,84H208a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L242.62,164H203L181.54,92.55A11.92,11.92,0,0,0,170.05,84H160a4,4,0,0,0,0,8h10.05a4,4,0,0,1,3.83,2.85L194.62,164H155L133.54,92.55A11.92,11.92,0,0,0,122.05,84H38a11.92,11.92,0,0,0-11.49,8.55L4.17,166.85c0,.06,0,.12,0,.17A4,4,0,0,0,8,172H248a4,4,0,0,0,4-4A3.89,3.89,0,0,0,251.81,166.86Zm-217.69-72A4,4,0,0,1,38,92h84.1a4,4,0,0,1,3.83,2.85L146.62,164H13.38Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
