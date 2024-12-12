var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, V({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M188,64V192a12,12,0,0,1-24,0V64a12,12,0,0,1,24,0Zm36-12a12,12,0,0,0-12,12V192a12,12,0,0,0,24,0V64A12,12,0,0,0,224,52Zm-76,76a19.71,19.71,0,0,1-9.19,16.71L50.63,200.87A19.91,19.91,0,0,1,20,184.15V71.85A19.91,19.91,0,0,1,50.63,55.13l88.18,56.16A19.71,19.71,0,0,1,148,128Zm-27.62,0L44,79.37v97.26Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
