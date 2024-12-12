var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      H.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ v.createElement(h, V({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M232,164H196V88.09a67.81,67.81,0,0,0,34.5,31,4,4,0,1,0,3-7.42A59.77,59.77,0,0,1,196,56a4,4,0,0,0-8,0A60,60,0,0,1,68,56a4,4,0,0,0-8,0,59.77,59.77,0,0,1-37.5,55.64,4,4,0,0,0,3,7.42,67.81,67.81,0,0,0,34.5-31V164H24a4,4,0,0,0,0,8H60v28a4,4,0,0,0,8,0V172H188v28a4,4,0,0,0,8,0V172h36a4,4,0,0,0,0-8Zm-84-43v43H108V121a68,68,0,0,0,40,0ZM68,88a68.43,68.43,0,0,0,32,30v46H68Zm88,76V118a68.43,68.43,0,0,0,32-30v76Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
