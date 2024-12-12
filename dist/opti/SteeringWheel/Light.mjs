var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as s } from "react";
import f from "../../lib/OptiBase.mjs";
const M = s((m, e) => {
  var c = m, { children: a } = c, t = A(c, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM46.43,166h44a2,2,0,0,1,1.87,1.3l18.33,49A90.3,90.3,0,0,1,46.43,166Zm98.87,50.32,18.37-49a2,2,0,0,1,1.88-1.3h44A90.29,90.29,0,0,1,145.3,216.32ZM214.17,154H165.55a14,14,0,0,0-13.11,9.09l-20.55,54.82c-1.29.06-2.59.09-3.89.09s-2.63,0-3.94-.09l-20.5-54.81A14.06,14.06,0,0,0,90.45,154H41.83c-.65-2.17-1.23-4.37-1.72-6.61a122,122,0,0,1,175.78,0C215.4,149.63,214.82,151.83,214.17,154ZM128,98a134.38,134.38,0,0,0-89.88,34.64C38,131.1,38,129.56,38,128a90,90,0,0,1,180,0c0,1.56,0,3.1-.12,4.64A134.38,134.38,0,0,0,128,98Zm10,42a10,10,0,1,1-10-10A10,10,0,0,1,138,140Z" }));
});
M.displayName = "Light";
export {
  M as Light
};
