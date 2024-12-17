var i = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var c = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, l = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && c(e, a, t[a]);
  if (r)
    for (var a of r(t))
      d.call(t, a) && c(e, a, t[a]);
  return e;
};
var A = (e, t) => {
  var a = {};
  for (var o in e)
    p.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && r)
    for (var o of r(e))
      t.indexOf(o) < 0 && d.call(e, o) && (a[o] = e[o]);
  return a;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((o, a) => {
  var m = o, { children: e } = m, t = A(m, ["children"]);
  return /* @__PURE__ */ f.createElement(M, l({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M243.93,126.3A116.43,116.43,0,0,0,49,50.81a115.45,115.45,0,0,0-37,75.49A20,20,0,0,0,32,148h84v52a36,36,0,0,0,72,0,12,12,0,0,0-24,0,12,12,0,0,1-24,0V148h84a20,20,0,0,0,20-21.7ZM100.41,124c2.67-39.33,18.08-63.51,27.59-74.87,9.52,11.39,24.92,35.56,27.59,74.87ZM65.31,68.46A92,92,0,0,1,99,48.65C88.8,65.25,78.39,90.08,76.36,124H36.44A91.56,91.56,0,0,1,65.31,68.46ZM179.64,124c-2-33.92-12.44-58.75-22.65-75.35A92.19,92.19,0,0,1,219.56,124Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
