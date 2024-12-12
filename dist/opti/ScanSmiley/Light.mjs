var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? H(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    A.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      c.call(m, e) && o(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    A.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as V } from "react";
import h from "../../lib/OptiBase.mjs";
const f = V((t, e) => {
  var Z = t, { children: a } = Z, m = p(Z, ["children"]);
  return /* @__PURE__ */ s.createElement(h, i({ ref: e }, m), a, /* @__PURE__ */ s.createElement("path", { d: "M222,40V76a6,6,0,0,1-12,0V46H180a6,6,0,0,1,0-12h36A6,6,0,0,1,222,40Zm-6,134a6,6,0,0,0-6,6v30H180a6,6,0,0,0,0,12h36a6,6,0,0,0,6-6V180A6,6,0,0,0,216,174ZM76,210H46V180a6,6,0,0,0-12,0v36a6,6,0,0,0,6,6H76a6,6,0,0,0,0-12ZM40,82a6,6,0,0,0,6-6V46H76a6,6,0,0,0,0-12H40a6,6,0,0,0-6,6V76A6,6,0,0,0,40,82Zm88,116a70,70,0,1,1,70-70A70.08,70.08,0,0,1,128,198Zm58-70a58,58,0,1,0-58,58A58.07,58.07,0,0,0,186,128Zm-72-12a10,10,0,1,0-10,10A10,10,0,0,0,114,116Zm38-10a10,10,0,1,0,10,10A10,10,0,0,0,152,106Zm-4,41.5c-4.2,3.71-12.81,6.5-20,6.5s-15.83-2.79-20-6.5a6,6,0,0,0-7.94,9c7.44,6.56,19.41,9.5,28,9.5s20.53-2.94,28-9.5a6,6,0,1,0-7.94-9Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
