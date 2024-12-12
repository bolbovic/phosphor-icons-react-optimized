var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var Z = (a, m, e) => m in a ? s(a, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[m] = e, p = (a, m) => {
  for (var e in m || (m = {}))
    o.call(m, e) && Z(a, e, m[e]);
  if (r)
    for (var e of r(m))
      i.call(m, e) && Z(a, e, m[e]);
  return a;
};
var c = (a, m) => {
  var e = {};
  for (var t in a)
    o.call(a, t) && m.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      m.indexOf(t) < 0 && i.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as d } from "react";
import h from "../../lib/OptiBase.mjs";
const l = d((t, e) => {
  var A = t, { children: a } = A, m = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(h, p({ ref: e }, m), a, /* @__PURE__ */ f.createElement("path", { d: "M70,60A10,10,0,1,1,60,50,10,10,0,0,1,70,60Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,50Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,70ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,118Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118ZM60,186a10,10,0,1,0,10,10A10,10,0,0,0,60,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,186Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,186Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
