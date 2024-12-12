var s = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import l, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const A = d((r, e) => {
  var m = r, { children: a } = m, t = f(m, ["children"]);
  return /* @__PURE__ */ l.createElement(h, n({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69l1.31,1.44A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c1.37-.37,32.56-9.14,58.23-36.71L205,218.69a4,4,0,1,0,5.92-5.38Zm77,190.51a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H53.5L181.88,193.21C160.23,216.7,133.58,226.06,128,227.82ZM220,56v56c0,20-3.77,38.49-11.2,54.94a4,4,0,0,1-3.65,2.36,4.06,4.06,0,0,1-1.65-.36,4,4,0,0,1-2-5.29c7-15.41,10.49-32.79,10.49-51.65V56a4,4,0,0,0-4-4H98.52a4,4,0,1,1,0-8H208A12,12,0,0,1,220,56Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
