var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (l, e, a) => e in l ? i(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a, V = (l, e) => {
  for (var a in e || (e = {}))
    p.call(e, a) && m(l, a, e[a]);
  if (o)
    for (var a of o(e))
      d.call(e, a) && m(l, a, e[a]);
  return l;
};
var c = (l, e) => {
  var a = {};
  for (var t in l)
    p.call(l, t) && e.indexOf(t) < 0 && (a[t] = l[t]);
  if (l != null && o)
    for (var t of o(l))
      e.indexOf(t) < 0 && d.call(l, t) && (a[t] = l[t]);
  return a;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((t, a) => {
  var r = t, { children: l } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, V({ ref: a }, e), l, /* @__PURE__ */ f.createElement("path", { d: "M231.38,46.54a12,12,0,0,0-10.29-2.18L161.4,59.28l-60-30a12,12,0,0,0-8.28-.91l-64,16A12,12,0,0,0,20,56V200a12,12,0,0,0,14.91,11.64L94.6,196.72l60,30a12,12,0,0,0,8.28.91l64-16A12,12,0,0,0,236,200V56A12,12,0,0,0,231.38,46.54ZM108,59.42l40,20V196.58l-40-20Zm-64,6,40-10V174.63l-40,10ZM212,190.63l-40,10V81.37l40-10Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
