var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var V = (a, r, e) => r in a ? c(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, h = (a, r) => {
  for (var e in r || (r = {}))
    o.call(r, e) && V(a, e, r[e]);
  if (m)
    for (var e of m(r))
      p.call(r, e) && V(a, e, r[e]);
  return a;
};
var l = (a, r) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((t, e) => {
  var H = t, { children: a } = H, r = l(H, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, h({ ref: e }, r), a, /* @__PURE__ */ Z.createElement("path", { d: "M128,32H104A16,16,0,0,0,88,48V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,128,32Zm0,176H104V48h24ZM200,32H176a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H176V48h24ZM72,128a8,8,0,0,1-8,8H48v16a8,8,0,0,1-16,0V136H16a8,8,0,0,1,0-16H32V104a8,8,0,0,1,16,0v16H64A8,8,0,0,1,72,128Z" }));
});
s.displayName = "Regular";
export {
  s as Regular
};
