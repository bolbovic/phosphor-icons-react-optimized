var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      Z.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import R from "../../lib/OptiBase.mjs";
const d = A((t, e) => {
  var l = t, { children: a } = l, r = f(l, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm68.8-94.4-48-36A8,8,0,0,0,136,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM152,148V108l26.67,20Zm-19.2-26.4-48-36A8,8,0,0,0,72,92v72a8,8,0,0,0,12.8,6.4l48-36a8,8,0,0,0,0-12.8ZM88,148V108l26.67,20Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
