var c = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (l)
    for (var e of l(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var L in a)
    o.call(a, L) && t.indexOf(L) < 0 && (e[L] = a[L]);
  if (a != null && l)
    for (var L of l(a))
      t.indexOf(L) < 0 && i.call(a, L) && (e[L] = a[L]);
  return e;
};
import n, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((L, e) => {
  var r = L, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ n.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M234.83,69.17l-48-48a4,4,0,0,0-5.66,5.66L202.34,48,168,82.34,130.83,45.17a4,4,0,1,0-5.66,5.66L134.34,60,47.51,146.83A12,12,0,0,0,44,155.31v51L21.17,229.17a4,4,0,0,0,5.66,5.66L49.66,212h51a11.93,11.93,0,0,0,8.48-3.51L196,121.66l9.17,9.17a4,4,0,0,0,5.66-5.66L173.66,88,208,53.66l21.17,21.17a4,4,0,1,0,5.66-5.66ZM103.51,202.83a4,4,0,0,1-2.82,1.17H52V155.31a4,4,0,0,1,1.17-2.82L74,131.66l23.17,23.17a4,4,0,1,0,5.66-5.66L79.66,126,98,107.66l23.17,23.17a4,4,0,0,0,5.66-5.66L103.66,102,140,65.66l25.17,25.17h0L190.34,116Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
