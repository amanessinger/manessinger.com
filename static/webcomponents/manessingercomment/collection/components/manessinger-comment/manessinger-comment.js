export class ManessingerComment {
    handleSubmit(e) {
        e.preventDefault();
        let data = {
            "attach_to": this.window.location.hash.substr(1),
            "author": this.userNameValue,
            "author_email": this.emailValue,
            "author_url": this.websiteValue,
            "content": this.commentValue
        };
        // send data to our backend
        fetch('https://b70j7je6yl.execute-api.us-east-2.amazonaws.com/default/manessingercomment_receiver', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(data),
        })
            .then(this.status)
            .then(this.jsonify)
            .then((data) => {
            console.log('Request succeeded with JSON response', data);
            if (data.status) {
                this.window.alert('comment submitted with status ' + data.status);
            }
            this.closeWindow();
        }).catch((error) => {
            console.log('Request failed', error);
            this.window.alert('submission failed: ' + error);
            this.closeWindow();
        });
    }
    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(new Error(response.statusText));
        }
    }
    jsonify(response) {
        return response.json();
    }
    handleCancel() {
        this.closeWindow();
    }
    closeWindow() {
        this.window.open(this.window.location.toString(), '_self').close();
    }
    handleChangeUserName(event) {
        this.userNameValue = event.target.value;
    }
    handleChangeEmail(event) {
        this.emailValue = event.target.value;
    }
    handleChangeWebsite(event) {
        this.websiteValue = event.target.value;
    }
    handleChangeComment(event) {
        this.commentValue = event.target.value;
    }
    render() {
        return (h("div", { class: "flex-container" },
            h("form", { onSubmit: (e) => this.handleSubmit(e) },
                h("div", { class: "form-container" },
                    h("label", { id: "username-label", htmlFor: "username" }, "Name:"),
                    h("input", { id: "username", type: "text", value: this.userNameValue, onInput: (event) => this.handleChangeUserName(event) }),
                    h("label", { id: "email-label", htmlFor: "email" }, "Email (opt.):"),
                    h("input", { id: "email", type: "text", value: this.emailValue, onInput: (event) => this.handleChangeEmail(event) }),
                    h("label", { id: "website-label", htmlFor: "website" }, "Website (opt.):"),
                    h("input", { id: "website", type: "text", value: this.websiteValue, onInput: (event) => this.handleChangeWebsite(event) }),
                    h("label", { id: "comment-label", htmlFor: "commment" }, "Your comment:"),
                    h("textarea", { id: "comment", value: this.commentValue, onInput: (event) => this.handleChangeComment(event) }),
                    h("input", { id: "cancel", type: "button", value: "Cancel", onClick: () => this.handleCancel() }),
                    h("input", { id: "submit", type: "submit", value: "Submit", onClick: (event) => this.handleSubmit(event) })))));
    }
    static get is() { return "manessinger-comment"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "commentValue": {
            "state": true
        },
        "emailValue": {
            "state": true
        },
        "userNameValue": {
            "state": true
        },
        "websiteValue": {
            "state": true
        },
        "window": {
            "context": "window"
        }
    }; }
    static get style() { return "/**style-placeholder:manessinger-comment:**/"; }
}
