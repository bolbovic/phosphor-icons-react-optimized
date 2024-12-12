var Z = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var A = (a, r, e) => r in a ? Z(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, o = (a, r) => {
  for (var e in r || (r = {}))
    V.call(r, e) && A(a, e, r[e]);
  if (m)
    for (var e of m(r))
      h.call(r, e) && A(a, e, r[e]);
  return a;
};
var p = (a, r) => {
  var e = {};
  for (var t in a)
    V.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import v, { forwardRef as H } from "react";
import c from "../../lib/OptiBase.mjs";
const f = H((t, e) => {
  var l = t, { children: a } = l, r = p(l, ["children"]);
  return /* @__PURE__ */ v.createElement(c, o({ ref: e }, r), a, /* @__PURE__ */ v.createElement("path", { d: "M224,96V208a8,8,0,0,1-16,0V96a56.06,56.06,0,0,0-56-56H104A56.06,56.06,0,0,0,48,96V208a8,8,0,0,1-16,0V96a72.08,72.08,0,0,1,72-72h48A72.08,72.08,0,0,1,224,96Zm-40,0v72a24,24,0,0,1-19.29,23.53l2.45,4.89a8,8,0,0,1-14.32,7.16L147.06,192H108.94l-5.78,11.58a8,8,0,0,1-14.32-7.16l2.45-4.89A24,24,0,0,1,72,168V96A24,24,0,0,1,96,72h64A24,24,0,0,1,184,96ZM88,96v48h80V96a8,8,0,0,0-8-8H96A8,8,0,0,0,88,96Zm32,64v16h16V160ZM96,176h8V160H88v8A8,8,0,0,0,96,176Zm72-8v-8H152v16h8A8,8,0,0,0,168,168Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
