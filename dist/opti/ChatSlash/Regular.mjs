var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (l)
    for (var e of l(r))
      H.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && H.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as A } from "react";
import L from "../../lib/OptiBase.mjs";
const R = A((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(L, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L44.46,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.94,15.94,0,0,0,10.26-3.78l.08-.07L83,208H189.92l12.16,13.38a8,8,0,1,0,11.84-10.76ZM80,192a8,8,0,0,0-5.23,1.95L40,224V64H59L175.37,192ZM232,64V186a8,8,0,0,1-16,0V64H105.79a8,8,0,0,1,0-16H216A16,16,0,0,1,232,64Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
