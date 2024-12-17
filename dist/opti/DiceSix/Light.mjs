var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && Z(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as H } from "react";
import d from "../../lib/OptiBase.mjs";
const h = H((t, e) => {
  var A = t, { children: a } = A, m = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18ZM102,84A10,10,0,1,1,92,74,10,10,0,0,1,102,84Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,84Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,128Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,128Zm-72,44a10,10,0,1,1-10-10A10,10,0,0,1,102,172Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,172Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
