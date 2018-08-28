/*! Built with http://stenciljs.com */
manessingercomment.loadBundle("v8y4jwre",["exports"],function(e){var t=window.manessingercomment.h,n=function(){function e(){}return e.prototype.handleSubmit=function(e){e.preventDefault();var t={attach_to:this.window.location.hash.substr(1),name:this.userNameValue,email:this.emailValue,website:this.websiteValue,comment:this.commentValue};this.postData(t).then(function(e){return console.log(JSON.stringify(e))}).catch(function(e){return console.error(e)})},e.prototype.postData=function(e,t){return void 0===t&&(t="https://7e6ex1bf2c.execute-api.us-east-2.amazonaws.com/default/manessingercomment_receiver"),fetch(t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json; charset=utf-8"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(e)}).then(function(e){return e.json()})},e.prototype.handleCancel=function(){this.window.open(this.window.location.toString(),"_self").close()},e.prototype.handleChangeUserName=function(e){this.userNameValue=e.target.value},e.prototype.handleChangeEmail=function(e){this.emailValue=e.target.value},e.prototype.handleChangeWebsite=function(e){this.websiteValue=e.target.value},e.prototype.handleChangeComment=function(e){this.commentValue=e.target.value},e.prototype.render=function(){var e=this;return t("div",{class:"flex-container"},t("form",{onSubmit:function(t){return e.handleSubmit(t)}},t("div",{class:"form-container"},t("label",{id:"username-label",htmlFor:"username"},"Name:"),t("input",{id:"username",type:"text",value:this.userNameValue,onInput:function(t){return e.handleChangeUserName(t)}}),t("label",{id:"email-label",htmlFor:"email"},"Email (opt.):"),t("input",{id:"email",type:"text",value:this.emailValue,onInput:function(t){return e.handleChangeEmail(t)}}),t("label",{id:"website-label",htmlFor:"website"},"Website (opt.):"),t("input",{id:"website",type:"text",value:this.websiteValue,onInput:function(t){return e.handleChangeWebsite(t)}}),t("label",{id:"comment-label",htmlFor:"commment"},"Your comment:"),t("textarea",{id:"comment",value:this.commentValue,onInput:function(t){return e.handleChangeComment(t)}}),t("input",{id:"cancel",type:"button",value:"Cancel",onClick:function(){return e.handleCancel()}}),t("input",{id:"submit",type:"submit",value:"Submit",onClick:function(t){return e.handleSubmit(t)}}))))},Object.defineProperty(e,"is",{get:function(){return"manessinger-comment"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{commentValue:{state:!0},emailValue:{state:!0},userNameValue:{state:!0},websiteValue:{state:!0},window:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host input[type=button],:host input[type=submit],:host label{font-family:var(--manessinger-comment-font-family);-webkit-appearance:none}:host .flex-container{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}:host #username-label{grid-area:namelabel}:host #username{grid-area:namevalue}:host #email-label{grid-area:emaillabel}:host #email{grid-area:emailvalue}:host #website-label{grid-area:websitelabel}:host #website{grid-area:websitevalue}:host #comment-label{grid-area:commentlabel}:host #comment{grid-area:commentvalue}:host #cancel{grid-area:cancel}:host #submit{grid-area:submit}:host .form-container{display:grid;grid-template-columns:140px 140px;grid-template-rows:auto;grid-template-areas:\"namelabel     namelabel\" \"namevalue     namevalue\" \"emaillabel    emaillabel\" \"emailvalue    emailvalue\" \"websitelabel  websitelabel\" \"websitevalue  websitevalue\" \"commentlabel  commentlabel\" \"commentvalue  commentvalue\" \"commentvalue  commentvalue\" \"cancel        submit      \";grid-column-gap:10px;grid-row-gap:15px;background-color:#fff;padding:10px}:host label{font-size:var(--manessinger-comment-label-font-font-size);justify-self:start}:host input{background-color:#fff}:host textarea{height:10ex}:host input,:host textarea{border:2px inset #bbb}:host #cancel,:host #submit{padding:.5ex 7px .6ex}\@media (min-width:400px){:host .form-container{grid-template-columns:70px 70px 70px 70px 70px;grid-template-areas:\"namelabel namelabel        namevalue namevalue namevalue\" \"emaillabel emaillabel      emailvalue emailvalue emailvalue\" \"websitelabel websitelabel  websitevalue websitevalue websitevalue\" \"commentlabel commentlabel  . . .\" \"commentvalue commentvalue  commentvalue commentvalue commentvalue\" \"cancel cancel .            submit submit\";padding:12px}}\@media (min-width:600px){:host .form-container{grid-template-columns:85px 85px 85px 85px 85px 85px;grid-template-areas:\"namelabel namelabel        namevalue namevalue namevalue namevalue\" \"emaillabel emaillabel      emailvalue emailvalue emailvalue emailvalue\" \"websitelabel websitelabel  websitevalue websitevalue websitevalue websitevalue\" \"commentlabel commentlabel  . . . . \" \"commentvalue commentvalue  commentvalue commentvalue commentvalue commentvalue\" \"cancel cancel cancel       submit submit submit\";padding:15px}}\@media (min-width:1024px){:host .form-container{grid-template-columns:132px 132px 132px 132px;grid-template-areas:\"namelabel     namevalue     namevalue    namevalue\" \"emaillabel    emailvalue    emailvalue   emailvalue\" \"websitelabel  websitevalue  websitevalue websitevalue\" \"commentlabel  commentlabel  .            .\" \"commentvalue  commentvalue  commentvalue commentvalue\" \"cancel        cancel        submit       submit\";padding:20px}}\@media (min-height:700px){:host textarea{height:20ex}}\@media (min-height:1024px){:host textarea{height:30ex}}"},enumerable:!0,configurable:!0}),e}();e.ManessingerComment=n,Object.defineProperty(e,"__esModule",{value:!0})});