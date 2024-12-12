var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    H.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      o.call(m, e) && l(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const c = s((t, e) => {
  var A = t, { children: a } = A, m = p(A, ["children"]);
  return /* @__PURE__ */ f.createElement(V, Z({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M96,208a8,8,0,0,1-8,8H39.38A15.4,15.4,0,0,1,24,200.62V192a8,8,0,0,1,16,0v8H88A8,8,0,0,1,96,208Zm64-8H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM24,80V56A16,16,0,0,1,40,40H92.69A15.86,15.86,0,0,1,104,44.69l29.66,29.65A8,8,0,0,1,128,88H32A8,8,0,0,1,24,80Zm16-8h68.69l-16-16H40Zm-8,88a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
