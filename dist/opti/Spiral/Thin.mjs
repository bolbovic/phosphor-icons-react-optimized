var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && i(e, a, t[a]);
  if (m)
    for (var a of m(t))
      n.call(t, a) && i(e, a, t[a]);
  return e;
};
var f = (e, t) => {
  var a = {};
  for (var r in e)
    p.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
  if (e != null && m)
    for (var r of m(e))
      t.indexOf(r) < 0 && n.call(e, r) && (a[r] = e[r]);
  return a;
};
import s, { forwardRef as h } from "react";
import l from "../../lib/OptiBase.mjs";
const A = h((r, a) => {
  var o = r, { children: e } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(l, c({ ref: a }, t), e, /* @__PURE__ */ s.createElement("path", { d: "M244,144a4,4,0,0,1-8,0A100.11,100.11,0,0,0,136,44a92.1,92.1,0,0,0-92,92,84.09,84.09,0,0,0,84,84,76.08,76.08,0,0,0,76-76,68.07,68.07,0,0,0-68-68,60.07,60.07,0,0,0-60,60,52.06,52.06,0,0,0,52,52,44.05,44.05,0,0,0,44-44,36,36,0,0,0-36-36,28,28,0,0,0-28,28,20,20,0,0,0,20,20,12,12,0,0,0,12-12,4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12,20,20,0,0,1-20,20,28,28,0,0,1-28-28,36,36,0,0,1,36-36,44.05,44.05,0,0,1,44,44,52.06,52.06,0,0,1-52,52,60.07,60.07,0,0,1-60-60,68.07,68.07,0,0,1,68-68,76.08,76.08,0,0,1,76,76,84.09,84.09,0,0,1-84,84,92.1,92.1,0,0,1-92-92A100.11,100.11,0,0,1,136,36,108.12,108.12,0,0,1,244,144Z" }));
});
A.displayName = "Thin";
export {
  A as Thin
};
