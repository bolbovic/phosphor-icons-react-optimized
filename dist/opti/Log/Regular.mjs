var i = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var H = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && H(a, e, r[e]);
  if (c)
    for (var e of c(r))
      o.call(r, e) && H(a, e, r[e]);
  return a;
};
var s = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as R } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = R((t, e) => {
  var m = t, { children: a } = m, r = s(m, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M212,136a12,12,0,1,1-12-12A12,12,0,0,1,212,136Zm36,0c0,40.37-21.08,72-48,72H56c-26.92,0-48-31.63-48-72S29.08,64,56,64H92.69l37.65-37.66A8,8,0,0,1,136,24h32a8,8,0,0,1,0,16H139.31l-24,24H200C226.92,64,248,95.63,248,136ZM56,192H169.51a73.46,73.46,0,0,1-12.67-24H80a8,8,0,0,1,0-16h73.16A110.63,110.63,0,0,1,152,136c0-22.86,6.76-42.9,17.51-56H56c-12.47,0-23.55,13.26-28.8,32H104a8,8,0,0,1,0,16H24.35q-.34,3.93-.35,8C24,166.36,38.65,192,56,192Zm176-56c0-30.36-14.65-56-32-56s-32,25.64-32,56,14.65,56,32,56S232,166.36,232,136Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};