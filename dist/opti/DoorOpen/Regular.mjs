var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(V, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-40,0H176V40h16ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z" }));
});
Z.displayName = "Regular";
export {
  Z as Regular
};
