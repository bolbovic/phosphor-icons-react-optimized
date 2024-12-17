var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      h.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var H in a)
    V.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && h.call(a, H) && (e[H] = a[H]);
  return e;
};
import l, { forwardRef as Z } from "react";
import c from "../../lib/OptiBase.mjs";
const f = Z((H, e) => {
  var o = H, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M244,204h-4V128a20,20,0,0,0-20-20H172V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V204H32a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24Zm-28-72v72H172V132ZM60,52h88V204H136V160a12,12,0,0,0-12-12H84a12,12,0,0,0-12,12v44H60Zm52,152H96V172h16ZM72,96A12,12,0,0,1,84,84h8V76a12,12,0,0,1,24,0v8h8a12,12,0,0,1,0,24h-8v8a12,12,0,0,1-24,0v-8H84A12,12,0,0,1,72,96Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
