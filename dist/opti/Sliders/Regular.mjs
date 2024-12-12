var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, m, e) => m in a ? v(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && V(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && V(a, e, m[e]);
  return a;
};
var f = (a, m) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((t, e) => {
  var o = t, { children: a } = o, m = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, Z({ ref: e }, m), a, /* @__PURE__ */ s.createElement("path", { d: "M64,105V40a8,8,0,0,0-16,0v65a32,32,0,0,0,0,62v49a8,8,0,0,0,16,0V167a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,56,152Zm80-95V40a8,8,0,0,0-16,0V57a32,32,0,0,0,0,62v97a8,8,0,0,0,16,0V119a32,32,0,0,0,0-62Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm104,64a32.06,32.06,0,0,0-24-31V40a8,8,0,0,0-16,0v97a32,32,0,0,0,0,62v17a8,8,0,0,0,16,0V199A32.06,32.06,0,0,0,232,168Zm-32,16a16,16,0,1,1,16-16A16,16,0,0,1,200,184Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
