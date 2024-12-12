var R = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? R(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, f = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      c.call(r, e) && p(a, e, r[e]);
  return a;
};
var i = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && c.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = d((t, e) => {
  var o = t, { children: a } = o, r = i(o, ["children"]);
  return /* @__PURE__ */ s.createElement(n, f({ ref: e }, r), a, /* @__PURE__ */ s.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-61.66a8,8,0,0,1-11.32,11.32L104,115.31V144a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H115.31Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
