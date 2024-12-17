var Z = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var m = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    o.call(t, e) && m(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && m(a, e, t[e]);
  return a;
};
var A = (a, t) => {
  var e = {};
  for (var H in a)
    o.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && i.call(a, H) && (e[H] = a[H]);
  return e;
};
import n, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const l = c((H, e) => {
  var h = H, { children: a } = h, t = A(h, ["children"]);
  return /* @__PURE__ */ n.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ n.createElement("path", { d: "M248,204h-8a12,12,0,0,1-12-12V160a12,12,0,0,1,12-12h8a4,4,0,0,0,0-8h-8a20,20,0,0,0-20,20v12H195.77a36.06,36.06,0,0,0-33.06-31.89l-37-88.73A12,12,0,0,0,114.67,44H24A12,12,0,0,0,12,56v97.41A36,36,0,0,0,40,212H160a36,36,0,0,0,35.77-32H220v12a20,20,0,0,0,20,20h8a4,4,0,0,0,0-8ZM118.36,54.46,154,140H60V52h54.67A4,4,0,0,1,118.36,54.46ZM24,52H52v88H40a35.76,35.76,0,0,0-20,6.08V56A4,4,0,0,1,24,52ZM160,204H40a28,28,0,0,1,0-56H160a28,28,0,0,1,0,56Zm4-28a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H160A4,4,0,0,1,164,176Z" }));
});
l.displayName = "Thin";
export {
  l as Thin
};
