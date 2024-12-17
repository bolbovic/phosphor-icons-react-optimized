var s = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var A = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
var o = (a, e, l) => e in a ? s(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, p = (a, e) => {
  for (var l in e || (e = {}))
    A.call(e, l) && o(a, l, e[l]);
  if (r)
    for (var l of r(e))
      i.call(e, l) && o(a, l, e[l]);
  return a;
};
var c = (a, e) => {
  var l = {};
  for (var t in a)
    A.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && r)
    for (var t of r(a))
      e.indexOf(t) < 0 && i.call(a, t) && (l[t] = a[t]);
  return l;
};
import f, { forwardRef as d } from "react";
import n from "../../lib/OptiBase.mjs";
const Z = d((t, l) => {
  var m = t, { children: a } = m, e = c(m, ["children"]);
  return /* @__PURE__ */ f.createElement(n, p({ ref: l }, e), a, /* @__PURE__ */ f.createElement("path", { d: "M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
