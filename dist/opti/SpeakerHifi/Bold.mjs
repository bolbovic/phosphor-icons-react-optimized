var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var d = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    d.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      l.call(t, e) && p(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    d.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((m, e) => {
  var r = m, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ c.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M192,20H64A20,20,0,0,0,44,40V216a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V40A20,20,0,0,0,192,20Zm-4,192H68V44H188ZM112,76a16,16,0,1,1,16,16A16,16,0,0,1,112,76Zm16,120a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,196Zm0-64a20,20,0,1,1-20,20A20,20,0,0,1,128,132Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
