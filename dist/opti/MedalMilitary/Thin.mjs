var c = Object.defineProperty;
var r = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, A = Object.prototype.propertyIsEnumerable;
var i = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && i(a, e, t[e]);
  if (r)
    for (var e of r(t))
      A.call(t, e) && i(a, e, t[e]);
  return a;
};
var n = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && r)
    for (var m of r(a))
      t.indexOf(m) < 0 && A.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import h from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var o = m, { children: a } = o, t = n(o, ["children"]);
  return /* @__PURE__ */ Z.createElement(h, l({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M207,44H49A13,13,0,0,0,36,57v49.21A13,13,0,0,0,43.62,118l70.72,32.14a44,44,0,1,0,27.32,0L212.38,118A13,13,0,0,0,220,106.21V57A13,13,0,0,0,207,44Zm-43,8v79.24l-36,16.37L92,131.24V52ZM44,106.21V57a5,5,0,0,1,5-5H84v75.61L46.93,110.76A5,5,0,0,1,44,106.21ZM164,192a36,36,0,1,1-36-36A36,36,0,0,1,164,192Zm48-85.79a5,5,0,0,1-2.93,4.55L172,127.61V52h35a5,5,0,0,1,5,5Z" }));
});
s.displayName = "Thin";
export {
  s as Thin
};
