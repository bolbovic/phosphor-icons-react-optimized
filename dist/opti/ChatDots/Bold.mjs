var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import H from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(H, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M88,128a16,16,0,1,1,16,16A16,16,0,0,1,88,128Zm64,16a16,16,0,1,0-16-16A16,16,0,0,0,152,144Zm84-80V192a20,20,0,0,1-20,20H84.47L53,239.17l-.12.11A19.91,19.91,0,0,1,40.05,244a20.14,20.14,0,0,1-8.49-1.9A19.82,19.82,0,0,1,20,224V64A20,20,0,0,1,40,44H216A20,20,0,0,1,236,64Zm-24,4H44V215.23l28.16-24.32A11.93,11.93,0,0,1,80,188H212Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
