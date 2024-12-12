var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
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
import n from "../../lib/OptiBase.mjs";
const B = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M128,84A36,36,0,1,0,92,48,36,36,0,0,0,128,84Zm0-48a12,12,0,1,1-12,12A12,12,0,0,1,128,36Zm100,72a12,12,0,0,1-12,12H140v16.09L188.73,157A12,12,0,0,1,196,168v48a12,12,0,0,1-24,0V175.91l-41.67-17.86L56,224.92A12,12,0,0,1,40,207.08l76-68.42V120H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,108Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
