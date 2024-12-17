var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, c, e) => c in a ? d(a, c, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[c] = e, n = (a, c) => {
  for (var e in c || (c = {}))
    i.call(c, e) && o(a, e, c[e]);
  if (r)
    for (var e of r(c))
      p.call(c, e) && o(a, e, c[e]);
  return a;
};
var f = (a, c) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && c.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      c.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const C = h((t, e) => {
  var m = t, { children: a } = m, c = f(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, n({ ref: e }, c), a, /* @__PURE__ */ s.createElement("path", { d: "M35.89,128C52,136.23,52,155.64,52,172c0,24.8,1.35,40,28,40a4,4,0,0,1,0,8c-36,0-36-26.61-36-48,0-24.8-1.35-40-28-40a4,4,0,0,1,0-8c26.65,0,28-15.2,28-40,0-21.39,0-48,36-48a4,4,0,0,1,0,8C53.35,44,52,59.2,52,84,52,100.36,52,119.77,35.89,128ZM240,124c-26.65,0-28-15.2-28-40,0-21.39,0-48-36-48a4,4,0,0,0,0,8c26.65,0,28,15.2,28,40,0,16.36,0,35.77,16.11,44C204,136.23,204,155.64,204,172c0,24.8-1.35,40-28,40a4,4,0,0,0,0,8c36,0,36-26.61,36-48,0-24.8,1.35-40,28-40a4,4,0,0,0,0-8Z" }));
});
C.displayName = "Thin";
export {
  C as Thin
};
