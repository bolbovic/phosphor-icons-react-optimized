var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, A = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && m(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && m(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var l in e)
    p.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      t.indexOf(l) < 0 && d.call(e, l) && (a[l] = e[l]);
  return a;
};
import f, { forwardRef as s } from "react";
import n from "../../lib/OptiBase.mjs";
const B = s((l, a) => {
  var r = l, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(n, A({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z" }));
});
B.displayName = "Bold";
export {
  B as Bold
};
