var H = Object.defineProperty;
var h = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, i = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && o(a, e, t[e]);
  if (h)
    for (var e of h(t))
      c.call(t, e) && o(a, e, t[e]);
  return a;
};
var p = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && h)
    for (var m of h(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import v, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const f = s((m, e) => {
  var r = m, { children: a } = r, t = p(r, ["children"]);
  return /* @__PURE__ */ v.createElement(Z, i({ ref: e }, t), a, /* @__PURE__ */ v.createElement("path", { d: "M46,180c0,12.13,8.07,22,18,22a16.23,16.23,0,0,0,11.67-5.28,6,6,0,0,1,8.66,8.3A28.06,28.06,0,0,1,64,214c-16.54,0-30-15.25-30-34s13.46-34,30-34a28.06,28.06,0,0,1,20.33,9,6,6,0,0,1-8.66,8.3A16.23,16.23,0,0,0,64,158C54.07,158,46,167.87,46,180Zm-4-68V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0ZM158,82h35.52L158,46.48Zm-10,92H134V160a6,6,0,0,0-12,0v14H108a6,6,0,0,0,0,12h14v14a6,6,0,0,0,12,0V186h14a6,6,0,0,0,0-12Zm68,0H202V160a6,6,0,0,0-12,0v14H176a6,6,0,0,0,0,12h14v14a6,6,0,0,0,12,0V186h14a6,6,0,0,0,0-12Z" }));
});
f.displayName = "Light";
export {
  f as Light
};
