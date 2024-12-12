var i = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var c = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && c(a, e, r[e]);
  if (l)
    for (var e of l(r))
      o.call(r, e) && c(a, e, r[e]);
  return a;
};
var Z = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var m = t, { children: a } = m, r = Z(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M238.64,33.36a32,32,0,0,0-45.26,0h0a32,32,0,0,0,0,45.26c.29.29.6.57.9.85l-26.63,49.46a32.19,32.19,0,0,0-23.9,3.5l-20.18-20.18a32,32,0,0,0-50.2-38.89h0a32,32,0,0,0,0,45.26c.29.29.59.57.89.85L47.63,168.94a32,32,0,0,0-30.27,8.44h0a32,32,0,1,0,45.26,0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4,32.4,0,0,0,96,128a32,32,0,0,0,16.25-4.41l20.18,20.18a32,32,0,1,0,50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.33,32.33,0,0,0,216,88a32,32,0,0,0,22.63-54.62ZM51.3,211.33a16,16,0,0,1-22.63-22.64h0A16,16,0,1,1,51.3,211.33Zm33.38-104a16,16,0,0,1,0-22.63h0a16,16,0,1,1,0,22.63Zm86.64,64a16,16,0,0,1-22.63-22.63h0a16,16,0,0,1,22.63,22.63Zm56-104A16,16,0,1,1,204.7,44.67h0a16,16,0,0,1,22.63,22.64Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
