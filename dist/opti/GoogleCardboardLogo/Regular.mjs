var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, Z = (a, t) => {
  for (var e in t || (t = {}))
    A.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    A.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as c } from "react";
import d from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var l = m, { children: a } = l, t = f(l, ["children"]);
  return /* @__PURE__ */ s.createElement(d, Z({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H163.31l-24-24a16,16,0,0,0-22.62,0l-24,24H32V64H224ZM80,160a32,32,0,1,0-32-32A32,32,0,0,0,80,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,80,112Zm96,48a32,32,0,1,0-32-32A32,32,0,0,0,176,160Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,176,112Z" }));
});
i.displayName = "Regular";
export {
  i as Regular,
  i as default
};
