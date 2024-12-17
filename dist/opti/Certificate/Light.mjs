var H = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, l = Object.prototype.propertyIsEnumerable;
var V = (a, t, e) => t in a ? H(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, p = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && V(a, e, t[e]);
  if (r)
    for (var e of r(t))
      l.call(t, e) && V(a, e, t[e]);
  return a;
};
var Z = (a, t) => {
  var e = {};
  for (var m in a)
    i.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && l.call(a, m) && (e[m] = a[m]);
  return e;
};
import h, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const s = c((m, e) => {
  var o = m, { children: a } = o, t = Z(o, ["children"]);
  return /* @__PURE__ */ h.createElement(f, p({ ref: e }, t), a, /* @__PURE__ */ h.createElement("path", { d: "M126,136a6,6,0,0,1-6,6H72a6,6,0,0,1,0-12h48A6,6,0,0,1,126,136Zm-6-38H72a6,6,0,0,0,0,12h48a6,6,0,0,0,0-12Zm110,62.62V224a6,6,0,0,1-9,5.21l-25-14.3-25,14.3a6,6,0,0,1-9-5.21V198H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14V87.38a49.91,49.91,0,0,1,0,73.24ZM196,86a38,38,0,1,0,38,38A38,38,0,0,0,196,86ZM162,186V160.62a50,50,0,0,1,56-81.51V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V184a2,2,0,0,0,2,2Zm56-17.11a49.91,49.91,0,0,1-44,0v44.77l19-10.87a6,6,0,0,1,6,0l19,10.87Z" }));
});
s.displayName = "Light";
export {
  s as Light
};
