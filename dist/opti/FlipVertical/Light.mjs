var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((m, e) => {
  var o = m, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M56,118H216a14,14,0,0,0,5.46-26.9l-.11,0-159.95-64A14,14,0,0,0,42,40v64A14,14,0,0,0,56,118ZM54,40a2,2,0,0,1,2-2,2,2,0,0,1,.79.16l.11.05,159.92,64A2,2,0,0,1,216,106H56a2,2,0,0,1-2-2Zm162,98H56a14,14,0,0,0-14,14v64a14,14,0,0,0,19.39,12.92l160-64,.11-.05A14,14,0,0,0,216,138Zm.82,15.83-159.92,64-.11.05A2,2,0,0,1,54,216V152a2,2,0,0,1,2-2H216a2,2,0,0,1,.82,3.83Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
