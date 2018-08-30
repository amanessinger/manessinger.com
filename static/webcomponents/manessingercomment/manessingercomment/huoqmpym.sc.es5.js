/*! Built with http://stenciljs.com */
manessingercomment.loadBundle("huoqmpym",["exports"],function(e){var t=window.manessingercomment.h,n=function(){function e(){}return e.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var n={attach_to:this.window.location.hash.substr(1),name:this.userNameValue,email:this.emailValue,website:this.websiteValue,comment:this.commentValue};fetch("https://b70j7je6yl.execute-api.us-east-2.amazonaws.com/default/manessingercomment_receiver",{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(n)}).then(this.status).then(this.jsonify).then(function(e){console.log("Request succeeded with JSON response",e),t.closeWindow()}).catch(function(e){console.log("Request failed",e),t.closeWindow()})},e.prototype.status=function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))},e.prototype.jsonify=function(e){return e.json()},e.prototype.handleCancel=function(){this.closeWindow()},e.prototype.closeWindow=function(){this.window.open(this.window.location.toString(),"_self").close()},e.prototype.handleChangeUserName=function(e){this.userNameValue=e.target.value},e.prototype.handleChangeEmail=function(e){this.emailValue=e.target.value},e.prototype.handleChangeWebsite=function(e){this.websiteValue=e.target.value},e.prototype.handleChangeComment=function(e){this.commentValue=e.target.value},e.prototype.render=function(){var e=this;return t("div",{class:"flex-container"},t("form",{onSubmit:function(t){return e.handleSubmit(t)}},t("div",{class:"form-container"},t("label",{id:"username-label",htmlFor:"username"},"Name:"),t("input",{id:"username",type:"text",value:this.userNameValue,onInput:function(t){return e.handleChangeUserName(t)}}),t("label",{id:"email-label",htmlFor:"email"},"Email (opt.):"),t("input",{id:"email",type:"text",value:this.emailValue,onInput:function(t){return e.handleChangeEmail(t)}}),t("label",{id:"website-label",htmlFor:"website"},"Website (opt.):"),t("input",{id:"website",type:"text",value:this.websiteValue,onInput:function(t){return e.handleChangeWebsite(t)}}),t("label",{id:"comment-label",htmlFor:"commment"},"Your comment:"),t("textarea",{id:"comment",value:this.commentValue,onInput:function(t){return e.handleChangeComment(t)}}),t("input",{id:"cancel",type:"button",value:"Cancel",onClick:function(){return e.handleCancel()}}),t("input",{id:"submit",type:"submit",value:"Submit",onClick:function(t){return e.handleSubmit(t)}}))))},Object.defineProperty(e,"is",{get:function(){return"manessinger-comment"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{commentValue:{state:!0},emailValue:{state:!0},userNameValue:{state:!0},websiteValue:{state:!0},window:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-manessinger-comment-h   input[type=button].sc-manessinger-comment, .sc-manessinger-comment-h   input[type=submit].sc-manessinger-comment, .sc-manessinger-comment-h   label.sc-manessinger-comment{font-family:var(--manessinger-comment-font-family);-webkit-appearance:none}.sc-manessinger-comment-h   .flex-container.sc-manessinger-comment{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.sc-manessinger-comment-h   #username-label.sc-manessinger-comment{grid-area:namelabel}.sc-manessinger-comment-h   #username.sc-manessinger-comment{grid-area:namevalue}.sc-manessinger-comment-h   #email-label.sc-manessinger-comment{grid-area:emaillabel}.sc-manessinger-comment-h   #email.sc-manessinger-comment{grid-area:emailvalue}.sc-manessinger-comment-h   #website-label.sc-manessinger-comment{grid-area:websitelabel}.sc-manessinger-comment-h   #website.sc-manessinger-comment{grid-area:websitevalue}.sc-manessinger-comment-h   #comment-label.sc-manessinger-comment{grid-area:commentlabel}.sc-manessinger-comment-h   #comment.sc-manessinger-comment{grid-area:commentvalue}.sc-manessinger-comment-h   #cancel.sc-manessinger-comment{grid-area:cancel}.sc-manessinger-comment-h   #submit.sc-manessinger-comment{grid-area:submit}.sc-manessinger-comment-h   .form-container.sc-manessinger-comment{display:grid;grid-template-columns:140px 140px;grid-template-rows:auto;grid-template-areas:\"namelabel     namelabel\" \"namevalue     namevalue\" \"emaillabel    emaillabel\" \"emailvalue    emailvalue\" \"websitelabel  websitelabel\" \"websitevalue  websitevalue\" \"commentlabel  commentlabel\" \"commentvalue  commentvalue\" \"commentvalue  commentvalue\" \"cancel        submit      \";grid-column-gap:10px;grid-row-gap:15px;background-color:#fff;padding:10px}.sc-manessinger-comment-h   label.sc-manessinger-comment{font-size:var(--manessinger-comment-label-font-font-size);justify-self:start}.sc-manessinger-comment-h   input.sc-manessinger-comment{background-color:#fff}.sc-manessinger-comment-h   textarea.sc-manessinger-comment{height:10ex}.sc-manessinger-comment-h   input.sc-manessinger-comment, .sc-manessinger-comment-h   textarea.sc-manessinger-comment{border:2px inset #bbb}.sc-manessinger-comment-h   #cancel.sc-manessinger-comment, .sc-manessinger-comment-h   #submit.sc-manessinger-comment{padding:.5ex 7px .6ex}\@media (min-width:400px){.sc-manessinger-comment-h   .form-container.sc-manessinger-comment{grid-template-columns:70px 70px 70px 70px 70px;grid-template-areas:\"namelabel namelabel        namevalue namevalue namevalue\" \"emaillabel emaillabel      emailvalue emailvalue emailvalue\" \"websitelabel websitelabel  websitevalue websitevalue websitevalue\" \"commentlabel commentlabel  . . .\" \"commentvalue commentvalue  commentvalue commentvalue commentvalue\" \"cancel cancel .            submit submit\";padding:12px}}\@media (min-width:600px){.sc-manessinger-comment-h   .form-container.sc-manessinger-comment{grid-template-columns:85px 85px 85px 85px 85px 85px;grid-template-areas:\"namelabel namelabel        namevalue namevalue namevalue namevalue\" \"emaillabel emaillabel      emailvalue emailvalue emailvalue emailvalue\" \"websitelabel websitelabel  websitevalue websitevalue websitevalue websitevalue\" \"commentlabel commentlabel  . . . . \" \"commentvalue commentvalue  commentvalue commentvalue commentvalue commentvalue\" \"cancel cancel cancel       submit submit submit\";padding:15px}}\@media (min-width:1024px){.sc-manessinger-comment-h   .form-container.sc-manessinger-comment{grid-template-columns:132px 132px 132px 132px;grid-template-areas:\"namelabel     namevalue     namevalue    namevalue\" \"emaillabel    emailvalue    emailvalue   emailvalue\" \"websitelabel  websitevalue  websitevalue websitevalue\" \"commentlabel  commentlabel  .            .\" \"commentvalue  commentvalue  commentvalue commentvalue\" \"cancel        cancel        submit       submit\";padding:20px}}\@media (min-height:700px){.sc-manessinger-comment-h   textarea.sc-manessinger-comment{height:20ex}}\@media (min-height:1024px){.sc-manessinger-comment-h   textarea.sc-manessinger-comment{height:30ex}}"},enumerable:!0,configurable:!0}),e}();e.ManessingerComment=n,Object.defineProperty(e,"__esModule",{value:!0})});