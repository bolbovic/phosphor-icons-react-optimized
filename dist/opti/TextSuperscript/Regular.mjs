var L = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? L(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = i(m, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M248,144a8,8,0,0,1-8,8H192a8,8,0,0,1-6.4-12.8l43.17-57.55a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.33,32,32,0,1,1,55.74,29.92L208,136h32A8,8,0,0,1,248,144ZM149.24,74a8,8,0,0,0-11.29.8L92,127.79l-45.95-53A8,8,0,0,0,34,85.24L81.41,140,34,194.76a8,8,0,0,0,12.1,10.48l46-53,45.95,53a8,8,0,1,0,12.1-10.48L102.59,140l47.46-54.76A8,8,0,0,0,149.24,74Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};