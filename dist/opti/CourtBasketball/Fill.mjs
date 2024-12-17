var s = Object.defineProperty;
var m = Object.getOwnPropertySymbols;
var i = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var o = (a, t, e) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, A = (a, t) => {
  for (var e in t || (t = {}))
    i.call(t, e) && o(a, e, t[e]);
  if (m)
    for (var e of m(t))
      p.call(t, e) && o(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var r in a)
    i.call(a, r) && t.indexOf(r) < 0 && (e[r] = a[r]);
  if (a != null && m)
    for (var r of m(a))
      t.indexOf(r) < 0 && p.call(a, r) && (e[r] = a[r]);
  return e;
};
import f, { forwardRef as v } from "react";
import V from "../../lib/OptiBase.mjs";
const Z = v((r, e) => {
  var l = r, { children: a } = l, t = c(l, ["children"]);
  return /* @__PURE__ */ f.createElement(V, A({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M240,92.23v71.54a4,4,0,0,1-4.41,4,40,40,0,0,1,0-79.52A4,4,0,0,1,240,92.23ZM20.41,167.76a40,40,0,0,0,0-79.52,4,4,0,0,0-4.41,4v71.54A4,4,0,0,0,20.41,167.76ZM116,48H32A16,16,0,0,0,16,64v4.13a4,4,0,0,0,3.8,4,56,56,0,0,1,0,111.74,4,4,0,0,0-3.8,4V192a16,16,0,0,0,16,16h84a4,4,0,0,0,4-4V52A4,4,0,0,0,116,48Zm108,0H140a4,4,0,0,0-4,4V204a4,4,0,0,0,4,4h84a16,16,0,0,0,16-16v-4.13a4,4,0,0,0-3.8-4,56,56,0,0,1,0-111.74,4,4,0,0,0,3.8-4V64A16,16,0,0,0,224,48Z" }));
});
Z.displayName = "Fill";
export {
  Z as Fill
};
