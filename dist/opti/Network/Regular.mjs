var c = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var h = (a, H, e) => H in a ? c(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, p = (a, H) => {
  for (var e in H || (H = {}))
    m.call(H, e) && h(a, e, H[e]);
  if (t)
    for (var e of t(H))
      o.call(H, e) && h(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var r in a)
    m.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && o.call(a, r) && (e[r] = a[r]);
  return e;
};
import v, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((r, e) => {
  var V = r, { children: a } = V, H = l(V, ["children"]);
  return /* @__PURE__ */ v.createElement(i, p({ ref: e }, H), a, /* @__PURE__ */ v.createElement("path", { d: "M232,112H136V88h8a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H112A16,16,0,0,0,96,40V72a16,16,0,0,0,16,16h8v24H24a8,8,0,0,0,0,16H56v32H48a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16H72V128H184v32h-8a16,16,0,0,0-16,16v32a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V176a16,16,0,0,0-16-16h-8V128h32a8,8,0,0,0,0-16ZM112,40h32V72H112ZM80,208H48V176H80Zm128,0H176V176h32Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
