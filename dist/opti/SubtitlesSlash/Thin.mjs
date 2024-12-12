var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var r = H, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(l, h({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M52,136a4,4,0,0,1,4-4H72a4,4,0,0,1,0,8H56A4,4,0,0,1,52,136Zm159,77.31a4,4,0,1,1-5.92,5.38L191.69,204H32a12,12,0,0,1-12-12V64A12,12,0,0,1,32,52H53.5L45,42.69A4,4,0,0,1,51,37.31ZM184.41,196l-21.82-24H56a4,4,0,0,1,0-8h99.32L133.5,140H104a4,4,0,0,1,0-8h22.23L60.78,60H32a4,4,0,0,0-4,4V192a4,4,0,0,0,4,4ZM200,140a4,4,0,0,0,0-8H178.52a4,4,0,1,0,0,8Zm24-88H105.79a4,4,0,0,0,0,8H224a4,4,0,0,1,4,4V194.83a4,4,0,1,0,8,0V64A12,12,0,0,0,224,52Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
