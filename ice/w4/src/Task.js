
class Task{
    constructor(_button) {
        this.button = _button;
        console.log("Test");
        this.button.addEventListener("click", this.onClick)
    }
    onClick() {
        console.log("Clicked");
    }
    render() {
        return this.content;
    }

}
export default Component;