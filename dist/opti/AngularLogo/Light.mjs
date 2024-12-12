var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, l, e) => l in a ? h(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, L = (a, l) => {
  for (var e in l || (l = {}))
    i.call(l, e) && o(a, e, l[e]);
  if (m)
    for (var e of m(l))
      p.call(l, e) && o(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    i.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const d = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, L({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M226.31,66.46l-96-40a6.06,6.06,0,0,0-4.62,0l-96,40a6,6,0,0,0-3.64,6.33l16,120a6,6,0,0,0,3.27,4.58l80,40a6,6,0,0,0,5.36,0l80-40a6,6,0,0,0,3.27-4.58l16-120A6,6,0,0,0,226.31,66.46Zm-23.84,121.6L128,225.29,53.53,188.06l-15-112.29L128,38.5l89.44,37.27Zm-79.72-103-40,72a6,6,0,0,0,10.5,5.82L104.86,142h46.28l11.61,20.91A6,6,0,0,0,168,166a5.88,5.88,0,0,0,2.9-.76,6,6,0,0,0,2.34-8.15l-40-72a6,6,0,0,0-10.5,0ZM144.47,130H111.53L128,100.35Z" }));
});
d.displayName = "Light";
export {
  d as Light
};
