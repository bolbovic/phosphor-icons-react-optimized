var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, m, e) => m in a ? h(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, i = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && l(a, e, m[e]);
  if (r)
    for (var e of r(m))
      V.call(m, e) && l(a, e, m[e]);
  return a;
};
var p = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var H = t, { children: a } = H, m = p(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(f, i({ ref: e }, m), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,200H72a16,16,0,0,1-16-16V168a8,8,0,0,1,16,0v16H88a8,8,0,0,1,0,16Zm0-88H72v16a8,8,0,0,1-16,0V112A16,16,0,0,1,72,96H88a8,8,0,0,1,0,16Zm72,72a16,16,0,0,1-16,16H128a8,8,0,0,1,0-16h16V168a8,8,0,0,1,16,0Zm0-56a8,8,0,0,1-16,0V112H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Zm40,16a16,16,0,0,1-16,16,8,8,0,0,1,0-16h0V72H112a8,8,0,0,1-16,0,16,16,0,0,1,16-16h72a16,16,0,0,1,16,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
