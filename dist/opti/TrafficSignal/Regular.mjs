var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var o = (a, m, e) => m in a ? c(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, Z = (a, m) => {
  for (var e in m || (m = {}))
    p.call(m, e) && o(a, e, m[e]);
  if (t)
    for (var e of t(m))
      V.call(m, e) && o(a, e, m[e]);
  return a;
};
var l = (a, m) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && m.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      m.indexOf(r) < 0 && V.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var H = r, { children: a } = H, m = l(H, ["children"]);
  return /* @__PURE__ */ A.createElement(i, Z({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M128,56a32,32,0,1,0,32,32A32,32,0,0,0,128,56Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,104Zm0,32a32,32,0,1,0,32,32A32,32,0,0,0,128,136Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,184Zm88-40H200V80h16a8,8,0,0,0,0-16H200V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V64H40a8,8,0,0,0,0,16H56v64H40a8,8,0,0,0,0,16H56v56a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,72H72V40H184V216Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
