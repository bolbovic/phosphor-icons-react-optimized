var d = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
var H = (m, a, e) => a in m ? d(m, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[a] = e, h = (m, a) => {
  for (var e in a || (a = {}))
    o.call(a, e) && H(m, e, a[e]);
  if (V)
    for (var e of V(a))
      r.call(a, e) && H(m, e, a[e]);
  return m;
};
var p = (m, a) => {
  var e = {};
  for (var t in m)
    o.call(m, t) && a.indexOf(t) < 0 && (e[t] = m[t]);
  if (m != null && V)
    for (var t of V(m))
      a.indexOf(t) < 0 && r.call(m, t) && (e[t] = m[t]);
  return e;
};
import v, { forwardRef as l } from "react";
import c from "../../lib/OptiBase.mjs";
const f = l((t, e) => {
  var Z = t, { children: m } = Z, a = p(Z, ["children"]);
  return /* @__PURE__ */ v.createElement(c, h({ ref: e }, a), m, /* @__PURE__ */ v.createElement("path", { d: "M216,36H40A20,20,0,0,0,20,56V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A20,20,0,0,0,216,36ZM44,100h72v56H44Zm96-24V60h24V76Zm-24,0H92V60h24Zm0,104v16H92V180Zm24,0h24v16H140Zm0-24V100h72v56Zm72-80H188V60h24ZM68,60V76H44V60ZM44,180H68v16H44Zm144,16V180h24v16Z" }));
});
f.displayName = "Bold";
export {
  f as Bold
};
