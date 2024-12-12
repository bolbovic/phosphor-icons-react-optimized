var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var l in a)
    i.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && m)
    for (var l of m(a))
      t.indexOf(l) < 0 && p.call(a, l) && (e[l] = a[l]);
  return e;
};
import A, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((l, e) => {
  var r = l, { children: a } = r, t = Z(r, ["children"]);
  return /* @__PURE__ */ A.createElement(h, H({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56.84,75.58a8,8,0,0,1,3.58-10.74l16-8A8,8,0,0,1,88,64v48a8,8,0,0,1-16,0V76.94l-4.42,2.22A8,8,0,0,1,56.84,75.58ZM92,180a8,8,0,0,1,0,16H68a8,8,0,0,1-6.4-12.8l21.67-28.89A3.92,3.92,0,0,0,84,152a4,4,0,0,0-7.77-1.33,8,8,0,0,1-15.09-5.34,20,20,0,1,1,35,18.53L84,180Zm100,4H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
