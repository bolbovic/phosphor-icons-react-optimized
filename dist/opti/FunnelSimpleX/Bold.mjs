var i = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      d.call(t, e) && r(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    p.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && d.call(a, l) && (e[l] = a[l]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const Z = s((l, e) => {
  var o = l, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(L, H({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M192,148H64a12,12,0,0,1,0-24H192a12,12,0,0,1,0,24Zm40-72H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM128,172H104a12,12,0,0,0,0,24h24a12,12,0,0,0,0-24Zm96.49-4.49a12,12,0,0,0-17,0L192,183l-15.51-15.52a12,12,0,0,0-17,17L175,200l-15.52,15.51a12,12,0,0,0,17,17L192,217l15.51,15.52a12,12,0,0,0,17-17L209,200l15.52-15.51A12,12,0,0,0,224.49,167.51Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
