var h = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable;
var l = (a, r, e) => r in a ? h(a, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[r] = e, H = (a, r) => {
  for (var e in r || (r = {}))
    p.call(r, e) && l(a, e, r[e]);
  if (m)
    for (var e of m(r))
      V.call(r, e) && l(a, e, r[e]);
  return a;
};
var c = (a, r) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && r.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && m)
    for (var t of m(a))
      r.indexOf(t) < 0 && V.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as i } from "react";
import s from "../../lib/OptiBase.mjs";
const R = i((t, e) => {
  var o = t, { children: a } = o, r = c(o, ["children"]);
  return /* @__PURE__ */ f.createElement(s, H({ ref: e }, r), a, /* @__PURE__ */ f.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-64h-8V80a8,8,0,0,0-14.31-4.91l-56,72A8,8,0,0,0,88,160h48v16a8,8,0,0,0,16,0V160h8a8,8,0,0,0,0-16Zm-24,0H104.36L136,103.32Z" }));
});
R.displayName = "Regular";
export {
  R as Regular
};
