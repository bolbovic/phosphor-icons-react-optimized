var f = Object.defineProperty;
var A = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, e, m) => e in a ? f(a, e, { enumerable: !0, configurable: !0, writable: !0, value: m }) : a[e] = m, d = (a, e) => {
  for (var m in e || (e = {}))
    r.call(e, m) && o(a, m, e[m]);
  if (A)
    for (var m of A(e))
      p.call(e, m) && o(a, m, e[m]);
  return a;
};
var l = (a, e) => {
  var m = {};
  for (var t in a)
    r.call(a, t) && e.indexOf(t) < 0 && (m[t] = a[t]);
  if (a != null && A)
    for (var t of A(a))
      e.indexOf(t) < 0 && p.call(a, t) && (m[t] = a[t]);
  return m;
};
import c, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, m) => {
  var Z = t, { children: a } = Z, e = l(Z, ["children"]);
  return /* @__PURE__ */ c.createElement(s, d({ ref: m }, e), a, /* @__PURE__ */ c.createElement("path", { d: "M84,48A20,20,0,1,1,64,28,20,20,0,0,1,84,48Zm44-20a20,20,0,1,0,20,20A20,20,0,0,0,128,28Zm64,40a20,20,0,1,0-20-20A20,20,0,0,0,192,68ZM64,84a20,20,0,1,0,20,20A20,20,0,0,0,64,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,84Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,192,84ZM64,140a20,20,0,1,0,20,20A20,20,0,0,0,64,140Zm64,0a20,20,0,1,0,20,20A20,20,0,0,0,128,140Zm0,56a20,20,0,1,0,20,20A20,20,0,0,0,128,196Zm64-56a20,20,0,1,0,20,20A20,20,0,0,0,192,140Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
