var V = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const h = c((m, e) => {
  var l = m, { children: a } = l, t = A(l, ["children"]);
  return /* @__PURE__ */ L.createElement(f, n({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M218.75,125.66a1.14,1.14,0,0,0-.1-.19L188,70.94V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V71L37.34,125.47l-.1.19a12,12,0,0,0,1.15,12.5l86.44,112.28a4,4,0,0,0,6.34,0l86.49-112.35A12,12,0,0,0,218.75,125.66ZM80,28h96a4,4,0,0,1,4,4V68H76V32A4,4,0,0,1,80,28Zm48,120a16,16,0,1,1,16-16A16,16,0,0,1,128,148Zm83.27-14.72L132,236.25V155.66a24,24,0,1,0-8,0v80.58L44.78,133.34a4,4,0,0,1-.4-4.06L74.35,76H181.66l30,53.28A4,4,0,0,1,211.27,133.28Z" }));
});
h.displayName = "Thin";
export {
  h as Thin
};
