var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var o in a)
    l.call(a, o) && t.indexOf(o) < 0 && (e[o] = a[o]);
  if (a != null && r)
    for (var o of r(a))
      t.indexOf(o) < 0 && p.call(a, o) && (e[o] = a[o]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((o, e) => {
  var m = o, { children: a } = m, t = V(m, ["children"]);
  return /* @__PURE__ */ f.createElement(L, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M225.92,122.11c-.1-.19-.19-.37-.3-.56L196,68.85V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32V68.87L30.38,121.55a5.12,5.12,0,0,0-.3.57,19.89,19.89,0,0,0,1.83,20.71c.09.13.18.25.28.37l86.44,108.29a12,12,0,0,0,18.75,0L223.81,143.2c.1-.12.19-.24.28-.37A19.91,19.91,0,0,0,225.92,122.11ZM172,36V60H84V36ZM128,144a10,10,0,1,1,10-10A10,10,0,0,1,128,144Zm12,65.74V165.81a34,34,0,1,0-24,0v43.92L52.83,130.59,79,84H177l26.19,46.59Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
