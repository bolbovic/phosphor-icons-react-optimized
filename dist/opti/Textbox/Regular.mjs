var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, l = (a, r) => {
  for (var e in r || (r = {}))
    H.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      h.call(r, e) && p(a, e, r[e]);
  return a;
};
var v = (a, r) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && h.call(a, t) && (e[t] = a[t]);
  return e;
};
import V, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var o = t, { children: a } = o, r = v(o, ["children"]);
  return /* @__PURE__ */ V.createElement(i, l({ ref: e }, r), a, /* @__PURE__ */ V.createElement("path", { d: "M112,40a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v96a16,16,0,0,0,16,16h80v16a8,8,0,0,0,16,0V48A8,8,0,0,0,112,40ZM24,176V80h80v96ZM248,80v96a16,16,0,0,1-16,16H144a8,8,0,0,1,0-16h88V80H144a8,8,0,0,1,0-16h88A16,16,0,0,1,248,80ZM88,112a8,8,0,0,1-8,8H72v24a8,8,0,0,1-16,0V120H48a8,8,0,0,1,0-16H80A8,8,0,0,1,88,112Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
