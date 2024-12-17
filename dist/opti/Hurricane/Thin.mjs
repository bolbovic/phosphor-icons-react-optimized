var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      c.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && c.call(a, r) && (e[r] = a[r]);
  return e;
};
import A, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ A.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148ZM153.49,47.94,163.87,9a4,4,0,0,0-4.71-4.94,191.41,191.41,0,0,0-57.32,24.54C64,53,44,87.32,44,128a84.08,84.08,0,0,0,58.51,80.06L92.13,247a4,4,0,0,0,4.71,4.94,191.28,191.28,0,0,0,57.32-24.55C192,203,212,168.68,212,128A84.08,84.08,0,0,0,153.49,47.94ZM150,220.51a190.13,190.13,0,0,1-48.39,21.87l9.61-36a4,4,0,0,0-2.84-4.9A76.06,76.06,0,0,1,52,128c0-38.29,18.16-69.41,54-92.51a190.13,190.13,0,0,1,48.39-21.87l-9.61,36a4,4,0,0,0,2.84,4.9A76.06,76.06,0,0,1,204,128C204,166.29,185.84,197.41,150,220.51Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
