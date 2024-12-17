var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && H(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && H(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    h.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M164,104a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,104Zm-4,28H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm68-76V184a12,12,0,0,1-12,12H153.25L138.42,222a12,12,0,0,1-20.84,0L102.75,196H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216A12,12,0,0,1,228,56Zm-8,0a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V184a4,4,0,0,0,4,4h65.07a4,4,0,0,1,3.47,2l16,28a4,4,0,0,0,6.94,0l16-28a4,4,0,0,1,3.47-2H216a4,4,0,0,0,4-4Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
