import { FileHandleSnippet } from "../components/FIleHandleSnippet";

export const FileHandling = () => {
    return (
        <>
            <div className="flex flex-col gap-10 min-h-screen bg-gray-900 text-white p-6 max-w-screen mx-auto">
                <div>
                    <FileHandleSnippet />
                </div>
                
            </div>
        </>
    );
};