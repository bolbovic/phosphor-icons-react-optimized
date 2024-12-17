var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      A.call(t, e) && l(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(V, d({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M192,12H104A20,20,0,0,0,84,32v75L46.43,144.6a62.91,62.91,0,1,0,89,89l68.4-68.4a27.81,27.81,0,0,0,8.2-19.8V32A20,20,0,0,0,192,12Zm-4,24V52H108V36ZM118.43,216.6a38.91,38.91,0,1,1-55-55l41.09-41.08A12,12,0,0,0,108,112V76h80v25.21A60.09,60.09,0,0,0,140,160a59.37,59.37,0,0,0,7,28.07Zm68.4-68.4-21.51,21.51A36.06,36.06,0,0,1,188,126.06v19.31A4,4,0,0,1,186.83,148.2Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
