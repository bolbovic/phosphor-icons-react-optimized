var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var c = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    c.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && p(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    c.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as i } from "react";
import d from "../../lib/OptiBase.mjs";
const f = i((m, e) => {
  var V = m, { children: a } = V, t = n(V, ["children"]);
  return /* @__PURE__ */ r.createElement(d, H({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M208,88H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-80,72a20,20,0,1,1,20-20A20,20,0,0,1,128,160Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z" }));
});
f.displayName = "Duotone";
export {
  f as Duotone
};
