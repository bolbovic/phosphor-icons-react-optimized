var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? H(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && Z(a, e, m[e]);
  return a;
};
var v = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import A, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const c = h((t, e) => {
  var V = t, { children: a } = V, m = v(V, ["children"]);
  return /* @__PURE__ */ A.createElement(n, p({ ref: e }, m), a, /* @__PURE__ */ A.createElement("path", { d: "M228,48V88a4,4,0,0,1-8,0V52H184a4,4,0,0,1,0-8h40A4,4,0,0,1,228,48ZM72,204H36V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H72a4,4,0,0,0,0-8Zm152-40a4,4,0,0,0-4,4v36H184a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,224,164ZM32,92a4,4,0,0,0,4-4V52H72a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4V88A4,4,0,0,0,32,92Zm48-8a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,80,84Zm100,4a4,4,0,0,0-8,0v80a4,4,0,0,0,8,0Zm-36-4a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,144,84Zm-32,0a4,4,0,0,0-4,4v80a4,4,0,0,0,8,0V88A4,4,0,0,0,112,84Z" }));
});
c.displayName = "Thin";
export {
  c as Thin
};
