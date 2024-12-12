var M = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var r = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? M(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, o = (a, t) => {
  for (var e in t || (t = {}))
    r.call(t, e) && Z(a, e, t[e]);
  if (l)
    for (var e of l(t))
      c.call(t, e) && Z(a, e, t[e]);
  return a;
};
var i = (a, t) => {
  var e = {};
  for (var m in a)
    r.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && l)
    for (var m of l(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import p, { forwardRef as L } from "react";
import f from "../../lib/OptiBase.mjs";
const s = L((m, e) => {
  var A = m, { children: a } = A, t = i(A, ["children"]);
  return /* @__PURE__ */ p.createElement(f, o({ ref: e }, t), a, /* @__PURE__ */ p.createElement("path", { d: "M172.91,83.09a78,78,0,1,0-89.82,89.82,78,78,0,1,0,89.82-89.82ZM226,160a65.31,65.31,0,0,1-.62,8.9l-53.76-53.77A77.84,77.84,0,0,0,174,96c0-.17,0-.33,0-.49A66.1,66.1,0,0,1,226,160ZM45.31,53.79l55.5,55.5a77.86,77.86,0,0,0-12,19L34,73.48A66,66,0,0,1,45.31,53.79ZM73.48,34l54.8,54.81a77.86,77.86,0,0,0-19,12l-55.5-55.5A66,66,0,0,1,73.48,34ZM94,160a66.08,66.08,0,0,1,66-66c.65,0,1.3,0,1.95,0,0,.65.05,1.3.05,2a66.08,66.08,0,0,1-66,66c-.65,0-1.3,0-2-.05C94,161.3,94,160.65,94,160Zm52.71-4.81,55.5,55.5A66,66,0,0,1,182.52,222l-54.8-54.81A77.86,77.86,0,0,0,146.71,155.19Zm8.48-8.48a77.86,77.86,0,0,0,12-19L222,182.52a66,66,0,0,1-11.35,19.69Zm5.3-64.7H160a77.84,77.84,0,0,0-19.13,2.38L87.1,30.62A65.31,65.31,0,0,1,96,30,66.1,66.1,0,0,1,160.49,82ZM30,96a65.31,65.31,0,0,1,.62-8.9l53.76,53.77A77.84,77.84,0,0,0,82,160c0,.17,0,.33,0,.49A66.1,66.1,0,0,1,30,96Zm65.51,78H96a77.84,77.84,0,0,0,19.13-2.38l53.77,53.76a65.31,65.31,0,0,1-8.9.62A66.1,66.1,0,0,1,95.51,174Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
