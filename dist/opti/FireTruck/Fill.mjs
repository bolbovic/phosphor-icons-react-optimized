var p = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? p(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && r(a, e, t[e]);
  if (l)
    for (var e of l(t))
      V.call(t, e) && r(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && l)
    for (var H of l(a))
      t.indexOf(H) < 0 && V.call(a, H) && (e[H] = a[H]);
  return e;
};
import i, { forwardRef as M } from "react";
import c from "../../lib/OptiBase.mjs";
const f = M((H, e) => {
  var m = H, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ i.createElement(c, Z({ ref: e }, t), a, /* @__PURE__ */ i.createElement("path", { d: "M255.43,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-16,0v64H24a8,8,0,0,0-8,8v48a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.92,7.92,0,0,0,255.43,117ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm0-96V88h34.58l9.6,24ZM24,96a8,8,0,0,0,0,16H152a8,8,0,0,0,0-16H136V72h16a8,8,0,0,0,0-16H24a8,8,0,0,0,0,16H40V96ZM96,72h24V96H96ZM56,72H80V96H56Z" }));
});
f.displayName = "Fill";
export {
  f as Fill
};
