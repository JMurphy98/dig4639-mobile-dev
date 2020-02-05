import "./index.css"
class Card {
    constructor(props){
        this.props = props;
        this.element = document.createElement("div");
        this.element.innerHTML = this.props.content;
        this.element.className = "card";
    }
    /*constructor(props){
        this.props = props;
        this.element = document.createElement("div");
        let textarea = document.createElement("input");
        textarea.type = "textarea";
        this.onClick = this. onClick.bind(this);
        textarea.addEventListener("change", this.onClick);

        this.element.appendChild(textarea);
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "text";

        
    }*/

    render() {
        return this.element;
    }
}
export default Card;
