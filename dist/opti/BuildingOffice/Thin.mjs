var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, e, H) => e in a ? n(a, e, { enumerable: !0, configurable: !0, writable: !0, value: H }) : a[e] = H, o = (a, e) => {
  for (var H in e || (e = {}))
    V.call(e, H) && r(a, H, e[H]);
  if (m)
    for (var H of m(e))
      Z.call(e, H) && r(a, H, e[H]);
  return a;
};
var i = (a, e) => {
  var H = {};
  for (var t in a)
    V.call(a, t) && e.indexOf(t) < 0 && (H[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      e.indexOf(t) < 0 && Z.call(a, t) && (H[t] = a[t]);
  return H;
};
import p, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, H) => {
  var h = t, { children: a } = h, e = i(h, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: H }, e), a, /* @__PURE__ */ p.createElement("path", { d: "M248,212H228V92h4a4,4,0,0,0,0-8H180V44h4a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8h4V212H24a4,4,0,0,0,0,8H248a4,4,0,0,0,0-8ZM220,92V212H180V92ZM52,44H172V212H140V160a4,4,0,0,0-4-4H88a4,4,0,0,0-4,4v52H52Zm80,168H92V164h40ZM76,80a4,4,0,0,1,4-4H96a4,4,0,0,1,0,8H80A4,4,0,0,1,76,80Zm48,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,80ZM80,124a4,4,0,0,1,0-8H96a4,4,0,0,1,0,8Zm44-4a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H128A4,4,0,0,1,124,120Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
