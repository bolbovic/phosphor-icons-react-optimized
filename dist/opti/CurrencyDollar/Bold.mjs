var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var h in a)
    p.call(a, h) && t.indexOf(h) < 0 && (e[h] = a[h]);
  if (a != null && m)
    for (var h of m(a))
      t.indexOf(h) < 0 && d.call(a, h) && (e[h] = a[h]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((h, e) => {
  var o = h, { children: a } = o, t = V(o, ["children"]);
  return /* @__PURE__ */ c.createElement(s, l({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M152,116H140V60h4a28,28,0,0,1,28,28,12,12,0,0,0,24,0,52.06,52.06,0,0,0-52-52h-4V24a12,12,0,0,0-24,0V36h-4a52,52,0,0,0,0,104h4v56H104a28,28,0,0,1-28-28,12,12,0,0,0-24,0,52.06,52.06,0,0,0,52,52h12v12a12,12,0,0,0,24,0V220h12a52,52,0,0,0,0-104Zm-40,0a28,28,0,0,1,0-56h4v56Zm40,80H140V140h12a28,28,0,0,1,0,56Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
