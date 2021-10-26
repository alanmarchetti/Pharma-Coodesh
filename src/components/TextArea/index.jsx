import './styles.css'
function TextArea({text}) {
    return(
        <div className="container w-100 mt-4 mb-5">
            <p className="text-break">{text}</p>
        </div>
    );
}
export { TextArea }