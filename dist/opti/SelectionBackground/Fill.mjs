var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var l = m, { children: a } = l, t = Z(l, ["children"]);
  return /* @__PURE__ */ h.createElement(s, H({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M72,112h72v72H72ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM96,72a8,8,0,0,0,16,0h16a8,8,0,0,0,0-16H112A16,16,0,0,0,96,72Zm64,40a16,16,0,0,0-16-16H72a16,16,0,0,0-16,16v72a16,16,0,0,0,16,16h72a16,16,0,0,0,16-16Zm40,16a8,8,0,0,0-16,0v16a8,8,0,0,0,0,16,16,16,0,0,0,16-16Zm0-56a16,16,0,0,0-16-16H168a8,8,0,0,0,0,16h16V88a8,8,0,0,0,16,0Z" }));
});
d.displayName = "Fill";
export {
  d as Fill
};
