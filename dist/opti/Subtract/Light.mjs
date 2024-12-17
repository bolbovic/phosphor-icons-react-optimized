var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && i(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import c, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const h = s((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ c.createElement(d, A({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M172.91,83.08a78,78,0,1,0-89.83,89.83,78,78,0,1,0,89.83-89.83ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.34,0-.51A65.8,65.8,0,0,1,226,160Zm-79.29-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69ZM30,96a66,66,0,1,1,66,66A66.08,66.08,0,0,1,30,96Zm65.49,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76A65.87,65.87,0,0,1,95.49,174Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
