var A = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, r, e) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, s = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && c(a, e, r[e]);
  if (l)
    for (var e of l(r))
      p.call(r, e) && c(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as L } from "react";
import R from "../../lib/OptiBase.mjs";
const Z = L((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(R, s({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M214.36,166.46l-47.1-21.11-.12-.06a16,16,0,0,0-15.18,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,24,88c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,214.36,166.46ZM168,216A128.14,128.14,0,0,1,40,88,40.2,40.2,0,0,1,74.87,48a.61.61,0,0,0,0,.12l21,47L75.2,119.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,6.92,6.92,0,0,0,.74-.57L160.89,160l47,21.06h0s.08,0,.11,0A40.21,40.21,0,0,1,168,216Zm24-112V48a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm-40,0V48a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
