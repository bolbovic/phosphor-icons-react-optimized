var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, V = (a, m) => {
  for (var e in m || (m = {}))
    l.call(m, e) && o(a, e, m[e]);
  if (r)
    for (var e of r(m))
      p.call(m, e) && o(a, e, m[e]);
  return a;
};
var Z = (a, m) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const d = A((t, e) => {
  var H = t, { children: a } = H, m = Z(H, ["children"]);
  return /* @__PURE__ */ f.createElement(c, V({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M128,56a32,32,0,1,0,32,32A32,32,0,0,0,128,56Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm0,32a32,32,0,1,0,32,32A32,32,0,0,0,128,136Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,184Zm88-40H200V80h16a8,8,0,0,0,0-16H200V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64H40a8,8,0,0,0,0,16H56v64H40a8,8,0,0,0,0,16H56v56a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,72H72V40H184V216Z" }));
});
d.displayName = "Regular";
export {
  d as Regular,
  d as default
};
