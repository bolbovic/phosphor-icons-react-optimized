var f = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, r, a) => r in e ? f(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[r] = a, Z = (e, r) => {
  for (var a in r || (r = {}))
    A.call(r, a) && o(e, a, r[a]);
  if (m)
    for (var a of m(r))
      p.call(r, a) && o(e, a, r[a]);
  return e;
};
var M = (e, r) => {
  var a = {};
  for (var t in e)
    A.call(e, t) && r.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && m)
    for (var t of m(e))
      r.indexOf(t) < 0 && p.call(e, t) && (a[t] = e[t]);
  return a;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, a) => {
  var l = t, { children: e } = l, r = M(l, ["children"]);
  return /* @__PURE__ */ c.createElement(s, Z({ ref: a }, r), e, /* @__PURE__ */ c.createElement("path", { d: "M248,80H8a8,8,0,0,0-8,8,128,128,0,0,0,256,0A8,8,0,0,0,248,80ZM77.4,149.91l42.6-42.6V167.6A79.59,79.59,0,0,1,77.4,149.91ZM66.09,138.6A79.59,79.59,0,0,1,48.4,96h60.29ZM136,107.31l42.6,42.6A79.59,79.59,0,0,1,136,167.6Zm53.91,31.29L147.31,96H207.6A79.59,79.59,0,0,1,189.91,138.6ZM128,200A112.15,112.15,0,0,1,16.28,96H32.34a96,96,0,0,0,191.32,0h16.06A112.15,112.15,0,0,1,128,200Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
