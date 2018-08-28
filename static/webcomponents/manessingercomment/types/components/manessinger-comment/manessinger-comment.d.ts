import '../../stencil.core';
export declare class ManessingerComment {
    userNameValue: string;
    emailValue: string;
    websiteValue: string;
    commentValue: string;
    private window;
    handleSubmit(e: any): void;
    status(response: any): Promise<any>;
    jsonify(response: any): any;
    handleCancel(): void;
    closeWindow(): void;
    handleChangeUserName(event: any): void;
    handleChangeEmail(event: any): void;
    handleChangeWebsite(event: any): void;
    handleChangeComment(event: any): void;
    render(): JSX.Element;
}
