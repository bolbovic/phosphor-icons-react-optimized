var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var Z = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    Z.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      i.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    Z.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && i.call(a, m) && (e[m] = a[m]);
  return e;
};
import L, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const d = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ L.createElement(s, p({ ref: e }, t), a, /* @__PURE__ */ L.createElement("path", { d: "M164,78a26,26,0,1,0-26-26A26,26,0,0,0,164,78Zm0-40a14,14,0,1,1-14,14A14,14,0,0,1,164,38Zm36,100a38,38,0,1,0,38,38A38,38,0,0,0,200,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,200,202ZM56,138a38,38,0,1,0,38,38A38,38,0,0,0,56,138Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,56,202Zm136-84H152a6,6,0,0,1-4.24-1.76L120,88.49,96.49,112l35.75,35.76A6,6,0,0,1,134,152v48a6,6,0,0,1-12,0V154.49L83.76,116.24a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,0L154.49,106H192a6,6,0,0,1,0,12Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
