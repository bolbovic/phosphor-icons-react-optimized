var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? i(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && l(a, e, r[e]);
  return a;
};
var V = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var c = t, { children: a } = c, r = V(c, ["children"]);
  return /* @__PURE__ */ f.createElement(R, p({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M208,48a87.48,87.48,0,0,0-35.36,7.43c-15.1-25.37-39.92-38-41.06-38.59a8,8,0,0,0-7.16,0c-1.14.58-26,13.22-41.06,38.59A87.48,87.48,0,0,0,48,48a8,8,0,0,0-8,8V96a88.11,88.11,0,0,0,80,87.63v35.43L83.58,200.84a8,8,0,1,0-7.16,14.32l48,24a8,8,0,0,0,7.16,0l48-24a8,8,0,0,0-7.16-14.32L136,219.06V183.63A88.11,88.11,0,0,0,216,96V56A8,8,0,0,0,208,48ZM120,167.56A72.1,72.1,0,0,1,56,96V64.44A72.1,72.1,0,0,1,120,136Zm8-68.2A88.4,88.4,0,0,0,97.36,63.19c9.57-15.79,24-25.9,30.64-30,6.65,4.08,21.08,14.19,30.64,30A88.46,88.46,0,0,0,128,99.36ZM200,96a72.1,72.1,0,0,1-64,71.56V136a72.1,72.1,0,0,1,64-71.56Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
