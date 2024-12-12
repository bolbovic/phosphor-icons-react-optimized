var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var H = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var l = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, V = (a, t) => {
  for (var e in t || (t = {}))
    H.call(t, e) && l(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && l(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    H.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import Z, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ Z.createElement(i, V({ ref: e }, t), a, /* @__PURE__ */ Z.createElement("path", { d: "M208,28H88A20,20,0,0,0,68,48V60H48A20,20,0,0,0,28,80V208a20,20,0,0,0,20,20H176a20,20,0,0,0,20-20V188h12a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM92,52H204v59.72l-9.86-9.86a20,20,0,0,0-28.28,0L103.72,164H92Zm80,152H52V84H68v84a20,20,0,0,0,20,20h84Zm-34.34-40L180,121.66l24,24V164ZM108,88a20,20,0,1,1,20,20A20,20,0,0,1,108,88Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
