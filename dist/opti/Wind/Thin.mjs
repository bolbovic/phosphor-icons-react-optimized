var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var H = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as s } from "react";
import d from "../../lib/OptiBase.mjs";
const l = s((r, e) => {
  var c = r, { children: a } = c, t = H(c, ["children"]);
  return /* @__PURE__ */ f.createElement(d, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M180,184a28,28,0,0,1-28,28c-12.09,0-23.76-7.83-27.75-18.61a4,4,0,1,1,7.5-2.78C134.58,198.24,143.28,204,152,204a20,20,0,0,0,0-40H40a4,4,0,0,1,0-8H152A28,28,0,0,1,180,184ZM148,72a28,28,0,0,0-28-28c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,0,0,7.5,2.78C102.58,57.76,111.28,52,120,52a20,20,0,0,1,0,40H24a4,4,0,0,0,0,8h96A28,28,0,0,0,148,72Zm60,4c-12.09,0-23.76,7.83-27.75,18.61a4,4,0,1,0,7.5,2.78C190.58,89.76,199.28,84,208,84a20,20,0,0,1,0,40H32a4,4,0,0,0,0,8H208a28,28,0,0,0,0-56Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
