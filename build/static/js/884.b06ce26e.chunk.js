"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[884],{884:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(791),s=n(871),u="Card_card__3ws-V",o=n(184),a=function(e){return(0,o.jsx)("div",{className:u,children:e.children})},c=n(556),i="QuoteForm_form__Av4nY",d="QuoteForm_loading__ITFnm",l="QuoteForm_control__BFwDU",h="QuoteForm_actions__TjSAn",m=function(e){var t=(0,r.useRef)(),n=(0,r.useRef)();return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(a,{children:(0,o.jsxs)("form",{className:i,onSubmit:function(r){r.preventDefault();var s=t.current.value,u=n.current.value;e.onAddQuote({author:s,text:u})},children:[e.isLoading&&(0,o.jsx)("div",{className:d,children:(0,o.jsx)(c.Z,{})}),(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("label",{htmlFor:"author",children:"Author"}),(0,o.jsx)("input",{type:"text",id:"author",ref:t})]}),(0,o.jsxs)("div",{className:l,children:[(0,o.jsx)("label",{htmlFor:"text",children:"Text"}),(0,o.jsx)("textarea",{id:"text",rows:"5",ref:n})]}),(0,o.jsx)("div",{className:h,children:(0,o.jsx)("button",{className:"btn",children:"Add Quote"})})]})})})},x=n(995),f=n(853),_=function(){var e=(0,x.Z)(f.KP),t=e.sendRequest,n=e.status,u=(0,s.s0)();(0,r.useEffect)((function(){"completed"===n&&u("/quotes")}),[n,u]);return(0,o.jsx)(m,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=884.b06ce26e.chunk.js.map