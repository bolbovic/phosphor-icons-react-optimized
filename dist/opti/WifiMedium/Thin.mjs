var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (r)
    for (var a of r(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && n.call(e, m) && (a[m] = e[m]);
  return a;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const Z = h((m, a) => {
  var o = m, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M136,204a8,8,0,1,1-8-8A8,8,0,0,1,136,204Zm66.48-78.09a120,120,0,0,0-149,0,4,4,0,0,0,5,6.27,112,112,0,0,1,139,0,4,4,0,0,0,5-6.27Zm-32.13,35.86a72,72,0,0,0-84.7,0,4,4,0,1,0,4.71,6.46,64,64,0,0,1,75.28,0,4,4,0,1,0,4.71-6.46Z" }));
});
Z.displayName = "Thin";
export {
  Z as Thin
};
