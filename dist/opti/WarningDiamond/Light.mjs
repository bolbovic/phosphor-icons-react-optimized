var s = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (l)
    for (var e of l(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as L } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = L((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, h({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M122,136V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm6,26a10,10,0,1,0,10,10A10,10,0,0,0,128,162Zm110-34a13.82,13.82,0,0,1-4.09,9.86l-96,96.06a14,14,0,0,1-19.72,0h0l-96-96.06a13.93,13.93,0,0,1,0-19.72l96.05-96.06a14,14,0,0,1,19.72,0l96,96.06A13.82,13.82,0,0,1,238,128Zm-12,0a1.94,1.94,0,0,0-.57-1.38L129.38,30.56a2,2,0,0,0-2.76,0L30.57,126.62a2,2,0,0,0,0,2.76l96.05,96.06h0a2,2,0,0,0,2.76,0l96.05-96.06A1.94,1.94,0,0,0,226,128Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
