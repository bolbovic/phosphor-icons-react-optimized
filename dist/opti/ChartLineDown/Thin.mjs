var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
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
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const d = s((r, e) => {
  var o = r, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ f.createElement(V, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V62.34l60,60,29.17-29.17a4,4,0,0,1,5.66,0L196,158.34V128a4,4,0,0,1,8,0v40a4.13,4.13,0,0,1-.08.78,3.37,3.37,0,0,1-.1.34,2.8,2.8,0,0,1-.13.41,2.87,2.87,0,0,1-.2.39c-.05.1-.1.2-.16.3a4.19,4.19,0,0,1-1.11,1.11l-.31.16a3.48,3.48,0,0,1-.38.2,2.8,2.8,0,0,1-.41.13,3.37,3.37,0,0,1-.34.1,4.13,4.13,0,0,1-.78.08H160a4,4,0,0,1,0-8h30.34L128,101.66,98.83,130.83a4,4,0,0,1-5.66,0L36,73.66V204H224A4,4,0,0,1,228,208Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
