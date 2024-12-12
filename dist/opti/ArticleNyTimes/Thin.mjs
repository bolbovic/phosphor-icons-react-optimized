var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, n = (a, H) => {
  for (var e in H || (H = {}))
    i.call(H, e) && o(a, e, H[e]);
  if (m)
    for (var e of m(H))
      p.call(H, e) && o(a, e, H[e]);
  return a;
};
var V = (a, H) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      H.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var r = t, { children: a } = r, H = V(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, n({ ref: e }, H), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,100H232a4,4,0,0,1,0,8H128a4,4,0,0,1,0-8Zm104,32H128a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8Zm0,32H80a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM96,140a4,4,0,0,0,0-8H84V60h40V72a4,4,0,0,0,8,0V56a4,4,0,0,0-4-4H32a4,4,0,0,0-4,4V72a4,4,0,0,0,8,0V60H76v72H64a4,4,0,0,0,0,8Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
