var h = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((m, e) => {
  var A = m, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ f.createElement(d, p({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M86,196a10,10,0,1,1-10-10A10,10,0,0,1,86,196Zm30,6a10,10,0,1,0,10,10A10,10,0,0,0,116,202Zm48-16a10,10,0,1,0,10,10A10,10,0,0,0,164,186ZM68,226a10,10,0,1,0,10,10A10,10,0,0,0,68,226Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,156,226ZM230,92a74.09,74.09,0,0,1-74,74H76A50,50,0,1,1,86.2,67,74.08,74.08,0,0,1,230,92Zm-12,0A62.06,62.06,0,0,0,94,88.35a6,6,0,0,1-12-.7,75.84,75.84,0,0,1,1.07-9A38,38,0,1,0,76,154h80A62.07,62.07,0,0,0,218,92Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
