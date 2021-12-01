import jqueryui from "jqueryui"

interface Options {
    sizeMultiplier: number;
}

export default class PbDialog {

    containerId: string;
    removeDialogContainerOnClose: Function;
    options: Options;
    Container: HTMLElement;
    Buttons: Array<{text: string, click: Function}>;

    constructor (containerId: string, removeDialogContainerOnClose: Function, options?: Options){
        this.containerId = containerId;
        this.removeDialogContainerOnClose = removeDialogContainerOnClose;
        this.options = options;
        this.Container = document.getElementById(this.containerId);
        this.Buttons = [{ text: "Close", click: this.CloseDialog }];
    }

    CloseDialog(): void {
        this.Container.dialog("close");
        this.Container.dialog("destroy");

        if (this.removeDialogContainerOnClose)
        {
            this.RemoveDialogContainer();
        }
    }

    RemoveDialogContainer(): void {
        this.Container.remove();
    }


    OpenDialog(): void {
        const multiplier: number = this.options.sizeMultiplier || 0.5;
        this.Container.dialog({
            autoOpen: false,
            resizable: false,
            height: window.innerHeight * multiplier,
            width: window.innerWidth * multiplier,
            modal: true,
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 500
            },
            buttons: this.Buttons
        });

        this.Container.dialog("open");
    }

    CreateDialogContainer(dialogAttributes: Array<{key: string, value: string}>): void {
        if (!this.Container[0]) {

            this.Container = document.createElement('div');
            this.Container.setAttribute("id", this.containerId);

            dialogAttributes.forEach(function (value) {
                this.Container.setAttribute(value.key, value.value);
            })

            document.getElementById("body").append(this.Container)
        }
    }
}