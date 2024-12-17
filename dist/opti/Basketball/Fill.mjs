var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
var Z = (a, A, e) => A in a ? H(a, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[A] = e, M = (a, A) => {
  for (var e in A || (A = {}))
    l.call(A, e) && Z(a, e, A[e]);
  if (r)
    for (var e of r(A))
      o.call(A, e) && Z(a, e, A[e]);
  return a;
};
var i = (a, A) => {
  var e = {};
  for (var t in a)
    l.call(a, t) && A.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      A.indexOf(t) < 0 && o.call(a, t) && (e[t] = a[t]);
  return e;
};
import p, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((t, e) => {
  var m = t, { children: a } = m, A = i(m, ["children"]);
  return /* @__PURE__ */ p.createElement(f, M({ ref: e }, A), a, /* @__PURE__ */ p.createElement("path", { d: "M63.6,46.39a103.48,103.48,0,0,1,52-21.65,4,4,0,0,1,4.45,4V120H95.7A103.77,103.77,0,0,0,63.38,52.44,4,4,0,0,1,63.6,46.39ZM46,64.07a103.51,103.51,0,0,0-21.29,51.46,4,4,0,0,0,4,4.47H79.63A87.86,87.86,0,0,0,51.89,63.59,4,4,0,0,0,46,64.07ZM192.4,46.39a103.48,103.48,0,0,0-52-21.65,4,4,0,0,0-4.45,4V120h24.3a103.77,103.77,0,0,1,32.32-67.56A4,4,0,0,0,192.4,46.39Zm38.86,69.14A103.51,103.51,0,0,0,210,64.07a4,4,0,0,0-5.86-.48A87.86,87.86,0,0,0,176.37,120h50.91A4,4,0,0,0,231.26,115.53ZM24.74,140.47A103.51,103.51,0,0,0,46,191.93a4,4,0,0,0,5.86.48A87.86,87.86,0,0,0,79.63,136H28.72A4,4,0,0,0,24.74,140.47ZM210,191.93a103.51,103.51,0,0,0,21.29-51.46,4,4,0,0,0-4-4.47H176.37a87.86,87.86,0,0,0,27.74,56.41A4,4,0,0,0,210,191.93ZM63.6,209.61a103.48,103.48,0,0,0,52,21.65,4,4,0,0,0,4.45-4V136H95.7a103.77,103.77,0,0,1-32.32,67.56A4,4,0,0,0,63.6,209.61ZM160.3,136H136v91.28a4,4,0,0,0,4.45,4,103.48,103.48,0,0,0,52-21.65,4,4,0,0,0,.22-6.05A103.77,103.77,0,0,1,160.3,136Z" }));
});
s.displayName = "Fill";
export {
  s as Fill
};
