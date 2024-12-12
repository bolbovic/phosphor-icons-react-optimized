var c = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var Z = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && Z(a, e, r[e]);
  if (A)
    for (var e of A(r))
      M.call(r, e) && Z(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      r.indexOf(t) < 0 && M.call(a, t) && (e[t] = a[t]);
  return e;
};
import H, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var m = t, { children: a } = m, r = l(m, ["children"]);
  return /* @__PURE__ */ H.createElement(i, p({ ref: e }, r), a, /* @__PURE__ */ H.createElement("path", { d: "M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM240,56H16a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V64A8,8,0,0,0,240,56ZM193.65,184H62.35A56.78,56.78,0,0,0,24,145.65v-35.3A56.78,56.78,0,0,0,62.35,72h131.3A56.78,56.78,0,0,0,232,110.35v35.3A56.78,56.78,0,0,0,193.65,184ZM232,93.37A40.81,40.81,0,0,1,210.63,72H232ZM45.37,72A40.81,40.81,0,0,1,24,93.37V72ZM24,162.63A40.81,40.81,0,0,1,45.37,184H24ZM210.63,184A40.81,40.81,0,0,1,232,162.63V184Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
