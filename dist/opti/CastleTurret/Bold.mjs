var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
var H = (a, V, e) => V in a ? f(a, V, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[V] = e, p = (a, V) => {
  for (var e in V || (V = {}))
    l.call(V, e) && H(a, e, V[e]);
  if (o)
    for (var e of o(V))
      m.call(V, e) && H(a, e, V[e]);
  return a;
};
var d = (a, V) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && V.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      V.indexOf(t) < 0 && m.call(a, t) && (e[t] = a[t]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const A = i((t, e) => {
  var r = t, { children: a } = r, V = d(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, p({ ref: e }, V), a, /* @__PURE__ */ c.createElement("path", { d: "M216,212H204V117l10.14-10.14A19.86,19.86,0,0,0,220,92.69V48a20,20,0,0,0-20-20H56A20,20,0,0,0,36,48V92.69a19.86,19.86,0,0,0,5.86,14.14L52,117v95H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24ZM72.49,103.51,60,91V52H88V76a12,12,0,0,0,24,0V52h32V76a12,12,0,0,0,24,0V52h28V91l-12.49,12.48A12,12,0,0,0,180,112V212H164V168a36,36,0,0,0-72,0v44H76V112A12,12,0,0,0,72.49,103.51ZM140,212H116V168a12,12,0,0,1,24,0Z" }));
});
A.displayName = "Bold";
export {
  A as Bold
};
