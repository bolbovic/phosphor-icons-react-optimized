var f = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var m = (a, r, e) => r in a ? f(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    h.call(r, e) && m(a, e, r[e]);
  if (l)
    for (var e of l(r))
      o.call(r, e) && m(a, e, r[e]);
  return a;
};
var H = (a, r) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && l)
    for (var t of l(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var A = t, { children: a } = A, r = H(A, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
