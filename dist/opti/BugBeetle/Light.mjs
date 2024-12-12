var f = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? f(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, h = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var L = (a, t) => {
  var e = {};
  for (var H in a)
    i.call(a, H) && t.indexOf(H) < 0 && (e[H] = a[H]);
  if (a != null && r)
    for (var H of r(a))
      t.indexOf(H) < 0 && p.call(a, H) && (e[H] = a[H]);
  return e;
};
import c, { forwardRef as l } from "react";
import s from "../../lib/OptiBase.mjs";
const v = l((H, e) => {
  var m = H, { children: a } = m, t = L(m, ["children"]);
  return /* @__PURE__ */ c.createElement(s, h({ ref: e }, t), a, /* @__PURE__ */ c.createElement("path", { d: "M206,150h18a6,6,0,0,0,0-12H206V118h18a6,6,0,0,0,0-12H205.75a77.81,77.81,0,0,0-22.38-48.88l20.87-20.88a6,6,0,1,0-8.48-8.48L174.27,49.25a77.8,77.8,0,0,0-92.53,0L60.24,27.76a6,6,0,0,0-8.48,8.48L72.64,57.12A77.76,77.76,0,0,0,50.25,106H32a6,6,0,0,0,0,12H50v20H32a6,6,0,0,0,0,12H50v10a78.6,78.6,0,0,0,.66,10H32a6,6,0,0,0,0,12H53.18a78,78,0,0,0,149.64,0H224a6,6,0,0,0,0-12H205.34a78.6,78.6,0,0,0,.66-10ZM128,46a66.07,66.07,0,0,1,65.71,60H62.29A66.07,66.07,0,0,1,128,46Zm6,179.71V144a6,6,0,0,0-12,0v81.71A66.07,66.07,0,0,1,62,160V118H194v42A66.07,66.07,0,0,1,134,225.71Z" }));
});
v.displayName = "Light";
export {
  v as Light
};
