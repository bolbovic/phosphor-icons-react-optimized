var L = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? L(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && o(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var l = t, { children: a } = l, r = i(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31ZM86.3,208,128,142.84,169.7,208Zm102.4,0-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
