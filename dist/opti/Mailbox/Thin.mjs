var v = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? v(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var V = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var h = m, { children: a } = h, t = V(h, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M100,152a4,4,0,0,1-4,4H56a4,4,0,0,1,0-8H96A4,4,0,0,1,100,152Zm136-36v60a12,12,0,0,1-12,12H132v36a4,4,0,0,1-8,0V188H32a12,12,0,0,1-12-12V116A56.06,56.06,0,0,1,76,60h80V24a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H164V60h16A56.06,56.06,0,0,1,236,116ZM124,180V116a48,48,0,0,0-96,0v60a4,4,0,0,0,4,4Zm104-64a48.05,48.05,0,0,0-48-48H164v76a4,4,0,0,1-8,0V68H104.82A56,56,0,0,1,132,116v64h92a4,4,0,0,0,4-4Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
