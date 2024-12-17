var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? s(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, c = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var f = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as h } from "react";
import n from "../../lib/OptiBase.mjs";
const B = h((t, e) => {
  var r = t, { children: a } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(n, c({ ref: e }, l), a, /* @__PURE__ */ i.createElement("path", { d: "M208.49,224.49l-24,24a12,12,0,0,1-17-17L171,228H80a28,28,0,0,1-28-28V108a12,12,0,0,1,24,0v92a4,4,0,0,0,4,4h91l-3.52-3.51a12,12,0,0,1,17-17l24,24A12,12,0,0,1,208.49,224.49ZM80,76a12,12,0,0,0,8.49-20.49L85,52h91a4,4,0,0,1,4,4v92a12,12,0,0,0,24,0V56a28,28,0,0,0-28-28H85l3.52-3.52a12,12,0,0,0-17-17l-24,24a12,12,0,0,0,0,17l24,24A12,12,0,0,0,80,76Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
