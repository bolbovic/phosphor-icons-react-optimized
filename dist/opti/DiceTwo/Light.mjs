var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, c = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var f = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as Z } from "react";
import d from "../../lib/OptiBase.mjs";
const h = Z((m, e) => {
  var o = m, { children: a } = o, t = f(o, ["children"]);
  return /* @__PURE__ */ s.createElement(d, c({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M192,34H64A30,30,0,0,0,34,64V192a30,30,0,0,0,30,30H192a30,30,0,0,0,30-30V64A30,30,0,0,0,192,34Zm18,158a18,18,0,0,1-18,18H64a18,18,0,0,1-18-18V64A18,18,0,0,1,64,46H192a18,18,0,0,1,18,18Zm-92-84a10,10,0,1,1-10-10A10,10,0,0,1,118,108Zm40,40a10,10,0,1,1-10-10A10,10,0,0,1,158,148Z" }));
});
h.displayName = "Light";
export {
  h as Light
};
