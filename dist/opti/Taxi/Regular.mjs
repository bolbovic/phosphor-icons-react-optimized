var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var l = (a, H, e) => H in a ? s(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    h.call(H, e) && l(a, e, H[e]);
  if (r)
    for (var e of r(H))
      Z.call(H, e) && l(a, e, H[e]);
  return a;
};
var p = (a, H) => {
  var e = {};
  for (var t in a)
    h.call(a, t) && H.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      H.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as M } from "react";
import V from "../../lib/OptiBase.mjs";
const c = M((t, e) => {
  var m = t, { children: a } = m, H = p(m, ["children"]);
  return /* @__PURE__ */ f.createElement(V, o({ ref: e }, H), a, /* @__PURE__ */ f.createElement("path", { d: "M240,104H228.64L201.25,56.06A16,16,0,0,0,187.36,48H165.42l-12-29.94A15.93,15.93,0,0,0,138.58,8H117.42a15.93,15.93,0,0,0-14.86,10.06L90.58,48H68.64a16,16,0,0,0-13.89,8.06L27.36,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM117.42,24h21.16l9.6,24H107.82ZM68.64,64H187.36l22.85,40H45.79ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z" }));
});
c.displayName = "Regular";
export {
  c as Regular,
  c as default
};
