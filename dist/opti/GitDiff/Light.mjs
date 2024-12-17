var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, L = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (m)
    for (var e of m(t))
      v.call(t, e) && i(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    p.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && v.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const A = l((r, e) => {
  var o = r, { children: a } = o, t = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, L({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M112,154a6,6,0,0,0-6,6v33.52L64.93,152.44A9.93,9.93,0,0,1,62,145.37v-52a30,30,0,1,0-12,0v52a21.88,21.88,0,0,0,6.44,15.56L97.52,202H64a6,6,0,0,0,0,12h48a6,6,0,0,0,6-6V160A6,6,0,0,0,112,154ZM38,64A18,18,0,1,1,56,82,18,18,0,0,1,38,64Zm168,98.6v-52a21.88,21.88,0,0,0-6.44-15.56L158.48,54H192a6,6,0,0,0,0-12H144a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l41.07,41.08a9.93,9.93,0,0,1,2.93,7.07v52a30,30,0,1,0,12,0ZM200,210a18,18,0,1,1,18-18A18,18,0,0,1,200,210Z" }));
});
A.displayName = "Light";
export {
  A as Light
};
