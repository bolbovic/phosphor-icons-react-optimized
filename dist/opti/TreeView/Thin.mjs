var n = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    m.call(t, e) && V(a, e, t[e]);
  if (h)
    for (var e of h(t))
      o.call(t, e) && V(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var H in a)
    m.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && h)
    for (var H of h(a))
      t.indexOf(H) < 0 && o.call(a, H) && (e[H] = a[H]);
  return e;
};
import v, { forwardRef as A } from "react";
import c from "../../lib/OptiBase.mjs";
const f = A((H, e) => {
  var r = H, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(c, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M176,148h32a12,12,0,0,0,12-12V104a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12v12H84V76H96a12,12,0,0,0,12-12V32A12,12,0,0,0,96,20H64A12,12,0,0,0,52,32V64A12,12,0,0,0,64,76H76V192a20,20,0,0,0,20,20h68v12a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V192a12,12,0,0,0-12-12H176a12,12,0,0,0-12,12v12H96a12,12,0,0,1-12-12V124h80v12A12,12,0,0,0,176,148ZM60,64V32a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4V64a4,4,0,0,1-4,4H64A4,4,0,0,1,60,64ZM172,192a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4Zm0-88a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v32a4,4,0,0,1-4,4H176a4,4,0,0,1-4-4Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
