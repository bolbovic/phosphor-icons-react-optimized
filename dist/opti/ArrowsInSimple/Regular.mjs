var H = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? H(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && l(a, e, r[e]);
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
import V from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var o = t, { children: a } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(V, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M213.66,53.66,163.31,104H192a8,8,0,0,1,0,16H144a8,8,0,0,1-8-8V64a8,8,0,0,1,16,0V92.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0,0,16H92.69L42.34,202.34a8,8,0,0,0,11.32,11.32L104,163.31V192a8,8,0,0,0,16,0V144A8,8,0,0,0,112,136Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
