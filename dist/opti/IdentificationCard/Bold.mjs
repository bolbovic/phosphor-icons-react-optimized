var A = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, Z = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      Z.call(t, e) && p(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && Z.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = l(r, ["children"]);
  return /* @__PURE__ */ s.createElement(f, d({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M148,108a12,12,0,0,1,12-12h28a12,12,0,0,1,0,24H160A12,12,0,0,1,148,108Zm40,28H168a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24Zm48-80V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56Zm-24,4H44V196H212ZM58.28,159.37A43.82,43.82,0,0,1,71.53,142a36,36,0,1,1,56.94,0,43.84,43.84,0,0,1,13.26,17.37,12,12,0,0,1-22.15,9.26C116.48,161.19,108.42,156,100,156s-16.47,5.2-19.59,12.63a12,12,0,1,1-22.13-9.26ZM88,120a12,12,0,1,0,12-12A12,12,0,0,0,88,120Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
