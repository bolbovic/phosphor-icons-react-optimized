var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && H.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const Z = f((r, e) => {
  var o = r, { children: a } = o, t = h(o, ["children"]);
  return /* @__PURE__ */ n.createElement(s, V({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M156,96V48a4,4,0,0,1,8,0V92h44a4,4,0,0,1,0,8H160A4,4,0,0,1,156,96ZM96,156H48a4,4,0,0,0,0,8H92v44a4,4,0,0,0,8,0V160A4,4,0,0,0,96,156Zm112,0H160a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V164h44a4,4,0,0,0,0-8ZM96,44a4,4,0,0,0-4,4V92H48a4,4,0,0,0,0,8H96a4,4,0,0,0,4-4V48A4,4,0,0,0,96,44Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
