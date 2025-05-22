import { FileHandleSnippet } from "../components/FIleHandleSnippet";

export const FileHandling = () => {
    return (
        <>
            <div className="flex flex-col gap-10 min-h-screen bg-gray-900 text-white p-6 max-w-screen mx-auto">
                <div className='flex items-center p-4'>
                    <summary className="text-2xl font-semibold text-gray-900 dark:text-white">An accumulator in Java AWT (Abstract Window Toolkit) is a variable used to store and update a value iteratively within a GUI application. It's commonly used to perform calculations or aggregations based on user input or events. An accumulator is often implemented using AWT components like TextField and Label, allowing users to input data and view the accumulated result.</summary>
                </div>
                <div>
                    <FileHandleSnippet />
                </div>
                
            </div>
        </>
    );
};