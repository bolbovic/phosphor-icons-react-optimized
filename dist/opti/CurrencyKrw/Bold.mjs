var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var m = (a, l, e) => l in a ? i(a, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[l] = e, d = (a, l) => {
  for (var e in l || (l = {}))
    H.call(l, e) && m(a, e, l[e]);
  if (o)
    for (var e of o(l))
      p.call(l, e) && m(a, e, l[e]);
  return a;
};
var c = (a, l) => {
  var e = {};
  for (var t in a)
    H.call(a, t) && l.indexOf(t) < 0 && (e[t] = a[t]);
  if (a != null && o)
    for (var t of o(a))
      l.indexOf(t) < 0 && p.call(a, t) && (e[t] = a[t]);
  return e;
};
import f, { forwardRef as s } from "react";
import M from "../../lib/OptiBase.mjs";
const Z = s((t, e) => {
  var r = t, { children: a } = r, l = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(M, d({ ref: e }, l), a, /* @__PURE__ */ f.createElement("path", { d: "M240,124H223.83l19.29-47.48a12,12,0,0,0-22.24-9l-23,56.51H162.08l-23-56.51a12,12,0,0,0-22.24,0L93.92,124H58.08l-23-56.51a12,12,0,0,0-22.24,9L32.17,124H16a12,12,0,0,0,0,24H41.92l23,56.52a12,12,0,0,0,22.24,0l23-56.52h35.84l23,56.52a12,12,0,0,0,22.24,0l23-56.52H240a12,12,0,0,0,0-24ZM76,168.12,67.83,148H84.17ZM119.83,124,128,103.89,136.17,124ZM180,168.12,171.83,148h16.34Z" }));
});
Z.displayName = "Bold";
export {
  Z as Bold
};
