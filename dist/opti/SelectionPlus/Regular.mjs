var v = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? v(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, p = (a, r) => {
  for (var e in r || (r = {}))
    Z.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      o.call(r, e) && V(a, e, r[e]);
  return a;
};
var h = (a, r) => {
  var e = {};
  for (var t in a)
    Z.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import l, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((t, e) => {
  var H = t, { children: a } = H, r = h(H, ["children"]);
  return /* @__PURE__ */ l.createElement(c, p({ ref: e }, r), a, /* @__PURE__ */ l.createElement("path", { d: "M152,40a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,40Zm-8,168H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM208,48V72a8,8,0,0,0,16,0V48a16,16,0,0,0-16-16H184a8,8,0,0,0,0,16Zm8,56a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V112A8,8,0,0,0,216,104ZM40,152a8,8,0,0,0,8-8V112a8,8,0,0,0-16,0v32A8,8,0,0,0,40,152Zm32,56H48V184a8,8,0,0,0-16,0v24a16,16,0,0,0,16,16H72a8,8,0,0,0,0-16ZM72,32H48A16,16,0,0,0,32,48V72a8,8,0,0,0,16,0V48H72a8,8,0,0,0,0-16ZM240,208H224V192a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
