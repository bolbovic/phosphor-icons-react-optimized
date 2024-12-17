var d = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (e, t, a) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, c = (e, t) => {
  for (var a in t || (t = {}))
    i.call(t, a) && o(e, a, t[a]);
  if (r)
    for (var a of r(t))
      p.call(t, a) && o(e, a, t[a]);
  return e;
};
var s = (e, t) => {
  var a = {};
  for (var m in e)
    i.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && r)
    for (var m of r(e))
      t.indexOf(m) < 0 && p.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as n } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = n((m, a) => {
  var l = m, { children: e } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ f.createElement(A, c({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M148,148a20,20,0,1,1-20-20A20,20,0,0,1,148,148Zm84-20A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-68,20a36,36,0,0,0-36-36c-.61,0-1.22,0-1.82,0L142.87,84.1a8,8,0,0,0-13.74-8.2s-32.4,54.28-32.47,54.42A36,36,0,1,0,164,148Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
