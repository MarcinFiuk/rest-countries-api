function Error({ errorInfo }) {
    const {
        response: { status },
    } = errorInfo;
    console.log(errorInfo);
    return (
        <div>
            <p>I'm sorry but something went wrong.</p>
            <p>Code:{status}</p>
            <button>Go back</button>
        </div>
    );
}

//NOTE: add some style

export default Error;