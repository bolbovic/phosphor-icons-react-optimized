var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && A(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && A(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import v from "../../lib/OptiBase.mjs";
const M = s((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(v, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M191.83,51.48l13.83-13.82a8,8,0,0,0-11.32-11.32L179.79,40.9a87.81,87.81,0,0,0-103.58,0L61.66,26.34A8,8,0,0,0,50.34,37.66L64.17,51.48A87.72,87.72,0,0,0,40,112v40a88,88,0,0,0,176,0V112A87.72,87.72,0,0,0,191.83,51.48ZM128,40a72.08,72.08,0,0,1,72,72v8H56v-8A72.08,72.08,0,0,1,128,40Zm0,184a72.08,72.08,0,0,1-72-72V136H200v16A72.08,72.08,0,0,1,128,224ZM144,92a12,12,0,1,1,12,12A12,12,0,0,1,144,92ZM88,92a12,12,0,1,1,12,12A12,12,0,0,1,88,92Z" }));
});
M.displayName = "Regular";
export {
  M as Regular
};
