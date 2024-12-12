var f = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, d = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      c.call(t, e) && l(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && c.call(a, m) && (e[m] = a[m]);
  return e;
};
import A, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const H = i((m, e) => {
  var r = m, { children: a } = r, t = h(r, ["children"]);
  return /* @__PURE__ */ A.createElement(s, d({ ref: e }, t), a, /* @__PURE__ */ A.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v84a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212H180a12,12,0,0,0,0,24h20a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160Zm-52,67a56,56,0,0,0-50.65,32.09A40,40,0,0,0,60,236h48a56,56,0,0,0,0-112Zm0,88H60a16,16,0,0,1-6.54-30.6,12,12,0,0,0,22.67-4.32,32.78,32.78,0,0,1,.92-5.3c.12-.36.22-.72.31-1.09A32,32,0,1,1,108,212Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
