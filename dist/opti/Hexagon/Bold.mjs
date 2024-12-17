var s = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, l, a) => l in e ? s(e, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[l] = a, c = (e, l) => {
  for (var a in l || (l = {}))
    p.call(l, a) && m(e, a, l[a]);
  if (o)
    for (var a of o(l))
      d.call(l, a) && m(e, a, l[a]);
  return e;
};
var f = (e, l) => {
  var a = {};
  for (var t in e)
    p.call(e, t) && l.indexOf(t) < 0 && (a[t] = e[t]);
  if (e != null && o)
    for (var t of o(e))
      l.indexOf(t) < 0 && d.call(e, t) && (a[t] = e[t]);
  return a;
};
import i, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const B = n((t, a) => {
  var r = t, { children: e } = r, l = f(r, ["children"]);
  return /* @__PURE__ */ i.createElement(A, c({ ref: a }, l), e, /* @__PURE__ */ i.createElement("path", { d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM212,173.44l-84,46-84-46V82.56l84-46,84,46Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
