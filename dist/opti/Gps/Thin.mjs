var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && n.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as H } from "react";
import V from "../../lib/OptiBase.mjs";
const d = H((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240,124H211.9A84.11,84.11,0,0,0,132,44.1V16a4,4,0,0,0-8,0V44.1A84.11,84.11,0,0,0,44.1,124H16a4,4,0,0,0,0,8H44.1A84.11,84.11,0,0,0,124,211.9V240a4,4,0,0,0,8,0V211.9A84.11,84.11,0,0,0,211.9,132H240a4,4,0,0,0,0-8ZM128,204a76,76,0,1,1,76-76A76.08,76.08,0,0,1,128,204Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
