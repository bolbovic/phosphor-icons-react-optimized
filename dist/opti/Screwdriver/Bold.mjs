var h = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var m = (a, e, l) => e in a ? h(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, d = (a, e) => {
  for (var l in e || (e = {}))
    p.call(e, l) && m(a, l, e[l]);
  if (o)
    for (var l of o(e))
      A.call(e, l) && m(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    p.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      e.indexOf(t) < 0 && A.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const n = i((t, l) => {
  var r = t, { children: a } = r, e = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(s, d({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M208.49,47.49a12,12,0,0,1,0,17l-52,52a12,12,0,0,1-17-17l52-52A12,12,0,0,1,208.49,47.49ZM252,58.41A54.09,54.09,0,0,1,236.06,96.9l-53.23,53.23A19.86,19.86,0,0,1,168.69,156H156v12.83a20.13,20.13,0,0,1-4.06,12.08,11.45,11.45,0,0,1-1.08,1.23l-8,8a20,20,0,0,1-28.28,0L98.7,174.26,24.49,248.48a12,12,0,1,1-17-17l74.22-74.22L65.86,141.41h0a20,20,0,0,1,0-28.29l8-8A11.56,11.56,0,0,1,75.1,104,20.08,20.08,0,0,1,87.17,100H100V87.3a19.89,19.89,0,0,1,5.86-14.15l53.23-53.23A54.43,54.43,0,0,1,252,58.41Zm-24,0a30.43,30.43,0,0,0-51.94-21.52L124,89v15a20,20,0,0,1-20,20H88.94l-3.28,3.28,21.52,21.53h0l21.53,21.52,3.28-3.28V152a20,20,0,0,1,20-20h15l52.06-52.07A30.24,30.24,0,0,0,228,58.41Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
