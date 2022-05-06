function Error({ errorInfo }) {
    const status = errorInfo.response?.status;

    console.log(errorInfo);
    return (
        <div>
            <p>I'm sorry but something went wrong.</p>
            {status && <p>Code:{status}</p>}
            <button>Go back</button>
        </div>
    );
}

//NOTE: add some style

export default Error;
