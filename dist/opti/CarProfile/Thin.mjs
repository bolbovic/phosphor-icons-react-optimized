var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
import h from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var r = H, { children: a } = r, t = n(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, A({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M240,116H209.66L165.17,71.52A11.9,11.9,0,0,0,156.69,68H44.28a12,12,0,0,0-10,5.34L4.67,117.78A4,4,0,0,0,4,120v48a12,12,0,0,0,12,12H36.29a28,28,0,0,0,55.42,0h72.58a28,28,0,0,0,55.42,0H240a12,12,0,0,0,12-12V128A12,12,0,0,0,240,116ZM41,77.78A4,4,0,0,1,44.28,76H156.69a4,4,0,0,1,2.82,1.17L198.34,116H15.47ZM64,196a20,20,0,1,1,20-20A20,20,0,0,1,64,196Zm128,0a20,20,0,1,1,20-20A20,20,0,0,1,192,196Zm52-28a4,4,0,0,1-4,4H219.71a28,28,0,0,0-55.42,0H91.71a28,28,0,0,0-55.42,0H16a4,4,0,0,1-4-4V124H240a4,4,0,0,1,4,4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
