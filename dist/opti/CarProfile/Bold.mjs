var c = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var r = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && r(a, e, t[e]);
  if (m)
    for (var e of m(t))
      l.call(t, e) && r(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var H in a)
    A.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && m)
    for (var H of m(a))
      t.indexOf(H) < 0 && l.call(a, H) && (e[H] = a[H]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((H, e) => {
  var o = H, { children: a } = o, t = d(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, p({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M236,108H213L170.83,65.86A19.86,19.86,0,0,0,156.69,60H48.28a20,20,0,0,0-16.64,8.91L2,113.34A12,12,0,0,0,0,120v48a20,20,0,0,0,20,20H33.5a34,34,0,0,0,65,0h59a34,34,0,0,0,65,0H236a20,20,0,0,0,20-20V128A20,20,0,0,0,236,108ZM50.42,84H155l24,24H34.42ZM66,188a10,10,0,1,1,10-10A10,10,0,0,1,66,188Zm124,0a10,10,0,1,1,10-10A10,10,0,0,1,190,188Zm42-24H221A34,34,0,0,0,159,164H97A34,34,0,0,0,35,164H24V132H232Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
