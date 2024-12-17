var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var r = (a, l, e) => l in a ? c(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && r(a, e, l[e]);
  if (m)
    for (var e of m(l))
      Z.call(l, e) && r(a, e, l[e]);
  return a;
};
var A = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && Z.call(a, t) && (e[t] = a[t]);
  return e;
};
import L, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const i = f((t, e) => {
  var o = t, { children: a } = o, l = A(o, ["children"]);
  return /* @__PURE__ */ L.createElement(h, d({ ref: e }, l), a, /* @__PURE__ */ L.createElement("path", { d: "M108,136a16,16,0,1,1-16-16A16,16,0,0,1,108,136Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,120Zm68.24,26.18a20.42,20.42,0,0,1-8.41,1.85,19.59,19.59,0,0,1-3.83-.39V184a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V147.63a19,19,0,0,1-3.85.39,20.31,20.31,0,0,1-8.39-1.84,19.71,19.71,0,0,1-11.4-21.9l16.42-88A20,20,0,0,1,53.29,20.59l.47.13,52,15.27h44.54l52-15.27.47-.13a20,20,0,0,1,24.51,15.72l16.42,88A19.71,19.71,0,0,1,232.24,146.18Zm-60-91.63L217,112.42,204.44,45.09ZM39,112.42,83.76,54.55l-32.2-9.46ZM196,184V124.48L146.11,60H109.89L60,124.48V184a20,20,0,0,0,20,20h36v-7l-12.48-12.49a12,12,0,0,1,17-17L128,175l7.51-7.52a12,12,0,0,1,17,17L140,197v7h36A20,20,0,0,0,196,184Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
