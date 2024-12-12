var A = Object.defineProperty;
var t = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, H, e) => H in a ? A(a, H, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[H] = e, o = (a, H) => {
  for (var e in H || (H = {}))
    Z.call(H, e) && V(a, e, H[e]);
  if (t)
    for (var e of t(H))
      l.call(H, e) && V(a, e, H[e]);
  return a;
};
var h = (a, H) => {
  var e = {};
  for (var r in a)
    Z.call(a, r) && H.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && t)
    for (var r of t(a))
      H.indexOf(r) < 0 && l.call(a, r) && (e[r] = a[r]);
  return e;
};
import p, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((r, e) => {
  var m = r, { children: a } = m, H = h(m, ["children"]);
  return /* @__PURE__ */ p.createElement(c, o({ ref: e }, H), a, /* @__PURE__ */ p.createElement("path", { d: "M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0V164.31A32.11,32.11,0,0,0,161,184H111a32,32,0,0,0-62,0H32V136a8,8,0,0,0-16,0v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM226.58,88l9.6,24H192V88ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32.06,32.06,0,0,0-31-24V128h48v56ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96Zm96,0H96V72h24ZM56,72H80V96H56Z" }));
});
f.displayName = "Regular";
export {
  f as Regular
};
