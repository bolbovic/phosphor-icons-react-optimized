var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const l = Z((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M168,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h68A4,4,0,0,1,168,112Zm-4,28H96a4,4,0,0,0,0,8h68a4,4,0,0,0,0-8Zm64-16a96.11,96.11,0,0,1-96,96H48a12,12,0,0,1-12-12V124a96,96,0,0,1,192,0Zm-8,0a88,88,0,0,0-176,0v84a4,4,0,0,0,4,4h84A88.1,88.1,0,0,0,220,124Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
