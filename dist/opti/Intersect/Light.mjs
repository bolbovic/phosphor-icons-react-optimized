var l = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? l(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import L from "../../lib/OptiBase.mjs";
const d = s((m, e) => {
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ f.createElement(L, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M172.91,83.09a78,78,0,1,0-89.82,89.82,78,78,0,1,0,89.82-89.82ZM30,96A66,66,0,0,1,160.49,82H160a78.09,78.09,0,0,0-78,78c0,.17,0,.33,0,.49A66.1,66.1,0,0,1,30,96Zm64,64a65.62,65.62,0,0,1,6-27.49L123.49,156A65.62,65.62,0,0,1,96,162c-.65,0-1.3,0-2-.05C94,161.3,94,160.65,94,160Zm40.23-10.25-28-28a66.47,66.47,0,0,1,15.52-15.52l28,28A66.47,66.47,0,0,1,134.23,149.75ZM162,96a65.62,65.62,0,0,1-6,27.49L132.51,100A65.62,65.62,0,0,1,160,94c.65,0,1.3,0,1.95,0C162,94.7,162,95.35,162,96Zm-2,130a66.1,66.1,0,0,1-64.49-52H96a78.09,78.09,0,0,0,78-78c0-.17,0-.33,0-.49A66,66,0,0,1,160,226Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
