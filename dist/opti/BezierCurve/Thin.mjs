var A = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? A(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      n.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && n.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as H } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = H((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(Z, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M217.83,148.07A92.6,92.6,0,0,0,165.53,84H240a4,4,0,0,0,0-8H155.71a28,28,0,0,0-55.42,0H16a4,4,0,0,0,0,8H90.47a92.6,92.6,0,0,0-52.3,64.07,28,28,0,1,0,8.07.64,84.51,84.51,0,0,1,55-60.36,28,28,0,0,0,53.46,0,84.53,84.53,0,0,1,55,60.36,28,28,0,1,0,8.07-.64ZM60,176a20,20,0,1,1-20-20A20,20,0,0,1,60,176Zm68-76a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm88,96a20,20,0,1,1,20-20A20,20,0,0,1,216,196Z" }));
});
d.displayName = "Thin";
export {
  d as Thin
};
