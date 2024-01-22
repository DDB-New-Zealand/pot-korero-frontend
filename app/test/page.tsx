export default function Test() {
    return (
        <div className="grid gap-2 text-white">
            <p>var TEST: {process.env.TEST}</p>
            <p>var NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}</p>
        </div>
    );
}