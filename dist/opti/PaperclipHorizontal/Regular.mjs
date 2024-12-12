var s = Object.defineProperty;
var H = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && o(a, e, r[e]);
  if (H)
    for (var e of H(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && H)
    for (var t of H(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var m = t, { children: a } = m, r = f(m, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M248,128a56.06,56.06,0,0,1-56,56H48a40,40,0,0,1,0-80H192a24,24,0,0,1,0,48H80a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H48a24,24,0,0,0,0,48H192a40,40,0,0,0,0-80H80a8,8,0,0,1,0-16H192A56.06,56.06,0,0,1,248,128Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
