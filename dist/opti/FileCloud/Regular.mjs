var d = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? d(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      f.call(t, e) && o(a, e, t[e]);
  return a;
};
var s = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && f.call(a, r) && (e[r] = a[r]);
  return e;
};
import c, { forwardRef as i } from "react";
import A from "../../lib/OptiBase.mjs";
const H = i((r, e) => {
  var l = r, { children: a } = l, t = s(l, ["children"]);
  return /* @__PURE__ */ c.createElement(A, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216H176a8,8,0,0,0,0,16h24a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM108,128a52,52,0,0,0-48,32,36,36,0,0,0,0,72h48a52,52,0,0,0,0-104Zm0,88H60a20,20,0,0,1-3.81-39.64,8,8,0,0,0,16,.36,38,38,0,0,1,1.06-6.09,7.56,7.56,0,0,0,.27-1A36,36,0,1,1,108,216Z" }));
});
H.displayName = "Regular";
export {
  H as Regular,
  H as default
};
