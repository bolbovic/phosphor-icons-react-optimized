var c = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var V = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var h = (a, t, e) => t in a ? c(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, H = (a, t) => {
  for (var e in t || (t = {}))
    V.call(t, e) && h(a, e, t[e]);
  if (o)
    for (var e of o(t))
      p.call(t, e) && h(a, e, t[e]);
  return a;
};
var d = (a, t) => {
  var e = {};
  for (var m in a)
    V.call(a, m) && t.indexOf(m) < 0 && (e[m] = a[m]);
  if (a != null && o)
    for (var m of o(a))
      t.indexOf(m) < 0 && p.call(a, m) && (e[m] = a[m]);
  return e;
};
import l, { forwardRef as f } from "react";
import i from "../../lib/OptiBase.mjs";
const s = f((m, e) => {
  var r = m, { children: a } = r, t = d(r, ["children"]);
  return /* @__PURE__ */ l.createElement(i, H({ ref: e }, t), a, /* @__PURE__ */ l.createElement("path", { d: "M216,84H156V40a20,20,0,0,0-20-20H72A20,20,0,0,0,52,40V88a20,20,0,0,0,20,20h60v40H72a20,20,0,0,0-20,20v48a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V172h60a20,20,0,0,0,20-20V104A20,20,0,0,0,216,84ZM132,212H76V172h56Zm0-128H76V44h56Zm80,64H156V108h56Z" }));
});
s.displayName = "Bold";
export {
  s as Bold
};
