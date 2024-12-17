var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var p = (a, t, e) => t in a ? i(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, l = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && p(a, e, t[e]);
  if (o)
    for (var e of o(t))
      d.call(t, e) && p(a, e, t[e]);
  return a;
};
var c = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && d.call(a, m) && (e[m] = a[m]);
  return e;
};
import f, { forwardRef as s } from "react";
import Z from "../../lib/OptiBase.mjs";
const n = s((m, e) => {
  var r = m, { children: a } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(Z, l({ ref: e }, t), a, /* @__PURE__ */ f.createElement("path", { d: "M208,152H48a20,20,0,0,0-20,20v20a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V172A20,20,0,0,0,208,152Zm-4,36H52V176H204ZM48.27,136H207.73a20.27,20.27,0,0,0,14.61-34.3L148.58,24.78a28.51,28.51,0,0,0-41.16,0L33.66,101.7A20.27,20.27,0,0,0,48.27,136Zm76.48-94.61a4.49,4.49,0,0,1,6.5,0L199,112H57Z" }));
});
n.displayName = "Bold";
export {
  n as Bold
};
