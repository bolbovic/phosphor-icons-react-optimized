var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && h(a, e, t[e]);
  if (r)
    for (var e of r(t))
      p.call(t, e) && h(a, e, t[e]);
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
import l, { forwardRef as f } from "react";
import s from "../../lib/OptiBase.mjs";
const H = f((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ l.createElement(s, A({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M160,34h-8a14,14,0,0,0-14,14v58H53.52A38.05,38.05,0,0,0,16,74a6,6,0,0,0,0,12,26,26,0,0,1,26,26,78.09,78.09,0,0,0,78,78h40a78,78,0,0,0,0-156Zm65.71,72H161.1l47.82-38.25A65.66,65.66,0,0,1,225.71,106ZM152,46h8a65.67,65.67,0,0,1,40,13.53l-50,40V48A2,2,0,0,1,152,46Zm8,132H120a66.09,66.09,0,0,1-65.73-60H225.73A66.09,66.09,0,0,1,160,178Zm-58,46a14,14,0,1,1-14-14A14,14,0,0,1,102,224Zm104,0a14,14,0,1,1-14-14A14,14,0,0,1,206,224Z" }));
});
H.displayName = "Light";
export {
  H as Light
};
