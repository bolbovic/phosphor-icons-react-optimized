var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var c = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, s = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && c(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && c(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as h } from "react";
import d from "../../lib/OptiBase.mjs";
const l = h((m, e) => {
  var o = m, { children: a } = o, t = A(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(d, s({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M200,114a46.18,46.18,0,0,0-43.35,30.59,30,30,0,0,0-4.65-.37c-16.54,0-30,13.86-30,30.89S135.46,206,152,206h48a46,46,0,0,0,0-92Zm0,80H152c-9.93,0-18-8.47-18-18.89s8.07-18.89,18-18.89a17.12,17.12,0,0,1,6.53,1.28,6,6,0,0,0,8.16-4.35A34,34,0,1,1,200,194ZM22,160v16a6,6,0,0,1-12,0V160A102,102,0,0,1,183.11,86.87a6,6,0,1,1-8.37,8.61A90,90,0,0,0,22,160Zm90-58a58.07,58.07,0,0,0-58,58v16a6,6,0,0,1-12,0V160a70,70,0,0,1,111.42-56.43,6,6,0,1,1-7.11,9.66A57.5,57.5,0,0,0,112,102Zm6,32.7a26.59,26.59,0,0,0-6-.7,26,26,0,0,0-26,26v16a6,6,0,0,1-12,0V160a38,38,0,0,1,46.81-37A6,6,0,1,1,118,134.7Z" }));
});
l.displayName = "Light";
export {
  l as Light
};
