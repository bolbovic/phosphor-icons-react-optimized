var f = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const n = s((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ A.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M253.69,190.1a6,6,0,0,0-7.59-3.79L227,192.66l-29.68-59.34A6,6,0,0,0,192,130H110V102.05c.66,0,1.33,0,2,0h56a6,6,0,0,0,0-12H112c-.67,0-1.33,0-2,0V77.4a30,30,0,1,0-12,0v14A70,70,0,0,0,112,230c32.62,0,62-22.08,69.81-52.5a6,6,0,0,0-11.62-3c-6.49,25.21-31,43.5-58.19,43.5A58,58,0,0,1,98,103.72V136a6,6,0,0,0,6,6h84.29l30.34,60.68a6,6,0,0,0,7.27,3l24-8A6,6,0,0,0,253.69,190.1ZM86,48a18,18,0,1,1,18,18A18,18,0,0,1,86,48Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
