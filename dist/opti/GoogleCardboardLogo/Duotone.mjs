var n = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var Z = (a, t, e) => t in a ? n(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    l.call(t, e) && Z(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && Z(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    l.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import r, { forwardRef as i } from "react";
import V from "../../lib/OptiBase.mjs";
const d = i((m, e) => {
  var A = m, { children: a } = A, t = c(A, ["children"]);
  return /* @__PURE__ */ r.createElement(V, H({ ref: e }, t), a, /* @__PURE__ */ r.createElement(
    "path",
    {
      d: "M224,56H32a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H96l26.34-26.34a8,8,0,0,1,11.32,0L160,200h64a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56ZM80,152a24,24,0,1,1,24-24A24,24,0,0,1,80,152Zm96,0a24,24,0,1,1,24-24A24,24,0,0,1,176,152Z",
      opacity: "0.2"
    }
  ), /* @__PURE__ */ r.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z" }));
});
d.displayName = "Duotone";
export {
  d as Duotone
};
