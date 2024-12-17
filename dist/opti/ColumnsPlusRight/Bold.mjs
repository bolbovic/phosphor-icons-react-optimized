var Z = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, H = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? Z(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    p.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      H.call(t, e) && h(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    p.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && H.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as c } from "react";
import f from "../../lib/OptiBase.mjs";
const i = c((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(f, V({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M80,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H80a20,20,0,0,0,20-20V48A20,20,0,0,0,80,28ZM76,204H60V52H76ZM156,28H132a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V48A20,20,0,0,0,156,28Zm-4,176H136V52h16Zm100-76a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,252,128Z" }));
});
i.displayName = "Bold";
export {
  i as Bold
};
