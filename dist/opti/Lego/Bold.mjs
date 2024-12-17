var A = Object.defineProperty;
var c = Object.getOwnPropertySymbols;
var m = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var r = (a, e, l) => e in a ? A(a, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[e] = l, s = (a, e) => {
  for (var l in e || (e = {}))
    m.call(e, l) && r(a, l, e[l]);
  if (c)
    for (var l of c(e))
      p.call(e, l) && r(a, l, e[l]);
  return a;
};
var Z = (a, e) => {
  var l = {};
  for (var t in a)
    m.call(a, t) && e.indexOf(t) < 0 && (l[t] = a[t]);
  if (a != null && c)
    for (var t of c(a))
      e.indexOf(t) < 0 && p.call(a, t) && (l[t] = a[t]);
  return l;
};
import d, { forwardRef as M } from "react";
import f from "../../lib/OptiBase.mjs";
const i = M((t, l) => {
  var o = t, { children: a } = o, e = Z(o, ["children"]);
  return /* @__PURE__ */ d.createElement(f, s({ ref: l }, e), a, /* @__PURE__ */ d.createElement("path", { d: "M245.36,77.28h0L203.74,56.45C201.38,40.24,183,28,160,28c-24.67,0-44,14.06-44,32a25,25,0,0,0,2.69,11.24l-9.4,4.7C101.56,71,91.35,68,80,68c-24.67,0-44,14.06-44,32a25,25,0,0,0,2.69,11.24l-28.06,14A12,12,0,0,0,4,136H4v56a12,12,0,0,0,6.63,10.73l64,32a12,12,0,0,0,10.74,0l160-80A12,12,0,0,0,252,144V88A12,12,0,0,0,245.36,77.28ZM80,154.58,42.83,136l15.81-7.9A58.2,58.2,0,0,0,80,132c24.67,0,44-14.06,44-32a25.39,25.39,0,0,0-.4-4.38l15-7.52A58.2,58.2,0,0,0,160,92c14.72,0,27.53-5,35.47-12.85L213.17,88ZM160,52c12.91,0,20,6,20,8s-7.09,8-20,8-20-6-20-8S147.09,52,160,52ZM80,92c12.91,0,20,6,20,8s-7.09,8-20,8-20-6-20-8S67.09,92,80,92ZM28,155.42l40,20v29.16l-40-20Zm64,49.16V175.42l136-68v29.16Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
