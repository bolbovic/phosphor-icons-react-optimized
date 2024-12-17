var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var H = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
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
import c, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ c.createElement(L, p({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M166,104a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,104Zm-6,26H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm70-74V184a14,14,0,0,1-14,14H154.41L140.16,223a14,14,0,0,1-24.32,0L101.59,198H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2h65.07a6,6,0,0,1,5.21,3l16,28a2,2,0,0,0,3.48,0l16-28a6,6,0,0,1,5.21-3H216a2,2,0,0,0,2-2Z" }));
});
Z.displayName = "Light";
export {
  Z as Light
};
