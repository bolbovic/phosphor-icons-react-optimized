var V = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var H = (a, l, e) => l in a ? V(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, p = (a, l) => {
  for (var e in l || (l = {}))
    o.call(l, e) && H(a, e, l[e]);
  if (t)
    for (var e of t(l))
      Z.call(l, e) && H(a, e, l[e]);
  return a;
};
var L = (a, l) => {
  var e = {};
  for (var r in a)
    o.call(a, r) && l.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      l.indexOf(r) < 0 && Z.call(a, r) && (e[r] = a[r]);
  return e;
};
import M, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((r, e) => {
  var m = r, { children: a } = m, l = L(m, ["children"]);
  return /* @__PURE__ */ M.createElement(f, p({ ref: e }, l), a, /* @__PURE__ */ M.createElement("path", { d: "M240,192h-8V130.57l1.49,2.08a8,8,0,1,0,13-9.3l-40-56a8,8,0,0,0-2-1.94L137,18.77l-.1-.07a16,16,0,0,0-17.76,0l-.1.07L51.45,65.42a8,8,0,0,0-2,1.94l-40,56a8,8,0,1,0,13,9.3L24,130.57V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,108.17,61.7,77.79,128,32l66.3,45.78L216,108.17V192H192V120a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8v72H40Zm88,42L97,128H159Zm48-14.62v48.91L141.76,160ZM114.24,160,80,184.46V135.55ZM128,169.83,159,192H97ZM104,88a8,8,0,0,1,8-8h32a8,8,0,1,1,0,16H112A8,8,0,0,1,104,88Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
