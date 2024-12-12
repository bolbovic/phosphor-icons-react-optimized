var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import s, { forwardRef as h } from "react";
import A from "../../lib/OptiBase.mjs";
const C = h((m, e) => {
  var c = m, { children: a } = c, t = Z(c, ["children"]);
  return /* @__PURE__ */ s.createElement(A, V({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M92,106a26,26,0,1,0,26,26A26,26,0,0,0,92,106Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,92,146Zm72-40a26,26,0,1,0,26,26A26,26,0,0,0,164,106Zm0,40a14,14,0,1,1,14-14A14,14,0,0,1,164,146ZM128,18C71.76,18,26,62,26,116c0,33.77,18.3,65.31,48,83.15V216a14,14,0,0,0,14,14h80a14,14,0,0,0,14-14V199.15c29.7-17.84,48-49.38,48-83.15C230,62,184.24,18,128,18Zm45.09,172.44a6,6,0,0,0-3.09,5.25V216a2,2,0,0,1-2,2H150V192a6,6,0,0,0-12,0v26H118V192a6,6,0,0,0-12,0v26H88a2,2,0,0,1-2-2V195.69a6,6,0,0,0-3.09-5.25C55.21,175.09,38,146.56,38,116c0-47.42,40.37-86,90-86s90,38.58,90,86C218,146.56,200.79,175.09,173.09,190.44Z" }));
});
C.displayName = "Light";
export {
  C as Light
};
