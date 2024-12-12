var n = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? n(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    o.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      i.call(H, e) && r(a, e, H[e]);
  return a;
};
var Z = (a, H) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as v } from "react";
import c from "../../lib/OptiBase.mjs";
const f = v((t, e) => {
  var h = t, { children: a } = h, H = Z(h, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, H), a, /* @__PURE__ */ l.createElement("path", { d: "M232,196H196V164h28a4,4,0,0,0,3.88-5l-32-128a4,4,0,0,0-7.76,0l-32,128a4,4,0,0,0,3.88,5h28v32H116V172h12a4,4,0,0,0,0-8H116V140h12a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8H52v24H40a4,4,0,0,0,0,8H52v24H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM192,48.49,218.88,156H165.12ZM60,140h48v24H60Zm0,32h48v24H60Zm56-80A24,24,0,1,0,92,68,24,24,0,0,0,116,92Zm0-40a16,16,0,1,1-16,16A16,16,0,0,1,116,52Z" }));
});
f.displayName = "Thin";
export {
  f as Thin
};
