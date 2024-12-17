var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && A(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && A(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, c({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M224,100h-4.78a92,92,0,0,0-182.44,0H32a12,12,0,0,0-12,12,108.38,108.38,0,0,0,56,94.68V208a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20v-1.32A108.38,108.38,0,0,0,236,112,12,12,0,0,0,224,100ZM170.29,60.06A92,92,0,0,0,127.19,100H106a68.27,68.27,0,0,1,62-40C168.76,60,169.52,60,170.29,60.06Zm17.22,19.08A67.66,67.66,0,0,1,194.92,100H156.13A67.91,67.91,0,0,1,187.51,79.14ZM128,44c.83,0,1.65,0,2.48.06A92.3,92.3,0,0,0,80.37,100H61.08A68.1,68.1,0,0,1,128,44Zm35,144.39a12,12,0,0,0-7,10.91V204H100v-4.7a12,12,0,0,0-7-10.91A84.32,84.32,0,0,1,44.87,124H211.13A84.32,84.32,0,0,1,163,188.39Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
