var h = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? h(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, n = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (V)
    for (var e of V(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && V)
    for (var r of V(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const H = l((r, e) => {
  var m = r, { children: a } = m, t = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(s, n({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M224,164a20,20,0,0,1-20-20V64a52,52,0,0,0-104,0V76H76.53a12.06,12.06,0,0,0-10.29,5.83L45.71,116A12,12,0,0,0,44,122.22V216a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12V122.22a12,12,0,0,0-1.71-6.18L141.76,81.83A12.06,12.06,0,0,0,131.47,76H108V64a44,44,0,0,1,88,0v80a28,28,0,0,0,28,28,4,4,0,0,0,0-8ZM131.47,84a4,4,0,0,1,3.43,1.94l20.53,34.22a4,4,0,0,1,.57,2.06V216a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V122.22a4,4,0,0,1,.57-2.06L73.1,85.94A4,4,0,0,1,76.53,84H100v52a4,4,0,0,0,8,0V84Z" }));
});
H.displayName = "Thin";
export {
  H as Thin
};
