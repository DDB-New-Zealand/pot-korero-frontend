export default function Test() {
    return (
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <p>var APP_NAME: {process.env.APP_NAME}</p>
            <p>var NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}</p>
            <p>secret: {process.env.AZURE_STATIC_WEB_APPS_API_TOKEN_GRAY_RIVER_01B78281E}</p>
        </div>
    );
}