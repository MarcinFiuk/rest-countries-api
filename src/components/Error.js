function Error({ errorInfo }) {
    const statusToDisplay = errorInfo.response?.status;

    return (
        <div>
            <p>I'm sorry but something went wrong.</p>
            <p>Code:{statusToDisplay}</p>
            <button>Go back</button>
        </div>
    );
}

//NOTE: add some style

export default Error;
