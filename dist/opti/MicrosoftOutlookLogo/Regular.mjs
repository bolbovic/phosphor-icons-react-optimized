var V = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var o = (a, r, e) => r in a ? V(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    Z.call(r, e) && o(a, e, r[e]);
  if (m)
    for (var e of m(r))
      l.call(r, e) && o(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && l.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var H = t, { children: a } = H, r = v(H, ["children"]);
  return /* @__PURE__ */ c.createElement(h, p({ ref: e }, r), a, /* @__PURE__ */ c.createElement("path", { d: "M120,128a32,32,0,1,0-32,32A32,32,0,0,0,120,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm152-24H208V40a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H72v16a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V112A8,8,0,0,0,224,104Zm-58.34,60L216,127.65v72.7ZM112,48h80v77.24l-40,28.89V80a16,16,0,0,0-16-16H112ZM40,80h96v77.9c0,.12,0,.24,0,.36V176H40ZM88,192h48a16,16,0,0,0,16-16v-2.13L199.26,208H88Z" }));
});
i.displayName = "Regular";
export {
  i as Regular
};
