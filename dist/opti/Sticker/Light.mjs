var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var o = r, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ f.createElement(l, c({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M168,34H88A54.06,54.06,0,0,0,34,88v80a54.06,54.06,0,0,0,54,54h48a5.86,5.86,0,0,0,1.9-.31c25.84-8.61,75.18-57.95,83.79-83.79A5.86,5.86,0,0,0,222,136V88A54.06,54.06,0,0,0,168,34ZM46,168V88A42,42,0,0,1,88,46h80a42,42,0,0,1,42,42v42H184a54.06,54.06,0,0,0-54,54v26H88A42,42,0,0,1,46,168Zm96,38.67V184a42,42,0,0,1,42-42h22.67C194.84,163.1,163.1,194.84,142,206.67Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
