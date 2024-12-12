var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var p = (a, r, e) => r in a ? s(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, c = (a, r) => {
  for (var e in r || (r = {}))
    l.call(r, e) && p(a, e, r[e]);
  if (m)
    for (var e of m(r))
      A.call(r, e) && p(a, e, r[e]);
  return a;
};
var f = (a, r) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && A.call(a, t) && (e[t] = a[t]);
  return e;
};
import i, { forwardRef as R } from "react";
import d from "../../lib/OptiBase.mjs";
const n = R((t, e) => {
  var o = t, { children: a } = o, r = f(o, ["children"]);
  return /* @__PURE__ */ i.createElement(d, c({ ref: e }, r), a, /* @__PURE__ */ i.createElement("path", { d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" }));
});
n.displayName = "Regular";
export {
  n as Regular
};
