const tuple = <T extends string[]>(...args: T) => args;

export default function showCode(e) {
    let code :HTMLElement = document&&document.querySelector(`pre#${e.target.id}`);
    if (!code.style.display || code.style.display === "none") {
        code.style.display = "inline-block";
    }else{
        code.style.display = "none";
    }
}
export {tuple}
