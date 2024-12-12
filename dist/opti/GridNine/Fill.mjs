var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var r = (a, H, e) => H in a ? i(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, h = (a, H) => {
  for (var e in H || (H = {}))
    Z.call(H, e) && r(a, e, H[e]);
  if (m)
    for (var e of m(H))
      A.call(H, e) && r(a, e, H[e]);
  return a;
};
var l = (a, H) => {
  var e = {};
  for (var V in a)
    Z.call(a, V) && H.indexOf(V) < 0 && (e[V] = a[V]);
  if (a != null && m)
    for (var V of m(a))
      H.indexOf(V) < 0 && A.call(a, V) && (e[V] = a[V]);
  return e;
};
import o, { forwardRef as p } from "react";
import M from "../../lib/OptiBase.mjs";
const c = p((V, e) => {
  var t = V, { children: a } = t, H = l(t, ["children"]);
  return /* @__PURE__ */ o.createElement(M, h({ ref: e }, H), a, /* @__PURE__ */ o.createElement("path", { d: "M84,52V92H28a4,4,0,0,1-4-4V64A16,16,0,0,1,40,48H80A4,4,0,0,1,84,52Zm16,152a4,4,0,0,0,4,4h48a4,4,0,0,0,4-4V164H100ZM24,168v24a16,16,0,0,0,16,16H80a4,4,0,0,0,4-4V164H28A4,4,0,0,0,24,168Zm0-56v32a4,4,0,0,0,4,4H84V108H28A4,4,0,0,0,24,112ZM152,48H104a4,4,0,0,0-4,4V92h56V52A4,4,0,0,0,152,48Zm76,60H172v40h56a4,4,0,0,0,4-4V112A4,4,0,0,0,228,108ZM100,148h56V108H100ZM216,48H176a4,4,0,0,0-4,4V92h56a4,4,0,0,0,4-4V64A16,16,0,0,0,216,48Zm12,116H172v40a4,4,0,0,0,4,4h40a16,16,0,0,0,16-16V168A4,4,0,0,0,228,164Z" }));
});
c.displayName = "Fill";
export {
  c as Fill
};
