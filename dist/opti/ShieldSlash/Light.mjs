var L = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? L(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, f = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (c)
    for (var e of c(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var h = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && c)
    for (var r of c(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import s, { forwardRef as d } from "react";
import l from "../../lib/OptiBase.mjs";
const n = d((r, e) => {
  var m = r, { children: a } = m, t = h(m, ["children"]);
  return /* @__PURE__ */ s.createElement(l, f({ ref: e }, t), a, /* @__PURE__ */ s.createElement("path", { d: "M52.44,36a6,6,0,0,0-9.63,7A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c1.36-.37,31.91-8.95,57.67-35.7L203.56,220a6,6,0,0,0,8.88-8.08ZM128,225.72a130.83,130.83,0,0,1-40.56-22.66C59.94,180.39,46,149.75,46,112V56a2,2,0,0,1,2-2h4.6L179.16,193.19A130.68,130.68,0,0,1,128,225.72ZM222,56v56c0,20.29-3.83,39.05-11.38,55.77a6,6,0,0,1-5.47,3.53,5.86,5.86,0,0,1-2.47-.54,6,6,0,0,1-3-7.93C206.53,147.67,210,130.57,210,112V56a2,2,0,0,0-2-2H98.52a6,6,0,1,1,0-12H208A14,14,0,0,1,222,56Z" }));
});
n.displayName = "Light";
export {
  n as Light
};
