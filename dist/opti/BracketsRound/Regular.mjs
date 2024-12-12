var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (m)
    for (var e of m(t))
      s.call(t, e) && l(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && s.call(a, r) && (e[r] = a[r]);
  return e;
};
import d, { forwardRef as C } from "react";
import R from "../../lib/OptiBase.mjs";
const n = C((r, e) => {
  var o = r, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ d.createElement(R, c({ ref: e }, t), a, /* @__PURE__ */ d.createElement("path", { d: "M40,128c0,58.29,34.67,80.25,36.15,81.16a8,8,0,0,1-8.27,13.7C66.09,221.78,24,195.75,24,128S66.09,34.22,67.88,33.14a8,8,0,0,1,8.26,13.7C74.54,47.83,40,69.82,40,128ZM188.12,33.14a8,8,0,0,0-8.27,13.7C181.33,47.75,216,69.71,216,128s-34.67,80.25-36.12,81.14a8,8,0,0,0,8.24,13.72C189.91,221.78,232,195.75,232,128S189.91,34.22,188.12,33.14Z" }));
});
n.displayName = "Regular";
export {
  n as Regular,
  n as default
};
