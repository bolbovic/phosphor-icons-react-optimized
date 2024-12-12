var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && V(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as H } from "react";
import R from "../../lib/OptiBase.mjs";
const d = H((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(R, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M224,160a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8H76.53a16.09,16.09,0,0,0-13.72,7.77L42.28,114A16.06,16.06,0,0,0,40,122.22V216a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V122.22a16.06,16.06,0,0,0-2.28-8.24L145.19,79.77A16.09,16.09,0,0,0,131.47,72H112V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16ZM131.47,88,152,122.22V216H56V122.22L76.53,88H96v48a8,8,0,0,0,16,0V88Z" }));
});
d.displayName = "Regular";
export {
  d as Regular
};
