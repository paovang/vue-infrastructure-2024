import{f as c}from"./format.currency-CcPyHQva.js";function o(e){return e.map(r=>r.name).join(", ")}function i(e){return e.map(r=>`${c(r.service_charge,r.currency)}`).join(" / ")}function t(e,r){return e.map(n=>`${c(r*n.service_charge,n.currency)}`).join(" / ")}export{t as a,o as b,i as c};