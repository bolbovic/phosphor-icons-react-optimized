var n = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && l)
    for (var r of l(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((r, e) => {
  var m = r, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ h.createElement(f, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M212,48V96a4,4,0,0,1-8,0V57.66l-49.17,49.17a4,4,0,0,1-5.66-5.66L198.34,52H160a4,4,0,0,1,0-8h48A4,4,0,0,1,212,48ZM101.17,149.17,52,198.34V160a4,4,0,0,0-8,0v48a4,4,0,0,0,4,4H96a4,4,0,0,0,0-8H57.66l49.17-49.17a4,4,0,0,0-5.66-5.66ZM208,156a4,4,0,0,0-4,4v38.34l-49.17-49.17a4,4,0,0,0-5.66,5.66L198.34,204H160a4,4,0,0,0,0,8h48a4,4,0,0,0,4-4V160A4,4,0,0,0,208,156ZM57.66,52H96a4,4,0,0,0,0-8H48a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l49.17,49.17a4,4,0,0,0,5.66-5.66Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
