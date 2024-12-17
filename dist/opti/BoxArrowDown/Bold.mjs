var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, V = (a, l) => {
  for (var e in l || (l = {}))
    p.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      d.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    p.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && d.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const H = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, V({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M226.73,66.63l-16-32A12,12,0,0,0,200,28H56a12,12,0,0,0-10.73,6.63l-16,32A12,12,0,0,0,28,72V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V72A12,12,0,0,0,226.73,66.63ZM192.58,52l6,12H57.42l6-12ZM52,204V88H204V204Zm116.49-64.49a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,151V112a12,12,0,0,1,24,0v39l11.51-11.52A12,12,0,0,1,168.49,139.51Z" }));
});
H.displayName = "Bold";
export {
  H as Bold
};
