var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && V(a, e, t[e]);
  if (m)
    for (var e of m(t))
      i.call(t, e) && V(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    h.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && i.call(a, r) && (e[r] = a[r]);
  return e;
};
import n, { forwardRef as f } from "react";
import l from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var o = r, { children: a } = o, t = H(o, ["children"]);
  return /* @__PURE__ */ n.createElement(l, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M226.06,20.57a4,4,0,0,0-3.94-.1L103,84H32A12,12,0,0,0,20,96V200a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V168a4.05,4.05,0,0,0-.17-1.15L108.77,90,220,30.67V160a4,4,0,0,1-4,4H200a4,4,0,0,1-4-4v-8a4,4,0,0,0-8,0v8a12,12,0,0,0,12,12h16a12,12,0,0,0,12-12V24A4,4,0,0,0,226.06,20.57ZM101,92l21.6,72H60V92ZM32,92H52v72H28V96A4,4,0,0,1,32,92Zm88,112H32a4,4,0,0,1-4-4V172h96v28A4,4,0,0,1,120,204Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
