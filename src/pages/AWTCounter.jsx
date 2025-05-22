import { AWTCounterSnippet } from "../components/AWTCounterSnippet";

export const AWTCounter = () => {
    return (
        <>


            <div className="flex flex-col gap-10 min-h-screen bg-gray-900 text-white p-6 max-w-screen mx-auto">
                <div className='flex items-center p-4'>
                    <summary className="text-2xl font-semibold text-gray-900 dark:text-white">Here is the explanation and implementation code of a basic counter using Java AWT (Abstract Window Toolkit). AWT is a platform-dependent GUI toolkit, meaning the appearance and behavior of components may vary across operating systems.</summary>
                </div>
                <div>
                    <AWTCounterSnippet />
                </div>

            </div>
        </>
    );
};