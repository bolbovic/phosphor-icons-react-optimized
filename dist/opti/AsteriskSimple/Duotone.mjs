var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var p = (e, a, t) => a in e ? f(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[a] = t, i = (e, a) => {
  for (var t in a || (a = {}))
    c.call(a, t) && p(e, t, a[t]);
  if (r)
    for (var t of r(a))
      n.call(a, t) && p(e, t, a[t]);
  return e;
};
var d = (e, a) => {
  var t = {};
  for (var o in e)
    c.call(e, o) && a.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      a.indexOf(o) < 0 && n.call(e, o) && (t[o] = e[o]);
  return t;
};
import l, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const E = s((o, t) => {
  var m = o, { children: e } = m, a = d(m, ["children"]);
  return /* @__PURE__ */ l.createElement(A, i({ ref: t }, a), e, /* @__PURE__ */ l.createElement("path", { d: "M200,128a72,72,0,1,1-72-72A72,72,0,0,1,200,128Z", opacity: "0.2" }), /* @__PURE__ */ l.createElement("path", { d: "M211,103.43l-70.13,28,49.47,63.61a8,8,0,1,1-12.63,9.82L128,141,78.32,204.91a8,8,0,0,1-12.63-9.82l49.47-63.61L45,103.43A8,8,0,0,1,51,88.57l69,27.61V40a8,8,0,0,1,16,0v76.18l69-27.61A8,8,0,1,1,211,103.43Z" }));
});
E.displayName = "Duotone";
export {
  E as Duotone
};
