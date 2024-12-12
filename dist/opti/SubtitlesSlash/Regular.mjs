var i = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, Z = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (H)
    for (var e of H(r))
      p.call(r, e) && l(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const R = s((t, e) => {
  var m = t, { children: a } = m, r = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M48,136a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm165.92,74.62a8,8,0,1,1-11.84,10.76L189.92,208H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H44.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM175.37,192l-14.55-16H56a8,8,0,0,1,0-16h90.28l-14.55-16H104a8,8,0,0,1,0-16h13.19L59,64H32V192ZM200,144a8,8,0,0,0,0-16H178.52a8,8,0,1,0,0,16Zm24-96H105.79a8,8,0,0,0,0,16H224V194.83a8,8,0,1,0,16,0V64A16,16,0,0,0,224,48Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
