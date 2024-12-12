var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var l in a)
    A.call(a, l) && t.indexOf(l) < 0 && (e[l] = a[l]);
  if (a != null && r)
    for (var l of r(a))
      t.indexOf(l) < 0 && i.call(a, l) && (e[l] = a[l]);
  return e;
};
import Z, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const d = s((l, e) => {
  var m = l, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ Z.createElement(M, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M227.25,64.8l-5.92-3.41a22,22,0,0,0,0-10.78l5.92-3.41a6,6,0,0,0-6-10.4l-5.93,3.43A22,22,0,0,0,206,34.84V28a6,6,0,0,0-12,0v6.84a22,22,0,0,0-9.32,5.39l-5.93-3.43a6,6,0,0,0-6,10.4l5.92,3.41a22,22,0,0,0,0,10.78l-5.92,3.41a6,6,0,0,0,6,10.4l5.93-3.43A22,22,0,0,0,194,77.16V84a6,6,0,0,0,12,0V77.16a22,22,0,0,0,9.32-5.39l5.93,3.43a6,6,0,0,0,6-10.4ZM200,66a10,10,0,1,1,10-10A10,10,0,0,1,200,66Zm21.68,40.08a6,6,0,0,0-4.92,6.91A91.76,91.76,0,0,1,218,128a89.65,89.65,0,0,1-24.49,61.64,77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38A89.95,89.95,0,0,1,128,38a91.66,91.66,0,0,1,15,1.24,6,6,0,1,0,2-11.83,102,102,0,1,0,50,177.44c.65,1.36,1.68,0,2.34-2.11A102,102,0,0,0,228.59,111,6,6,0,0,0,221.68,106.08ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
