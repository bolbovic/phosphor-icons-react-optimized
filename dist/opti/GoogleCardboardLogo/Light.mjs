var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var A = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && A(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && A(a, e, t[e]);
  return a;
};
var l = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import H, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = l(o, ["children"]);
  return /* @__PURE__ */ H.createElement(h, Z({ ref: e }, t), a, /* @__PURE__ */ H.createElement("path", { d: "M224,50H32A14,14,0,0,0,18,64V192a14,14,0,0,0,14,14H96a6,6,0,0,0,4.24-1.76l26.35-26.34a2,2,0,0,1,2.82,0l26.35,26.34A6,6,0,0,0,160,206h64a14,14,0,0,0,14-14V64A14,14,0,0,0,224,50Zm2,142a2,2,0,0,1-2,2H162.49L137.9,169.42a14,14,0,0,0-19.8,0L93.51,194H32a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H224a2,2,0,0,1,2,2ZM80,98a30,30,0,1,0,30,30A30,30,0,0,0,80,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,80,146Zm96-48a30,30,0,1,0,30,30A30,30,0,0,0,176,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,176,146Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
