var i = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
var l = (e, t, a) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, Z = (e, t) => {
  for (var a in t || (t = {}))
    p.call(t, a) && l(e, a, t[a]);
  if (o)
    for (var a of o(t))
      d.call(t, a) && l(e, a, t[a]);
  return e;
};
var c = (e, t) => {
  var a = {};
  for (var m in e)
    p.call(e, m) && t.indexOf(m) < 0 && (a[m] = e[m]);
  if (e != null && o)
    for (var m of o(e))
      t.indexOf(m) < 0 && d.call(e, m) && (a[m] = e[m]);
  return a;
};
import f, { forwardRef as s } from "react";
import A from "../../lib/OptiBase.mjs";
const h = s((m, a) => {
  var r = m, { children: e } = r, t = c(r, ["children"]);
  return /* @__PURE__ */ f.createElement(A, Z({ ref: a }, t), e, /* @__PURE__ */ f.createElement("path", { d: "M207,36H49A21,21,0,0,0,28,57v49.21a21,21,0,0,0,12.31,19.11l56,25.47a52,52,0,1,0,63.32,0l56-25.47A21,21,0,0,0,228,106.21V57A21,21,0,0,0,207,36ZM128,138.82l-28-12.73V60h56v66.09ZM52,60H76v55.18L52,104.27Zm76,160a28,28,0,1,1,28-28A28,28,0,0,1,128,220Zm76-115.73-24,10.91V60h24Z" }));
});
h.displayName = "Bold";
export {
  h as Bold
};
